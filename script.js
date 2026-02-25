function changerCouleur() {
    const body = document.body;
    if (body.dataset.theme === "light") {
        body.style.background = "linear-gradient(135deg, #667eea, #764ba2)";
        body.dataset.theme = "dark";
    } else {
        body.style.background = "linear-gradient(135deg, #ff9966, #ff5e62)";
        body.dataset.theme = "light";
    }
}
