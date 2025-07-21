/*  exercise 9 solution and shoutout video 59
 */
let a = prompt("Enter first number");
let c = prompt("Enter operation");
let b = prompt("Enter Second  number");
let obj = {
    '+': '-',
    '/': '**',
    '-': '/',
    '*': '+',

}
if (Math.random() < 0.1) {
    c = obj[c];
    alert(`The result is ${eval(`${a}${c}${b}`)}`)


}

else {
    alert(`The result is ${eval(`${a}${c}${b}`)}`)


}


// let c = sum(16,14)
// let d = sub(16,14)
// let p = mul(16,14)
// let q = div(16,14)
// console.log("output of operation --->> "+ c)
// console.log("output of operation --->> "+ d)
// console.log("output of operation --->> "+ p)
// console.log("output of operation --->> "+ q)