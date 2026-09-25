/* ============================================================================
   TIER GATE + PHOTOGRAPHIC FALLBACK
   ----------------------------------------------------------------------------
   This file no longer assumes it IS the background. It waits to be told whether
   the real-time ray-marcher (blackhole.js) painted a frame:

     gargantua:ready   -> tier '3d'    : stand down. No <video> is ever created,
                                          no src is set, and not one byte of
                                          footage is fetched.
     gargantua:dead    -> tier 'photo' : arm the footage below.
     silence for 4 s   -> tier 'photo' : fail-safe. A blocked or thrown module
                                          must never strand the reader on a
                                          flat gradient.

   Footage: NASA Scientific Visualization Studio (SVS14619, Caltech-IPAC /
   Robert Hurt). Public domain, no attribution required.

     https://commons.wikimedia.org/wiki/File:Black_Hole_with_Accretion_Disk_
     Visualization_(SVS14619_-_2-Orbiting_a_black_hole-4K).webm

   DESIGN CONTRACT
     - Paint first, decode later: a 1920x1080 poster JPEG is the base layer, so
       the background is always visible before (or instead of) any video.
     - No external runtime: no CDN, no framework. Nothing in this file can throw
       a GPU or third-party failure at the visitor.
     - Motion is opt-in and capability-gated (reduced-motion / save-data / 2g).
     - Shot changes and grading are scroll-driven; pointer parallax is damped.
     - Self-hosted 1080p masters. The 41 MB 4K original is streamed straight
       from Wikimedia's CDN only on >=2560px displays, and only in this tier.
   ========================================================================== */

