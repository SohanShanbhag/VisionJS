var mcImage, mc
function preload(){
  mcImage = loadImage("mc.gif")
}

function setup(){
  
  canvas = createCanvas(windowWidth-20,windowHeight+100);
  background("yellow")
  mc = createSprite(width/2,height/2 - 200);
  mc.addImage(mcImage)
  textSize(40);
  fill("black");
  textStyle(BOLD)
  text("VISION", width/2 - 75, height/2-320);
  
}

function listen(){
if ("speechSynthesis" in window) {
    // new speech recognition object
    var recognition = new window.webkitSpeechRecognition();
  
    // This will run when the speech recognition service returns a result
    recognition.onstart = function() {
      console.log("Voice recognition started. Try speaking into the microphone.");
    };

    recognition.onresult = function(event) {
      var transcript = event.results[0][0].transcript;
      console.log(transcript);

      textSize(25);
      textStyle(BOLD);
      fill("black");
      textFont("Sans-serif")
      text("You said : " + transcript, width/2 - 100, 500);
    };
    
    // start recognition
    recognition.start();
    //   .....
  } else {
    console.log("Speech recognition not supported 😢");
    // code to handle error
  }
}

function draw(){

  if(mousePressedOver(mc) || touches.x === mc.x && touches.y === mc.y){
    listen();
  }

 drawSprites();
}