"use strict";

document.getElementById("discord").onclick = () => {
    navigator.clipboard.writeText("julia#9237").then(function() {
        document.getElementById("discord").innerHTML = "Successfully copied"


        },
        function() {
            document.getElementById("discord").innerHTML = "Copy failed"
        }
    )
}
