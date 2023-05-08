// Assignment code here
// Create function generatePassword
function generatePassword(length, lowerCaseType, upperCaseType, numericType, specialCharsType) {
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericCharacters = '0123456789';
  const specialCharacters = ' !()-.?[{]}_`~@#$^&*+=%|\:;"<,>/';
  var randomPassword = '';
   
    // Ask user for length
// choose length to be at least 8 and less than 128 characters
// prompt user for length

    if (lowerCaseType) {
      randomPassword = randomPassword.concat(lowerCase);
    };

    if (upperCaseType) {
      randomPassword = randomPassword.concat(upperCase);
    };

    if (numericType) {
      randomPassword = randomPassword.concat(numericCharacters);
    };

    if (specialCharsType) {
      randomPassword = randomPassword.concat(specialCharacters);
    };

    var password = "";
    for (let index = 0; index < length; index++) {
      const passwordIndex = Math.floor(Math.random() * randomPassword.length);
      password += randomPassword[passwordIndex];
    }
    return password;
  }

    function passwordLength() {
    var choosePasswordLength = window.prompt("Choose your the length of your desired password(between 8-128 characters)");
    choosePasswordLength = parseInt(choosePasswordLength);
    if (!choosePasswordLength) {
      return;
    } else if (isNaN(passwordLength) || 128<choosePasswordLength<8) {
      window.alert("not a valid password length, The password length should be between 8-128")
    } else {
      const
    };
   };


    
    

  

// choose types
// choose if lowercase
// choose if uppercase
// choose if numeric
// choose if special character
// make sure to at least have one of those options

// Password should match all of the given criteria
// password should be displayed in an alert or writtnen to that page
    
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
