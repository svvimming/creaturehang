
let rects = [];
let icons;
let growth, ball, guavas, ip, ipp, octo, orange, sponge;
let zp33dz;
let backgrnd;

function preload(){
  growth = loadImage('assets/icons/growth-swirl.png');
  ball = loadImage('assets/icons/growthball.png');
  guavas = loadImage('assets/icons/guavas.png');
  ip = loadImage('assets/icons/ip.png');
  ipp = loadImage('assets/icons/ip2.png');
  octo = loadImage('assets/icons/octo.png');
  orange = loadImage('assets/icons/orange-ip.png');
  sponge = loadImage('assets/icons/sponge-ip.png');

  zp33dz = loadImage('assets/zp33dz.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  icons = [growth, ball, guavas, ip, ipp, octo, orange, sponge];

  for (i = 0; i < icons.length; i++) {
    rects[i] = new Icon(icons[i], random(50, 80), random(50,windowWidth-80), random(50,windowHeight-80), null);

  }
  let newPatch = createDiv('creaturehang');
  newPatch.position(random(200, windowWidth-200),random(200, windowHeight-200));

  // push();
  // tint(255, 200);
  // //backgrnd = image(zp33dz, 300, 300, windowWidth-580, windowHeight-300, 0, 0, 874, 681);
  // backgrnd = image(zp33dz, 0, 0, windowWidth, windowHeight, 0, 0, 874, 681);
  // pop();
}

function mousePressed(){
  for (j=0; j<rects.length; j++){
    rects[j].clicked();
    rects[j].intersected();
  }
}

function draw() {
  for (j=0; j<rects.length; j++){
    rects[j].display();
  }
}
