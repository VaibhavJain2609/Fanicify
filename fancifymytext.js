
function helloWorld() {
    alert("Hello, world!");
}

function biggerText() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function applyStyles() {
    var textArea = document.getElementById("textInput");
    var fancyShmancyRadio = document.getElementById("fancyShmancyRadio");

    if (fancyShmancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = ""; 
        textArea.style.textDecoration = "none";
    }
}

function mooText() {
    var textArea = document.getElementById("textInput");
    var text = textArea.value;
    textArea.value = text.toUpperCase();

    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].trim().split(" ");
        if (words.length > 0) {
            words[words.length - 1] += "-Moo";
        }
        sentences[i] = words.join(" ");
    }
    textArea.value = sentences.join(". ");
}
