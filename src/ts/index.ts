function getRandomBackground() {
  const bgNum = Math.floor(Math.random() * 9) + 1;
  document.getElementsByClassName("icon")[0].setAttribute("href",  `./src/img/icon${bgNum}.png`)
  return `background-color: var(--background${bgNum});`;
};

const html = document.getElementsByTagName("html")[0];
html.setAttribute("style", getRandomBackground());

var urlParams = new URLSearchParams(window.location.search);


if(urlParams.has("hex")) {

  const hex = urlParams.get("hex");
  document.getElementsByTagName("html")[0].setAttribute("style", `background-color: #${hex};`);
  document.getElementsByClassName("icon")[0].setAttribute("href",  "");

  const specialColors = {
    "eeaaff": "vivi",
    "14df96": "gay",
    "ff0000": "fuck of",
    "ffffff": "flashbang",
  };
  
  if (hex === "00ff00") alert("why"); // vivi suggestion

  const word = specialColors[hex] || "wi"

  document.getElementById("b").innerHTML = `Something someday ${word}ll be here`;

  /* old method of finding colors
  if(hex === "eeaaff") {
    document.getElementById("b").innerHTML = "Something someday vivill be here";
  }
  else if(hex === "14df96") {
    document.getElementById("b").innerHTML = "Something someday gayll be here";
  };*/


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
};
