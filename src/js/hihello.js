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
    return;
}
;
