//https://teachablemachine.withgoogle.com/models/[...]
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
})

camera = document.getElementById("camera")
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'" />'
    }); 
}

console.log('ml5version', ml5.version);
//https://teachablemachine.withgoogle.com/models/33IAKW59u/
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mkvIBXTpV/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model is Loaded');
}
hand_gestures_project_model_link.txt

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction_1;
    speak_data_2 = "And the second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if (prediction_1 == "peaceful") {
            document.getElementById("update_emoji1").innerHTML = "&#9996;"
        }
        if (prediction_1 == "rocking") {
            document.getElementById("update_emoji1").innerHTML = "&#129304;"

        }
        if (prediction_1 == "ok") {
            document.getElementById("update_emoji1").innerHTML = "&#128076;"
        }
        if (prediction_2 == "peaceful") {
            document.getElementById("update_emoji2").innerHTML = "&#128512;"
        }
        if (prediction_2 == "rocking") {
            document.getElementById("update_emoji2").innerHTML = "&#129304;"

        }
        if (prediction_2 == "ok") {
            document.getElementById("update_emoji2").innerHTML = "&#128076;"
        }
       

    }

}