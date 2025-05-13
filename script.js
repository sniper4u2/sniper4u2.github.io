/* Basic reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    background-color: #f4f4f4;
    color: #333;
    margin-top: 50px;
}

header {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #333;
    color: #fff;
    padding: 15px 0;
    z-index: 1000;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

nav ul {
    list-style: none;
}

nav ul li {
    display: inline;
    margin-right: 20px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
}

#hero {
    background-color: #0d47a1;
    color: #fff;
    padding: 120px 20px;
    text-align: center;
}

#hero h1 {
    font-size: 3em;
}

#about, #projects, #blog, #contact {
    padding: 60px 20px;
    background-color: #fff;
    margin: 20px 0;
}

#about ul {
    list-style-type: none;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.project-card {
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

.project-card h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
}

.project-card a {
    color: #0d47a1;
    text-decoration: none;
}

.project-card a:hover {
    text-decoration: underline;
}

footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
}

.scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #0d47a1;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}

.scroll-to-top:hover {
    background-color: #004a8f;
}
