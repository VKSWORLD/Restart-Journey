/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    // let num = 0;
    // let newArr = arr.map((e)=>{
    //     let a = fn(arr[num], num);
    //     num++;
    //     return a;
    // })
    // return newArr;

    let newArr = [];
    for( let i = 0; i < arr.length; i++){
        newArr.push(fn(arr[i],i))
    }
    return newArr
};