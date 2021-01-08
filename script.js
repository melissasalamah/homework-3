// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var passwordLength = parseInt(prompt("How long do you want the password to be?"));
  if (passwordLength < 8 || passwordLength > 128)
  console.log(passwordLength)
    
  passwordLength = parseInt(prompt("Password needs to be between 8 and 128 characters"));
}
confirmLowercase = confirm("Do you want to use a lower case?");
confirmUppercase = confirm("Do you want to use a upper case?");
confirmNumber = confirm("Do you want to use a number?");
confirmCharacter = confirm("Do you want to use a special character?");

var enter;
var lowerCase = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var upperCase = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
var number = []
for (var i = 8; i <= 128; i++) {
    number.push(i)
}
var character = "!,@,#,$,%,^,&,*,?";

// Else if for 4 negative options
if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
  choices = alert("You must choose a criteria!");
  //   generatePassword() - This loops it, but makes it impossible to refresh the page
}
// First if statement that uses user input prompts to determine choices
// Else if for 4 positive options
else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
  choices = character.concat(number, upperCase, lowerCase);
}
// Else if for 3 positive option
else if (confirmCharacter && confirmNumber && confirmUppercase) {
  choices = character.concat(number, upperCase);
}
else if (confirmCharacter && confirmNumber && confirmLowercase) {
}
else if (confirmCharacter && confirmNumber && confirmLowercase) {
  choices = character.concat(number, alpha);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
  choices = character.concat(alpha, alpha2);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
  choices = number.concat(alpha, alpha2);
}
// Else if for 2 positive options 
else if (confirmCharacter && confirmNumber) {
  choices = character.concat(number);
} else if (confirmCharacter && confirmLowercase) {
  choices = character.concat(alpha);
} else if (confirmCharacter && confirmUppercase) {
  choices = character.concat(alpha2);
}
else if (confirmLowercase && confirmNumber) {
  choices = alpha.concat(number);
} else if (confirmLowercase && confirmUppercase) {
  choices = alpha.concat(alpha2);
} else if (confirmNumber && confirmUppercase) {
  choices = number.concat(alpha2);
}
// Else if for 1 positive option
else if (confirmCharacter) {
  choices = character;
}
else if (confirmNumber) {
  choices = number;
}
else if (confirmLowercase) {
  choices = alpha;
}
// Created space variable to fill upperCase conversion
else if (confirmUppercase) {
  choices = space.concat(alpha2);
};
// password variable is an array placeholder for user generated amount of length
var password = [];
// Start random selection variables:
// Random selection for all variables: 
for (var i = 0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  
  console.log(password)
}

// This joins the password array and converts it to a string

var ps = password.join("");
UserInput(ps);

// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(ps) {
  document.getElementById("password").textContent = ps;
console.log(ps)
}


var submit = document.getElementById("submit");
var yourPW = document.getElementById("yourPw");




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

ps = generatePassword();
document.getElementById("password").placeholder = ps;


// This copies the password value - works

function copyPassword() {
  document.getElementById("password").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard!");
}