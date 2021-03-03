// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var specialChar = '!@#$%&(*)';

  var numbersChar = '1234567890';

  var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  var lowerChar = 'abcdefghijklmnopqrstuvwxyz';

  var passwordLength = 0;

  var upper, lower, numbers, special = false;

  var password = ''


  
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");
  }

  while (passwordLength < 8 || passwordLength > 128) {
    password = prompt("You must choose between 8 and 128");
    console.log("Password length " + passwordLength);
  }

  while (!upper || !lower || !numbers || !special) {
    upper = confirm("Will this contain upper case letters?");
    lower = confirm("Will this contain lower case letters?");
    numbers = confirm("Will this contain numbers?");
    special = confirm("Will this contain special characters?");
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

    // Loop for random selection
    for (var i = 0; i < password; i++) {
      var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
      passwordBlank.push(allChoices);
      console.log(allChoices);
    }
  }

    // var password = passwordBlank.join("");
    // console.log("Your Pasword is: " + password);
    // return password;


 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



  //   characters = alert("Here is your new password")
  //   console.log("Password")

  //   if (generatePassword) {
  //     charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&!?/0123456789",
  //       retVal = "";
  //     for (var i = 0, n = charset.length; i < length; ++i) {
  //       retVal += charset.charAt(Math.floor(Math.random() * n));
  //     }
  //     return retVal;
  //   }

  //   var password = passwordBlank.join("");
  //   console.log("Your Password is: " + password);
  //   return password;

  // }

  console.log(generatePassword(password));