function getRandomBackground() {
    const bgNum = Math.floor(Math.random() * 9) + 1;
    document.getElementsByClassName("icon")[0].setAttribute("href", `./src/img/icon${bgNum}.png`);
    return `background-color: var(--background${bgNum});`;
}
document.getElementsByTagName("h1")[0].onclick = function () { window.location.href = "./hi.html"; };
const html = document.getElementsByTagName("html")[0].setAttribute("style", getRandomBackground());
var urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("hex")) {
    const hex = urlParams.get("hex");
    document.getElementsByTagName("html")[0].setAttribute("style", `background-color: #${hex};`);
    document.getElementsByClassName("icon")[0].setAttribute("href", "");
    const specialColors = {
        "eeaaff": "vivi",
        "14df96": "gay",
        "ff0000": "fuck of",
        "ffffff": "flashbang",
        "ffa8c8": "setsu",
    };
    if (hex === "00ff00")
        alert("why");
    const word = specialColors[hex] || "wi";
    document.getElementById("b").innerHTML = `Something someday ${word}ll be here`;
}
