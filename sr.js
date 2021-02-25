var mcImage, mc, cx, cy,transcript, transcript1, dots, nameRef,  dot, logoimg, index=1, database, allUsers, users, faq, faqImg, count = 0;
function preload(){
  mcImage = loadImage("mc.gif");
  dot = loadImage("dot7.png");
  faqImg = loadImage("faqImg.png")
  logoimg = loadImage("logo.png");
  dots = loadAnimation("dot1.png", "dot2.png", "dot3.png", "dot4.png", "dot5.png", "dot6.png", "dot7.png", "dot8.png", "dot9.png", "dot10.png");
};

function setup(){
  canvas = createCanvas(windowWidth-20,windowHeight-20);
  database = firebase.database();
  background("yellow")
  mc = createSprite(width/2 - 45,height/2 + 30);
  mc.addImage(mcImage);
  textSize(40);
  fill("black");
  textStyle(BOLD)
  image(logoimg, width/2 - 190, 0, 350, 250);
  faq = createSprite(width/2 + 667, height/2 - 300);
  faq.addImage(faqImg);
  faq.scale = 0.6;

  // nameRef = database.ref('Names');

};

function addName(name){
  var nameIndex = "names/name" + index;
  database.ref(nameIndex).set({
    userName: name
  })

  index ++
}

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
      
      if(/*"hi" === transcript || "hello" === transcript || "hey there" === transcript*/transcript.includes("hello") === true || transcript.includes("hi") === true || transcript.includes("hey") === true){
        response.rate = 1;
        response.text = "Hey there!";
        response.lang = 'en';
        window.speechSynthesis.speak(response);
        text("Me: " + response.text, width/2, height/2 + 300);
        count = 1;
      };

      if(/*"what can you do" === transcript*/transcript.includes("what can you do") === true){
        response.rate = 1;
        response.text = "I can open browsers, search, and help you comfortably control your computer.";
        response.lang = 'en';
        window.speechSynthesis.speak(response);
        text("Me: " + response.text, width/2, height/2 + 300);
        count = 1;

      };

      if(/*what is your name" === transcript*/transcript.includes("what is your name") === true){
        response.rate = 1;
        response.text = "Vision is my name, helping you is my game!";
        response.lang = 'en';
        window.speechSynthesis.speak(response);
        text("Me: " + response.text, width/2, height/2 + 300);
        count = 1;

      };

      if(/*"open Google" === transcript*/transcript.includes("open Google") === true){
        response.rate = 1;
        response.text = "Sure thing, opening Google";
        response.lang = 'en';
        window.speechSynthesis.speak(response);
        text("Me: " + response.text, width/2, height/2 + 300);
        window.open("https://www.google.com", "_blank");
        count = 1;

      };

      if(/*"open YouTube" === transcript*/transcript.includes("open YouTube") === true){
        response.rate = 1;
        response.text = "Sure thing, opening YouTube";
        response.lang = 'en';
        window.speechSynthesis.speak(response);
        text("Me: " + response.text, width/2, height/2 + 300);
        window.open("https://www.youtube.com", "_blank");
        count = 1;

      };

      if(/*"date" === transcript || "what is the date" === transcript || "what is today's date" === transcript*/transcript.includes("date") === true || transcript.includes("what is the date") === true){
        var today = new Date();
        var date = (today.getDate())+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
        response.rate = 1;
        response.text = "Today's date is " + date;
        response.lang = 'en';
        window.speechSynthesis.speak(response);
        text("Me: " + response.text, width/2, height/2 + 300);
        count = 1;

      };

      if(/*"time" === transcript || "what is the time" === transcript*/transcript.includes("time") === true || transcript.includes("what is the time") === true){
        var today = new Date();
        var timeText = today.getHours() + ":" + today.getMinutes();
        var time = today.getHours() + ":" + today.getMinutes();
        response.rate = 1;
        response.text = "The time is " + time;
        response.lang = 'en';
        window.speechSynthesis.speak(response);
        text("Me: " + timeText, width/2, height/2 + 300);
        count = 1;

      }

      if(/*"great" === transcript || "thank you" === transcript*/transcript.includes("great") === true || transcript.includes("thank you") === true){
        response.rate = 1;
        response.text = "Glad to see you are happy and got help!";
        response.lang = 'en';
        window.speechSynthesis.speak(response);
        text("Me: " + response.text, width/2, height/2 + 300);
        count = 1;

      }

      if(/*"how are you" === transcript || "how are you feeling" === transcript*/transcript.includes("how are you") === true){
        response.rate = 1;
        response.text = "I am great, thank you. What about you?";
        response.lang = 'en';
        window.speechSynthesis.speak(response);
        text("Me: " + response.text, width/2, height/2 + 300);
        count = 1;

      }

      if(/*"i am good too" === transcript || "i am great too" === transcript || "i am feeling good too" === transcript*/transcript.includes("i am good") === true || transcript.includes("i am great") === true){
        response.rate = 1;
        response.text = "Great. What can I do for you?";
        response.lang = 'en';
        window.speechSynthesis.speak(response);
        text("Me: " + response.text, width/2, height/2 + 300);
        count = 1;

      };

      if(transcript.includes("where do you live") === true){
        response.rate = 1;
        response.text = "I live here, in your computer. The sofa here is real comfortable, I must say!";
        response.lang = 'en';
        window.speechSynthesis.speak(response);
        text("Me: " + response.text, width/2, height/2 + 300);
        count = 1;
      }

      if(transcript.includes("search for ") === true){
        transcript = transcript.split("search for");

        url = 'https://www.google.com/search?q=' + transcript;

        response.rate = 1;
        response.text = "Sure thing, searching for " + transcript;
        response.lang = 'en';
        window.speechSynthesis.speak(response);
        text("Me: " + response.text, width/2, height/2 + 300);

        window.open(url, "_blank");
        count = 1;

      }

      if(transcript.includes("my name is ") === true){
        transcript = transcript.split("my name is ");

        addName(transcript);

        count = 1;
      }

      if(transcript.includes("change my name to ") === true){

      }

      if(count === 0){
        response.rate = 1;
        response.text = "Sorry, I cannot process that command. Searching for " + transcript;
        response.lang = 'en';
        window.speechSynthesis.speak(response);
        text("Me: " + response.text, width/2, height/2 + 300);

        url1 = 'https://www.google.com/search?q=' + transcript;
        window.open(url1, "_blank");

      }

      mc.addImage(mcImage);
      mc.x = width/2 - 45
    };

    // start recognition
    recognition.start();
    
    clear();

    background("yellow");

    image(logoimg, width/2 - 250, 0);
  };
};

function draw(){
  // for(var i = 0; i < touches.length; i ++){
  //   cx = touches[i].x;
  //   cy = touches[i].y;
  // }

  if(mousePressedOver(faq)){
    location.reload()
    window.open("faq.html", "")
  }

  if(mousePressedOver(mc)){
    background("yellow")
    listen();
  };

 drawSprites();
};