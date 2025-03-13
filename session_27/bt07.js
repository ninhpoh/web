function findMissing(arr) {
    if (!Array.isArray(arr) || !arr.every(Number.isInteger)) return "dữ liệu không hợp lệ";

    let n = arr.length + 1, sum = (n * (arr[0] + arr.at(-1))) / 2;
    return sum - arr.reduce((a, b) => a + b, 0);
}


console.log(findMissing([1, 2, 3, 5])); 
console.log(findMissing([1, 2, 4, 5])); 
console.log(findMissing("abc")); 
