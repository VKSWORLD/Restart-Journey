/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        for(let i = functions.length - 1; i>=0; i--){
            x = functions[i](x);
        }
        return x;
        // return functions.reduceRight((operations, fn) => fn(operations), x);
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */