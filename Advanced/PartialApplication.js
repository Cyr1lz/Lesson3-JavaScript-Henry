/* Partial Application is a technique where a new function is created by fixing the value of some arguments of an existing function, which results in a specialized function with fewer arguments than the original function. 

Since the fixed arguments are predetermined, you can pass the other arguments later when you invoke the new function. */

function withTAX(tax_rate, price, qty) {
	return tax_rate * price * qty;
}

let amount = withTAX(0.05, 20, 10);
console.log(amount);

//Partial Application using the bind() method to create a new function
const withVatTax = withTAX.bind(null, 0.075);
amount = withVatTax(20, 10);
console.log(amount);

//Partial Application using a manually created function
const withSalesTax = function (price, qty) {
	return withTAX(0.03, price, qty);
};

amount = withSalesTax(20, 10);
console.log(amount);
