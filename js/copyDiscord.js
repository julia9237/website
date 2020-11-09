document.getElementById("discord").addEventListener("click", () => {
  navigator.clipboard.writeText("julia#9237").then(() => {

      document.getElementById("discord").innerText = "Copied!";
  });
}, false);