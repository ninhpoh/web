function evenNumbers(arr) {
    if (!Array.isArray(arr) || !arr.every(num => Number.isInteger(num))) {
        return "dữ liệu không hợp lệ";
    }
    
    let evenNumbers = arr.filter(num => num % 2 === 0).sort((a, b) => a - b);
    let evenIndex = 0;
    
    return arr.map(num => num % 2 === 0 ? evenNumbers[evenIndex++] : num);
}


let arr = [5, 3, 2, 8, 1, 4];
let crr ="abc"

console.log(evenNumbers(arr));
console.log(evenNumbers(crr));