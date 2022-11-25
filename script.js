var upperCaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@#$%^&*()_+-=";

function generatePassword() {
  var superArray = "";
  console.log("generatePassword");
  var passwordLength = prompt("How long do you want your Password to be?");
  console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters");
  } else {
    var upperCaseOption = confirm(
      "Do you want uppercase characters in your password?"
    );
    console.log(upperCaseOption);
    var lowerCaseOption = confirm(
      "Do you want lowercase characters in your password?"
    );
    console.log(lowerCaseOption);
    var numbersOption = confirm("Would like numbers in your password?");
    console.log(numbersOption);
    var specialOption = confirm(
      "Would you like special characters in your password?"
    );

    if (upperCaseOption) {
      console.log(superArray, "before");
      superArray = superArray + upperCaseArray;
      console.log(superArray, "after");
    }
    if (lowerCaseOption) {
      console.log(superArray, "before");
      superArray = superArray + lowerCase;
      console.log(superArray, "after");
    }
    if (numbersOption) {
      console.log(superArray, "before");
      superArray = superArray + numbers;
      console.log(superArray, "after");
    }
    if (specialOption) {
      console.log(superArray, "before");
      superArray = superArray + special;
      console.log(superArray, "after");
    }
    var password = "";
    for (let i = 0; i < passwordLength - 1; i++) {
      //Generate random numbers in the range of superarrays length
      var randomnumber = Math.floor(Math.random() * superArray.length - 1);

      password = password + superArray[randomnumber];
    }
    console.log(password);
  }
  return password;
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
