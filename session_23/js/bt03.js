let n = prompt("nhap so luong trong mang");
let arr=[];
let f=0;
if(Number.isInteger(Number(n)) && n>0){
    for(let i = 0;i<n;i++){
        arr[i]=prompt("nhap so bat ki "+(i+1));
    }
    console.log(arr);
    for(let i =0;i<=n;i++){
        if(arr[i]<0){
            f++;
        }
    }
    console.log("so phan tu am "+f);
}else if(n==0){
    console.log('khong co phan tu trong mang')
}else{
    console.log('so luong phan tu ko hop le');
}