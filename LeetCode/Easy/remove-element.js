/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;
    
    nums.forEach(num => {
        if (num !== val) {
            nums[k] = num;
            k++;
        }
    });

    return k;
};