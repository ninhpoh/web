let c=0;
let l=0;

for(let i=1;i<6;i++){
    let number = Number(prompt(`nhap so thu ${i}`));
    if(number % 2 !==0){
        l++;
    }else{
        c++;
    }
}
document.write(`so luong cua so chan: ${c}`);
document.write(`so luong cua so le: ${l}`);

