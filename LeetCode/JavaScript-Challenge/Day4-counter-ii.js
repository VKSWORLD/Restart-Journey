/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let number = init;
    return{
        increment: function(){
            number += 1;
            return number;
        },
        decrement: function(){
            number -= 1;
            return number;
        },
        reset: function(){
            number = init;
            return number;
        }
    };
};