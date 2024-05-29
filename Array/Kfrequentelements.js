var topKFrequent = function(nums, k) {
    let charmap = {};
    let bucket = [];
    let ans = []
    for(let i = 0; i < nums.length ; i++){
        if(!charmap[nums[i]]){
            charmap[nums[i]] = 1;
        }else{
            charmap[nums[i]] += 1;
        }
    }
    const entries = Object.entries(charmap)
    for(let [key,value] of entries){
        if(!bucket[value]){
            bucket[value] = new Set().add(key);
        }else{
            bucket[value] = bucket[value].add(key);
        }
    }
    for(let i=bucket.length - 1; i>=0; i--){
        if(bucket[i]){
            ans.push(...bucket[i])
        }
        if(ans.length === k){
            break;
        }
    }
    return ans;
}
