var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function load()
{
    document.getElementById("textarea").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {

    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textarea").innerHTML = Content;
    console.log(Content); 
}