// Assignment code here
// Create function generatePassword
function finalPassword(length, lowerCaseType, upperCaseType, numericType, specialCharsType) {
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericCharacters = '0123456789';
  const specialCharacters = '!().?[{]}_~@#$^&*+=%|:;"<,>';
  var randomPassword = '';
   
   
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

    console.log(randomPassword);

    var password = "";
    for (let index = 0; index < length; index++) {
      const passwordIndex = Math.floor(Math.random() * randomPassword.length);
      password += randomPassword[passwordIndex];
    };
   return password;
  }

 // Ask user for length
// choose length to be at least 8 and less than 128 characters
// prompt user for length
    function generatePassword() {
    var choosePasswordLength = prompt("Choose your the length of your desired password(between 8-128 characters)");
    choosePasswordLength = parseInt(choosePasswordLength);
     if (isNaN(choosePasswordLength) || choosePasswordLength < 8 || choosePasswordLength > 128) {
      alert("not a valid password length, The password length should be between 8-128")
    } else {
      // choose if lowercase
      const lowerCaseType = confirm("Do you want lowercase letters in your password?");
      // choose if uppercase
      const upperCaseType = confirm("Do you want uppercase letters in your password?");
      // choose if numeric
      const numericType = confirm("Do you want Numbers in your password?");
      // choose if special character
      const specialCharsType = confirm("Do you want special Characters in your password?");
    
      
// make sure to at least have one of those options
    if (!lowerCaseType && !upperCaseType && !numericType && !specialCharsType) {
      window.alert("Not valid, choose at least one of the options available")
    } else {
      // Password should match all of the given criteria
// password should be displayed in an alert or writtnen to that page
      const password = finalPassword(choosePasswordLength, lowerCaseType, upperCaseType,numericType ,specialCharsType)
     return password
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
