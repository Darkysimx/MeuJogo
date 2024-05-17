var canvas, bg, bgImg;
var principal, principalImg,principalImgCopia;
function preload() {
  bgImg = loadImage("bg.png");
  principalImg = loadAnimation("principal.png");
  principalImgCopia = loadAnimation("principalCopia.png");
 obstaculoImg= loadImage("obstaculo.png");
}

function setup() {
  canvas = createCanvas(1500, 500);
  bg = createSprite(750, 250);
  bg.addImage(bgImg);
  principal = createSprite(70, 390);
 // principal.addAnimation("principal1",principalImg);
 // principal.addAnimation("principal2",principalImgCopia);
  principal.scale = 0.25;
  solo = createSprite(750, 450, 3000, 2)
  solo.shapeColor = 'yellow';
  solo.visible=false;
 // principal.debug = true;
  principal.setCollider("rectangle",0,0,200,270)
obstaculo = createSprite(200,420,50,50);
obstaculo.shapeColor = 'white';
obstaculo.addImage(obstaculoImg);
  obstaculo.scale = 0.080;
  obstaculo2 = createSprite(500,425,50,50);
obstaculo2.shapeColor = 'white';
obstaculo2.addImage(obstaculoImg);
  obstaculo2.scale = 0.080;
}
function draw() {
  background(0);
  principal.velocityY = 9;
  principal.collide(solo);
  principal.collide(obstaculo);
  principal.collide(obstaculo2);
  if (keyDown("w")) {
    principal.y = principal.y - 5;
  }
  if (keyDown("a")) {
    principal.x = principal.x - 5;
   //  principal.changeAnimation("principal2",principalImgCopia);
  }
  if (keyDown("s")) {
    principal.y = principal.y + 5;
  }
  if (keyDown("d")) {
    principal.x = principal.x + 5;
   // principal.changeAnimation("principal1",principalImg);
  }
  if (keyDown("space") && principal.y < principal.y + 270 ) {
    principal.y -=50;
  }
  drawSprites();


}

