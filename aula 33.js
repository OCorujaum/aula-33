const Engine = Matter.Engine; 
const Render = Matter.Render; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint; 
const Body = Matter.Body; 
const Composites = Matter.Composites; 
const Composite = Matter.Composite;
//usamos as variaveis para guardas os metodos do matter
var rabbit,background,mute,Ground,Rope;
var rabbitImg,backgroundImg,muteImg;
//usa uma var para carregar dois tipos de variaveis diferentes(sprite,imagens);
let altura,largura;
let engine,world;

function preload(){
rabbitImg=loadImage("imagens/Rabbit-01.png");
backgroundImg=loadImage("imagens/background.png");
muteImg=loadImage("imagens/mute.png");
//carregando as imagens com suas vars de imagem
 
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
  altura=windowHeight;
  largura=windowWidth;


  engine=Engine.create();//atribui a var engine a criação da mecanica de fisica;
  world=engine.world;   //atribui a engine ao world;

  Ground = new ground(width/2,height-25,largura,100);

  Rope= new rope({x:300,y:200},20);









}

function draw() {
  background("white");
  Ground.displayGround();//metodo displayGround criado na classe Ground
  Rope.Show();

  
 
 
}
