/* What is the Singleton Pattern. 
In JavaScript the Singleton pattern provides a single namespace to isolate the implementation code from the global namespace/scope and provide a single point of access to its methods, functions and variables */

// Simplest form of a Singleton is an object literal grouped together with its related methods and properties
let mySingleton = {
	prop: "the public can see this data",
	method: function () {
		console.log("Hello World");
	},
};

/* 
  Creating private methods and properties.

  You can further extend the singleton object literal to include private properties and methods by encapsulating in a function scope.
*/
mySingleton = function () {
	let privateVar = "some private data";
	function showPrivateVar() {
		console.log(privateVar);
	}
	// return a singleton
	return {
		publicMethod: function () {
			// forms a closure over parent method and variable
			showPrivateVar();
		},
		publicVar: "the public can see this data",
	};
};

const single = mySingleton();
single.publicMethod(); //-> some private data
console.log(single.publicVar); //-> some public data

/* 
  Instantiation a singleton on demand 

  The above example works great. But what if we only want 
  to instantiate the singleton only when needed on demand.
  Furthermore in order to save resources we instantiate 
  singleton instance only once.
*/

mySingleton = (function () {
	let instantiated;
	let privateVar = "some private data";
	function showPrivateVar() {
		console.log(privateVar);
	}

	function init() {
		return {
			publicMethod: function () {
				// forms a closure over parent method and variable
				showPrivateVar();
			},
			publicVar: "the public can see this data",
		};
	}

	return {
		getInstance: function () {
			/* if we haven't previously instantiated the singleton,
        we instantiate it once and store it in a variable. 
        Subsequently we just return the instantiated singleton */
			if (!instantiated) {
				instantiated = init();
			}
			return instantiated;
		},
	};
})();

mySingleton.getInstance().publicMethod();
console.log(mySingleton.getInstance().publicVar);

const SingletonTester = (function () {
	// options: an object containing configuration options for the singleton
	// e.g let options = { name: 'test', pointX: 5};
	function Singleton(options) {
		// set options to the options supplied or an empty object if none provided.
		options = options || {};
		//set the name parameter
		this.name = "SingletonTester";
		//set the value of pointX
		this.pointX = options.pointX || 6;
		//set the value of pointY
		this.pointY = options.pointY || 10;
	}
	// Create our instance holder
	let instance;
	// this is an emulation of static variables and methods
	let _static = {
		name: "SingletonTester",
		// This is a method for getting an instance
		// It returns a singleton instance of a singleton object
		getInstance: function (options) {
			if (instance === undefined) {
				instance = new Singleton(options);
			}
			return instance;
		},
	};
	return _static;
})();
const singletonTest = SingletonTester.getInstance({
	pointX: 5,
});
console.log(singletonTest.pointX); // outputs 5
