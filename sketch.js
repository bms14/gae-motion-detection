var video;
var scaler = 4;
var preFrame;
var c1 = '#1C4DA1';
var c2 = '#FFFFFF';
var propor = 0.75;




function setup() {

  createCanvas(windowWidth, windowHeight*1.25); // Define o canvas do tamanho da tela
  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight*1.25); // Ajusta o tamanho do vídeo
  video.hide();
  background(c1);
}

function draw() {
  
  scale(-1,1);
  image(video, -width, 0, windowWidth, windowHeight*1.25);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight*1.25);
  video.size(windowWidth, windowHeight*1.25);
}