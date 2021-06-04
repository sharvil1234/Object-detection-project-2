var img;
var status = "";

function preload()
{
    img = loadImage('car-bike.png');
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
    text("Car", 210, 110);
    stroke("#0000FF");
    noFill();
    rect(40, 120, 350, 280);

    fill("#FF0000");
    textSize(25);
    text("Bike", 410, 120);
    noFill();
    stroke("#FF0000");
    rect(380, 130, 200, 320);
}

function gotResults(error, results)
{
    if(error){
        console.log(error);
    }
    console.log(results);
}
