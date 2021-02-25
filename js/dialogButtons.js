const $ = document.querySelector.bind(document)

$(".dialogOk").addEventListener("click", () => {
  window.location.href = "eyesore.iamhorny.help"
})

$(".dialogCancel").addEventListener("click", () => {
  $("#dialogNewPage").style.display = "none"
})