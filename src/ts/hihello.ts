import { getIcon, getRandomBackground } from "./index"

const bgColor = getRandomBackground()
document.getElementsByClassName("icon")[0].setAttribute("href", getIcon(bgColor, 0).toString())
document.getElementsByTagName("html")[0].setAttribute("style", `background-color: rgb(${bgColor})`)


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