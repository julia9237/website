import { tabnext, tabprev } from "./tabSwitch.js";
const tabs = document.getElementsByTagName("tab");
const left = 37;
const right = 39;
document.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
        case left:
            tabprev(tabs);
            break;
        case right:
            tabnext(tabs);
            break;
        default:
            break;
    }
});
