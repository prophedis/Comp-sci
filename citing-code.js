console.log("i'm also working!!!");
// I got this tutorial from https://www.youtube.com/watch?v=hsjMz7QKToc&list=PLtD-UMN3Pqi9BHigP1YO60qsFBOc-WKdV&index=26&ab_channel=LearningTogether 
// <:  D

let img;
let x,y;
let colour;
let i;
// let posX = x; 
// let posY = y;

function preload(){
  img = loadImage("image/shrek.png")
}


function setup(){
  console.log('Image size:', img.width, img.height);
  let myCanvas = createCanvas(img.width,img.height);
  myCanvas.parent("citingCode");
  myCanvas.style("margin", "2vh 2vw");
  myCanvas.style("z-index","1000");
  //background(85); 
  for(let col = 0; col < img.width; col += 10){
    for(let row = 0; row < img.height; row += 10){
        let c = img.get(col, row);
        fill(color(c));
        noStroke();
        circle(col, row, 22);
    }
}


}

function draw() {
  // text("orain is soooo stinky",100,200);
  //for(i= 0; i<10;i++){
    // for curve 
    for(let row = 0; row < img.height; row+=12){
      for(let col = 0; col< img.width; col+=12){
    let posX = col;
    let posY = row;
    let c = img.get(posX,posY);

    // //for ellipse 
    // x=random(0,width);
    // y=random(0,height);
    // colour=img.get(x,y);
    //noStroke;
    push();
    // for curves
    translate(posX,posY);
    strokeWeight(random(200));
    stroke(color(c));
    ////for ellipse
    //fill(colour);
    //ellipse(x,y,20,20);
    curve(posX, posY, sin(posX)*60, cos(posY)*sin(posX)*40,0,0,cos(posY)*sin(posX)*140,cos(posY)*sin(posX)*50);
    pop();

    
  }
}


//   for(let col = 0; col < img.width; col += 10){
//       for(let row = 0; row < img.height; row += 10){
//           let c = img.get(col, row);
//           fill(color(c));
//           noStroke();
//           circle(col, row, 22);
//       }


//  }
}
