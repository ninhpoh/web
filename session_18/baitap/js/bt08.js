const a = Number(prompt("Nhập cạnh a: "));
const b = Number(prompt("Nhập cạnh b: "));
const c = Number(prompt("Nhập cạnh c: "));
let result;
if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        result = "tam giác đều";
    } else if (a === b || a === c || b === c) {
        result = "tam giác cân";
    } else if (
        a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a
    ){
        result = "tam giác vuông";
    } else {
        result = "tam giác thường";
    }
} else {
    result = "không phải tam giác hợp lệ";
}
document.write(result);