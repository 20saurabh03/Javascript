const accountId = 12290;
let accountEmail =  "saurabh@gmail.com";
var accountPassword = "12345"
let accountState;

console.table([accountId,accountEmail,accountPassword]);

// accountId = 09090;
accountEmail ="Ashu@gmail.com";
accountPassword = "Saurabh@12345";


/*
    Perfer not use var .use Let instead
    Because of issuse in block scope and functional scope 
*/
console.table([accountId,accountEmail,accountPassword,accountState]);



