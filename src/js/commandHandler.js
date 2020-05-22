var commands = ["help"];

function submitt() {
    var lastCommand = document.getElementById("focus");
    if (lastCommand && lastCommand.value) {
        lastCommand.setAttribute("readonly", "");
        lastCommand.setAttribute("id", "");
        lastCommand.removeAttribute("focus");

        var commandResponse = document.createElement("p");
        document.getElementById("main").appendChild(commandResponse);
        if(commands.includes(lastCommand.value)) {
            switch(lastCommand.value) {
                case "help":
                    commandResponse.innerHTML = lastCommand.value + ": help text";
                    break;
            
                default:
                    break;
            }
        } else {
            commandResponse.innerHTML = lastCommand.value + ': command not found';
        }

        var newCommand = document.createElement("input");
        document.getElementById("main").appendChild(newCommand);
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
});