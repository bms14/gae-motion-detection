var video;
var scaler = 4;
var preFrame;
var c1 = '#1C4DA1';
var c2 = '#FFFFFF';
var propor = 0.75;




function setup() {

  createCanvas(windowWidth, windowHeight); // Define o canvas do tamanho da tela
  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight); // Ajusta o tamanho do vídeo
  video.hide();
  preFrame = createImage(video.width, video.height);
  background(c1);
}

function draw() {
  
  scale(-1,1);
  image(video, -width, 0, width, height);

    preFrame.copy(video, 0, 0, video.width, video.height, 0, 0, video.width, video.height);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  video.size(windowWidth, windowHeight);
}