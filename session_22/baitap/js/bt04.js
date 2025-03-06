let str = prompt("nhap chuoi bat ki");
let arr=0;
if(Number.isInteger(Number(str))){
    let arr1 = str.split("");
    console.log(arr1);  
    arr=arr1[0];  
    for(let i=0;i<arr1.length;i++){
        console.log(arr1[i]);
        if(arr<arr1[i]){
            arr=arr1[i];
        }
    }
    console.log("so lon nhat la: "+arr);
}else{
    console.log(`day ko hop le`);
}
