function getRandomBackground() {
    var bgNum = Math.floor(Math.random() * 9) + 1;
    document.getElementsByClassName("icon")[0].setAttribute("href", "./src/img/icon" + bgNum + ".png");
    return "background-color: var(--background" + bgNum + ");";
}
;
var html = document.getElementsByTagName("html")[0];
html.setAttribute("style", getRandomBackground());
var urlParams = new URLSearchParams(window.location.search); // get queries
if (urlParams.has("hex")) { // handle queries
    var hex = urlParams.get("hex");
    document.getElementsByTagName("html")[0].setAttribute("style", "background-color: #" + hex + ";");
    document.getElementsByClassName("icon")[0].setAttribute("href", "");
    /* find og:image meta and set it to none
    var metas = document.getElementsByTagName("meta");
    for(var i = 0; i < metas.length; i++) {
      switch(metas[i].getAttribute("property")) {
        case "og:image":
          metas[i].setAttribute("content", "");
          break;
      };
    };
    */
}
;
