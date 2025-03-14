function sortEvenNumbers(arr) {
    if (!Array.isArray(arr) || !arr.every(num => Number.isInteger(num))) {
        return "dữ liệu không hợp lệ";
    }
    
    let evenNumbers = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        }
    }
    evenNumbers.sort((a, b) => a - b);
    
    let evenIndex = 0;
    let result = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            result.push(evenNumbers[evenIndex++]);
        } else {
            result.push(num);
        }
    }
    return result;
}

function averageNumbers(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return "Danh sách rỗng hoặc không hợp lệ";
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum / arr.length;
}

function maxEvenNumber(arr) {
    let maxEven = null;
    for (let num of arr) {
        if (num % 2 === 0 && (maxEven === null || num > maxEven)) {
            maxEven = num;
        }
    }
    return maxEven !== null ? maxEven : "Không có số chẵn";
}

function minOddNumber(arr) {
    let minOdd = null;
    for (let num of arr) {
        if (num % 2 !== 0 && (minOdd === null || num < minOdd)) {
            minOdd = num;
        }
    }
    return minOdd !== null ? minOdd : "Không có số lẻ";
}

let numbers = [];
let choice;
do {
    console.log("\nMENU:");
    console.log("1. Nhập danh sách số nguyên.");
    console.log("2. Tính trung bình các số.");
    console.log("3. Tìm số chẵn lớn nhất.");
    console.log("4. Tìm số lẻ nhỏ nhất.");
    console.log("5. Thoát.");

    choice = +prompt("Nhập thao tác:");
    
    switch (choice) {
        case 1:
            let input = prompt("Nhập danh sách số nguyên, cách nhau bởi dấu phẩy:");
            numbers = [];
            let inputArr = input.split(",");
            for (let num of inputArr) {
                let parsedNum = parseInt(num.trim());
                if (!isNaN(parsedNum)) {
                    numbers.push(parsedNum);
                }
            }
            console.log("Danh sách số nguyên đã nhập:", numbers);
            break;
        case 2:
            console.log("Trung bình các số:", averageNumbers(numbers));
            break;
        case 3:
            console.log("Số chẵn lớn nhất:", maxEvenNumber(numbers));
            break;
        case 4:
            console.log("Số lẻ nhỏ nhất:", minOddNumber(numbers));
            break;
        case 5:
            console.log("Cảm ơn bạn đã sử dụng chương trình.");
            break;
        default:
            console.log("Sai cú pháp, vui lòng nhập lại.");
            break;
    }
} while (choice !== 5);
