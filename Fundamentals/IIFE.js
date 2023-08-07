//Global Scope

(function() {
    // Local Function Scope
    var some_data = '';
    var init = function() {
        //Do something
    };
    init()
})();

console.log(some_data) //-> Error!!!!

var awesome_module = (function() {
    var myVar = 'some_data';
    var innerFunction = function() {
        // Do something
    }
    return {
        getVar: function(){
            return myVar
        }
    }
})();

console.log(awesome_module.getVar()) //-> 'some_data'