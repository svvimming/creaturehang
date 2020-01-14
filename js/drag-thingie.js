
let rects = [];
let icons = [];
let zp33dz;
let backgrnd;

let button;
let divs = [];
let sliders = [];
var resiZer;
var drawing = false;
var erasing = false;

let paths = [
  'assets/icons/growth-swirl.png',
  'assets/icons/growthball.png',
  'assets/icons/guavas.png',
  'assets/icons/ip.png',
  'assets/icons/ip2.png',
  'assets/icons/octo.png',
  'assets/icons/orange-ip.png',
  'assets/icons/sponge-ip.png'
];

function preload(){
  for(let i=0; i<paths.length; i++) {
    icons[i] = loadImage(paths[i]);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (i = 0; i < icons.length; i++) {
    var size = random(50, 80);
    var x = random(50,windowWidth-80);
    var y = random(50,windowHeight-80);
    rects[i] = new Icon(icons[i], size, x, y, null, i);
    divs[i] = createImg(paths[i]);
    divs[i].position(x, y);
    divs[i].style('width', size+'px');
    divs[i].style('height', size+'px');

    sliders[i] = createSlider(0.1, 3, 1, 0.1);
    sliders[i].position(x + size/2, y-20);
    sliders[i].style('width', '80px');
    sliders[i].attribute('draggable', 'false');
    sliders[i].hide();
  }

  button = createButton('draw mode');
  button.position(10, 10);
  button.mousePressed(changeState);

  eraser = createButton('erase mode');
  eraser.position(10 + 80, 10);
  eraser.mousePressed(eraserState);

  eraserStroke = createSlider(1, 100, 10, 1);
  eraserStroke.position(10 + 80, 30);
  eraserStroke.style('width', '80px');
  eraserStroke.hide();
}

function mousePressed(){
  for (j=0; j<rects.length; j++){
    rects[j].intersected();
  }
}




function changeState() {
  if (drawing) {
    drawing = false;
    button.style('color', 'black');

  } else {
    drawing = true;
    button.style('color', 'red');
    erasing = false;
    eraser.style('color', 'black');
    eraserStroke.hide();
  }
}

function eraserState() {
  if (erasing) {
    erasing = false;
    eraser.style('color', 'black');
    eraserStroke.hide();
  } else {
    erasing = true;
    eraser.style('color', 'red');
    drawing = false;
    button.style('color', 'black');
    eraserStroke.show();

  }
}

function resize(index) {
  divs[index].style('width', rects[index].w*sliders[index].value()+'px');
  divs[index].style('height', rects[index].h*sliders[index].value()+'px');
  rects[index].width = rects[index].w*sliders[index].value();
  rects[index].height = rects[index].h*sliders[index].value();
}

function draw() {
  // clear();
  if (drawing) {
    for (j=0; j<rects.length; j++){
      resize(j);
      rects[j].move();
      rects[j].display();
    }
  } else if (erasing){
    if (mouseIsPressed) {
      noStroke();
      fill(255);
      circle(mouseX, mouseY, eraserStroke.value());
      erase();
      noStroke();
      ellipse(mouseX, mouseY, eraserStroke.value()+1);
      noErase();
    }
  } else {
    for (j=0; j<rects.length; j++){
      resize(j);
      rects[j].move();

    }
  }

}
