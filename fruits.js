var img;
var status = "";

function preload()
{
    img = loadImage('apple-mango.png');
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
    text("Apple", 210, 110);
    stroke("#0000FF");
    noFill();
    rect(20, 80, 260, 280);

    fill("#FF0000");
    textSize(25);
    text("Mango", 330, 50);
    noFill();
    stroke("#FF0000");
    rect(330, 30, 270, 370);
}

function gotResults(error, results)
{
    if(error){
        console.log(error);
    }
    console.log(results);
}