(function () {
  'use strict';

  const WIKI = 'https://upload.wikimedia.org/wikipedia/commons';

  const SHOTS = {
    orbit: {
      video: 'assets/gargantua-orbit-1080p.webm',
      poster: 'assets/gargantua-orbit-poster.jpg',
      uhd: WIKI + '/4/48/Black_Hole_with_Accretion_Disk_Visualization_%28SVS14619_-_2-Orbiting_a_black_hole-4K%29.webm'
    },
    closeup: {
      video: 'assets/gargantua-closeup-1080p.webm',
      poster: 'assets/gargantua-closeup-poster.jpg',
      uhd: WIKI + '/7/7c/Black_Hole_with_Accretion_Disk_Visualization_%28SVS14619_-_4-Black_hole_up_close-4K%29.webm'
    }
  };

  /* ---- capability gate ---------------------------------------------------- */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection || {};
  const saveData = conn.saveData === true;
  const slowLink = /(^|-)2g$/i.test(conn.effectiveType || '');
  const allowMotion = !prefersReduced && !saveData && !slowLink;

  /* 4K is only worth its bytes on a genuinely large or high-density display. */
  const wantsUHD = (screen.width >= 2560 || (window.devicePixelRatio >= 1.5 && window.innerWidth >= 1600)) &&
                   !saveData && !slowLink && !prefersReduced;

  /* ---- state -------------------------------------------------------------- */
  const root = document.getElementById('cinema');
  if (!root) return;

  const layers = {};
  const grade = { brightness: 0.72, saturate: 1.06, contrast: 1.08, x: 0, y: 0, zoom: 1 };
  const ease = { brightness: 0.72, saturate: 1.06, contrast: 1.08, x: 0, y: 0, zoom: 1 };
  const target = { brightness: 0.72, saturate: 1.06, contrast: 1.08, x: 0, y: 0, zoom: 1 };

  let activeShot = null;               /* null until the first shot is armed  */
  let tier = 'pending';                /* pending | 3d | photo | still        */
  let requestedShot = 'orbit';         /* honour a shot request that lands    */
                                       /* before arbitration resolves         */
  let wired = false;
  let pointerX = 0, pointerY = 0;      // -1 .. 1
  let scrollDrift = 0;                 // px
  let scrollZoom = 0;                  // extra scale from scroll depth
  let paused = false;
  let rafId = 0;
  let started = false;
  let stallGuard = 0;                  /* watchdog on the remote 4K transfer  */

  root.querySelectorAll('.cine-layer').forEach(function (layer) {
    const key = layer.getAttribute('data-shot');
    if (SHOTS[key]) layers[key] = layer;
  });

  const shotIds = Object.keys(layers);
  if (!shotIds.length) return;

  /* ---- source selection --------------------------------------------------- */
  function sourceFor(id) {
    return (wantsUHD && SHOTS[id].uhd) ? SHOTS[id].uhd : SHOTS[id].video;
  }

  function settle() {
    if (started) return;
    started = true;
    root.classList.add('is-live');
    window.__CINEMATIC_READY__ = true;
    document.dispatchEvent(new CustomEvent('cinematic:ready'));
  }

  function safePlay(video) {
    if (!allowMotion || paused || document.hidden || !video) return;
    const p = video.play();
    if (p && typeof p.catch === 'function') {
      p.catch(function () {
        /* autoplay blocked (rare for muted media) - the poster keeps the shot */
        const layer = video.closest('.cine-layer');
        if (layer) layer.classList.remove('is-playing');
        settle();
      });
    }
  }

  function attach(id) {
    const layer = layers[id];
    const video = layer && layer.querySelector('.cine-video');
    if (!video || video.dataset.attached === '1') return video;

    video.dataset.attached = '1';
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    /* UHD straight from the Wikimedia CDN; if it is unreachable or the codec
       is unsupported, silently drop back to the self-hosted 1080p master. */
    video.addEventListener('error', function onErr() {
      const src = video.getAttribute('src') || '';
      if (src.indexOf('upload.wikimedia.org') !== -1) {
        video.removeEventListener('error', onErr);
        video.dataset.downgraded = '1';
        video.setAttribute('src', SHOTS[id].video);
        video.load();
        if (id === activeShot) safePlay(video);
        return;
      }
      /* even the local master failed (codec unsupported): stay on the poster */
      layer.classList.remove('is-playing');
      settle();
    });

    /* dissolve in only once real frames exist, so the poster never pops */
    video.addEventListener('playing', function () {
      clearTimeout(stallGuard);
      layer.classList.add('is-playing');
      settle();
    });

    /* Also handle timeupdate to ensure is-playing is added once video actually renders */
    video.addEventListener('timeupdate', function () {
      if (video.currentTime > 0.05 && !layer.classList.contains('is-playing')) {
        layer.classList.add('is-playing');
        settle();
      }
    });

    /* Seam wrap. Both clips are 15s orbits whose first and last frames differ
       slightly, so a hard loop shows a hitch. Dissolving through the poster
       (which IS frame 0) across the wrap hides the seam and never shows black. */
    video.addEventListener('timeupdate', function () {
      const d = video.duration;
      if (!d || !isFinite(d) || d < 2) return;
      const F = 0.42;
      layer.classList.toggle('is-wrapping', video.currentTime > d - F || video.currentTime < F);
    });

    video.setAttribute('src', sourceFor(id));
    video.load();

    /* Stall guard. A codec/proxy/captive-portal stall NEVER fires `error`, so
       the handler above cannot rescue it: the 41 MB 4K master is streamed from
       Wikimedia, and if it hangs the layer sits on a static poster - which on
       the dark orbit shot reads to the visitor as a black background. No frames
       after 3 s => abandon the remote master for the self-hosted 1080p copy.
       Re-armed on every attach (go3D() can abort and re-arm the transfer). */
    clearTimeout(stallGuard);
    stallGuard = setTimeout(function () {
      if (layer.classList.contains('is-playing')) return;             /* frames exist */
      const src = video.getAttribute('src') || '';
      if (src.indexOf('upload.wikimedia.org') !== -1) {
        video.dataset.downgraded = '1';
        video.setAttribute('src', SHOTS[id].video);
        try { video.load(); } catch (e) { /* noop */ }
        if (id === activeShot) safePlay(video);
        return;                                                        /* re-check on playing */
      }
      /* Not even the local master decoded: the poster (frame 0) keeps the shot.
         settle() releases the shutter so the tier is never a blank frame. */
      settle();
    }, 3000);

    return video;
  }

  /* ---- shot switching ----------------------------------------------------- */
  function setShot(id) {
    if (tier === '3d') return;            /* tier 1 owns the frame            */
    if (layers[id]) requestedShot = id;
    if (tier === 'pending') return;       /* replayed by armPhoto() on resolve */
    if (!layers[id]) return;
    activeShot = id;
    shotIds.forEach(function (key) {
      const layer = layers[key];
      const on = key === id;
      layer.classList.toggle('is-active', on);
      const video = layer.querySelector('.cine-video');
      if (!video) return;
      if (on) {
        /* Re-attach whenever a previous tier aborted the transfer: go3D()
           strips the src and resets data-attached to '0' when it reclaims the
           frame, so a later handoff back to this tier must re-arm it. */
        if (video.dataset.attached !== '1') attach(key);   /* lazy: 6MB deferred */
        /* Playback is asserted on every pass, never skipped. Bailing out here
           when the shot was unchanged and already attached left the <video>
           paused with opacity:0 (is-playing is only set from the media
           events), so the frame stranded on a static near-black poster. */
        safePlay(video);
      } else if (video.dataset.attached === '1') {
        try { video.pause(); } catch (e) { /* noop */ }
      }
    });
  }

  /* ---- playback sync ------------------------------------------------------ */
  function syncPlayback() {
    const shouldPlay = allowMotion && !paused && !document.hidden;
    shotIds.forEach(function (key) {
      const video = layers[key].querySelector('.cine-video');
      if (!video || video.dataset.attached !== '1') return;
      if (shouldPlay && key === activeShot) safePlay(video);
      else { try { video.pause(); } catch (e) { /* noop */ } }
    });
  }

  function setPaused(value) {
    paused = !!value;
    syncPlayback();
  }

  /* ---- grade + parallax --------------------------------------------------- */
  const GRADE_KEYS = ['brightness', 'saturate', 'contrast', 'x', 'y', 'zoom'];

  function applyGrade() {
    root.style.setProperty('--cine-bright', ease.brightness.toFixed(4));
    root.style.setProperty('--cine-sat', ease.saturate.toFixed(4));
    root.style.setProperty('--cine-contrast', ease.contrast.toFixed(4));
    root.style.setProperty('--cine-x', (ease.x + pointerX * PARALLAX_X).toFixed(2) + 'px');
    root.style.setProperty('--cine-y', (ease.y + pointerY * PARALLAX_Y + scrollDrift).toFixed(2) + 'px');
    root.style.setProperty('--cine-zoom', (ease.zoom + scrollZoom).toFixed(4));
  }

  const PARALLAX_X = 17;
  const PARALLAX_Y = 11;

  function kick() {
    if (!rafId) rafId = requestAnimationFrame(step);
  }

  function step() {
    rafId = 0;
    let moving = false;
    for (let i = 0; i < GRADE_KEYS.length; i++) {
      const key = GRADE_KEYS[i];
      const delta = target[key] - ease[key];
      if (Math.abs(delta) > 0.0006) { ease[key] += delta * 0.06; moving = true; }
      else { ease[key] = target[key]; }
    }
    const pt = ptEase;
    const dx = pointerX - pt.x;
    const dy = pointerY - pt.y;
    if (Math.abs(dx) > 0.0008 || Math.abs(dy) > 0.0008) {
      pt.x += dx * 0.07;
      pt.y += dy * 0.07;
      moving = true;
    } else { pt.x = pointerX; pt.y = pointerY; }

    applyGrade();
    if (moving) kick();
  }

  const ptEase = { x: 0, y: 0 };

  function setGrade(next) {
    if (!next || tier === '3d') return;
    if (typeof next.brightness === 'number') target.brightness = next.brightness;
    if (typeof next.saturate === 'number') target.saturate = next.saturate;
    if (typeof next.contrast === 'number') target.contrast = next.contrast;
    if (typeof next.x === 'number') target.x = next.x;
    if (typeof next.y === 'number') target.y = next.y;
    if (typeof next.zoom === 'number') target.zoom = next.zoom;
    kick();
  }

  /* ---- input -------------------------------------------------------------- */
  const finePointer = window.matchMedia('(pointer: fine)').matches;

  function setPointer(nx, ny) {
    if (tier === '3d') return;            /* tier 1 runs its own damping      */
    pointerX = Math.max(-1, Math.min(1, typeof nx === 'number' ? nx : 0));
    pointerY = Math.max(-1, Math.min(1, typeof ny === 'number' ? ny : 0));
    kick();
  }

  function onPointer(event) {
    if (!allowMotion || !finePointer) return;
    setPointer((event.clientX / window.innerWidth) * 2 - 1,
               (event.clientY / window.innerHeight) * 2 - 1);
  }

  function scrollProgress() {
    const doc = document.documentElement;
    const max = Math.max(1, doc.scrollHeight - window.innerHeight);
    const y = window.pageYOffset || doc.scrollTop || 0;
    return Math.max(0, Math.min(1, y / max));
  }

  function onScroll() {
    const p = scrollProgress();
    scrollDrift = -p * 42;      /* the camera lifts as the reader descends */
    scrollZoom = p * 0.06;      /* and creeps slowly toward the disk       */
    kick();
  }

  let resizeTimer = 0;
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(onScroll, 120);
  }

  /* ---- tier arbitration ---------------------------------------------------
     One-way by design. The ray-marcher may claim the frame late, while a
     fallback that has not yet decoded a moving picture is still on screen - but
     once real footage is playing, nothing demotes it back. `tier` is the single
     source of truth every setter above consults. */
  const root3D = document.getElementById('universe');

  function wire() {
    if (wired) return;
    wired = true;
    if (allowMotion) window.addEventListener('pointermove', onPointer, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    document.addEventListener('visibilitychange', syncPlayback);
  }

  function unwire() {
    if (!wired) return;
    wired = false;
    window.removeEventListener('pointermove', onPointer);
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onResize);
    document.removeEventListener('visibilitychange', syncPlayback);
  }

  /* Tier 1 painted a frame: stand down. Everything below this returns before
     touching the <video> elements, so a healthy desktop never spends a byte on
     footage - and the loader shutter is released on the real frame. */
  function go3D() {
    if (tier === '3d') return;
    if (window.__GARGANTUA_DEAD__) return;

    if (tier === 'photo' || tier === 'still') {
      /* The fallback armed first (cold GPU, slow module parse). Steal the frame
         back only while it has not decoded a moving picture yet: abandoning
         bytes already in flight costs less than committing to the footage. */
      const layer = layers[requestedShot] || layers.orbit;
      const video = layer && layer.querySelector('.cine-video');
      if (!video) return;
      if (layer.classList.contains('is-playing')) {
        /* Real footage already owns the frame. blackhole.js adds `bh-live`
           BEFORE dispatching this event, so simply returning here would leave
           the canvas at opacity 1 / z-index 1 covering the video that just won
           the race. Honour the one-way contract: take the canvas out of the
           paint path and leave the footage playing. */
        if (root3D) root3D.classList.remove('bh-live');
        document.body.classList.add('no-3d');
        return;
      }
      try { video.pause(); } catch (e) { /* noop */ }
      video.removeAttribute('src');                    /* abort the transfer  */
      video.dataset.attached = '0';
      try { video.load(); } catch (e) { /* noop */ }
      layer.classList.remove('is-active', 'is-wrapping');
    }

    tier = '3d';
    window.__CINEMATIC_TIER__ = '3d';
    unwire();
    root.classList.add('is-superseded');
    settle();
  }

  function armPhoto(reason) {
    if (tier === 'photo' || tier === 'still') return;
    if (root) root.classList.remove('is-superseded');
    tier = allowMotion ? 'photo' : 'still';
    window.__CINEMATIC_TIER__ = tier;
    window.__CINEMATIC_REASON__ = reason;
    if (root3D) root3D.classList.remove('bh-live');
    root.classList.remove('is-superseded');
    root.classList.add('is-live');
    if (!allowMotion) root.classList.add('is-still');

    wire();
    attach('orbit');
    setShot(requestedShot);
    onScroll();
    applyGrade();

    /* The shutter opens as soon as the poster is decodable - never wait on the
       video, and never trust that it will arrive at all. */
    const poster = layers.orbit.querySelector('.cine-poster');
    if (poster && poster.complete) settle();
    else if (poster) {
      poster.addEventListener('load', settle, { once: true });
      poster.addEventListener('error', settle, { once: true });
    }
    setTimeout(settle, 1800);
  }

  /* ---- boot --------------------------------------------------------------- */
  function boot() {
    /* Late load: the verdict is already in, take it directly. */
    if (window.__GARGANTUA_READY__) return go3D();
    if (window.__GARGANTUA_DEAD__) return armPhoto(window.__GARGANTUA_DEAD__);

    document.addEventListener('gargantua:ready', go3D);
    document.addEventListener('gargantua:dead', function (event) {
      armPhoto((event.detail && event.detail.reason) || 'unknown');
    });

    /* Fail-safe. A module that is blocked, 404s, or throws during module
       evaluation dispatches nothing at all - not even `dead` - so silence must
       resolve to the fallback too. 4 s is generous for a 167 KB (gzip) local
       module plus a first raymarched frame; the alternative is a reader staring
       at a gradient because a script tag quietly failed. */
    setTimeout(function () {
      if (tier === 'pending') armPhoto('module-silent');
    }, 4000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }

  /* ---- public API --------------------------------------------------------- */
  window.Cinematic = {
    setShot: setShot,
    setGrade: setGrade,
    setPointer: setPointer,
    setPaused: setPaused,
    isReady: function () { return started; },
    getShot: function () { return activeShot; },
    /* Single source of truth for which engine owns the frame. 'pending' means
       arbitration has not resolved yet. app.js consults this instead of probing
       for window.Gargantua, so a mid-session context loss re-routes grading on
       the next section change instead of writing to a dead renderer. */
    getTier: function () { return tier; },
    getCapabilities: function () {
      return {
        tier: tier,
        reason: window.__CINEMATIC_REASON__ || null,
        motion: allowMotion,
        uhd: wantsUHD,
        reducedMotion: prefersReduced,
        saveData: saveData,
        slowLink: slowLink
      };
    }
  };
})();



