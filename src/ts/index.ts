function getRandomBackground() {
  var bgNum = Math.floor(Math.random() * 9) + 1;
  document.getElementsByClassName("icon")[0].setAttribute("href",  `./src/img/icon${bgNum}.png`)
  return `background-color: var(--background${bgNum});`;
};

var html = document.getElementsByTagName("html")[0];
html.setAttribute("style", getRandomBackground())