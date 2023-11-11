/* 
 A farmer has a farm located at Epe in Lagos. The farm is 2000sqm in length an 3000sqm in width. He has 50 chickens, 10 goats, and 2 fish ponds.

 1. Determine the Area of the farm in square
 2. Output the address of the farm including the town.
 3. Create an Object that models the farm.

 Tips: 
 1. Use appropriate variables
 2. Model the farm using an Object and output it to console.

 let obj = {
    prop1: value1,
    prop2: value2
 }

 4. Output a story using the farm object properties
*/

let farmArea;
let farmLength = 2000;
let farmWidth = 3000;

farmArea = farmLength * farmWidth;
console.log(farmArea + "sqm");

let streetAddress = "4, farmland land";
let city = "Epe";
let state = "Lagos";

let address = streetAddress + " " + city + " " + state + ".";

console.log(address);

let farm = {
	lengthOfFarm: farmLength,
	widthOfFarm: farmWidth,
	numOfChickens: 50,
	numOfGoats: 10,
	numOfFishPonds: 2,
	addressOfFarm: address,
};

console.log(farm);

let story =
	"A farmer has a farm located at " +
	farm.addressOfFarm +
	" The farm is " +
	farm.lengthOfFarm +
	"sqm in length and " +
	farm.widthOfFarm +
	"sqm in width. He has " +
	farm.numOfChickens +
	" chickens, " +
	farm.numOfGoats +
	" goats, and " +
	farm.numOfFishPonds +
	" fish ponds.";

console.log(story);

/* 
Constructing Strings with variables

The Fortune Teller

Why pay a fortune teller when you can just program your fortune yourself?

Store the following into variables: number of children, partner's name, geographic location, job title.

Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
*/

let numOfChildren = 4;
let partnersName = "Funke";
let myLocation = "Lagos Nigeria";
let jobTitle = "Software Developer";

let output = "";

output =
	"You will be a " +
	jobTitle +
	" in " +
	myLocation +
	", and married to " +
	partnersName +
	" with " +
	numOfChildren +
	" kids.";

console.log(output);

/* 
	Arithmetic Operators 
	1. Plus Operator +
	2. Subtraction Operator -
	3. Multiplication Operator *
	4. Division Operator /
	5. Remainder Operator %
	6. Addition Compound Assignment Operator +=
	7. Subtraction Compound Assignment Operator -=
	8. Multiplication Compound Assignment Operator *=
	9. Division Compound Assignment Operator /=
*/

/* Basic mathematical operators */
console.log(45 + 2); // 47
console.log(45 - 2); // 43
console.log(45 / 5); // 9
console.log(45 * 2); // 90
console.log(45 / 0); // Infinity
console.log(5 % 2); // 1

/* Compound Assignment operators */
let a = 3;
let b = 15;
let c = 12;

// Add 10 to each of the variables
a = a + 10;
b = b + 10;
c = c + 10;
console.log(a, b, c);
a += 10;
b += 10;
c += 10;
console.log(a, b, c);
/* 
	Exercise 1 
	Use the Subtraction, Multiplication and Division 
	Compound Assignment Operators to add, subtract and divide each variable by 5
*/

a -= 5;
b -= 5;
c -= 5;

console.log(a, b, c);
a *= 5;
b *= 5;
c *= 5;

console.log(a, b, c);
a /= 5;
b /= 5;
c /= 5;

console.log(a, b, c);

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

/* Find the Nth character of a string using the bracket notation

Note
Generally JavaScript indexes start at 0 NOT 1. What this implies is that counting starts from zero(0). Therefore to access the first letter of a string we would use the index zero(0). 
*/

let firstCharacterOfStr = output[0];
console.log("The first character is " + firstCharacterOfStr + " at index 0");
console.log("The first character is " + "Hello World"[0] + " at index 0");

/* Exercise 2
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

ourString = "Ibe";
/* Example Usage using a 'while loop' */
let endOfString = ourString.length - 1;
let i = 0;
while (i <= endOfString) {
	// Do something
	console.log(ourString[i]);
	i++;
}

/* Exercise 3
	Word Blanks.

	Fill in the blanks

	It was really ____, and we ____ ourselves ____

	Build this sentence using concatenation and the plus or Plus Equals operator.
	
	Find the value of the eight character
  
	Dynamically add a full stop to the end of the string.

*/

/* Arrays */
/* 
An Array can be described as a contiguous collection of values.*/

/*Store Multiple Values - You store multiple values in one variable using an array
 */

let burger = ["beef", "butter", "cucumber", "bread"];
console.log(burger);

/* Nesting Arrays - You can store sub-arrays within an array also called Multi-dimensional array*/
const favTeamsAndPositionInLeague = [
	["ManU", 1],
	["Chelsea", 2],
	["ManCity", 3],
];

console.log(favTeamsAndPositionInLeague);

const prayingCountriesAndPercentageOfPopulation = [
	["Afghanistan", 96],
	["Nigeria", 95],
];
console.log(prayingCountriesAndPercentageOfPopulation);

/* Access & Modify Array Data - We can modify and access array data using indexes. Arrays are indexed starting at Zero. The last element of an array is indexed at the length of the array minus one.
 */

/* Access Array Data - Array data values can be accessed using their index*/
// Get the first data element of the burger
const firstValue = burger[0];
console.log(firstValue);

// Get the last data element of an Array
const lastValue = burger[burger.length - 1];
console.log(lastValue);

// Get Third value of the array
const thirdValue = burger[2];
console.log(thirdValue);

/* Modify Array data - Array data values can be modified using their index
 */
// Example - Lets say we wanted a fish burger rather than a beef burger
burger[0] = "fish";
console.log(burger);

/* Exercise 1 
	Modify the favTeamsAndPositionInLeague array such that the position of the "Chelsea Team is 4" and log the array to console.
*/

favTeamsAndPositionInLeague[1][1] = 4;
console.log(favTeamsAndPositionInLeague);

favTeamsAndPositionInLeague[2][0] = "Arsenal";
console.log(favTeamsAndPositionInLeague);

/* 
	Basic Array Manipulating - You can manipulate arrays using special array methods such push(), pop(), shift(), unshift()
*/
/* Push() - An easy way to append data to the end of an array is by using the push(). The push method takes one or more arguments and appends them to the end of the array, in order that they appear. It returns the length of the array*/

