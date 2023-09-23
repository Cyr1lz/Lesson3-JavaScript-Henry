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
	"goats, and 2 fish ponds.";

console.log(story);
