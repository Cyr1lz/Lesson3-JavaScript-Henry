/* 1. Declaring varaibles */
var car;
let beef;
let myName;

/* Uninitialzed variables have a default value of undefined */
console.log(car); //undefined
console.log('car is', car, 'beef is', beef);

/* 2. Assigning varaibles */
car = "Volvo";
beef = "Bokoto";
myName = "Babajide";
const VAT = 7.5;
const COUNTRY_CODE = "NGR";

/* 3. Using variaibles */
// Create a string using the value of varaibles and assign it to a new variable
let sentence = "My name is " + myName + " and I love " + beef + " beef";

// Output the variable to console
console.log(sentence);

/* 
    Case Sensitivity in varables
    Javascript variables are case sensitive
    So, Mother, mother, and moTher are noth the same variable
 */

var Mother = 'Janet';
console.log(Mother);
Mother = 'Mary';
console.log(Mother);
MoTher = "Suzan"; // -> Error 

/* 
    Diffrence between var and let 
    1. Variables declared with var can be accidentally redclared.
    2. Unlike var variables declared with "let" can only be declared once. 
    3. Any attempt to redclare a varable declared with "let" will result in Syntax Error
*/

var player = 'James';
var player = 'Peter';
console.log(player); //-> Peter No Errors 

/* 
    Declaring Read Only Varaibles 
    We can decalare Read Only variables with the keyword "const". const has all the benefit of the "let" keyword with the added bonus
    that varables const are read only and can not be reassigned once declared. 
*/

const FAV_PET = "Dogs";
FAV_PET = "Cats";