const arr1 = [1, 2, 3];
arr1.push(4, 5);
console.log(arr1);

/* Pop() is another way to change the data in an array. It is used to pop a value off of the end of an array. The popped off value can then be stored in a variable. So we can pop() removes the LAST element from an array and returns that element*/

const arrOfThree = [1, 3, 5];
const removedOne = arrOfThree.pop();
console.log(removedOne); //-> 5
console.log(arrOfThree); //-> [1, 3]

/* shift() - The shift() removes the first element of an array. Similar to the pop() method but removes the first element of the array*/
const ourArray = ["Ibe", "and", "Dupe", "are", "in", "class"];
// what's the name of the first student to leave the class, who is left in class?
const leavesTheClass = ourArray.shift();
console.log(leavesTheClass); //- 'Ibe'
console.log(ourArray);

/* unshift() - Adds values to the beginning  of an array. It works exactly push() but appends values to the beginning of the array*/
const returnedToClass = ourArray.unshift("Ibe");
console.log(ourArray);

/* 
	Exercise 
	Create a shopping list in the variable "shoppingList". 
	1) The list should be a multi-dimensional array containing several sub-arrays. 
	2) The first element in each sub-array should contain a string with the name of the item, the second element should be a number representing quantity.
	3) The shopping list should contain at least five sub-arrays
	4) Remove the last item in your shopping list that wasn't in the shop and replace it with this item that was available in the shop ["Chocolate", 5];
	5) The shopping list should contain 5 items
*/

let shoppingList = [
	["Icecream", 2],
	["Bread", 4],
	["Milk", 3],
	["Butter", 1],
	["Mayonese", 1],
];
console.log(shoppingList);
let notFoundInShop = shoppingList.pop();
console.log(notFoundInShop);
console.log(shoppingList);
shoppingList.push(["Chocolate", 5]);
console.log(shoppingList);

/* 
	Reusable Functions 
	- Allow you to divide up your code into reusable parts called functions.
	You declare a function using the "function" keyword, followed by the name of the function, parenthesis and curly braces
	Example
*/
function functionName() {
	console.log("Hello World");
}

console.log(functionName);

/* For the function to work you have to call or invoke the function using its name followed by parenthesis */

functionName();

/* All the code between the curly braces will be executed every time the function is called
 */
functionName();
functionName();

/* Exercise 
	1. Create a function which prints out the string "Hi Babajide" to the dev console.
	2. Call the function twice.
*/
function greet() {
	console.log("Hi Babajide");
}

greet();
greet();

/* 
Function Arguments 
- Functions can accept parameters. These Parameters are variables that act as placeholders for the values that are to be inputs to a function.
- When a function is defined, it is usually defined along with Parameters.
- The actual values that are input("passed") into the function when it is called or invoked are know as arguments.
*/

function testFn(param1, param2) {
	console.log(param1, param2);
}

testFn("Hello", "World");

/* 
	Exercise 
	1. Create a function called fnWithArgs. 
	2. The function should accept two arguments.
	3. It should output the sum of the arguments to console.
	4. Call or invoke the function with two numbers as arguments 
*/

function fnWithArgs(num1, num2) {
	console.log(num1 + num2);
}

fnWithArgs(2, 3);
fnWithArgs(12, 13);

/* 
	Return and Assign Values From Functions 
	We already know that we can pass values to functions with arguments. However we can also send values out of a function using the
	return statement.
*/

function plusFour(num) {
	return num + 4;
}

// Notice that we passed a function as argument to the "log" method(function) of the console object.
console.log(plusFour(6)); //-> 10

/* 
	We can also assign the return value of a function to a variable;
*/
const answerThis = plusFour(10);
console.log(answerThis); // 14;

/* 
	Function Scopes

	What is Scope in JavaScript - In JavaScript scope refers to the visibility of variables.

	- Variables which are defined outside of a function block have Global Scope. This means that such variables are visible everywhere in your code.

	- Variables which are declared without let or const keywords are automatically created in Global Scope. This situation can lead to unintended consequences elsewhere in your code or perhaps when calling a function again.

	- In order to avoid issues that touch the heart you should ALWAYS declare your variables using let or const keyword.
*/

var VAT = 7.5; // variable declared in global scope without let or const keyword

var VAT = 5.0; // WARNING!!! variable is re-declared and value is changed !!! code runs without error resulting in a BUG

/* 
	Exercise
	Using let or const declare a global variable name myGlobal outside of any function and initialize it with a value of 100.
*/

let myGlobal = 100;

/* Inside the function fn1 assign 5 to the variable heyGlobal WITHOUT using the var or let or const keywords */

function fn1() {
	heyGlobal = 5;
}
heyGlobal = 7; // Ooops WARNING Global Variable!!!!
console.log(heyGlobal);

/* 
	Global-Local Function Scope
	Local Scope
	Variables which are declared within a function as well as function parameters, have Local Scope. This means they are visible ONLY within that function.
*/

function testIt() {
	const temp = "High";
	console.log(temp); // temp has Local Scope
}
testIt();
// console.log(temp); // temp is not visible - Reference ERROR!!!

/* 
Exercise
	Declare a Local variable called myLocal inside of the function myLocalScope and test the visibility of the variable
*/

function myLocalScope() {
	const myLocal = "I'm local";
	console.log(myLocal);
}

// Tests
myLocalScope();
//console.log(myLocal); //-> Reference Error!!

/* 
Example 
Write a function called calcTip that takes two arguments, both numbers representing the tip in percentage of amount, and the amount representing the order amount. The function should return the value of the tip in number
*/
function calcTip(percentTip, amt) {
	return amt * (percentTip / 100);
}

const myTip = calcTip(10, 200);
console.log("Your tip is " + myTip + " naira");

//console.log(amt); //-> WARNING function parameters are Local variables. Reference Error!!!

/* 
	Logic Programming 
	What is Logic in Programming - Logic is the systematic and structured reasoning that programmers use to design algorithms and software.

	- It involves writing a series of instructions that the computer can follow to achieve a specific task or solve a problem.

	- Logic can be expressed using programming constructs such as booleans, conditionals, comparison and mathematical operators, and loops. 

	- The purpose of logic is to control the flow of a program and to make decisions based on data.

	-Good programming logic ensures that a program behaves as intended and produces the desired output.
*/

