import { getIcon, getRandomBackground } from "./index.js";
window.onload = function main() {
    const bgColor = getRandomBackground();
    document.getElementsByClassName("icon")[0].setAttribute("href", getIcon(bgColor, 0).toString());
    document.getElementsByTagName("html")[0].setAttribute("style", `background-color: rgb(${bgColor})`);
    return;
};
