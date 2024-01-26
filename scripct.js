'use strict'


const secreteNumber=Math.trunc(Math.random()*20)+1

console.log(secreteNumber ,typeof(secreteNumber));
document.querySelector(".main_number").textContent=secreteNumber;



// ********************************* click event
document.querySelector("#check").addEventListener("click", function(){
  let guess=Number(document.getElementById("input").value)
  console.log(guess, typeof(guess));
  if(secreteNumber===guess)
  {
    document.getElementById("message").textContent="Correct Number🥳🥳"
  }
  
})