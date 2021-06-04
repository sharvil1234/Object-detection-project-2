var img;
var status = "";

function preload()
{
    img = loadImage('dog-bird.png');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = 'Status: Detecting Objects';
}

function modelLoaded()
{
    console.log("Initialized");
    status = true;
    objectDetector.detect(img, gotResults);
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FFFF00");
    stroke("#0000FF");
    text("Dog", 160, 225);
    stroke("#0000FF");
    noFill();
    rect(10, 200, 200, 200);

    fill("#FF0000");
    textSize(25);
    text("Bird", 370, 260);
    noFill();
    stroke("#FF0000");
    rect(365, 0, 270, 270);
}

function gotResults(error, results)
{
    if(error){
        console.log(error);
    }
    console.log(results);
}
