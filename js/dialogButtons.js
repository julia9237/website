const $ = document.querySelector.bind(document)

$(".dialogOk").addEventListener("click", () => {
  window.location = "eyesore.iamhorny.help"
})

$(".dialogCancel").addEventListener("click", () => {
  $("#dialogNewPage").style.display = "none"
})