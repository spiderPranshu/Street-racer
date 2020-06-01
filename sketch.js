var canvas, BackgroundImage;

var gameState = 0;
var playerCount;
var allplayer;
var database;

var form, player ,game;

function setup(){
  canvas = createCanvas(400,400);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
}