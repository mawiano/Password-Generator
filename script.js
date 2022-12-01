//! Created all the variable options for the password.
var upperCaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@#$%^&*()_+-=";

function generatePassword() {
  //! created an empty array that will hold the characters the user selects 
  var superArray = "";
  console.log("generatePassword");
  var passwordLength = prompt("How long do you want your Password to be? 8-128 characters.");
  //! Prompt for users number of characters choice 
  console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters");
    //! Added an alert to make sure they pick a number between 8-128
  } else {
    //! After character length validation, created confirms for character options.
    var upperCaseOption = confirm(
      "Do you want uppercase characters in your password?"
    );
    console.log(upperCaseOption);
    var lowerCaseOption = confirm(
      "Do you want lowercase characters in your password?"
    );
    console.log(lowerCaseOption);
    var numbersOption = confirm("Would you like numbers in your password?");
    console.log(numbersOption);
    var specialOption = confirm(
      "Would you like special characters in your password?"
    );
    //! if statments that will add chosen character options to the empty array, that will be used to generate the password.  
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
    if (!upperCaseOption && !lowerCaseOption && !numbersOption && !specialOption) {
      alert("Must pick atleast 1 character type.");
      throw new Error("Must pick atleast 1 character type.");
      //! Validating that atleast one character option is picked. If they dont I added an alert that will notify them. Then after I added an error that will restart the function and send them back to the beginning. 
    } 
    var password = "";
    for (let i = 0; i < passwordLength - 1; i++) {
      //! Generate random numbers in the range of superarrays length
      var randomnumber = Math.floor(Math.random() * superArray.length - 1);

      password = password + superArray[randomnumber];
    }
    console.log(password);
  }
  return password;
}

// ! Assignment Code
var generateBtn = document.querySelector("#generate");

// ! Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;
}

// ! Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
