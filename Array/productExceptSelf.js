var productExceptSelf = function(nums) {
    let result = [];
    let start = 1;
    let end = 1;
    for(let i=0; i<nums.length ; i++){
        result.push(start);
      start = start*nums[i];
    }
    for(let i=nums.length-1;i>=0;i--){
      result[i] = result[i] * end;
      end = end * nums[i];
    }
    return result;
}    