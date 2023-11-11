/* Concatenating strings with the Plus Equals operator += */

let ourString = "This is a House with ";
let description = " blue gate, with white painting and brown roof";
let owner = " owned by Babajide";

output = "";

output += ourString;
output += description;
output += owner + ".";

console.log(output);

/* Note 
Everything in JavaScript is an object, and every object has properties and methods. Therefore to find the length of a string for example we use the 'length' property of the string*/

let lengthOfStr = output.length;
console.log(lengthOfStr); //-> 86 includes the spaces in between.

/* Find the Nth character of a string using the bracket notation */

/* Note
Generally JavaScript indexes start at 0 NOT 1. What this implies is that counting starts from zero(0). Therefore to access the first letter of a string we would use the index zero(0). 
*/

let firstCharacterOfStr = output[0];
console.log("The first character is " + firstCharacterOfStr + " at index 0");
console.log("The first character is " + "Hello World"[0] + " at index 0");

/* Exercise 
Extract the 3rd character of the string "Lorem Ipsum Envato Redismuc Satos" */

console.log(
	"The third character is " +
		"Lorem Ipsum Envato Redismuc Satos"[2] +
		" at index 2"
);

console.log(
	"The eight character is " +
		"Lorem Ipsum Envato Redismuc Satos"[7] +
		" at index 7"
);

/* Find the last character of a string using the bracket notation */
ourString = "Lorem Ipsum Envato Redismuc Satos";
console.log(ourString[ourString.length - 1]); //-> s

/* Example Usage using a 'while loop' */
ourString = "Ibe";
let endOfString = ourString.length - 1;
let i = 0;
while (i <= endOfString) {
	// Do something
	console.log(ourString[i]);
	i++;
}

/* Assignment 
	Word Blanks.

	Fill in the blanks

	It was really ____, and we ____ ourselves ____

	Build this sentence using concatenation and the plus or Plus Equals operator.
	
	Find the value of the eighth character
  
	Dynamically add a full stop to the end of the string.

*/
/* 

String Template Literals 

String Template Literal also called template literal is a special type of string that allows you to create multi-line strings and use interpolation features to create strings

Example: 
*/

// Consider this Ice cream object
const iceCream = {
	flavour: "vanilla",
	topping: "chocolate",
};

/* With template literal we could simply create a string using the iceCream Object properties without any concatenation */

const preference = `My favorite ice cream is ${iceCream.flavour} with ${iceCream.topping} topping`;

console.log(preference);

/* Note the following in the example above

1. Template Literals use backticks `` not quotes.

2. Template Literals allow multi-line strings. Notice that both the code and output are multi-line.

3. Template Literals allow for interpolation of variables into strings using the construct ${variable}. Notice how this is used in the example to interpolate the values of the properties of the ice cream object. You can also include expressions.
*/

/* Inserting a new line character in template strings 

Often when working with string you may want to output strings on new separate lines. e.g

Orange
Banana
Carrot

When building strings, you can use the special new line character \n to insert a new line between strings.

Other special characters allowed in JavaScript strings include
\t - inserts a new tab
\\ - inserts backslash
\b - inserts backspace
\"" - inserts double quotes
\' - inserts single quotes
\f - inserts form feed
\r - inserts carriage return
\n - inserts new line

They all start with with a backslash character (\) and are often called escape characters.

Example
*/

const items = ["Orange", "Banana", "Carrot"];

function displayShoppingList(arr) {
	let output = "My Shopping List\n";

	for (let i = 0; i < arr.length; i++) {
		output += `${arr[i]}\n`;
	}

	console.log(output);
}

displayShoppingList(items);
