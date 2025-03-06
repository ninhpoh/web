let num = [1,2,3,4,5];
let a = Number(prompt("nhap so bat ki"));
for (let i =0; i<=5;i++){
   var f = 0;
   if(a===num[i]){
        f++;
        break;
   } 
}
if(f>0){
    document.write("Bingo");
}else{
    document.write("chuc may man lan sau");
}
