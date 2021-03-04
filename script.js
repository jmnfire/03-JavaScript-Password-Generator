// Assignment Code
var generateBtn = document.querySelector("#generate");

// function generatePassword() {

var specialChar = '!@#$%&(*)';
var numberChar = '1234567890';
var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerChar = 'abcdefghijklmnopqrstuvwxyz';

var upper, lower, number, special = false;

function generatePassword() {
  var confirmLength = '';
  var password = "";
  //library for all the characters selected
  var userChoices = "";
  //Primitive types: strings, numbers, booleans (0 false, 1 true)
  while (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {
    confirmLength = prompt("How many characters would you like your password? Choose between 8 and 128"); //always give back a string
    confirmLength = parseInt(confirmLength); //converts a string to an integer
    if (confirmLength === true) {
      break;
    }
  }

  if (confirmLength) {
    if (confirm("Would you like to use lowercase characters?") == true) {
      lower = true
      userChoices = lowerChar + userChoices; //userChoices.concat(lowerChar)
      console.log(true)
    }

    if (confirm("Would you like to use uppercase characters?") == true) {
      upper = true
      userChoices = userChoices + upperChar;
      console.log(true)
    }

    if (confirm("Would you like to use special characters?") == true) {
      special = true
      userChoices = userChoices + specialChar;
      console.log(true)
    }

    if (confirm("Would you like to use numerical characters?") == true) {
      number = true
      userChoices = userChoices + numberChar;
      console.log(true)
    }
    //if none of the character types are selected, alerts the user to choose at least one
    if (!lower && !upper && !special && !number) {
      alert("At least one character type must be selected")

    } else {
      for (var i = 0; i < confirmLength; i++) {
        var singleRandomChar = userChoices[Math.floor(Math.random() * userChoices.length)];
        password += singleRandomChar; //+= means add the variable and a new variable together
        console.log(singleRandomChar);
      }
    }

    return password;
  }

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (!password) {
    passwordText.value = "You must regenerate a password ";
  } else {
    passwordText.value = password; //textareas and forms have a special attribute called value which allows text modification
  }

}


//console.log(generatePassword());