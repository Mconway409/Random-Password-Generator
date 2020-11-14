// Assignment Code
var generateBtn = document.querySelector("#generate");
var number = '0123456789';
var symbol = '!@#$%^&*=_-';
var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password").value;
  var characters = document.querySelector("#characters").checked
  var lowerBox = document.querySelector("#lower").checked
  var upperBox = document.querySelector("#upper").checked
  var numberBox = document.querySelector("#number").checked
  var symbolBox = document.querySelector("#symbol").checked
   
    }
  
    passwordText.value = password; 
for (var i=0; 1 > 8, i <= 128; i++) {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
    (numberBox.checked) ? number : ' ';
    (symbolBox.checked) ? symbol : ' ';
    (lowerBox.checked) ? lower : ' ';
    (upperBox.checked) ? upper : ' ';
    (lowerBox.checked) && (upperBox.checked) ? lower += upper : ' ';
    (lowerBox.checked) && (numberBox.checked) ? lower += number : ' ';
    (lowerBox.checked) && (symbolBox.checked) ? lower += symbol : ' ';
    (upperBox.checked) && (numberBox.checked) ? upper += number : ' ';
    (upperBox.checked) && (symbolBox.checked) ? upper += symbol : ' ';
    (numberBox.checked) && (symbolBox.checked) ? numberr += symbol : ' ';
    (lowerBox.checked) && (upperBox.checked) && (numberBox.checked) ? lower += upper += number : ' ';
    (lowerBox.checked) && (upperBox.checked) && (symbolBox.checked) ? lower += upper += symbol : ' ';
    (lowerBox.checked) && (upperBox.checked) && (numberBox.checked) && (symbolBox.checked) ? lower += upper += number += symbol : ' ';
}

for (var i =0; i <10; i++) {
  var pswrd = Math.floor(Math.random()) * lower.length)
}

function password {
  
}  
