// Assignment Code
var generateBtn = document.querySelector("#generate");
var selections = {
numbers: '0123456789',
symbols: '!@#$%^&*=_-',
lower: 'abcdefghijklmnopqrstuvwxyz',
upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
};



// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password").value;
  var characters = document.querySelector("#characters").checked
  var lowerBox = document.querySelector("#lower").checked
  var upperBox = document.querySelector("#upper").checked
  var numberBox = document.querySelector("#numbers").checked
  var symbolBox = document.querySelector("#symbols").checked


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
    var length = +characters.value;
    var checkedLower = lower.checked;
    var checkedUpper = upper.checked;
    var checkedNumbers = numbers.checked;
    var checkedSymbols = symbols.checked;

}

function writePassword(numbers, symbols, lower, upper, length){
  var string = "";
  var password = "";

  var choices = {
    numbers: numbers,
    symbols: symbols,
    lower: lower,
    upper: upper,
  };

  for(i=0;i<Object.keys(choices).length;i++){
    string += (Object.values(choices)[i]) ? selections[Object.keys(choices)[i]] : "";
  }

  if(string != "" && length > 0){
    for(i=0;i<length;i++){
      password += string[Math.floor(Math.random() * string.length)];
    }

    document.querySelector('writePassword').value = password;

  }
  else {
    document.querySelector('writePassword').value = "Please choose criteria";

  }
}