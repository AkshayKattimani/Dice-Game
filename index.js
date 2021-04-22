var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randImage = "dice"+randomNumber1+".png";
var randImageSource = "images/"+randImage;

document.querySelectorAll("img")[0].setAttribute("src", randImageSource);



var randomNumber2 = Math.floor(Math.random()*6 + 1);
var randImage2 = "dice"+randomNumber2+".png";
var randImageSource2 = "images/"+randImage2;

document.querySelectorAll("img")[1].setAttribute("src", randImageSource2);


if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Won";
}else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Won";
}else{
    document.querySelector("h1").innerHTML = "Tie"

}
