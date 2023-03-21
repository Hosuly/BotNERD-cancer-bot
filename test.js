var crypto = require("crypto");

var id = crypto.randomBytes(14).toString('base64url')
var rdns = Math.random().toString(36).slice(2, 7)
let rdint = Math.floor(Math.random() * 10) + 3;

let rndn = (Math.random() + 1).toString(36).substring(7)

let rdemt = ''

var i = Math.floor(Math.random() * 10) + 1


function generateString(length) {
    const charactersLength = id.length;
    for ( let i = 0; i < length; i++ ) {
        rdemt += id.charAt(Math.floor(Math.random() * charactersLength));
    }

    return rdemt;
}


console.log(id)
console.log(rndn)
console.log(rdns)
console.log(generateString(10))
console.log(ratloop())