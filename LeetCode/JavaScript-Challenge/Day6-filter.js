/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let newArr = [];
    // for( let i = 0; i < arr.length; i++){
    //     if(fn(arr[i], i)){
    //         newArr.push(arr[i])
    //     }
    // }
    arr.forEach((element, index)=>{
        if(fn(element, index)){
            newArr.push(element)
        }
    })
    return newArr;
};