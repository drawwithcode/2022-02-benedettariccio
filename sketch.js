let diameter = 20;
let colorPalette1 = [ 'blue','red'];
let colorPalette2 = [ 'green', 'purple'];
let colorPalette3 = [ 'blue', 'purple','green','red'];


function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(10);


}

function draw(){
 background('black');


for (let x = diameter; x < windowWidth - 25; x += 25) {
for (let y = 170; y < windowHeight - 25; y += 25) {

  {
    if (mouseIsPressed && key == 't' || key == 'T') {
              let col2 = random(colorPalette2);
              fill(color(col2));
              ellipse(x+10,y+10,diameter);
              }

      else if (mouseIsPressed && key == 'a' || key == 'A') {
              let col3 = random(colorPalette3);
              fill(color(col3));
              square(x,y,diameter,5);       
              }

      else if (mouseIsPressed) {
              let col1 = random(colorPalette1);
              fill(color(col1));
              rect(x,y, diameter);
              }

      else if (key == 't' || key == 'T') {
              let col2 = random(colorPalette2);
              fill(color(col2));
              ellipse(x+10,y+10, diameter);
              }

      else if (key == 'q' || key == 'Q') {
              let col1 = random(colorPalette1);
              fill(color(col1));
              rect(x,y, diameter);
              }

      else if (key == 'a' || key == 'A') {
              let col3 = random(colorPalette3);
              fill(color(col3));
              square(x,y,diameter,5);
              }

      else {
             let col1 = random(colorPalette1);
             fill(color(col1));
             rect(x,y, diameter);
             }
        noStroke()
  }
 }
}

fill("white");
textSize(10);
text("Press Q for", 30, 40);
text("Press T for", 30, 85);
text("Press A for", 30, 130);

textSize(16);
text("Chi nasce quadro", 30, 60);
text("Non può morire tondo", 30, 105);
text("Ma può smussare gli angoli", 30, 150);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

