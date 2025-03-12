function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function filter(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    if (arr.length < 10 || arr.length > 20) {
        console.log("Mảng phải có từ 10 đến 20 phần tử");
        return;
    }

    let result = arr.filter(item => Number.isInteger(item) && isPrime(item) && item % 2 !== 0);

    if (result.length === 0) {
        console.log("Mảng không có dữ liệu");
    } else {
        console.log(result);
    }
}


filter([10, 2, 3, 5, 7, 9, 11, 13, 15, 17]); 
filter("abc");                              
filter([3, 5, 7]);                          
