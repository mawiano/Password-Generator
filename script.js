
var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=']

var superArray = []

function generatePassword() {
  console.log("generatePassword")
 var passwordLength = prompt("How long do you want your Password to be?")
 console.log(passwordLength)
 var upperCaseOption = confirm("Do you want uppercase characters?")
console.log(upperCaseOption)
var lowercase = confirm("Do you want lowercase characters?")
console.log(lowercase)


if (upperCaseOption) {
  console.log(superArray, "before")
  superArray = superArray + upperCaseArray
  console.log(superArray, "after") 
}

}



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