/* 
	Booleans - are a data type that takes only two values True or False; They are like little on-off switches, where True is On and false is Off. The two states are mutually exclusive. In Javascript you NEVER write Boolean values in quotes. "true" and "false" are no longer Boolean and have special meaning in Javascript.
*/

function welcomeToOurRestaurant() {
	return true;
}
const greetStatus = welcomeToOurRestaurant();
console.log(greetStatus);

/* 
	Conditional Logic - This is expressed using the construct of "if statements" the keyword in this case is <if> and it tells Javascript to execute code inside curly braces under specific conditions defined in the parentheses. The conditions are known as Boolean conditions and may only True or False.

	Pseudocode
	if(condition is true) {
		execute statement
	}
*/

function testAnything(myCondition) {
	if (myCondition) {
		return "It is true";
	}
	return "It is false";
}

console.log(testAnything(true));
console.log(testAnything(false));

/* 
	Exercise 

	Create a function called trueOrFalse that returns the string "Yes It's true" when the argument is true and returns "No, that's false" when the argument is false; Invoke the function twice with either true or false
*/

function trueOrFalse(wasThatTrue) {
	if (wasThatTrue) {
		return "Yes, It's true";
	}
	return "No, that's false";
}

console.log(trueOrFalse(true));
console.log(trueOrFalse(false));

/* 
	Comparison Operators - are JavaScript operators which compare operands on the left and right which results in a Boolean. Either True or False 
	1. Equality (==)
	2. Strict Equality (===)
	3. Inequality (!=)
	4. Strict Inequality (!==)
	5. Greater Than (>)
	6. Greater Than Or Equal To (>=)
	7. Less Than (<)
	8. Less Than or Equal To (<=)
	9. Logical AND (&&);
	10. Logical OR (||);
	
	At the end of the day all the Logical will evaluate to a Boolean.

	- There is a subtle difference between Equality or Inequality and Strict Equality or Inequality. In Javascript the Equality and Inequality test for value only. However Strict Equality and Inequality test for value and data type. 

	- In order for JavaScript to compare values of different data types it converts one type to the other. This is called Type Coercion. Once it does the conversion, then it now makes the comparison.

	- In oder to avoid stories that touch the heart use strict equality or strict inequality where ever possible.

	- In JavaScript there are 6 falsy values. 
	i.e values that evaluate to false when coerced to Boolean.
	1. false
	2. 0 (zero)
	3. '' or ""
	4. null
	5.undefined
	6. NaN

*/

//Example 1
function checkIfAvailable(color) {
	const colors = ["red", "green", "orange", "blue", "yellow"];
	//console.log(colors.includes(color));
	if (colors.includes(color)) {
		return "Yes, " + color + " is available";
	}
	return "No, " + color + " is NOT available";
}

let isColorAvailable = "";
isColorAvailable = checkIfAvailable("red");
console.log(isColorAvailable);
isColorAvailable = checkIfAvailable("brown");
console.log(isColorAvailable);

// Example 2 - Equality

function isEqualTo10(val) {
	if (val == 10) {
		return "Equal";
	}
	return "Not Equal";
}

let result = "";
result = isEqualTo10(10);
console.log(result);

result = isEqualTo10("10");
console.log(result); //-> Equal due to Type Coercion

// Example 3 - Strict Equality
function isStrictlyEqualTo10(val) {
	if (val === 10) {
		return "Equal";
	}
	return "Not Equal";
}
result = isStrictlyEqualTo10("10");
console.log(result); //-> Not Equal because of an inequable data type

/* 
Assignment 
Demonstrate the comparison operators using a functions that return "Equal" if true or "Not Equal" if false
*/

/* 
	Example 4 Logical AND Operator 
  
	Ok Sometimes you want to test more than one thing at a time. The logical AND operator returns true ONLY if the operands on the left and right of it evaluate to true.

	So if true && true //-> true however false && true //-> false

*/
let num = 5;
if (num > 2 && num < 8) {
	console.log("Yes");
}
/* console.log("No"); */

/* 
ClassWork - Replace the following nested if statements with a logical AND operator 

function testLogicalAND(val) {
	if (val >= 3) {
		if (val < 7) {
			return "Yes";
		}
	}
	return "No";
}

*/

function testLogicalAND(val) {
	if (val >= 3 && val < 7) {
		return "Yes";
	}
	return "No";
}

console.log(testLogicalAND(4));
console.log(testLogicalAND(2));

/* 
	Example 5 Logical OR Operator 
  
	Ok Sometimes you want to test more than one thing at a time. The logical OR operator returns true ONLY if either of the operands on the left and right of it evaluate to true.

	So if true && false //-> true however false && false //-> false
*/

num = 3;
if (num > 10 || num < 5) {
	console.log("No");
}
/* console.log("Yes"); */

/*ClassWork - Replace the following if statements with a logical OR operator 

function testLogicalOR(val) {
	if (val > 15) {
		return "Outside";
	}
	if (val <= 10) {
		return "Outside";
	}
	return "Inside";
}

*/

function testLogicalOR(val) {
	if (val > 15 || val <= 10) {
		return "Outside";
	}
	return "Inside";
}
console.log(testLogicalOR(15));
console.log(testLogicalOR(10));

/* 
Else Statement
	We know that when an if statement condition is true, the block of code following it is executed. However what happens if the condition is false? Normally nothing happens. However with an else statement we can execute an alternative block of code.
*/

if (num > 12) {
	console.log("Bigger than 12");
} else {
	console.log("12 or less");
}

/* 
Classwork - Combine the multiple if statements into a single if/else statement

function elseTest(val) {
	let r = "";
	if (val > 4) {
		r = "Bigger than 4";
	}
	if (val <= 4) {
		r = "4 or Smaller";
	}

	console.log(r);
}
*/
function elseTest(val) {
	let r = "";
	if (val > 4) {
		r = "Bigger than 4";
	} else {
		r = "4 or Smaller";
	}
	console.log(r);
}

elseTest(3);
elseTest(6);

/* 
 Else if Statement 

 If you need to evaluate multiple conditions, then you chain if statements together with the else if statement.

 Please note that the Order of evaluation in else if statements is important. Since the function is executed from top to bottom. So pay attention to what statement comes first.

*/

