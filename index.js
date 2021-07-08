// generating numbers b/w 1 to 6

var randomNumber1=Math.random();
randomNumber1=(randomNumber1*6)+1;
randomNumber1=Math.floor(randomNumber1);


// generating numbers b/w 1 to 6 for dice 2
var randomNumber2=Math.random();
randomNumber2=(randomNumber2*6)+1;
randomNumber2=Math.floor(randomNumber2);



// changing dice images using dom
var randomDiceImage1="dice" + randomNumber1 + ".png";
var randomImageSource1="images/"+randomDiceImage1;

// var randomDiceImage2="dice" + randomNumber2 + ".png";
var randomImageSource2="images/dice"+randomNumber2+".png";


//changing dice using query selector
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1); 

//changing dice using query selector
 document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


 if(randomNumber1>randomNumber2)
 {
     document.querySelector("h1").innerHTML="🚩 Player 1 WON";
 }else{
     if(randomNumber1<randomNumber2)
     {
        document.querySelector("h1").innerHTML="⛳ Player 2 WON";
     }else{
        document.querySelector("h1").innerHTML="Draw !";
     }
 }
