/* Understanding JS Scopes. There are two main types scopes in JS. Lexical Scopes which are created by the developer during code creation and functional scopes created by functions during execution. This scopes detemine how and where variables are accessible*/

var b = 1; // Global function scope
function outer() {
    var b =  // Outer function scope
        function inner() {
            b++; // -> NaN trying to perfom a numeric operation on a non-numeric value since the value of b is undefined at this point because its declaration <var b> has been hoisted to the top of the the function scope with a default value of undefined 
            var b = 3; // Inner function local scope
            console.log(b) // -> 3
        }
    inner();
}
outer();