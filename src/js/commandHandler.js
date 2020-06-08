var exitCommands = ["close", "quit", "exit", "stop"]
var validCommands = [
    "help",
    "theme",
    "themes"
] + exitCommands;

var hiddenCommands = ["dicks", "balls"]
var themes = ["dark", "light", "purple", "zebra", "green", "red", "blue"];

function focusCMD() {
    document.getElementById("focus").focus();
};

function resizeTextarea() {
    var lastCommand = document.getElementById("focus");
    if (lastCommand.value.length != 0) {
        var divGetHeight = document.getElementById("getHeight");
        divGetHeight.innerHTML = lastCommand.value;
        lastCommand.setAttribute("style", "height: " + divGetHeight.offsetHeight + "px");
    };
};

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
    
    if (lastCommand.value.trim().length > 0) {
        console.log(`Command: ${lastCommand.value} | Length: ${lastCommand.value.trim().length}`);

        var commandResponse = document.createElement("textarea");
        commandResponse.setAttribute("readonly", "");
        commandResponse.setAttribute("class", "resp");
        commandResponse.setAttribute("style", "height: " + divGetHeight.offsetHeight + "px");
        document.getElementById("main").appendChild(commandResponse);
        var commandParts = lastCommand.value.split(" ");


        if (validCommands.includes(commandParts[0]) || hiddenCommands.includes(commandParts[0])) {
            console.log("Valid command");
            switch (commandParts[0]) {
                case "dicks":
                    commandResponse.innerHTML = "balls";
                    break;
                case "balls":
                    commandResponse.innerHTML = "dicks";
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
                case "stop":
                case "close":
                case "quit":
                case "exit":    
                    window.close();
                    document.getElementsByTagName("body")[0].setAttribute("style", "display: none;");
                    document.getElementById("switch").setAttribute("style", "background-color: #000;");
                    break;
                default:
                    commandResponse.innerHTML = commandParts[0] + ': command not found';
                    break;
            };
        } else {
            console.log("Invalid command");
            commandResponse.innerHTML = commandParts[0] + ': command not found';
        };
        console.log(`Response: ${commandResponse.innerHTML}`);
    };

    var newCommand = document.createElement("textarea");
    document.getElementById("main").appendChild(newCommand);
    newCommand.setAttribute("class", "cmd");
    newCommand.setAttribute("id", "focus");
    focusCMD();
    newCommand.setAttribute("autocomplete", "off");
    newCommand.setAttribute("spellcheck", "false");
    lastCommand.removeAttribute("id");
    resizeTextarea();
};

document.addEventListener('keydown', function (event) {
    resizeTextarea();
    focusCMD();
    if (event.keyCode == 13) {
        submitt();
    };
});

document.addEventListener('keypress', function (event) {
    resizeTextarea();
    focusCMD();
});

document.addEventListener('keyup', function (event) {
    resizeTextarea();
    focusCMD();
});

window.onload = focusCMD();
