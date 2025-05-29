var twoSum = function(nums, target) {
    
    // const n = nums.length;
    // for(let i = 0; i < n; i++){
    //     for(let j = 0; j < n; j++){
    //         if(nums[i] + nums[j] == target && i != j){
    //             return [i, j]
    //         }
    //     }
    // }

    const map = new Map();
    for(let i = 0; i < nums.length; i++){
        let n = target - nums[i];
        if(map.has(n)){
            return [map.get(n), i];
        }
        map.set(nums[i], i);
    }
};
