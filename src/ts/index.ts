document.getElementsByTagName("h1")[0].onclick = function() {window.location.href = "./hi.html"}

document.getElementById("about").onclick = function() {
  window.getSelection().removeAllRanges()
  const about = document.getElementById("abouttext")

  if(about.getAttribute("style") === "") {
    about.setAttribute("style", "display: none;")
  }

  else {
    about.setAttribute("style", "")
  }
}

/*function getRandomBackground(): String {

  const colors = [
    "82, 205, 247",
    "247, 168, 184",
    "254, 255, 254"

    "255, 64, 140",
    "102, 133, 255",
    "102, 204, 255",
    "102, 250, 255",
    "102, 255, 214",
    "255, 219, 102",
    "255, 166, 102",
    "255, 117, 102",
    "255, 102, 102",
    "102, 184, 255",

  ]

  return colors[Math.floor(Math.random() * colors.length)]
}

function getIcon(color: String, colorType: Number): String {

  const canvas = document.createElement("canvas")
  canvas.height = 16
  canvas.width = 16
  const ctx = canvas.getContext("2d")
  if(colorType === 0) ctx.fillStyle = `rgb(${color})`
  else ctx.fillStyle = `#${color}`
  ctx.fillRect(0, 0, 16, 16)
  return canvas.toDataURL()
}

window.onload = function main():void {

  const bgColor = getRandomBackground()

  document.getElementsByClassName("icon")[0].setAttribute("href", getIcon(bgColor, 0).toString())

  document.getElementsByTagName("html")[0].setAttribute("style", `background-color: rgb(${bgColor})`)

  document.getElementsByTagName("h1")[0].onclick = function() {window.location.href = "./hi.html"}

  document.getElementById("about").onclick = function() {
    const about = document.getElementById("abouttext")

    if(about.getAttribute("style") === "") {
      about.setAttribute("style", "display: none;")
    }

    else {
      about.setAttribute("style", "")
    }
  }


  const urlParams = new URLSearchParams(window.location.search)



  if(urlParams.has("hex")) {

    const hex = urlParams.get("hex")
    document.getElementsByTagName("html")[0].setAttribute("style", `background-color: #${hex};`)
    //document.getElementsByClassName("icon")[0].setAttribute("href",  "")

    document.getElementsByClassName("icon")[0].setAttribute("href", getIcon(hex, 1).toString())
    const specialColors = {
      "eeaaff": "vivi",
      "14df96": "gay",
      "ff0000": "fuck of",
      "ffffff": "flashbang",
      "ffa8c8": "setsu",
    }

    if (hex === "00ff00") alert("why") // vivi suggestion

    const word = specialColors[hex] || "wi"

    document.getElementById("b").innerHTML = `Something someday ${word}ll be here`
  }
  return
}

export { getRandomBackground, getIcon }*/