document.getElementById("discord").addEventListener("click", () => {
  navigator.clipboard.writeText("julia#9237").then(() => {

      document.getElementById("discord").innerText = "Copied!";
  });
}, false);

/*  better copy clipboard

  const input = document.createElement("textarea")

  input.value = text

  input.style.position = "fixed"
  input.style.opacity = "0"

  document.body.append(input)

  input.focus()
  input.select()

  document.execCommand("copy")

  input.remove()
 */
