var x=0;
var y=0;
console.log("I'm also working!!!!");
var Bailey="0";
function setup(){
    createCanvas(720,480);
    let myCanvas = createCanvas(windowWidth - 750,windowHeight - 250);
    myCanvas.parent("home");
    myCanvas.style("margin", "2vh 2vw");
    myCanvas.style("position",'relative');
    myCanvas.style("float","right");
}

function draw(){
    
    background(Bailey,30,155);
    Bailey = Bailey + 1; // addition operator 
    Bailey = Bailey % 254; // modulo operator

    rect(x, y, 10, 10);
    x = x + 1;
    x = x % 719;

    y = y + 1;
    y = y % 479;

}