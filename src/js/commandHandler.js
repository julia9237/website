var validCommands = ["help", "theme", "themes"];
var hiddenCommands = ["dicks"]
var themes = ["dark", "light", "purple"];

function themeSwitch(themeName) {
    document.getElementById("switch").setAttribute("class", themeName);
}

function submitt() {
    var lastCommand = document.getElementById("focus");
    lastCommand.setAttribute("readonly", "");

    //get textarea size
    var divGetHeight = document.getElementById("getHeight");
    divGetHeight.setAttribute("id", "getHeight");
    divGetHeight.innerHTML = lastCommand.value;
    lastCommand.setAttribute("style", "height: " + divGetHeight.offsetHeight + "px");
    
    if (lastCommand.value.trim().length != 0) {
        var commandResponse = document.createElement("textarea");
        commandResponse.setAttribute("readonly", "");
        commandResponse.setAttribute("style", "height: " + divGetHeight.offsetHeight + "px");
        document.getElementById("main").appendChild(commandResponse);
        var commandParts = lastCommand.value.split(" ");


        if (validCommands.includes(commandParts[0]) || hiddenCommands.includes(commandParts[0])) {
            switch (commandParts[0]) {
                case "dicks":
                    commandResponse.innerHTML = "balls";
                    break;
                case "help":
                    commandResponse.innerHTML = commandParts[0] + ": " + validCommands;
                    break;
                case "theme":
                    if (commandParts.length > 1) {
                        if (themes.includes(commandParts[1])) {
                            themeSwitch(commandParts[1])
                            commandResponse.innerHTML = "Theme set to: " + commandParts[1];
                        } else {
                            commandResponse.innerHTML = commandParts[1] + " is not a valid theme"
                        };
                    } else {
                        commandResponse.innerHTML = "Themes: " + themes;
                    };
                    break;

                case "themes":
                    commandResponse.innerHTML = "Themes: " + themes;
                    break;
            };
        } else {
            commandResponse.innerHTML = commandParts[0] + ': command not found';
        };
    };

    var newCommand = document.createElement("textarea");
    document.getElementById("main").appendChild(newCommand);
    newCommand.setAttribute("class", "cmd");
    newCommand.setAttribute("id", "focus");
    newCommand.setAttribute("autocomplete", "off");
    newCommand.setAttribute("spellcheck", "false");
    lastCommand.removeAttribute("id");
};

function resizeTextarea() {
    var lastCommand = document.getElementById("focus");
    if (lastCommand.value.length != 0) {
        var divGetHeight = document.getElementById("getHeight");
        divGetHeight.innerHTML = lastCommand.value;
        lastCommand.setAttribute("style", "height: " + divGetHeight.offsetHeight + "px");
    };
};

document.addEventListener('keydown', function (event) {
    resizeTextarea();
    if (event.keyCode == 13) {
        submitt();
    };
});

document.addEventListener('keypress', function (event) {
    resizeTextarea();
});

document.addEventListener('keyup', function (event) {
    resizeTextarea();
});

function focusCMD() {
    document.getElementById("focus").focus();
}

window.onload = focusCMD();
