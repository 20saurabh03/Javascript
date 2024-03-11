
// primitive Datatype 

let num = 123
let string = "Ashu"

let temp = null  //(value is empty)
let userEmail; // (Undefined (not define val))

let id= Symbol('123') // Always taken for Unique Value;
let anotherId = Symbol('123');

console.log(id===anotherId)


// Reference Datatype 

const hero = ["Hero1", "Hero2" , "Hero3" ];
const myObj = {
    name : "Saurabh",
    age : 22
}

const myFunc = function(){
    console.log("My saurabh sharma ");
}

console.log(typeof hero);
console.log(typeof myObj);
console.log(typeof myFunc);