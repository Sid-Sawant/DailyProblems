var twoSum = function(nums, target) {
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if(map.hasOwnProperty(diff)) {
            return [map[diff], i];
        } else {
            map[nums[i]] = i;
        }
    }
};