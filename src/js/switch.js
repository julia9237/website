function stuffSwitch() {
    var htmlElem = document.getElementById("switch");
    htmlElem.classList.toggle("inverted");
    
    var iconWB = "src/img/icon-wb.png"
    var iconBW = "src/img/icon-bw.png"
    var iconElem = document.getElementsByClassName("icon")[0];
    var iconCurrent = iconElem.getAttribute("href");
    console.log(iconCurrent)
    if(iconCurrent == iconWB) {
        iconElem.setAttribute("href", iconBW);
    } else { iconElem.setAttribute("href", iconWB) }

}
