let str = prompt("nhap chuoi bat ki");
let arr=[];
if(Number.isInteger(Number(str))){
    let arr1 = str.split("");
    console.log(arr1);
    arr1.sort((a,b)=> a-b);
    console.log(arr1.join(""));
    arr[0]=arr1[0];
    for(let i= 0;i<arr1.length-1;i++){
        if(arr1[i]==arr1[i+1]){
            arr1.splice(i+1,0);
        }else{
            arr[i+1]=arr1[i+1];
        }
    }
    console.log(arr.join(""));
}else{
    console.log(`day ko hop le`);
}