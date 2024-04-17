
console.log("i'm also working!!!");
let img;
let cnv;

let rotations= [];// doesn't change 
var party = false;


function preload() {
  img = loadImage('image/me.png');
}

function setup(){
  console.log('Image size:', img.width, img.height);
  let myCanvas = createCanvas(img.width,img.height);
  myCanvas.parent("final-project");
  myCanvas.style("margin", "2vh 2vw");
  myCanvas.style("z-index","1000");

    btn = createButton("CRAZYYY");
    btn.position(10, 10);
    btn.mousePressed(toggleParty);

    // btn = createButton("CRAZYYY");
    // // btn.position(10,10);
    // btn.mousePressed(function(){
    //     party = !party;
    //     if(party){
    //         btn.html("Okay Relax");
    //     }else{
    //         btn.html("CRAZYYY");
    //     }
    //   });
    
    
    let index = 0
    for(let col = 0; col< img.width; col+=6){
        for(let row = 0; row < img.height; row+=6){
          let c = img.get(col,row);
          rotations[index]= random(0.1,0.3);
          index++;
       
        }
        }
        console.log('Rotations array length:', rotations.length);
}

function draw() {
  //background(255);
  for(let col = 0; col < img.width; col += 10){
      for(let row = 0; row < img.height; row += 10){
          let c = img.get(col, row);
          fill(color(c));
          noStroke();
          circle(col, row, 22);
      }
  }
  if (party) {
      crazy();
  }
}
// function draw() {
//   background(255);
//   for(let col = 0; col< img.width; col+=10){
//     for(let row = 0; row < img.height; row+=10){
//       let c = img.get(col,row);
//       fill (color(c));
//       noStroke();
//       circle(col,row,22);
//   if (party === true){
  

//   crazy();}

  
    
//       }
//     }
//   }


function crazy(){
    

  let index = 0
    for(let col = 0; col< img.width; col+=10){
        for(let row = 0; row < img.height; row+=10){
          let c = img.get(col,row);
          let angle = frameCount*100*rotations[index];
          fill (color(c));
           noStroke();
           
           push();

        // start doing things 
           translate(col,row);
           rotate(angle);

        //shapes

         //rect(col, row,44,55);
         circle(10,10,22);


         //pop the function
         pop();
         index++;
        }
    }

 }

 function toggleParty() {
    party = !party;
    btn.html(party ? "Okay Relax" : "CRAZYYY");
}
