window.onload = function () {
    const hihelloGen = new Worker('hihello.ts');
    const hihelloGenDelay = window.setInterval(hihelloSpam, 500);
    function hihelloSpam() {
        const body = document.getElementsByTagName("body")[0];
        switch (Math.floor(Math.random() * 2)) {
            case 0:
                body.innerHTML += "hi<br>";
                break;
            case 1:
                body.innerHTML += "hello<br>";
                break;
            default:
                break;
        }
        window.scrollTo(0, body.scrollHeight);
        return;
    }
    return;
};
