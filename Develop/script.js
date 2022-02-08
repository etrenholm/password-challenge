// Generate a new, secure password

var chosenCharacters = [];
var finalPassword = [];

// Click the button to generate a password that matches the selected criteria
function generatePassword() {

  var passwordLength = getLength();
  getCharacterTypes();

  for(var i = 0; i <= passwordLength; i++) {
    var randomPassword = makeRandom();
    combinedPassword = chosenCharacters[randomPassword];
    finalPassword.push(combinedPassword)
  }

return finalPassword.join("");
}

function makeRandom() {
  var newPassword = Math.floor(Math.random() * chosenCharacters.length);
  return newPassword;
}

// Prompt for the length
function getLength() {
  var passwordLength = window.prompt("Choose a length of at least 8 characters and no more than 128 characters.");
  
// Validate that a number from 8 to 128 was selected, if not ask again
  if (passwordLength >= 8 && passwordLength <= 128) {
    window.alert("You have chosen a length of " + passwordLength);
  } 
  else {
    alert("Please choose a valid number!");
    getLength();
  }
  return passwordLength;
}

// Confirm which character types to include in the password
// uppercase, lowercase, numeric, or special characters
function getCharacterTypes() {

  var includeLowercase = window.confirm("Should this password include lowercase letters?");
    if (includeLowercase) {
      chosenCharacters.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k" ,"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
      window.alert("This password WILL include lowercase letters.");
    }
    else {
      window.alert("This password WILL NOT include lowercase letters.")
    }

  var includeUppercase = window.confirm("Should this password include uppercase letters?");
    if (includeUppercase) {
      chosenCharacters.push("A")
      window.alert("This password WILL include uppercase letters.")
    }
    else {
      window.alert("This password WILL NOT include uppercase letters.")
    }

  var includeNumbers = window.confirm("Should this password include numbers?")
    if (includeNumbers) {
      chosenCharacters.push("1", "2", "3")
      window.alert("This password WILL include numbers.")
    }
    else {
      window.alert("This password WILL NOT include numbers.")
    }

  var includeSymbols = window.confirm("Should this password include special characters?")
    if (includeSymbols) {
      chosenCharacters.push("!", "@", "#")
      window.alert("This password WILL include special characters.")
    }
    else {
      window.alert("This password WILL NOT include special characters.")
    }

    // Validate that at least one character type was selected, if not ask again
    if(!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
      window.alert("You must choose at least one character type.");
      getCharacterTypes();
    }
    else {
      window.alert("A password has been generated!");
    }

}


// GIVEN CODE

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
