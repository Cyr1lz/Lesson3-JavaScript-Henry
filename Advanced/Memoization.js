/* 
  Memoisation is a technique in JavaScript used to optimize the performance of a function by caching its result based on the arguments passed.
*/

function expensiveFn(n) {
	console.log("Performing expansive calculation...");
	let result = 0;
	for (let i = 0; i <= n; i++) {
		result += i;
	}
	return result;
}

const memoizedFn = (function () {
	const cache = {};
	return function (n) {
		if (n in cache) {
			console.log("Fetching result from cache");
			return cache[n];
		} else {
			const result = expensiveFn(n);
			console.log("Caching result...");
			cache[n] = result;
			return result;
		}
	};
})();

console.log(memoizedFn(5));
console.log(memoizedFn(5));
