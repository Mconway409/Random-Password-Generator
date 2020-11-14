// Assignment Code
var generateBtn = document.querySelector("#generate");
var number = '0123456789';
var symbol = '!@#$%^&*=_-';
var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var characters = document.querySelector("#characters").checked
  var lowerBox = document.querySelector("#lower").checked
  var upperBox = document.querySelector("#upper").checked
  var numberBox = document.querySelector("#number").checked
  var symbolBox = document.querySelector("#symbol").checked
   
    }
  /* Incorporating this 
    passwordText.value = password; */


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
}

/* utilizing the randomization of it all
function password {
(Math.floor(Math.random()
}
return password;
}  */
