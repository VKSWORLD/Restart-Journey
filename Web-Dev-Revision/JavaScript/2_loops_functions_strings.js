// For loop
let a = 1;
for (let i = 0; i < 100; i++) {
    console.log(i+a);
}

// For In loop -- object
let obj = {
    Name : "Mohammedkaif",
    Role : "Wordpress Developer",
    Company : "AssigNova"
}
for (const key in obj) {
        const element = obj[key];
        console.log(key, element);
}

// For Of loop -- array
for (const c of "Mohammedkaif") {
    console.log(c);
}

// While loop
let i = 0;
while (i<10) {
    console.log(i)
    i++;
}

// Do while loop
let j = 15;
do {
    console.log("It is going to run one time for sure, Value of j is ", j)
    j++;
} while (j<10);

// Function
function revise(name){
    console.log("Hey " + name + " you are working with consistancy")
    console.log("Hey " + name + " you are working with dicipline")
}
revise("mohammedkaif")
revise("kaif")

// Function without value and with value
function sum(num1, num2){
    console.log(num1 + num2)
}
sum(5,3)
sum(8,16)

function sum1(num3, num4, num5 = 11){
    return num3+num4+num5;
    //num5 is default and optional value
}
let result = sum1(12, 22)
let result1 = sum1(12, 22, 2)
console.log("Function with value result is " + result);
console.log("Function with value result is " + result1);

// Arrow function
const func = (x) => {
    console.log("I am an arrow function " + x)
}
func(55)
func(68)

// Strings
let real_name = "Mohammedkaif"
let salary = 10000

console.log(real_name.length)
console.log(real_name[0], real_name[4])

console.log("My name is "+ real_name + "and my salary is "+ salary)
console.log(`My name is ${real_name} and my salary is ${salary}`) //Template literals

console.log(real_name.toLowerCase())
console.log(real_name.toUpperCase())
console.log(real_name.slice(2, 5))
console.log(real_name.length) //No need of ()
console.log(real_name.replace("Moh", "11"))