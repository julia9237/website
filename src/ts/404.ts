function getRandomBackgrounddd(): String {

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
  
  function getIconnn(color: String, colorType: Number): String {
  
    const canvas = document.createElement("canvas")
    canvas.height = 16
    canvas.width = 16
    const ctx = canvas.getContext("2d")
    if(colorType === 0) ctx.fillStyle = `rgb(${color})`
    else ctx.fillStyle = `#${color}`
    ctx.fillRect(0, 0, 16, 16)
    return canvas.toDataURL()
  }
  
  const bgColorrr = getRandomBackgrounddd()
  
  document.getElementsByClassName("icon")[0].setAttribute("href", getIconnn(bgColorrr, 0).toString())
  
  document.getElementsByTagName("html")[0].setAttribute("style", `background-color: rgb(${bgColorrr})`)