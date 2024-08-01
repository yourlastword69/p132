function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = m15.imageClassifier('https://teachablemachine.withgoogle.com/models/T4LJEnv_Y/model.json',modelLoaded)
}
    function modelLoaded() {
    console.log('Model Loaded!');
    }
    function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
    }
    function gotResult(error, results) {
    if (error) {
    console.error(error);
    } else {
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
    }
