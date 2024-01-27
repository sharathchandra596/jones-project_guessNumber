"use strict";

let secreteNumber = Math.trunc(Math.random() * 20) + 1;

console.log(secreteNumber, typeof secreteNumber);


// score
let score = 20;
document.querySelector("#score").textContent = score;

// ********************************* click event
document.querySelector("#check").addEventListener("click", function () {
  let guess = Number(document.getElementById("input").value);
  console.log(guess, typeof guess);
  if (secreteNumber === guess) {
    document.getElementById("message").textContent = "Correct Number🥳🥳";
    document.querySelector(".main_number").textContent = secreteNumber;

  } 
  
  else if (!guess) {
    document.getElementById("message").textContent =
      "please enter the number 🙏";
  }
  
  
  else if (secreteNumber > guess) {
    if (score > 1) {
      document.getElementById("message").textContent =
        "Number is very low check another 📈";
      score = score - 1;
      document.querySelector("#score").textContent = score;
    } else {
      document.getElementById("message").textContent = "Game Over 💀☠️";
      document.querySelector("#score").textContent = 0;
    }
  }
  
  else if (secreteNumber < guess) {
    if (score > 1) {
      document.getElementById("message").textContent =
        "Number is very high check another 📈";
      score = score - 1;
      document.querySelector("#score").textContent = score;
    } else {
      document.getElementById("message").textContent = "Game Over 💀☠️";
      document.querySelector("#score").textContent = 0;
    }
  }
});


// again button
document.querySelector("#again").addEventListener("click",function(){
  document.getElementById("message").textContent = "start guessing number !!!";
  score=20
  document.querySelector("#score").textContent = 20;
   secreteNumber = Math.trunc(Math.random() * 20) + 1;
   document.querySelector(".main_number").textContent = "?";
   document.getElementById("input").value=''
});