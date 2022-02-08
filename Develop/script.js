// Generate a new, secure password

var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "0123456789";
var symbolChars = "!@#$%^&*()'+;:.,-=/~{|}<>[-]";

// Click the button to generate a password that matches the selected criteria
function generatePassword() {

  var passwordOptions = passwordCriteria();
  var chosenCharacters = [];
  var finalGeneratedPassword = [];

  if (passwordOptions.characterTypes.lowercase) {
    chosenCharacters = chosenCharacters.concat(lowercaseChars)
  }
  if (passwordOptions.characterTypes.uppercase) {
    chosenCharacters = chosenCharacters.concat(uppercaseChars)
  }
  if (passwordOptions.characterTypes.number) {
    chosenCharacters = chosenCharacters.concat(numberChars)
  }
  if (passwordOptions.characterTypes.symbol) {
    chosenCharacters = chosenCharacters.concat(symbolChars)
  }

  for(var i = 0; i < passwordOptions.passwordLength; i++) {
    var combinedPassword = getRandomCharacters(chosenCharacters.join("").split(""));
    finalGeneratedPassword.push(combinedPassword);
  }
  console.log(finalGeneratedPassword)
  return finalGeneratedPassword.join("")
}

function getRandomCharacters(list) {
  var randomPassword = Math.floor(Math.random() * list.length);
  console.log(randomPassword)
  var randomElement = list[randomPassword];
  return randomElement;
}

// Present a series of prompts for password criteria
function passwordCriteria() {
  var length = getLength();
  var characterTypes = getCharacterTypes();
  var criteria = {
    passwordLength: length,
    characterTypes: characterTypes
  }
  return criteria;
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
    window.alert("This password WILL include lowercase letters.");
    }
    else {
      window.alert("This password WILL NOT include lowercase letters.")
    }

  var includeUppercase = window.confirm("Should this password include uppercase letters?");
    if (includeUppercase) {
    window.alert("This password WILL include uppercase letters.")
    }
    else {
      window.alert("This password WILL NOT include uppercase letters.")
    }

  var includeNumbers = window.confirm("Should this password include numbers?")
    if (includeNumbers) {
    window.alert("This password WILL include numbers.")
    }
    else {
      window.alert("This password WILL NOT include numbers.")
    }

  var includeSymbols = window.confirm("Should this password include special characters?")
    if (includeSymbols) {
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

    var chosenCharacterTypes = {
      lowercase: includeLowercase,
      uppercase: includeUppercase,
      number: includeNumbers,
      symbol: includeSymbols,
    };

    return chosenCharacterTypes;
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
