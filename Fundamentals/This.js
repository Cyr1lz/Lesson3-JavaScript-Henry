/* Understanding this keyword. 
Notice that the value of this depends on how the function fn is called and not where it is called */

// -> Global Scope
var length = 10

function fn() {
    console.log(this.length);
}

var hero = {
    length: 5,
    secretId: function (fn) {
        fn.call(hero) // this refers to, and is explictly bound to the hero object
        fn(); // this refers to global window object
        arguments[0](); //this refers to the arguments array
    }
}

hero.secretId(fn, 1) //--> 10, 2
