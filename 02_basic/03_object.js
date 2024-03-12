//Singleton 

// Object.create


// object Literals 
const JsUser = {
    name : "Saurabh Sharma s",
    age : 21,
    location : "Delhi",
    email : "2ashu@gmail.com",
    loogedIn : true

}

// console.log(JsUser.email)
// console.log(JsUser['email'])

// JsUser.email= "xyz@gmail.com"

// Object.freeze(JsUser);

JsUser.email= "abjdiz@gmail.com"

// console.log(JsUser.email)


JsUser.greeting = function(){
    console.log("Hello world ");

}

console.log(JsUser.greeting())


JsUser.greeting2 = function(){
    console.log(`Hello Jsuser , your name ${this.name} and having email address ${this.email} `);

}


console.log(JsUser.greeting2())

