function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true , video:false});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/y9d4m5D2C/model.json", modelReady);
}

var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Detected voice is off - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'detected dog - '+
        dog + 'detected cat  - '+cat+'detected lion - '+lion+'detected cow - '+cow;
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById("animal_image");

        if (results[0].label == "Barking") {
            img.src = 'barking.gif';
            dog = dog + 1;
        } else if (results[0].label == "Meowing") {
            img.src = 'meowing.gif';
            cat = cat + 1;
        } else if (results[0].label == "Roaring") {
            img.src = 'roaring.gif';
            lion = lion + 1;
        } else if (results[0].label == "Mooing") {
            img.src = 'mooing.gif';
            cow = cow + 1;
        } else {
            img.src="listen.gif";
        }
    }
}