let n = parseInt(prompt("Nhập số lượng số Fibonacci cần hiển thị: "));

if (n <= 0) {
    console.log("Vui lòng nhập số nguyên dương.");
} else {
    let List = []; 
    let a = 1, b = 1; 
    for (let i = 0; i < n; i++) {
        List+= a+","; 
        [a, b] = [b, a + b]; 
    }
    document.write("Dãy Fibonacci:", List);
}
