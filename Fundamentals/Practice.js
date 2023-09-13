// This is a single line comment

/* This is a 
    multi-line comment
*/
/* 
Example of a multi-line comment about a function
Version: 1.0
@desc - This function process invoices
and does not take parameter.
@returns - the total value of theinvoice
*/
function processInvoice() {
    var invoice = new Invoice() 
}

let beef;
let myName;

beef ="Bokoto";
myName = "Babajide"
const VAT = 7.5; 
const COUNTRY_CODE = 'NGR';

// Output to developer console using console.log()
console.log("My name is " + myName + " and I love " + beef + " beef");

// Creates a variable sentence and assign a string to it.
let sentence = "My name is " + myName + " and I love " + beef + " beef";

// Output sentence variable to console
console.log(sentence);

/* 
Data Types 
1. number
2. string
3. undefined
4. Boolean
5. Bigint
6. Symbol
7. null
8. object
*/

/* 
Number Data Type 
Floating point and Integer numbers
*/
let myInteger = 7; // This is called an integer number
let myFloat = 7.5; // This is called a floating 

/* 
String Data Type 
Single quote and double quote strings
*/
let firstName = "Babajide";
let lastname = 'Ibiayo';

/* Booleans */

let test = true;
let error = false;

if (true) {
    console.log('You passed the test')
    //-> 'You passed the test
}

if (false) {
    console.log('You passed the test')
} else {
    console.log('Sorry try again');
    //-> 'Sorry try again
}

/* 
    null Data Type 
    indicates an empty value
*/
let middleName = null;
console.log(middleName);


/* 
    object data type 
    object have key/value pairs. keys are object properties. values are the value assigned to properties
*/
let table = {
    width: '72cm', //the width property 
    height: '180cm', // the height property
    texture: 'mohagony'// the texture property
};
console.log(table);
// Change table properties
table.texture = "Marble";
table.height = "140cm";
// Output table with modified properties
console.log(table);

// Example of a car object
let car = {
    doors: 4,
    engine: 'v6'
}

// Simulating a baby toy
let babyToy = {
    eyeColor: 'blue',
    weight: '1.5kg', // property
    cry: function() {
        console.log("YeeeeeeeMummmy!!!!");
    } //method
}

babyToy.cry(); // Execute the babyToy object method property

console.log(3 + '3')




















