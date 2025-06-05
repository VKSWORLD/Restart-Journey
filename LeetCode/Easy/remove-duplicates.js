/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    nums.sort((a, b) => a - b);
    const num1 = [];
    nums.forEach(num => {
        if (num1[num1.length - 1] !== num) {
            num1.push(num);
        }
    });
    num1.forEach((val, i) => nums[i] = val);
    return num1.length;
};
