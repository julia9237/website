fetch("../content.html")
  .then(r => r.text())
  .then(text => document.getElementById("content").innerHTML = text)