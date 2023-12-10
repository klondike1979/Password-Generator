// Array of special characters to be included in password
var specialCharacters = [
	"@",
	"%",
	"+",
	"\\",
	"/",
	"'",
	"!",
	"#",
	"$",
	"^",
	"?",
	":",
	",",
	")",
	"(",
	"}",
	"{",
	"]",
	"[",
	"~",
	"-",
	"_",
	".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];

// specialCharactersCopy = specialCharacters;
// numericCharactersCopy = numericCharacters;
// lowerCasedCharactersCopy = lowerCasedCharacters;
// upperCasedCharactersCopy = upperCasedCharacters;

// Function to prompt user for password options
function getPasswordOptions() {
	alert("Password must contain at least 8 characters, but no more than 128.");
	alert("You may use Lowercase, Uppercase, Numeric and Special characters.");
	alert("Type 'yes' or 'no' to the following options");
}

// calling function:
getPasswordOptions();

// Declaring password variable:

var letterPool = [];

// // User Preferences
// Length of password:
var passwordLength = prompt("Length of password (8-128)", "8");
if (passwordLength > 7 && passwordLength < 129) {
	passwordLength = Math.floor(passwordLength);
	console.log("Password Length =", passwordLength);
}

// Lowercase:
var lowercasePrompt = prompt("Include Lowercase characters", "yes");
if (lowercasePrompt === "yes") {
	letterPool.push(lowerCasedCharacters);
	console.log("Lower Case = Yes");
}

// Uppercase:
var uppercasePrompt = prompt("Include Uppercase characters", "yes");
if (uppercasePrompt === "yes") {
	letterPool.push(upperCasedCharacters);
	console.log("Upper Case = Yes");
}

// Numeric:
var numericPrompt = prompt("Include Numeric characters", "yes");
if (numericPrompt === "yes") {
	letterPool.push(numericCharacters);
	console.log("Numeric Chars = Yes");
}

// Special characters ($@%&*, etc):
var specialPrompt = prompt("Include Special characters ($@%&*, etc)", "yes");
if (specialPrompt === "yes") {
	letterPool.push(specialCharacters);
	console.log("Special Chars = Yes");
}

// Function for getting a random element from an array:
function getRandom(arr) {
	var randomSelect = Math.floor(Math.random() * arr.length);
	return arr[randomSelect];
}

// Function to generate password with user input:
function generatePassword() {
	var password = [];
	for (var i = 0; i < passwordLength; i++) {
		var letterPoolFlat = letterPool.flat();
		var randomChar = getRandom(letterPoolFlat);
		password.push(randomChar);
	}
	return password.join("");
}

// Get references to the #generate element:
var generateBtn = document.querySelector("#generate");

// Write password to the #password input:
function writePassword() {
	var password2 = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password2;
}

// Add event listener to generate button:
generateBtn.addEventListener("click", writePassword);

// Generate a password when the button is clicked:
writePassword();
generatePassword();
