var shapecolor=0;

var sliders={
  Dimension:null,
  PositionX:null,
  PositionY:null,
  Background:null
}

var buttons= {
  Reset:null,
  RandomColor:null
  
}

function setup() {
  createCanvas(400, 400);
  //button
  buttons.Reset=createButton('reset');
  buttons.Reset.mousePressed(reset);
  buttons.RandomColor=createButton('Random color');
  buttons.RandomColor.mousePressed(randomColor);

  //sliders
  sliders.Dimension=createSlider(width/15,width,width/4).position(20,height+40);
  createP('Dimensione:').position(20,height+5);
  sliders.PositionX=createSlider(0,width,width/2).position(20,height+80);
  createP('Posizione X').position(20,height+45);
  sliders.PositionY=createSlider(0,height,height/2).position(20,height+120);
  createP('Posizione Y').position(20,height+85);
  sliders.Background=createSlider(0,255,120).position(20,height+160);
  createP('Colore background').position(20,height+125);
  
}
function reset(){
  sliders.Dimension.value(width/4);
  sliders.PositionX.value(width/2);
  sliders.PositionY.value(height/2);
  sliders.Background.value(120);
  shapecolor=0;
}

function randomColor(){
shapecolor=color(random(255),random(255),random(255));
}

function draw() {

  background(sliders.Background.value());
  text('Dimensione'+sliders.Dimension)
  //strokeWeight(sliders.Dimension.value()-100)
  
  fill(shapecolor);
  ellipse(sliders.PositionX.value(),sliders.PositionY.value(),sliders.Dimension.value());
}
