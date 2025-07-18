// console.log("Hey Sagar You are nice");
// console.log("Hey Sagar You are Good");
// console.log("Hey Sagar You are Handsome");
// console.log("Hey Sagar You are Loyal");
function nice(name) {
    console.log("Hey " + name + " You are nice");
    console.log("Hey " + name + " You are Good");
    console.log("Hey " + name + " You are Handsome");
    console.log("Hey " + name + " You are Loyal");

}
nice("sagar");
nice("Aman");
function sum(a, b, c = 3) {
    return a + b + c;

}
console.log(sum(11, 57.2))
console.log(sum(11, .2))
console.log(sum(25, 45,1))