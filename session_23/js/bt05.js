let n = prompt("nhap so luong trong mang");
let arr=[];
let f=0;
let b=[];
let s=0;
if(Number.isInteger(Number(n)) && n>0){
    for(let i = 0;i<n;i++){
        arr[i]=prompt("nhap so bat ki "+(i+1));
    }
    console.log(arr.join(","));
    for(let i = 0;i<n;i++){
        if(Number.isInteger(Number(arr[i]))){
            b[f]=arr[i]
            f++;
        }
    }
    console.log(b.join(","));
    for(let i = 0;i<b.length;i++){
        s += +b[i];
    }
    console.log(s);
}else if(n==0){
    console.log('khong co phan tu trong mang')
}else{
    console.log('so luong phan tu ko hop le');
}
