function getRandomBackground() {
    return "background-color: var(--background" + (Math.floor(Math.random() * 9) + 1) + ");";
}
;
var html = document.getElementsByTagName("html")[0];
html.setAttribute("style", getRandomBackground());
