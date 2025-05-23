/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function(nums, k, edges) {
    const total = nums.reduce((a, b) => a + b, 0);
    const gains = nums.map(num => (num ^ k) - num);
    
    gains.sort((a, b) => b - a); 

    let maxGain = 0;
    let count = 0;

    for (let gain of gains) {
        if (gain > 0) {
            maxGain += gain;
            count++;
        }
    }

    if (count % 2 === 0) {
        return total + maxGain;
    } else {
        const removeSmallestIncluded = gains[count - 1];
        const addNextNegative = count < gains.length ? gains[count] : -Infinity;
        const extra = Math.min(removeSmallestIncluded, -addNextNegative);
        return total + maxGain - extra;
    }

};