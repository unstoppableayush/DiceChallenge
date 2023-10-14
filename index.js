var randamNumber1 = Math.floor(Math.random() * 6) + 1 ;

var randomDiceImage = "dice"+ randamNumber1 + ".png";

var randomImageSource = "images/"+randomDiceImage ;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomImageSource);


var randamNumber2 = Math.floor(Math.random() * 6) + 1 ;

var randomDiceImage2 = "dice"+ randamNumber2 + ".png";

var randomImageSource2 = "images/"+randomDiceImage2 ;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , randomImageSource2);

if(randamNumber1 > randamNumber2){
    document.querySelector("h1").innerHTML="🔥 player 1 wins !";
}
else if(randamNumber1 < randamNumber2){

    document.querySelector("h1").innerHTML=" player 2 wins 🔥 !";
}
else{
    document.querySelector("h1").innerHTML=" Draw !";
}

