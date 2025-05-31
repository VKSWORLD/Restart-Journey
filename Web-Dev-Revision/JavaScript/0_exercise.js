// #1
let rndm = Math.random()
let operators = {
    "+" : "-",
    "-" : "*",
    "*" : "/",
    "/" : "+"
}
let a = Math.floor(Math.random() * 100) + 1;
let b = Math.floor(Math.random() * 100) + 1;
let c;

if(rndm<0.25){
    c = "+";
}
else if(rndm>=0.25 && rndm<0.50){
    c = "-";
}
else if(rndm>=0.50 && rndm<0.75){
    c = "*";
}
else{
    c = "/";
}

console.log(rndm, a, b, c)
if(rndm<0.1){
    c = operators[c]
    console.log(`Result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    console.log(`Result is ${eval(`${a} ${c} ${b}`)}`)
}

// #2
a = 8
let fac = 1;
let facArr = [];

for (let index = a; index > 0 ; index--) {
    fac = fac * index;
}

function factorial(number) {
    let arr = Array.from(Array(number+1).keys())
    let red = arr.slice(1,).reduce((a, b) => {
        return a*b;
    })
    return red;
}
console.log(fac, factorial(a))