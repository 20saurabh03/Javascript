const tinder = new Object()

tinder.id=123
tinder.name = "Saurabh"
tinder.isLoggedIn = false

// console.log(tinder)

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder))


console.log(tinder.hasOwnProperty('name'))


const regularname = {
    email : "ashu@google.com",
    fullname: {
        userfullname: {
            firstname: "Saurabh",
            lastname: "Sharma"
        }
    }
}

// console.log(regularname.fullname.userfullname.firstname)

const Obj1 = {1:'a',2:'b'}
const Obj2 = {3:'c',4:'d'}

const Obj3 = {...Obj1,...Obj2}

// console.log(Obj3)

