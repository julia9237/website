const $ = document.querySelector.bind(document)

$(".dialogOk").addEventListener("click", () => {
  window.location.replace("eyesore.iamhorny.help")
})

$(".dialogCancel").addEventListener("click", () => {
  $("#dialogNewPage").style.display = "none"
})