let arr =[];
let f=0;
let b=[];
for (let i = 0;i<=9;i++){
    arr[i]=prompt("nhap so bat ki tai vi tri "+(i+1));
}
console.log(arr);

for (let i = 0;i<=9;i++){
    if(Number.isInteger(Number(arr[i]))){
        if(arr[i]>=10){
            b[f]=arr[i];
            f++;
        }
    }
}

if(f==0){
    console.log("ko co so nao lon hon hoac bang 10");
}else{
    console.log(b.join(","));
}