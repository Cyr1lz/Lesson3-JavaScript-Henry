/* 1. Comments */

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
    // Code to process an invoice
}

/* 2. Outputting to Console. */
const myArray = ['Babajide', 'Ibiayo', 48, true];

console.log(myArray);

console.table(myArray); // Useful for displaying arrays and objects

/* 3. Data Types */
const isReady = false;
console.log('isReady', typeof isReady);

const VAT = 7.5;
console.log('VAT', typeof VAT);

const firstname = "Babajide";
console.log('firstname', typeof firstname);

const car = {engine: 'V6'}
console.log('car', typeof car);

const isEmpty = undefined;
console.log('isEmpty', typeof isEmpty);

const isNull = null;
console.log('isNull', typeof isNull);