num = 2;
if (num > 20) {
	console.log("Bigger than 20");
} else if (num < 10) {
	console.log("smaller than 10");
} else {
	console.log("between 10 and 20");
}

/* 
	Classwork - Convert the logic of the following code to use the else if Statement

	function testElseIf(val) {
	if (val >= 15) {
		return "Greater than or equal to 15";
	}
	if (val < 5) {
		return "smaller than 5";
	}
	return "between 5 and 15";
}
*/

function testElseIf(val) {
	if (val >= 15) {
		return "Greater than or equal to 15";
	} else if (val < 5) {
		return "smaller than 5";
	} else {
		return "between 5 and 15";
	}
}

console.log(testElseIf(15));
console.log(testElseIf(8));
console.log(testElseIf(4));

/* 
	Multiple else if statements 
	
	You can use multiple else if statements to evaluate multiple conditions at once. For example

	if (condition 1) {
		statement 1
	} else if(condition 2) {
		statement 2
	} else if (condition 3) {
		statement 3
		.....
	} else {
		statement N
	}
*/

/* 
	Classwork 
	Write a function called testMySize that accepts a size as parameter and uses multiple chained if/else if statements to match the following conditions

	num < 5 //-> Tiny
	num < 10 //-> Small
	num < 15 //-> Medium
	num < 20 //-> Large
	num >= 20 //-> Huge

	Tests
	1. You should have at least four else ifs statement
	2. You should have at least one return statement

	testMySize(0) //-> Tiny
	testMySize(4) //-> Tiny
	testMySize(5) //-> Small
	testMySize(8) //-> Small
	testMySize(10) //-> Medium
	testMySize(15) //-> Large
	testMySize(18) //-> Large
	testMySize(20) //-> Huge
	testMySize(25) //-> Huge 

*/

/* 
	The Switch Statement 

	If you need to match a single value against multiple options you can use switch statement. 

	A switch statement compares the value to the "case" statement which define the various possible options.

	Any valid JavaScript statement can be used or executed within the case block. 

	JS will execute code in each case block until it encounters a "break" statement

*/

let flavour = "chocolate";

switch (flavour) {
	case "strawberry":
		console.log("I love Strawberry");
		break;
	case "vanilla":
		console.log("I love Vanilla");
		break;
	default:
		console.log("I don't like that flavour");
}

let r = "";

function myWinningNumber(num) {
	switch (num) {
		case 1:
		case 2:
		case 3:
			r = "1, or 2, or 3";
			break;
		case 4:
			r = "4 is lonely";
	}
}

myWinningNumber(1);
console.log(r);
myWinningNumber(4);
console.log(r);
myWinningNumber(3);
console.log(r);
myWinningNumber(2);
console.log(r);

/* 
Assignment 1 
Write a function called showRange takes a number as parameter. Use a switch statement to return the appropriate range the number belongs as a string based on the following conditions

1-3 //-> Low
4-6 //-> Mid
7-9 //-> High

Test cases
showRange(1) //-> Low;
showRange(2) //-> Low;
showRange(3) //-> Low;
showRange(4) //-> Mid;
showRange(5) //-> Mid;
showRange(6) //-> Mid;
showRange(7) //-> High;
showRange(8) //-> High;
showRange(9) //-> High;
*/

function showRange(num) {
	let result = "";
	switch (num) {
		case 1:
		case 2:
		case 3:
			result = "Low";
			break;
		case 4:
		case 5:
		case 6:
			result = "Mid";
			break;
		case 7:
		case 8:
		case 9:
			result = "High";
			break;
	}

	return result;
}
console.log(showRange(7));
/* 
	Assignment 2 
 Change the following if/else if statements to a switch statement.
 
	function changeToSwitch(arg) {
		let result = "";
		if (arg = "dupe") {
			result = "She is beautiful"
		} else if (arg <= 20) {
			result = "You're too young";
		} else if (arg === "address") {
			result = "I don't live here"
		} else if (arg > 20) {
			 result = "You're old enough "
		} else if (arg > 80) {
			result = "Sir, You're a distinguished elder statesman"
		} else {
			result = "I don't understand your request"
		}

		return result;
	}

	changeToSwitch(21);

*/

function changeToSwitch(arg) {
	let result = "";
	switch (true) {
		case arg === "dupe":
			result = "She is beautiful";
			break;
		case arg <= 20:
			result = "You're too young";
			break;
		case arg === "address":
			result = "I don't live here";
			break;
		case arg > 20 && arg < 80:
			result = "You're old enough ";
			break;
		case arg >= 80:
			result = "Sir, You're a distinguished elder statesman";
			break;
		default:
			result = "I don't understand your request";
			break;
	}
	return result;
}

console.log(changeToSwitch(21));

/*
Creating Objects 
	Objects are indeed to similar to Arrays with the exception that instead of using indexes to access and modify data, you access the data or modify in Objects via properties.

	Objects are useful for storing data in a structured form and most importantly they can model or represent real world objects like a car
*/

const car = {
	brand: "Toyota",
	doors: 5,
	engine: "v4",
	color: "silver",
	gear: ["auto", "manual"],
};

/* 
Exercise 
Create a an object that models a pet dog, which has the following properties
1. name
2. legs
3. tail
4. breed
5. friends - Array
*/

/* 
	Accessing Object Properties
	There are two ways to access object properties in JavaScript.
	1. Dot Notation ( . )
	2. Bracket Notation ( [] )

	- Dot Notation is used when you know the name of the property you are trying access BEFORE HAND.

	- Bracket Notation is used when you are not sure of the name of the property or when the name has space(s) in it.

*/

const FormulaOne = {
	"formation lap": 2,
	"black flag": 1,
	chicane: 10,
};

/* Example Of Accessing Object Properties Using Bracket Notation */
let prop = FormulaOne["formation lap"];
console.log(prop);

/* Example Of Accessing Object Properties Using the Dot Notation */
prop = FormulaOne.chicane;
console.log(prop);

/* Example Of Accessing Object Properties With Variables Using The Bracket Notation */

const flag = "black flag";
const driverTwo = FormulaOne[flag];
console.log(driverTwo);

/* 
	Exercise
	Using the LagosFC Object defined below, access the player number property using the Bracket Notation.
	The player numbers are 10, 22, 16, 4
	Log the value to console.
*/
const LagosFC = {
	12: "Papi",
	10: "Wilfred",
	16: "Saka",
};

