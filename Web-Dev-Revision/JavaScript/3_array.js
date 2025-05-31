let arr = [1, 3, 5, 7]
// Arrays are mutable;

// Array with inbuilt functions 
console.log(arr)
console.log(typeof arr) // Object

console.log(arr.length)
console.log(arr.toString())
console.log(arr.join(" and "))
console.log(arr.pop(), arr)
console.log(arr.push(9), arr)
console.log(arr.shift(), arr)
console.log(arr.unshift(-1), arr)

console.log(delete(arr[0]), arr)

// Array with loops
arr = [1, 3, 5, 7, 9, 11]
arr.forEach((value, index)=>{
    console.log(value,index)
})

for (const element of arr) {
    console.log(element)
}

// Array and map
let newArr = arr.map((e) =>{
    return e**2; 
})
console.log(newArr) // You can use for loop for this but its not good

// Array with filter
const greaterThan =(e)=>{
    if (e>30) {
        return true;
    }
    return false;
}
console.log(newArr.filter(greaterThan))

// Reduce
let arr2 = [1, 2, 3, 4, 5, 6]
const red = (a, b)=>{
    return a*b;
}
console.log(arr2.reduce(red))
console.log(arr, arr2, newArr)

// from
let Name = 'Mohammedkaif'
console.log(Array.from(Name))