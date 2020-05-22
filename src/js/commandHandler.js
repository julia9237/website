var validCommands = ["help", "theme", "themes"];
var themes = ["dark", "light", "purple"];

function themeSwitch(themeName) {
    document.getElementById("switch").setAttribute("class", themeName);
}

function focusCMD() {
    document.getElementById("focus").focus();
}

function submitt() {
    var lastCommand = document.getElementById("focus");
    if (lastCommand && lastCommand.value) {
        lastCommand.setAttribute("readonly", "");
        lastCommand.setAttribute("id", "");
        lastCommand.removeAttribute("focus");

        var commandResponse = document.createElement("p");
        document.getElementById("main").appendChild(commandResponse);
        var commandParts = lastCommand.value.split(" ");


        if(validCommands.includes(commandParts[0])) {
            switch(commandParts[0]) {
                case "help":
                    commandResponse.innerHTML = commandParts[0] + ": " + validCommands;
                    break;
                case "theme":
                    if(commandParts.length > 1)
                    {
                        switch (commandParts[1]) {
                            case themes[0]:
                                themeSwitch(themes[0]);
                                break;
                            case themes[1]:
                                themeSwitch(themes[1]);
                                break;
                            case themes[2]:
                                themeSwitch(themes[2]);
                                break;
                            default:
                                commandResponse.innerHTML = commandParts[1] + " is not a valid theme";
                                break;
                        }
                        commandResponse.innerHTML = "Theme set to: " + commandParts[1];
                    } else {
                        commandResponse.innerHTML = "Themes: " + themes;
                    }
                    break;

                case "themes":
                    commandResponse.innerHTML = "Themes: " + themes;
                    break;
            }
        } else {
            commandResponse.innerHTML = commandParts[0] + ': command not found';
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

window.onload = focusCMD();