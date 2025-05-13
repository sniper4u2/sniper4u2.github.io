function handleChat() {
  const input = document.getElementById("user-input");
  const log = document.getElementById("chat-log");
  const message = input.value.trim();
  if (message === "") return;

  const userLine = `<div><strong>You:</strong> ${message}</div>`;
  log.innerHTML += userLine;

  let reply = "I'm still learning. Try asking about your tools or sending an email.";

  if (message.toLowerCase().includes("portfolio")) {
    reply = "You can view the portfolio here: https://sniper4u2.github.io";
  } else if (message.toLowerCase().includes("osint")) {
    reply = "Check the Awesome OSINT tools at: https://github.com/sniper4u2/awesome-osint";
  }

  const botLine = `<div><strong>Bot:</strong> ${reply}</div>`;
  log.innerHTML += botLine;
  input.value = "";
  log.scrollTop = log.scrollHeight;
}
