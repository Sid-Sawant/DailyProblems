var groupAnagrams = function(strs) {
    let charmap = {};
    for(const s of strs){
        const array = Array(26).fill(0);
        for(let i =0;i<s.length;i++){
            const ascii = s.charCodeAt(i);
            array[ascii-97] += 1;
        }
        const key = array;
        if(charmap[key]){
            charmap[key].push(s);
        }else{
            charmap[key] = [s];
        }
    }
    return Object.values(charmap);
};