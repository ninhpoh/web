// let n = Number(prompt("nhap mot so bat ki"));
let n = prompt("nhap mot so bat ki");
let m = 0;

if(Number.isInteger(n) || n > 0){

    for(let i = 1;i <= n;i++){
        m += i;
    }
    console.log(m);
    document.write(m);
}else{
    
    document.write("khong hop le");
}