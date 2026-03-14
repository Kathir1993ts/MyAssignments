const console = require("node:console")

let name = "Kathir"
const double = (number) => number * 2

userProfile(name)

function userProfile (name){  
    console.log("Hello,"+name)
}
console.log ("Double value is "+double(25))

setTimeout (function(){  
    console.log("This message is delayed by 2 seconds")
}, 2000)