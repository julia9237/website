document.getElementsByTagName("h1")[0].onclick = function () {
  window.location.href = "./hi.html";
};

document.getElementById("about").onclick = function () {
  window.getSelection().removeAllRanges();

  const about = document.getElementById("abouttext");
  if (about.getAttribute("class") === "") {
    about.setAttribute("class", "goodbye");
  } else {
    about.setAttribute("class", "");
  }
};
