// Assignment code here

// when button is clicked, present a series of prompts for password criteria

// prompt for the length of the password, from 8 to 128 characters

// validate that a number from 8 to 128 was selected, if not ask again

// confirm whether or not to use uppercase, lowercase, numeric, and/or special characters

// validate that at least one character type was selected, if not ask again

// generate a password that matches the selected criteria

// display the password in alert or on the page

document.getElementById("generate")

var passwordLength = window.prompt("Choose a length of at least 8 characters and no more than 128 characters.");

  if (passwordLength < 8 || passwordLength > 11) {
    window.alert("Try again! Choose a length of at least 8 characters and no more than 128 characters.")
    console.log(passwordLength)
  } 
  else {
    window.alert()
  }





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
