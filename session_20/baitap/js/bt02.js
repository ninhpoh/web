let n = prompt("nhap so bat ki");
let m = "cac so chia het cho 5 tu 1 den "+n+" la: ";
if(Number.isInteger(n) || n > 0){
    for(let i = 1; i <= n;i++){
        if(i % 5 !== 0 ){
            continue; 
        }
        m +=i+",";
    }
    document.write(m);
}else{
    document.write("khong hop le");
}