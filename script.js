
// generate the first random player and the random image dice
const randomNumber1 = Math.floor(Math.random() * 6) + 1;

const randomImage1 = "dice" + randomNumber1 + ".png";

const randomImageSource1 = "images/" + randomImage1;

const img1 = document.querySelectorAll('img')[0];

img1.setAttribute("src", randomImageSource1);

// generate the secdond random player and the random image dice

const randomNumber2 = Math.floor(Math.random() * 6) + 1;

const randomImage2 = "dice" + randomNumber2 + ".png";

const randomImageSource2 = "images/" + randomImage2;

const img2 = document.querySelectorAll('img')[1];

img2.setAttribute("src", randomImageSource2);


// flag the winner or draw

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "PLayer 1 Wins! 🏆"
} else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆"
} else {
    document.querySelector("h1").innerHTML = "draw"
}