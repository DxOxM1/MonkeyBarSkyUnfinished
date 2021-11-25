var Life = 200

function preload() {

bg = loadImage("images/TwoCliffsBackground.jpg")
TheMonkeyBars = loadImage("images/monkeybars.png")
TheDude = loadImage("images/SurvivorSafe.png")
TheDudeFell = loadImage("images/SurvivorDead.png")






}

function setup() {
  createCanvas(windowWidth, windowHeight);
  TheBARS = createSprite(width/2, 300, 50, 50);
  TheBARS.addImage(TheMonkeyBars)
  TheBARS.scale = 2.4
  
  ThePlayer = createSprite(width/2, 270, 50, 50);
  ThePlayer.addImage(TheDude)
  ThePlayer.scale = 0.8

  Button = createButton("Click to keep the Green Bar up")
  Button.position(200,320)
}

function draw() {
  background(bg);
  Life = Life - 0.02
  fill("white")
  rect(200, 250, 200, 10)
  fill("green")
  rect(200, 250, Life, 10)
  drawSprites();
}