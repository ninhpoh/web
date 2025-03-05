let a = Number(prompt("nhap so thu nhat"));
let b = Number(prompt("nhap so thu hai"));
let n=1;

if(Number.isInteger(a) && a > 0 &&Number.isInteger(b) && b > 0 ){
    for(let i=0;i<b;i++){
        n *= a;
    }
    console.log(n);
    document.write(`${a} mũ ${b} = ${n}`);
}else{
    document.write("khong hop le");
}