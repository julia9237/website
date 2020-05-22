function submitt() {
    var lastCommand = document.getElementById("focus");
    if(lastCommand && lastCommand.value)
    {
    lastCommand.setAttribute("readonly", "");
    lastCommand.setAttribute("id", "");
    lastCommand.removeAttribute("focus");

    var newCommand = document.createElement("input");
    document.getElementById("main").appendChild(newCommand)
    newCommand.setAttribute("class", "cmd")
    newCommand.setAttribute("id", "focus")
    newCommand.setAttribute("autocomplete", "off")
    newCommand.setAttribute("spellcheck", "false")
    newCommand.setAttribute("maxlength", "56")
    };
};

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 13) {
        submitt();
    }
});why