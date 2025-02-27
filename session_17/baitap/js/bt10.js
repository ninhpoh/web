let n = Number(prompt("mời bạn nhập số n cần kiểm tra"));
let result = (n % Math.sqrt(n) === 0) ? `${n} là số chính phương` : `${n} là số không phải chính phương`;
document.write(result);