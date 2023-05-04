// Assignment code here
// Create function generatePassword
function generatePassword() {
// Ask user for length
// validate length to be at least 8 and less than 128 characters


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