let playerNum = 22;
console.log(LagosFC[playerNum]);
playerNum = 10;
console.log(LagosFC[playerNum]);
playerNum = 16;
console.log(LagosFC[playerNum]);
playerNum = 4;
console.log(LagosFC[playerNum]);

/* Working with Objects */
/*  Updating Object Properties */

const employee = {
	name: "Babajide",
	role: "Software Developer",
	department: "IT",
};

// Assuming the employee role has changed to Snr Software Developer

employee.role = "Snr Software Developer";
console.log(employee);

/*  Add new properties to an object */
// Assuming we want track employee performance

employee["employee performance"] = 85;
console.log(employee);

/* Delete Properties from an Object */
// Delete the employee performance property

delete employee["employee performance"];
console.log(employee);

/* Using Objects for Lookups */
const blogArticle = {
	title: "How to create Objects",
	link: "https://example.com/how-to-create-objects.html",
	author: "Babajide Ibiayo",
	tags: ["technlogy", "javascript"],
	createdAt: "Nov 23, 2023",
};

const articleAuthor = blogArticle.author;
const articleLink = blogArticle["link"];
console.log(articleAuthor);
console.log(articleLink);

const val = "title";
// Lookup the value of the variable val in the blogArticle Object
const valLookup = blogArticle[val];
console.log(valLookup);

/* This simply means that we can replace multiple chains of switch and if/else with Object Lookups */

/* 
	ClassWork Assignment
	Refactor the code below into an Object called lookupColor. Use it to lookup color and assign the associated string to hexCode variable
*/
/* function colorLookup(color) {
	let hexCode = "";

	// Only change code below this line
	switch (color) {
		case "white":
			hexCode = "#ffffff";
			break;
		case "black":
			hexCode = "#000000";
			break;
		case "blue":
			hexCode = "#0000FF";
			break;
		case "red":
			hexCode = "#FF0000";
			break;
		case "green":
			hexCode = "#008000";
			break;
		default:
			hexCode = "Unavailable";
			break;
	}
	//Only change code above this line
	return hexCode;
} */

function colorLookup(color) {
	let hexCode = "";

	// Only change code below this line
	const lookupColor = {
		white: "#ffffff",
		black: "#000000",
		blue: "#0000FF",
		red: "#FF0000",
		green: "#008000",
	};

	hexCode = lookupColor[color];
	if (hexCode === undefined) {
		hexCode = "Unavailable";
	}

	//Only change code above this line
	return hexCode;
}

console.log(colorLookup("blue"));
console.log(colorLookup("black"));
console.log(colorLookup("Yellow"));

/* 
	Testing for Object Properties 
	
	You can test for the existence of an object property using the objects hasOwnProperty() method. The method returns a Boolean true if found, or false if not found.		
*/
function checkSizeCodes(code) {
	const sizeCodes = {
		s: "small",
		m: "medium",
		l: "large",
		xl: "extra large",
		xxl: "double extra large",
		xxxl: "triple extra large",
	};
	if (sizeCodes.hasOwnProperty(code)) {
		console.log(sizeCodes[code]);
	} else {
		console.log("Not found");
	}
	return sizeCodes.hasOwnProperty(code);
}

checkSizeCodes("s");
checkSizeCodes("xs");

/* 
	Working with Complex and Nested Objects 

	Objects are used to create complex and flexible data structures. They allow for arbitrary combinations of strings, numbers, booleans, functions, objects.
	
	Here's an example of a music album collection
*/

const musicAlbumCollection = [
	{
		artist: "Asake",
		title: "Work Of Art",
		release_year: 2023,
		formats: ["CD", "mp4"],
		"total plays": 540388818,
		genre: "Afrobeats",
	},
	{
		artist: "Rema",
		title: "Ravage",
		release_year: 2023,
		formats: ["CD", "mp4"],
		"total plays": 2706613,
		genre: "Afrobeats",
	},
];

/* Exercise - add a new to the album to the music collection - artist - Olamide, title - Unruly, release_year - 2023, total plays - 133946549, genre - Afrobeats formats - CD, mp4*/

musicAlbumCollection.push({
	artist: "Olamide",
	title: "Unruly",
	release_year: 2023,
	formats: ["CD", "mp4"],
	"total plays": 133946549,
	genre: "Afrobeats",
});

console.log(musicAlbumCollection);

/* 
	Accessing Nested Objects 

	Now sub-properties of objects can be accessed by chaining together the dot or bracket notation

	Here's an example of an Office Storage Object

*/

const officeStorage = {
	desk: {
		drawer: "Stationery",
	},
	cabinet: {
		"top drawer": {
			folder1: "file",
			folder2: "secrets",
		},
		"bottom drawer": "Biscuits",
	},
};

const contentFolder2 = officeStorage.cabinet["top drawer"].folder2;

console.log(contentFolder2); //-> secrets

// Exercise - Access the car storage object and assign the contents of the glove box to the gloveBoxContents variable

const carStorage = {
	inside: {
		"glove box": "vehicle particulars",
		"door compartment": "lollipop",
	},
	outside: {
		trunk: "jack",
	},
};

const gloveBoxContents = carStorage.inside["glove box"];

console.log(gloveBoxContents); //-> vehicle particulars

/* 
	Accessing Nested Arrays 

	Similar to objects, array bracket notation can be chained to access nested arrays	

	Here's an example
*/

const myPets = [
	{
		type: "cat",
		names: ["Carrie", "Kolo", "Kitty"],
		"fav food": null,
	},
	{
		type: "dog",
		names: ["Buster"],
		"fav food": ["Beef", "watermelon"],
		breed: "Doberman",
	},
];

console.log(myPets[0].names[2]); //-> Kitty
console.log(myPets[1]["fav food"][0]); //-> Beef

// Exercise - Using the dot and bracket notation, set the variable secondPlant to the second item in the trees list from the myGarden Object

const myGarden = [
	{
		plant: "flowers",
		list: ["rose", "....."],
	},
	{
		plant: "trees",
		list: ["pine", "....."],
	},
];

const secondPlant = "";

