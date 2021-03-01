// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword("random");
  var passwordText = document.querySelector("#password");
  console.log("random");
  
function generatePassword(length) {
  var length = 15
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%&!?^0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

console.log(generatePassword(5));

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);