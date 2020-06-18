// had to copy paste because i still cant figure out importing errors
function getRandomBackgroundd(): String {
  const colors = [
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

function getIconn(color: String, colorType: Number): String {
  const canvas = document.createElement("canvas")
  canvas.height = 16
  canvas.width = 16
  const ctx = canvas.getContext("2d")
  if(colorType === 0) ctx.fillStyle = `rgb(${color})`
  else ctx.fillStyle = `#${color}`
  ctx.fillRect(0, 0, 16, 16)
  return canvas.toDataURL()
}


const bgColorr = getRandomBackgroundd()
document.getElementsByClassName("icon")[0].setAttribute("href", getIconn(bgColorr, 0).toString())
document.getElementsByTagName("html")[0].setAttribute("style", `background-color: rgb(${bgColorr})`)


const hihelloGen = new Worker('hihello.ts')
const hihelloGenDelay = window.setInterval(hihelloSpam, 500)

function hihelloSpam() {
  const body = document.getElementsByTagName("body")[0]
  switch(Math.floor(Math.random() * 2) + 1) {
    case 1:
      body.innerHTML += "hi<br>"
      break
    case 2:
      body.innerHTML += "hello<br>"
      break
  }
  window.scrollTo(0, body.scrollHeight);
  return
}