/* 
 A farmer has a farm located at Epe in Lagos. The farm is 2000sqm in length an 3000sqm in width. He has 50 chickens, 10 goats, and 2 fish ponds.

 1. Determine the Area of the farm in square
 2. Output the address of the farm including the town.
 3. Create an Object that models the farm.

 Tips: 
 1. Use appropiate variables
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
	Excercise 1 
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

/* Nifemi said, "Dupe is learning Javascript". */

const sampleStr = 'Nifemi said, "Dupe is learning Javascript".';

console.log(sampleStr);
