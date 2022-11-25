
var upperCaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@#$%^&*()_+-=";



function generatePassword() {
  var superArray = ""
  console.log("generatePassword")
 var passwordLength = prompt("How long do you want your Password to be?")
 console.log(passwordLength)
 var upperCaseOption = confirm("Do you want uppercase characters in your password?")
console.log(upperCaseOption)
var lowercase = confirm("Do you want lowercase characters in your password?")
console.log(lowercase)
var numbersOption = confirm("Would like numbers in your password?")
console.log(numbersOption)
var specialOption = confirm("Would you like special characters in your password?")

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
