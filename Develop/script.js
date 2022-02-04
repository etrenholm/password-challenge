// Assignment code here

// create a new, secure password
// when button is clicked, present a series of prompts for password criteria
function generatePassword() {

  function getLength() {

    // prompt for the length of the password, from 8 to 128 characters
    var passwordLength = window.prompt("Choose a length of at least 8 characters and no more than 128 characters.");
    
    // validate that a number from 8 to 128 was selected, if not ask again
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please choose a valid number!");
      getLength();
    } 
    else {
      window.alert("You have chosen a length of " + passwordLength);
      console.log(passwordLength)
    }
  }

  getLength();

  // confirm whether or not to use uppercase, lowercase, numeric, and/or special characters

  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*()'+;:.,-=/~{|}<>[-]"

  function getCharacterTypes() {

    var isLowerCase = window.confirm("Should this password include lowercase letters?");
      if (isLowerCase) {
      window.alert("This password will include lowercase letters.");
      }
      else (
        window.alert("This password will NOT include lowercase letters.")
      )
      console.log("Lower Case: " + isLowerCase);

    var isUpperCase = window.confirm("Should this password include uppercase letters?");
      if (isUpperCase) {
      window.alert("This password will include uppercase letters.")
      }
      else (
        window.alert("This password will NOT include uppercase letters.")
      )
      console.log("Upper Case: " + isUpperCase);

    var containsNumbers = window.confirm("Should this password include numbers?")
      if (containsNumbers) {
      window.alert("This password will include numbers.")
      }
      else (
        window.alert("This password will NOT include numbers.")
      )
      console.log("Numbers: " + containsNumbers);

    var containsSymbols = window.confirm("Should this password include special characters?")
      if (containsSymbols) {
      window.alert("This password will include special characters.")
      }
      else (
        window.alert("This password will NOT include special characters.")
      )
      console.log("Special Characters: " + containsSymbols);

}

getCharacterTypes();

// validate that at least one character type was selected, if not ask again


// generate a password that matches the selected criteria


// display the password in alert or on the page
return "password";

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