/* 
	Assignment(compulsory) - CD Collection 

	Create a function that helps in the maintenance of a music CD Collection. Organize the collection as an object that contains multiple CDs which are also objects. Each CD must have a unique id as property name to identify it.Within each CD there are various properties describing information about the CD. Not all CDs have complete information.

	DATA
	--------------------------------------------------
	|id	 | cdTitle     | artist  | tracks 			   
	--------------------------------------------------
	|234 | Unruly      | Olamide | 'Gaza','Jinja'  
	--------------------------------------------------
	--------------------------------------------------
	|254 | Savage      | Rema    | 'DND','Red potion' 
	--------------------------------------------------
	--------------------------------------------------
	|264 | Work Of Art | Asake   | ['2:30']               
	--------------------------------------------------
	--------------------------------------------------
	|284 | I Told Them |         |
	--------------------------------------------------

	A) Based on the Data above create and complete the CD Collection Object. It will be used for the tests
	*/
const cdCollection = {
	234: {
		cdTitle: "Unruly",
		artist: "Olamide",
		tracks: ["Gaza", "Jinja"],
	},
	254: {
		cdTitle: "Savage",
		artist: "Rhema",
		tracks: ["DND", "Red potion"],
	},
	264: {
		cdTitle: "Work Of Art",
		artist: "Asake",
		tracks: ["2:30"],
	},
	284: {
		cdTitle: "I Told Them",
	},
};
/*
	B) Create an updateCollection function which 
	takes 4 arguments represented by the following 
	parameters:

	CDs - an object containing several individual CD
	id - a unique number representing a specific CD object
	prop - a string representing the name of the CD property 
	to update
	value - the string containing information used to update 
	the CD's property

	Complete the function using the following rules to update the object passed to the object

	1. Your function must always return the entire CD collection
	2. if value is an empty string, delete the given prop property 
	from the album  
	3. If prop isn't tracks and value isn't an empty string, 
	assign the value to that CD's prop
	4. If the prop is tracks and value isn't an empty string,
	then update the CD tracks array. 
	5. If the CD does not have a tracks property,
	assign it an empty array, then add the value as the last 
	item in the CD's tracks array.

*/
function updateCollection(collection, id, prop, value) {
	// Add your code here
	if (value === "" && cdCollection[id].hasOwnProperty(prop)) {
		delete cdCollection[id][prop];
	}

	if (prop !== "tracks" && value !== "") {
		cdCollection[id][prop] = value;
	}

	if (cdCollection[id].hasOwnProperty("tracks") === false && value !== "") {
		cdCollection[id]["tracks"] = [];
		cdCollection[id]["tracks"].push(value);
	} else if (
		cdCollection[id].hasOwnProperty("tracks") === true &&
		prop !== "cdTitle" &&
		value !== ""
	) {
		cdCollection[id]["tracks"].push(value);
	}

	if (cdCollection[id].hasOwnProperty("tracks") === false) {
		cdCollection[id]["tracks"] = value;
	}

	return collection;
}

/* 
 	Tests 
	- DO NOT modify the cdCollections Object used for the tests.
	- After calling the updateCollection with the following 
	parameters the following is the expected outputs
 */
console.log(updateCollection(cdCollection, 284, "artist", "Burna Boy")); //-> artist should be the string Burna Boy
console.log(updateCollection(cdCollection, 284, "tracks", "City Boys")); //-> tracks should have the string City Boys as the last and only element of the tracks array.
console.log(updateCollection(cdCollection, 234, "artist", "")); //-> artist should not be set
console.log(updateCollection(cdCollection, 264, "tracks", "Sunshine")); //-> tracks should have the string Sunshine as the last element of the tracks array.
console.log(updateCollection(cdCollection, 254, "tracks", "Trouble Maker")); //-> tracks should have a length of 3 and string DND as the first element of the tracks array.
console.log(updateCollection(cdCollection, 234, "tracks", "")); //-> tracks should not be set
console.log(updateCollection(cdCollection, 254, "cdTitle", "Ravage")); //-> cdTitle should be the string Ravage

/* 
JavaScript Loops
 Loops - Are language constructs that allow you to run the SAME code multiple times.
*/

/* 
	While Loop - The While loop runs while a specific condition is true. It stops once that condition is no longer true. i.e when the condition becomes false.

	while (condition is true) {
		Execute Statements
	}

	Note: Warning!!! Using the while loop may result in an infinite loop if the condition will never become false. ex
	
	while (true) { // This condition will NEVER be false. Hence Infinite Loop.
		// Execute statement
s	}
*/
let z = 0;
while (z < 5) {
	console.log(z);
	z++;
}

// Exercise - Add the numbers 5 through 0(inclusive) in descending order to an Array called range5 using a while loop. //-> [5, 4, 3, 2, 1, 0];

const range5 = [];
let n = 5;

while (n >= 0) {
	range5.push(n);
	n--;
}

console.log(range5);

/* 
	For Loop - A for loop can also execute code multiple times. However a for loop runs only for a specific number of times.

	For loops are usually declared with three optional expressions separated by semicolons;

	for (a; b; c) {
		// Statements
	}

	where 
	a - initialization statement
	b - condition statement
	c - final expression

	The initialization statement is executed once before the start of the loop and is typically used to define and setup the loop variable

	The condition statement is evaluated at the beginning of every loop iteration and will continue as long as the condition is true. When condition is false at the start of iteration, the loop stop executing. This implies that if the condition starts at false, the loop will never execute. 

	The final expression is executed at the end of every iteration, but before the next condition check and it is usually used to decrement or increment the loop counter
*/

const rangeOf5 = [];

for (let i = 0; i < 5; i++) {
	rangeOf5.push(i);
}
console.log(rangeOf5);

//Exercise - Use a for loop to push values 1 through 5 onto myArray //-> [1, 2, 3, 4, 5]

const myArray = [];
for (let i = 1; i <= 5; i++) {
	myArray.push(i);
}
console.log(myArray);

// Exercise A - Use a for loop to push even numbers between 0 and 10 into an array called evenNumbers.

const evenNumbers = [];

// Add your code here
for (let i = 0; i < 10; i += 2) {
	evenNumbers.push(i);
}

console.log(evenNumbers); //-> [0, 2, 4, 8]

// Exercise B - Use a for loop to push even numbers between 1 and 9 into an array called oddNumbers.

const oddNumbers = [];

// Add your code here
for (let i = 1; i < 10; i += 2) {
	oddNumbers.push(i);
}
console.log(oddNumbers); //-> [1, 3, 5, 7, 9]

