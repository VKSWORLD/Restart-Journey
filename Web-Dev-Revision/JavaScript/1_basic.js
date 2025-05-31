// Prompt Example
console.log("This is basics of JS") // print in console
alert("Hellow world") // show pop-up at middle top -- this does not work in node js

a = prompt("Enter your number") // take input
console.log("Your number is " + a ) // this prints the number in console that you entered in pop-up as input 

var isTrue = confirm("Are you learning JS for the first time") // take input for confirmation
if(isTrue){
    console.log("Yes") //print yes on confirming in pop-up
}
else{
    console.log("no") // print no on canceling in pop-up
}

// Variables
var a = 5; //number
var b = "JavaScript" // string
var c = null // object
var d = true // boolean
var e = undefined // undefined
var f = {
    "name": "mohammedkaif",
    "company": "AssigNova"
} // Key value pair -- dictionary, object
console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f) // Print variable type

let age = 45;
if(age>=18 && age<=85){
    console.log("You can drive");
}
else{
    console.log("You can not drive");
}

//ternary operator
var num1 = 45;
var num2 = 28;
let t_o = num1>num2 ? (num1-num2):(num2-num1)
/*
translates to:
if(num1>num2){
    let t_o = num1-num2;
}
else{
    let t_o = num2-num1;
}
*/