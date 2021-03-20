var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1, car2, car3, car4;
var cars;

function setup(){
  canvas = createCanvas(displayWidth -10, displayHeight -10);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1)
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}


/*
 <script src="https://www.gstatic.com/firebasejs/8.2.10/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.10/firebase-database.js"></script>
    

    <script>
      //Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyBYV9kWljd-8zlRsYSLGIv2zBX4MhkNAo8",
        authDomain: "multiplayer-car-racing-game.firebaseapp.com",
        databaseURL: "https://multiplayer-car-racing-game.firebaseio.com",
        projectId: "multiplayer-car-racing-game",
        storageBucket: "",
        messagingSenderId: "936147099930",
        appId: "1:936147099930:web:dba47c5bb648f4ef"
      };
      
    firebase.initializeApp(firebaseConfig);
    </script>
    */