function ageCalculator() {
    let now = new Date()
let user = new Date (prompt("Enter a Birth Date"))
let years = now.getFullYear() - user.getFullYear()
alert('Years ===>'+ years)
let milliSec = now - user;
 //console.log(milliSec)
let days = milliSec / (1000 * 60 * 60 * 24);
alert('days ==>'+ Math.floor(days));

let months = now.getMonth() - user.getMonth()
let total = years *12 + months
alert('Months ==>'+ total)

let min = 24 * 60
let min2 = min * 365
let min3 = min2 * 14
alert("Minutes ===>"+ min2)
}