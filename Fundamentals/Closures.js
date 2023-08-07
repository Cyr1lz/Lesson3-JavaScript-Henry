var globalVar = 'global';

(function(outerArg) {
    var outerVar = 'a';

    (function(innerArg){
        var innerVar = 'b'
        // Closure over inner, outer and global variables
        console.log('outerArg ' + outerArg)
        console.log('innerArg ' + innerArg)
        console.log('outerVar ' + outerVar)
        console.log('innerVar ' + innerVar)
        console.log('globalVar ' + globalVar)
        
    })(500)
})(600)