import { getIcon, getRandomBackground } from "./index.js"

window.onload = function main() {
  const bgColor = getRandomBackground()
  document.getElementsByClassName("icon")[0].setAttribute("href", getIcon(bgColor, 0).toString())
  document.getElementsByTagName("html")[0].setAttribute("style", `background-color: rgb(${bgColor})`)


  const hihelloGen = new Worker('hihello.ts')
  const hihelloGenDelay = window.setInterval(hihelloSpam, 500)

  function hihelloSpam(): void {
    
    const body = document.getElementsByTagName("body")[0]
    switch(Math.floor(Math.random() * 2)) {
      case 0:
        body.innerHTML += "hi<br>"
        break
      case 1:
        body.innerHTML += "hello<br>"
        break
      default:
        break;
    }
    window.scrollTo(0, body.scrollHeight);
    return
  }
  return
}