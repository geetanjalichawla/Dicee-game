var player1 = Math.floor(Math.random() * 6) +1;

var player1img = "images/dice"+player1+".png";

document.querySelector(".img1").setAttribute("src", player1img);

var player2 =Math.floor(Math.random()*6)+1;
var player2img = "images/dice"+player2+".png";

document.querySelector(".img2").setAttribute("src",player2img);

if(player1==player2)
document.querySelector('h1').innerHTML = "DRAW";
else if (player1 > player2)
document.querySelector('h1').innerHTML = "⛳player 1 win";
else
document.querySelector('h1').innerHTML = "Player2 Win⛳";
