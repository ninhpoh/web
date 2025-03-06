let str = prompt("nhap chuoi bat ki");
let arr="";
if(Number.isInteger(Number(str))){
    let arr1 = str.split("");
    console.log(arr1);
    arr1.sort((a,b)=> a-b);
    console.log(a=arr1.join(""));
}else{
    console.log(`day ko hop le`);
}