let card = document.getElementById("card");
let imgUp = document.getElementById("imgUp");
let imgDown = document.getElementById("imgDown");
let numberCard = document.getElementById("numberCard");

window.onload = function() {
    let img = ["♦", "♥" ,"♠" ,'♣']; // between 1 to 4
    let imgCard = img[(Math.floor(Math.random() * 4))];
    imgUp.innerHTML = imgCard;
    imgDown.innerHTML = imgCard;

    let nmb = ["A", "2" ,"3" ,"4" ,"5" ,"6" ,"7" ,"8", "9", "J", "Q", "K"]; // between 1 to 12
    let nmbCard = nmb[(Math.floor(Math.random() * 13))];
    numberCard.innerHTML = nmbCard

}

