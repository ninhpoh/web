let n = prompt("nhap so luong trong mang");
let arr=[];
let f=0;
let b=[];
if(Number.isInteger(Number(n)) && n>0){
    for(let i = 0;i<n;i++){
        arr[i]=prompt("nhap so bat ki "+(i+1));
    }
    for(let i = 0;i<n;i++){
        if(Number.isInteger(Number(arr[i]))){
            b[f]=arr[i]
            f++;
        }
    }
    console.log(b.join(","));
    
}else if(n==0){
    console.log('khong co phan tu trong mang')
}else{
    console.log('so luong phan tu ko hop le');
}