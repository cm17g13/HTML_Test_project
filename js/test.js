//function buttonClick() {
//    document.getElementById("bigButton").innerText = "You clicked the button didn't you?";
//}

function buttonClick(id) {
    var element = document.getElementById(id);
    element.src = "http://i0.kym-cdn.com/entries/icons/facebook/000/017/788/gotem.jpg";
}

function colourButton(id) {
    document.getElementById(id).style.color = "#000000";
    document.getElementById(id).style.backgroundColor = "#ff0000";
}
