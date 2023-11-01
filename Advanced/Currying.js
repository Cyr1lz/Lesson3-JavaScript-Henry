/* 
Currying is a technique where a function with multiple arguments is transformed into a series of functions each taking only one argument.
*/
let result;

function multiply(a, b, c) {
	return a * b * c;
}
result = multiply(3, 10, 5);
console.log(result);

function curriedMultiply(a) {
	return function (b) {
		return function (c) {
			return a * b * c;
		};
	};
}

result = curriedMultiply(5)(10)(3);
console.log(result);
