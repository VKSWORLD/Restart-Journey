/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const store = {};
    let count = 0;
    return function(...args) {
        const key = args.join(',')
        if(store.hasOwnProperty(key)){
            return store[key];
        }else{
            const result = fn(...args);
            store[key] = result;
            count++;
            return result;
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */