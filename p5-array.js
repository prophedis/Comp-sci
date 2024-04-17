console.log("i'm also working!!!");

/// confetti 
///rects same size 
/// position and colour randomized
/// fullscreen animation
/// emoji?
/// button to start confetti 


var x=0;
var speed= [];
var shapes= [];// circles and rectangles
var positions= [];// only the y changes
var colours= [];// rotations doesn't change
var rotations= [];// doesn't change 
var numberOfShapes = 800;

function preload() {
    //img = loadImage('image/https://64.media.tumblr.com/96a749201181bfd3c132a301b4036eb9/2de3a3f3d72b8b10-a6/s1280x1920/e0e9ca325c9e1ad05b7f02cc17fd8614daf86d9f.pnj');
  }

function setup(){
    let myCanvas = createCanvas(windowWidth - 450,windowHeight - 250);
    myCanvas.parent("p5array");
    myCanvas.style("margin", "2vh 2vw");
    myCanvas.style("z-index","1000");
    background(100);
    


    noStroke();
    rectMode(CENTER);



    for(var i  = 0; i< numberOfShapes; i++){
        colours[i] = color( random(255),random(255),random(255));
        rotations[i] = random(TWO_PI);
        positions[i] = random(height);
        speed[i] = random(1,7);
        if(random()>0.3){
            shapes[i] = true
        }else{
            shapes[i] = false
        }
        
    }
    console.log(positions);
}

function draw(){
    var interval = width/numberOfShapes;
    
    for(var i=0; i< numberOfShapes; i++){

        fill(colours[i] );
        push();
        translate(i*interval,positions[i]);
        rotate( rotations[i]);
        if(true){
            if (shapes[i]) {
              rect(0, 0, 5, 30);
            } else {
              circle(0, 0, 10);
            }
        //text("🥰",width/2,height/2);
        }
        pop();
    }
    // change y positions
    for(var i=0; i<numberOfShapes; i++){
        positions[i] +=speed[i];
        if (positions[i] > height){
            positions[i]= -50;
        }
    }
}

function mousePressed(){

}








