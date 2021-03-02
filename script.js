// Assignment Code
let generateBtn = document.querySelector("#generate");

let charactersLength;
let passwordLength;
let confirmLower;
let confirmUpper;
let confirmNumber;
let confirmSpecial;
let userChoices;

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  length = prompt("How many characters would you like your password? Choose between 8 and 128");
  console.log("password length " + length);

  if (!length) {
    alert("Required value");

  } else if (length < 8 || length > 128) {
    length = prompt("You must choose between 8 and 128");
    console.log("Password length " + password);

  } else {
    characters = confirm("Will this contain lower case letters?");
    console.log("Lower case " + characters);
    characters = confirm("Will this contain upper case letters?");
    console.log("Upper case " + characters);
    characters = confirm("Will this contain numbers?");
    console.log("Number " + characters);
    characters = confirm("Will this contain special characters?");
    console.log("Special Character " + characters);

    // };

    // if (confirmCharacters && confirmCharacters && confirmCharacters && confirmCharacters) {
    //   choices = character.concat(charset);
    // }
    // else if (confirmSymbols && confirmNumber && confirmUppercase) {
    //   choices = character.concat(number, alpha2);
    // }
    // else if (confirmSymbols && confirmNumber && confirmLowercase) {
    //   choices = character.concat(number, alpha);
    // }
    // else if (confirmSymbols && confirmLowercase && confirmUppercase) {
    //   choices = character.concat(alpha, alpha2);
    // }
    // else if (confirmNumber && confirmLowercase && confirmUppercase) {
    //   choices = number.concat(alpha, alpha2);
    // }
    // else if (confirmSymbols && confirmNumber) {
    //   choices = character.concat(number);
    // }
    // else if (confirmSymbols && confirmLowercase) {
    //   choices = character.concat(alpha);
    // }
    // else if (confirmSymbols && confirmUppercase) {
    //   choices = character.concat(alpha2);
    // }
    // else if (confirmLowercase && confirmNumber) {
    //   choices = alpha.concat(number);
    // }
    // else if (confirmLowercase && confirmUppercase) {


    characters = alert("Here is your new password")
    console.log("Password")

    if (generatePassword) {
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&!?/0123456789",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    }

    var password = passwordBlank.join("");
    console.log("Your Password is: " + password);
    return password;

  }

  console.log(generatePassword());
}
