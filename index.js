let card = document.getElementById("card");
let imgUp = document.getElementById("imgUp");
let imgDown = document.getElementById("imgDown");
let numberCard = document.getElementById("numberCard");

window.onload = function() {
    let img = ["♦", "♥" ,"♠" ,'♣']; // between 1 to 4
    let imgCard = img[(Math.floor(Math.random() * img.length))];
    imgUp.innerHTML = imgCard;
    imgDown.innerHTML = imgCard;

    let nmb = ["A", "2" ,"3" ,"4" ,"5" ,"6" ,"7" ,"8", "9", "J", "Q", "K"]; // between 1 to 12
    let nmbCard = nmb[(Math.floor(Math.random() * nmb.length))];
    numberCard.innerHTML = nmbCard;

    if(imgCard === "♦" || imgCard === "♥"){
        imgUp.style.color = "red"
        imgDown.style.color = "red"
        numberCard.style.color = "red"
    }
}

// newcard

function NewCard() {
    document.location.reload();
}


// countdown

// setTimeout(() => {
//     document.location.reload();
//   }, 10000);


  // input height & width

  let inputSubmit = document.getElementById("submit");
  let inputWidth = document.getElementById("width");
  let inputHeight = document.getElementById("height");

function GuardarValue() {
    let widthValue = document.getElementById(`width`).value;
    let heightValue = document.getElementById(`height`).value;
    let heightCard = document.querySelector(".container").style.height = heightValue + "px";
    let widthCard = document.querySelector(".container").style.width = widthValue + "px";
    console.log(heightValue, widthValue)
}
  
