// Assignment code here
// Create function finalpassword for creating the password type options, and to create an empty password string, where the for loop iterates through the following chosen options
function finalPassword(length, lowerCaseType, upperCaseType, numericType, specialCharsType) {
  // create variables for each type and an empty random password
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericCharacters = '0123456789';
  const specialCharacters = '!().?[{]}_~@#$^&*+=%|:;"<,>`/-';
  var randomPassword = '';
   
  //  use concat to add each type to the random password string, if chosen, that's why seperate if functions
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

// declare password variable for password output
    var password = "";

    // for loop to iterate through all the added options to random password and adds chosen password types and random characters to var password
    for (let index = 0; index < length; index++) {
      const passwordIndex = Math.floor(Math.random() * randomPassword.length);
      password += randomPassword[passwordIndex];
    };
    // return password with options chosen
   return password;
  }

 // Ask user for length
// choose length to be at least 8 and less than 128 characters
// prompt user for length
// generate password function
    function generatePassword() {
      // prompt user to choose a password length
    var choosePasswordLength = prompt("Choose your the length of your desired password(between 8-128 characters)");
    // converts input into Integer
    choosePasswordLength = parseInt(choosePasswordLength);
    // if input is not a number or not between 8-128 it will display an alert of the input being invalid
     if (isNaN(choosePasswordLength) || choosePasswordLength < 8 || choosePasswordLength > 128) {
      alert("not a valid password length, the password length should be between 8-128");
    } else {
      // choose if lowercase
      const lowerCaseType = confirm("Do you want Lowercase letters in your password?");
      // choose if uppercase
      const upperCaseType = confirm("Do you want Uppercase letters in your password?");
      // choose if numeric
      const numericType = confirm("Do you want Numbers in your password?");
      // choose if special character
      const specialCharsType = confirm("Do you want Special Characters in your password?");
    
      
// make sure to at least have one of those options
    if (!lowerCaseType && !upperCaseType && !numericType && !specialCharsType) {
      window.alert("Not valid, choose at least one of the options available");
    } else {
      // Password should match all of the given criteria
// password should be displayed in an alert or written to that page --> will be returned in the text entry field
      const password = finalPassword(choosePasswordLength, lowerCaseType, upperCaseType, numericType , specialCharsType);
      // return complete generated password
     return password;
    };
  };

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
