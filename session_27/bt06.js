function array(arr) {
    if (!Array.isArray(arr)) {
        return "dữ liệu không hợp lệ";
    }
    
    for (let num of arr) {
        if (typeof num !== 'number' || !Number.isInteger(num)) {
            return "dữ liệu không hợp lệ";
        }
    }
    
    if (arr.length < 2) return true;
    
    let f = arr[1] - arr[0];
    
    let invalid = arr.find((num, index) => index > 0 && num - arr[index - 1] !== f);
    
    return invalid === undefined;
}

console.log(array([2, 4, 6, 8])); 
console.log(array([3, 6, 9, 12, 14])); 
console.log(array("abc")); 
