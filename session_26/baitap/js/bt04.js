let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = [];
let c = "dad";

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function filter(arr) {
    if (Array.isArray(arr)) {
        if (arr.length === 0) {
            console.log("Mảng không hợp lệ");
            return;
        }
        let r = arr.filter((item) => Number.isInteger(item) && isPrime(item));
        console.log(r);
    } else {
        console.log("Dữ liệu không đúng");
    }
}

filter(a); 
filter(b); 
filter(c); 
