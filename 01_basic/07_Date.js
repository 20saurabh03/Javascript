//Dates 

let myDate =new Date()
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toDateString())
// console.log(typeof myDate)


let otherDate =new Date (2024, 0, 23)

console.log(otherDate.toDateString());


// -------------------------TimeStamp _________________

const myTimeStamp = Date.now()

console.log(myTimeStamp);


let newDate= new Date()

console.log(newDate.getHours())
console.log(newDate.getMonth()+1)

console.log(`Today Date is ${myDate.toLocaleDateString()} and time is ${myTimeStamp.toPrecision()}`)


let day = newDate.toLocaleString('default' , {
    weekday : "long"

})


console.log(day)