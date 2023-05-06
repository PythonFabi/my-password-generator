// Assignment code here
// Create function generatePassword
function generatePassword() {
  var passwordGenerator = {
    alphabeticCharacters: 'abcdefghijklmnopqrstuvwxyz'.split( '' ),
    numericCharacters: '0123456789'.split( '' ),
    specialCharacters: ' !()-.?[{]}_`~@#$^&*+=%|\:;"<,>/'.split( '' ),
    lowerCase: this.alphabeticCharacters.toLowerCase(),
    upperCase: this.alphabeticCharacters.toUpperCase(),
    promptPasswordLength: function() {
    var choosePasswordLength = window.prompt("Choose your the length of your desired password(between 8-128 characters)");
    if (!choosePasswordLength) {
      return;
    } else if (choosePasswordLength !== Number) {
      window.alert("not a valid character length")
    } else if (128<choosePasswordLength<8) {
      window.alert("The password length should be between 8-128")
    } else {
      validatePasswordLength();
    };
   },
    validatePasswordLength: function() {
      var passwordArray = Array(choosePasswordLength);
    }
    
// Ask user for length
// choose length to be at least 8 and less than 128 characters
// prompt user for length
  

// choose types
// choose if lowercase
// choose if uppercase
// choose if numeric
// choose if special character
// make sure to at least have one of those options

// Password should match all of the given criteria
// password should be displayed in an alert or writtnen to that page
    
 }
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
