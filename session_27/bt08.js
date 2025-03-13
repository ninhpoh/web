function maxNum(input) {
    if (typeof input !== 'number' || !Number.isInteger(input)) {
        return "dữ liệu không hợp lệ";
    }
    
    let d = input.toString().split('');
    d.sort((a, b) => b - a);
    
    let result = '';
    for (let digit of d) {
        result += digit;
    }
    
    return result;
}

console.log(maxNum(2941)); 
console.log(maxNum(3875)); 
console.log(maxNum("1h8t")); 
