document.querySelector("#generate").addEventListener("click", writePassword);


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generateBtn = document.querySelector("#generate");
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbols = ["!", "@", "#", "$", "$", "%", "%", "%", "%", "%", "%", "^","&", "*", "(", ")", "-", "_", "+", "="];

var okLower;
var okUpper;
var okNumber;
var okSymbol;
var Length = "";


function generatePassword() {
    var Length = (prompt("Please choose an amount between 8 and 128 characters"));
     if (enter < 8 || enter > 128) {
       alert("Please enter approproate value");
     }
    var okLower = confirm("Should your password include lowercase letters?");
    var okUpper = confirm("Should your password include uppercase letetrs?");
    var okNumber = confirm("Should your password include numbers?");
    var okSymbol = confirm("Should your password include symbols?");


    var randomPswrd = []

        if (okLower) {
            randomPswrd = randomPswrd.concat(lower);
        }

        if (okUpper) {
            randomPswrd = randomPswrd.concat(upper);
        }

        if (okNumber) {
            randomPswrd = randomPswrd.concat(numbers);
        }

        if (okSymbol) {
            randomPswrd = randomPswrd.concat(symbols);
        }
  

    var newPswrd = ""

    for (var i = 0; i < Length; i++) {
        newPswrd = newPswrd + randomPswrd[Math.floor(Math.random() * randomPswrd.length)];
        console.log(newPswrd) 
    }

    return newPswrd;  
}






