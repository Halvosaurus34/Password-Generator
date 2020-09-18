// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
var passwordText = document.querySelector("#password");

function writePassword() {

var passLength = parseInt(prompt("How long do you want the password? (8-128)"));

var hasUpper = confirm("Do you want Capital Letters?");
var hasLower = confirm("Do you want Lowercase Letters?");
var hasNumber = confirm("Do you want Numbers?");
var hasSpecial = confirm("Do you want Special Characters?");

var finalCharSet = '';
if (hasUpper) finalCharSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
if (hasLower) finalCharSet += 'abcdefghijklmnopqrstuvwxyz'
if (hasNumber) finalCharSet += '1234567890'
if (hasSpecial) finalCharSet += '!@#$%^&*+='
password = ''

// Write password to the #password input
    if ( passLength > 7 && passLength < 129){
      for (var i=0;i<passLength; i++){
        var pass = Math.floor(Math.random() * finalCharSet.length)
        password += finalCharSet[pass]
      }
    } else {
      alert("Password needs to be between 8 - 128")
      writePassword()
    }

passwordText.value = password;

}

// Add event listener to generate button
