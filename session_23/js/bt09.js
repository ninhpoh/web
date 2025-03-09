let arr = [];
let choice;
let flag;
let sum;
do {
    console.log("================== MENU ==================");
    console.log("1. Nhap so phan tu va gia tri cac phan tu");
    console.log("2. In ra gia tri cac phan tu dang quan ly");
    console.log("3. In ra gia tri cac phan tu chan va tinh tong");
    console.log("4. In ra gia tri lon nhat va nho nhat trong mang");
    console.log("5. In ra cac so nguyen to trong mang va tinh tong");
    console.log("6. Nhap vao mot so va thong ke so lan xuat hien");
    console.log("7. Them mot phan tu vao vi tri chi dinh");
    console.log("8. Thoat");
    console.log("=========================================");

    choice = Number(prompt("Lua chon cua ban:"));
    switch (choice) {
        case 1:
            let length = Number(prompt("Moi ban nhap vao so phan tu trong mang:"));
            if (length > 0) {
                for (let i = 1; i <= length; i++) {
                    do {
                        let number = prompt("Moi ban nhap vao gia tri vi tri thu " + i);
                        if (Number.isInteger(Number(number))) {
                            arr.push(Number(number)); 
                            break;
                        } else {
                            alert("Moi ban nhap lai gia tri so nguyen tai vi tri " + i);
                        }
                    } while (1);
                }
            } else {
                console.log("So luong phan tu khong hop le!");
            }
            break;

        case 2:
            console.log("Mang hien tai:", arr);
            break;
        case 3:
            flag = 0;
            sum = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    sum += arr[i];
                    console.log(arr[i]);
                    flag = 1;
                }
            }
            if (flag) {
                console.log("Tong cua tat ca so chan trong mang la " + sum);
            } else {
                console.log("Trong mang khong co so chan.");
            }
            break;

        case 4:
            if (arr.length === 0) {
                console.log("Mang trong!");
            } else {
                let sortedArr = arr.slice().sort((a, b) => a - b); 
                console.log("Gia tri lon nhat: " + sortedArr[sortedArr.length - 1] + ", Gia tri nho nhat: " + sortedArr[0]);
            }
            break;

        case 5:
            sum = 0;
            let primeNumbers = [];
            for (let i = 0; i < arr.length; i++) {
                let num = arr[i];
                if (num > 1) {
                    let isPrime = true;
                    for (let j = 2; j <= Math.sqrt(num); j++) {
                        if (num % j === 0) {
                            isPrime = false;
                            break;
                        }
                    }
                    if (isPrime) {
                        primeNumbers.push(num);
                    }
                }
            }
            if (primeNumbers.length > 0) {
                console.log("So nguyen to trong mang:", primeNumbers);
            } else {
                console.log("Khong co so nguyen to trong mang.");
            }
            break;

        case 6:
            let number = Number(prompt("Moi ban nhap vao mot so de kiem tra:"));
            let count = 0;
            if (Number.isInteger(number)) {
                for (let i = 0; i < arr.length; i++) {
                    if (number === arr[i]) {
                        count++;
                    }
                }
            }
            if (count !== 0) {
                console.log("So " + number + " xuat hien " + count + " lan trong mang.");
            } else {
                console.log("So " + number + " khong ton tai trong mang.");
            }
            break;

        case 7:
            let index = Number(prompt("Moi ban nhap vi tri can them:"));
            let value = Number(prompt("Moi ban nhap gia tri can them:"));
            if (index >= 0 && index <= arr.length) {
                arr.splice(index, 0, value);
                console.log("Mang sau khi them phan tu:", arr);
            } else {
                console.log("Vi tri khong hop le!");
            }
            break;

        case 8:
            console.log("Cam on ban da su dung chuong trinh!");
            break;

        default:
            console.log("Lua chon khong hop le! Vui long chon tu 1 den 8.");
            break;
    }
} while (choice !== 8);
