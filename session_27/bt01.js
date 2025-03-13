function sum(a, b) {
    return a + b;
}
let minut = (a,b) => a-b;
function mutil(a, b) {
    return a * b;
}
function chia(a, b) {
    return a / b;
}
let choice;
let num1, num2;
do {
    console.log("1. Cộng hai số.");
    console.log("2. Trừ hai số.");
    console.log("3. Nhân hai số.");
    console.log("4. Chia hai số.");
    console.log("5. Thoát.");

    choice = +prompt("nhap thao tac:");
    switch (choice) {
        case 1:
            num1 = +prompt("nhap so thu nhat:");
            num2 = +prompt("nhap so thu hai:");
            console.log(sum(num1, num2));
            break;
        case 2:
            num1 = +prompt("nhap so thu nhat:");
            num2 = +prompt("nhap so thu hai:");
            console.log(minut(num1, num2));
            break;
        case 3:
            num1 = +prompt("nhap so thu nhat:");
            num2 = +prompt("nhap so thu hai:");
            console.log(mutil(num1, num2));
            break;
        case 4:
            num1 = +prompt("nhap so thu nhat:");
            num2 = +prompt("nhap so thu hai:");
            console.log(chia(num1, num2));
            break;
        case 5:
            console.log("Cảm ơn bạn đã sử dụng chương trình");
            break;
        default:
            console.log("sai cu phap");
            break;
    }
} while (choice !== 5);