//Exercise C - Use a for loop to push even numbers from 10 to 2 into an array called reversedEvenNumbers

const reversedEvenNumbers = [];

// Add your code here
for (let i = 10; i > 0; i -= 2) {
	reversedEvenNumbers.push(i);
}
console.log(reversedEvenNumbers); //-> [10, 8, 6, 4, 2]

/* 
	Iterating Arrays with For Loops
	
	It's common to iterate through an array using a for loop. This is done by using the length property of an array in the condition statement. 

	Remember that arrays are zero-based indexing, so the last index of the array is arr.length - 1.

*/
// Example
const arr = [8, 7, 6, 5, 4];

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

// Exercise D - Use a For loop to find the sum of the numbers in the given array and store the sum in a variable called total.

const myNumbers = [2, 4, 6, 8, 10];

let total = 0;

// Add your code below this line
for (let i = 0; i < myNumbers.length; i++) {
	total += myNumbers[i];
}
console.log(total); //-> 30

/* 
	Iterating through multi-dimensional arrays using Nested For Loops 
	
	You can iterate through multi-dimensional arrays using nested for loops. Here's an example
*/

// Example
const md_arr = [
	[1, 2],
	[3, 4],
	[5, 6],
];

const md_arr_flat = [];
// Loops through the parent array
for (let i = 0; i < md_arr.length; i++) {
	//Loops through the sub-arrays
	for (let j = 0; j < md_arr[j].length; j++) {
		md_arr_flat.push(md_arr[i][j]);
	}
}

console.log(md_arr_flat); //-> [1, 2, 3, 4, 5, 6]

/* Exercise - Create a function called multiplyAllPrices that returns the product of all numbers in the sub-arrays of the prices array
 */

function multiplyAllPrices(arrOfPrices) {
	let product = 1;

	//Add your code below here
	for (let i = 0; i < arrOfPrices.length; i++) {
		for (let j = 0; j < arrOfPrices[i].length; j++) {
			product *= arrOfPrices[i][j];
		}
	}

	return product;
}

//Test
console.log(
	multiplyAllPrices([
		[1.99, 2.99],
		[3.99, 4.99],
		[1.99, 2.78],
		[4.5, 5.5],
	])
); //-> 16,220.744427306

/* 
	Do While Loop is similar to the while loop
	with on exception. The loop will first do one pass of the code inside of the loop, no what matter what, and the continue to run the while loop as long as the specified condition is true. 

	 let i = 0; // Initialization statement
	do {
		// Statements
		i++ //increment or decrement of final expression
	} while (condition is true)
*/

// Example - push numbers 1 to 5 inside the array called arrayOfFive

const arrayOfFive = [];

let p = 1;

do {
	arrayOfFive.push(p);
	p++;
} while (p <= 5);

console.log(arrayOfFive);

/* 
Assignment Customer Profile Lookup 

A flourishing Restaurant in Lagos keeps a record of customer profile data and their food preferences in a simple excel file called customers.xls.

You have hired as a consultant to develop a simple customer profile lookup program that takes a customer first name and metadata as inputs, and verify if the customer name and given metadata exist. 

If both first name and metadata are true and verified the program should return the value of the metadata.

If the first name does not exist or correspond to any customer then the program should return "No such customer"

If the given metadata does not 
correspond to any valid customer metadata field or property for the given name, the program should return "No such metadata"

Instructions

1. Write a function called lookupCustomer, that takes customer first name, and a given property as arguments and returns the value of the given property e.g 

function lookupCustomerProfile(name, prop) {
	....

	return "Something"
}
*/

function lookupCustomer(name, prop) {
	const customers = [
		{
			firstName: "Robert",
			lastName: "Smith",
			email: "r.smith@live.com",
			phone: "+12074567890",
			likes: ["Roasted Beef", "potato fries", "Curry Soup"],
		},
		{
			firstName: "James",
			lastName: "Green",
			email: "j.green@live.com",
			phone: "+12081569890",
			likes: ["Fried Beef", "potato fries", "curry soup"],
		},
		{
			firstName: "Mary",
			lastName: "Brown",
			email: "b.brown@gmail.com",
			phone: "+12078577990",
			likes: ["roasted beef", "pasta", "onion soup"],
		},
		{
			firstName: "Alan",
			lastName: "Stone",
			email: "a.stone@live.com",
			phone: "+12068967870",
			likes: ["roasted beef", "potato fries", "curry soup"],
		},
		{
			firstName: "Linda",
			lastName: "Thomas",
			email: "lthomas23@gmail.com",
			phone: "+12068864550",
			likes: ["corn beef", "potato fries", "mushroom soup"],
		},
		{
			firstName: "Mathew",
			lastName: "Gala",
			email: "gallawy23@yahoo.com",
			phone: "+1604467789",
			likes: ["fried chicken", "plantain fries", "mixed soup"],
		},
		{
			firstName: "Samantha",
			lastName: "Knox",
			email: "s.knox@live.com",
			phone: "+1604576439",
			likes: ["Roasted Beef", "potato fries", "Curry Soup"],
		},
	];
	// Add code below this line

	for (let i = 0; i < customers.length; i++) {
		if (customers[i]["firstName"] === name) {
			return customers[i].hasOwnProperty(prop)
				? customers[i][prop]
				: "No such metadata";

			/* if (customers[i].hasOwnProperty(prop)) {
      	return customers[i][prop];
      } else {
      	return "No such metadata";
      } */
		}
	}
	return "No such customer";
}

//Tests+
console.log(lookupCustomer("Samantha", "lastName")); //-> Knox

console.log(lookupCustomer("James", "email")); //-> j.green@live.com

console.log(lookupCustomer("Robert", "likes")); //-> ['Roasted Beef', 'potato fries', 'Curry Soup']

console.log(lookupCustomer("Mathew", "phone")); //-> +1604467789

console.log(lookupCustomer("Mary", "favorite")); //-> No such metadata

// Edge Cases:
console.log(lookupCustomer("", "")); //-> No such customer
console.log(lookupCustomer()); //-> No such customer

/* 
	Random Numbers in JavaScript 

	Random numbers are useful for simulating random behavior. JavaScript has the Math.random() method which generates random numbers between 0(inclusive) and 1(exclusive). This implies it returns decimal numbers between 0 and 1.

*/

