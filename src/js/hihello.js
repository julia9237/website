// does the exact same thing as the
// getRandomBackground() function from index.ts
// but i had trouble with importing it so i just copy pasted it lol
var bgNum = Math.floor(Math.random() * 9) + 1;
document.getElementsByClassName("icon")[0].setAttribute("href", "./src/img/icon" + bgNum + ".png");
document.getElementsByTagName("html")[0].setAttribute("style", "background-color: var(--background" + bgNum + ");");
var hihelloGen = new Worker('hihello.ts');
var intID = window.setInterval(hihelloSpam, 500);
function hihelloSpam() {
    var body = document.getElementsByTagName("body")[0];
    switch (Math.floor(Math.random() * 2) + 1) {
        case 1:
            body.innerHTML += "hi<br>";
            break;
        case 2:
            body.innerHTML += "hello<br>";
            break;
    }
    ;
    window.scrollTo(0, body.scrollHeight);
    return;
}
;
