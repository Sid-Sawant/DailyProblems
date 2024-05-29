var majorityElement = function(nums) {
    let charmap = {};
    
    for(let i=0; i<nums.length ; i++){
        if(charmap[nums[i]]){
            charmap[nums[i]] += 1;
        }else{
            charmap[nums[i]] = 1;
        }
    }
    const entries = Object.entries(charmap);
    for(const [key,value] of entries){
        if(value>nums.length/2){
            return key;
        }
    }
    
};