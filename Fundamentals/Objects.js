/* Diffrenct ways of creating objects and their prototype chains */

var obj1 = Object.create(null)
console.log(Object.getPrototypeOf(obj1)) //--> null

var obj2 = {id: 1, name: 'John'}
console.log(Object.getPrototypeOf(obj2)) //--> Object --> null

var obj3 = ['John']
console.log(Object.getPrototypeOf(obj3))
//-->Array --> Object --> null

function Person(id, name) {
    this.id = id
    this.name = name
}

var employee = new Person(1, 'John')

console.log(Object.getPrototypeOf(employee))
//-> Person --> Object --> 

