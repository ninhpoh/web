let n = Number(prompt("thang ban muon kiem tra"));
if(n > 12 || n<=0){
    document.write("thang nay khong ton tai");
}else{
    if(n === 1 || n === 3 || n === 5 || n === 7 || n ===8 || n === 10 || n === 12){
        document.write(n+" la thang co 31 ngay");
    }else if(n === 2){
        document.write("thang 2 la thang co 28 ngay hoac 29 khi vao nam nhuan");
    }else{
        document.write(n+" la thang co 30 ngay");
    }
}
