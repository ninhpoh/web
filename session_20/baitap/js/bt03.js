let n = prompt("nhap so mot bat ki:");
let m="";
if(Number.isInteger(n)|| n > 0){
    for(let i =0; i < n.length-2;i++){
        for(let j=n.length-1;j>=0;j--){
           m += n[j];
        }
    }
    console.log(m);
    if(m==n){
        document.write("la so doi xung");
    }else{
        document.write("khong phai so doi xung");
    }
}else{
    document.write("khong hop le");
}