function generateRandomNumber() {
	return Math.random();
}

console.log(generateRandomNumber());

/* 
	Random Whole Numbers 

	You can generate random whole numbers in a range from zero - or from a different lower number - to a given number.

	For instance let's say min is your minimum number and max is your maximum number

	The formula below gives a random whole number in the range min to max

	Math.random() * (max - min + 1) + min;
*/

function generateRandomRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(generateRandomRange(2, 5));

/* 
	The parseInt Function 
	
	parseInt() function parses a string and returns an integer.

	Caveats: 
	If the first character of the string can't converted to a number, it will return NaN
*/

// Example

const myInt = parseInt("007");
console.log(myInt);

//Exercise - Write a function called convertToInteger that takes a string as input and returns an integer

function convertToInteger(str) {
	return parseInt(str);
}
console.log(convertToInteger("75")); //-> 75
console.log(typeof convertToInteger("75")); //-> number

/* 
	ParseInt Function with Radix 

	The parseInt function also takes a second argument called the Radix, which specifies the base of the number. The radix can be an integer between 2 and 36

	parseInt(string, radix);
*/

//Example
const binaryToInteger = parseInt("11", 2);
console.log(binaryToInteger); //-> 3

/* 

Ternary Operator 

The Ternary operator is a conditional of operator which can be used - rather gracefully - to replace a single if / else expression

x ? y : z

where 

x is the condition
y is the code to run when the condition returns true
z is the code to run when the condition returns false

*/

// Example

function findGreaterNum(a, b) {
	return a > b ? a + " is greater" : b + " is greater or equal";

	/* if (a > b) {
  	return a + " is greater";
  } else {
  	return b + " is greater or equal";
  } */
}

console.log(findGreaterNum(5, 4));

// Using Multiple Conditional Ternary Operators

function findGreaterOrEqualNum(a, b) {
	return a === b
		? a + " and " + b + " are equal"
		: a > b
		? a + " is greater"
		: b + " is greater";
	/* if (a === b) {
  	return a + " and " + b + " are equal";
  } else if (a > b) {
  	return a + " is greater";
  } else {
  	return b + " is greater";
  } */
}

console.log(findGreaterOrEqualNum(5, 8));

/* 
Introduction to Recursion 

Recursion is a concept that a function can be expressed in terms of itself. So this conceptually implies that a function can invoke itself repeatedly. 

Given a task to multiply the first N elements of an array to return a product of all the items in the array. To do this we could use a For Loop
*/

//Example
/* 
	Did you notice that 

	multiplyNums(arr, num) == multiplyNums(arr, num - 1) * arr[num - 1]

	fn(2 + 3) == fn(2) + fn(3)
*/

function multiplyNums(arr, num) {
	if (num <= 0) {
		return 1;
	} else {
		return multiplyNums(arr, num - 1) * arr[num - 1];
	}

	/* let product = 1;
  for (let i = 0; i < num; i++) {
  	product *= arr[i];
  }
  return product; */
}

console.log(multiplyNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)); //-> 24

/* 
	The Document Object Model (DOM)
	
	What is the DOM?

	The DOM is the data representation of the objects that comprise the structure and content of a document on the web. In this case we would be looking at how the DOM represents an HTML document in memory and how to use Web APIs to manipulate and create web content and applications.

	The DOM is a programming interface for web documents e.g HTML documents. It models a web page so that programs can change the structure (HTML), style (CSS), and Content

	The DOM models or represents the document nodes and objects.

	The nodes are entries in the tree structure and they represent elements (identified as HTML, HEAD, META, BODY and so on) and others represented as text or "content" known as leaf nodes.

	The different types of Nodes
	1. Root Node
	2. Child Node
	3. Descendant Node
	4. Parent Node
	5. Sibling Node
*/

/* 
	Importance of the DOM in Web Development 

	The DOM is crucial in web development because it serves as an interface that allows dynamic and interactive manipulation of a web page using programming languages like JavaScript

	1. Dynamic Content Update - The DOM allows developers to dynamically update, add or remove content on a web page in response to user interactions or events

	2. Interactivity - Developers can create interactive features such as form validation, image sliders, or real-time updates making websites more engaging for users

	3. Cross-Browser Compatibility - The DOM provides a standardized way to interact with HTML documents ensuring cross browser compatibility. So you can write code that works consistently across different browsers

	4. Responsive User Interfaces - Web applications use the DOM create responsive user interfaces, that adapt to user actions without a page refresh 

	5. The DOM is essential for AJAX ( Asynchronous JavaScript and XML) operations which allows web pages to fetch and send data asynchronously without reloading the entire page

	6. Events Handling - Developers can use the DOM to manage events, such as clicks, keyboard presses, or form submissions, enabling them to respond to user actions and create dynamic behavior

	7. Structured Representation - The DOM represents HTML documents as a structured tree of objects, makes it easy for developers to navigate and manipulate different elements and attributes programmatically.

*/

/*
Exercise 

We want to write a program that prints two numbers, the numbers of cows and chickens on a farm, with the words Cows and Chickens after them, and zeros padded before both numbers so that they are always three digits long
 
 For example 

  007 Cows 
  
  011 Chickens
*/
function padWithThreeZeros(str) {
	while (str.length < 3) {
		str = "0" + str;
	}
	return str;
}

function addLabel(label, str) {
	return `${str} ${label}`;
}

/* Write the function displayInventory(item1, item2, item3) */

function displayInventory(item1, item2, item3) {
	return "Inventory";
}

/* function printFarmInventory(cows, chickens, pigs) {
	let cowString = String(cows);
	let chickenString = String(chickens);
	let pigString = String(pigs);

	cowString = padWithThreeZeros(cowString);
	console.log(addLabel("Cows", cowString));

	chickenString = padWithThreeZeros(chickenString);
	console.log(addLabel("Chickens", chickenString));

	pigString = padWithThreeZeros(pigString);
	console.log(addLabel("Pigs", pigString));

} */
function printFarmInventory(cows, chickens, pigs) {
	let cowString = String(cows);
	let chickenString = String(chickens);
	let pigString = String(pigs);

	const inventory = displayInventory(cowString, chickenString, pigString);

	console.log(inventory);
}

printFarmInventory(8, 12, 5);
