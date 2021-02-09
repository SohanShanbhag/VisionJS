var mcImage, mc, cx, cy,transcript, dots, dot, logoimg, database, user, userName;
function preload(){
  mcImage = loadImage("mc.gif");
  dot = loadImage("dot7.png");
  logoimg = loadImage("logo.png");
  dots = loadAnimation("dot1.png", "dot2.png", "dot3.png", "dot4.png", "dot5.png", "dot6.png", "dot7.png", "dot8.png", "dot9.png", "dot10.png");
};

function setup(){
  canvas = createCanvas(windowWidth-20,windowHeight-20);
  database = firebase.database();
  background("yellow")
  mc = createSprite(width/2 - 45,height/2 + 50);
  mc.addImage(mcImage);
  textSize(40);
  fill("black");
  textStyle(BOLD)
  image(logoimg, width/2 - 250, 0);

  getTheName = new Name();
  getTheName.start();
};

function listen(){
  if ("speechSynthesis" in window) {
    var recognition = new window.webkitSpeechRecognition();

    recognition.onstart = function() {
      console.log("Voice recognition started. Try speaking into the microphone.");
    };

    mc.addImage(dot);
    mc.x = width/2 + 45;

    recognition.onresult = function(event) {
      var transcript = event.results[0][0].transcript;
      console.log(transcript);

      textSize(30);
      textStyle(BOLD);
      fill("black");
      textFont("Sans-serif");
      textAlign(CENTER);
      if(transcript === "hai"){
        transcript = "hi";
      };
      text("You: " + transcript, width/2, height/2 + 200);

      const response = new SpeechSynthesisUtterance();
      
      if("hi" === transcript || "hello" === transcript || "hey there" === transcript){
        response.rate = 1;
        response.text = "Hey there!";
        response.lang = 'en';
        window.speechSynthesis.speak(response);
        text("Me: " + response.text, width/2, height/2 + 300);
      };

      if("what can you do" === transcript){
        response.rate = 1;
        response.text = "I can open browsers, search, and help you comfortably control your computer.";
        response.lang = 'en';
        window.speechSynthesis.speak(response);
        text("Me: " + response.text, width/2, height/2 + 300);
      };

      if("what is your name" === transcript){
        response.rate = 1;
        response.text = "Vision is my name, helping you is my game!";
        response.lang = 'en';
        window.speechSynthesis.speak(response);
        text("Me: " + response.text, width/2, height/2 + 300);
      };

      if("open Google" === transcript){
        response.rate = 1;
        response.text = "Sure thing, opening Google";
        response.lang = 'en';
        window.speechSynthesis.speak(response);
        text("Me: " + response.text, width/2, height/2 + 300);
        window.open("https://www.google.com", "_blank");
      };

      if("open YouTube" === transcript){
        response.rate = 1;
        response.text = "Sure thing, opening Google";
        response.lang = 'en';
        window.speechSynthesis.speak(response);
        text("Me: " + response.text, width/2, height/2 + 300);
        window.open("https://www.youtube.com", "_blank");
      };

      if("open Gmail" === transcript){
        response.rate = 1;
        response.text = "Sure thing, opening Google";
        response.lang = 'en';
        window.speechSynthesis.speak(response);
        text("Me: " + response.text, width/2, height/2 + 300);
        window.open("https://www.gmail.com", "_blank");
      };

      if("date" === transcript || "what is the date" === transcript || "what is today's date" === transcript){
        var today = new Date();
        var date = (today.getDate())+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
        response.rate = 1;
        response.text = "Today's date is " + date;
        response.lang = 'en';
        window.speechSynthesis.speak(response);
        text("Me: " + response.text, width/2, height/2 + 300);
      };

      if("time" === transcript || "what is the time" === transcript){
        var today = new Date();
        var timeText = today.getHours() + ":" + today.getMinutes();
        var time = today.getHours() + ":" + today.getMinutes();
        response.rate = 1;
        response.text = "The time is " + time;
        response.lang = 'en';
        window.speechSynthesis.speak(response);
        text("Me: " + timeText, width/2, height/2 + 300);
      }

      if("great" === transcript || "thank you" === transcript){
        response.rate = 1;
        response.text = "Glad to see you are happy and got help!";
        response.lang = 'en';
        window.speechSynthesis.speak(response);
        text("Me: " + response.text, width/2, height/2 + 300);
      }

      if("how are you" === transcript || "how are you feeling" === transcript){
        response.rate = 1;
        response.text = "I am great, thank you. What about you?";
        response.lang = 'en';
        window.speechSynthesis.speak(response);
        text("Me: " + response.text, width/2, height/2 + 300);
      }

      if("i am good too" === transcript || "i am great too" === transcript || "i am feeling good too" === transcript){
        response.rate = 1;
        response.text = "Great! How can I help you?";
        response.lang = 'en';
        window.speechSynthesis.speak(response);
        text("Me: " + response.text, width/2, height/2 + 300);
      }

      if("what is my name" === transcript){
        if(userName === ""){
          response.rate = 1;
          response.text = "I don't know your name yet. Speak - 'Change name' - into the micrphone.";
          response.lang = 'en';
          window.speechSynthesis.speak(response);
          text("Me: " + response.text, width/2, height/2 + 300);
        }

        else{
          response.rate = 1;
          response.text = "Your name is " + userName;
          response.lang = 'en';
          window.speechSynthesis.speak(response);
          text("Me: " + response.text, width/2, height/2 + 300);
        }
      }

      // if("change name" === transcript){
      //   response.rate = 1;
      //   response.text = "What would you like to change your name to?";
      //   response.lang = 'en';
      //   window.speechSynthesis.speak(response);
      //   text("Me: " + response.text, width/2, height/2 + 300);

      //   // new speech recognition object
      //   recognition = new window.webkitSpeechRecognition();

      //   // This will run when the speech recognition service returns a result
      //   recognition.onstart = function() {
      //   console.log("Voice recognition started. Try speaking into the microphone.");
      //   };

      //   recognition.onresult = function(event1) {
      //     var transcript1 = event1.results[0][0].transcript1;
      //     console.log(transcript1);
      //   };

      //   // start recognition
      //   recognition.start();

      //   getTheName.changeName(transcript1);
      // }

      mc.addImage(mcImage);
      mc.x = width/2 - 45
      // mc.y = height/2 - 100
    };

    // start recognition
    recognition.start();
    
    clear();

    background("yellow");

    image(logoimg, width/2 - 250, 0);
  };
};

// function changeImg(){
//   mc.addImage(mcImage);
//   mc.x = width/2 - 45;

//   const response1 = new SpeechSynthesisUtterance();
//   response1.rate = 1;
//   response1.text = "I'm sorry, but I did not here anything. Try speaking again.";
//   response1.lang = 'en';
//   window.speechSynthesis.speak(response1);
// }

function draw(){
  if(mousePressedOver(mc)){
    background("yellow")
    listen();
  };

 drawSprites();
};