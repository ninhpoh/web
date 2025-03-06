let arr=[2,3,4,5,6,7,8];
let odd=0;
let even=0;

for(let i=0;i<arr.length;i++){
    if(Number.isInteger(Number(arr[i]))){
        if(arr[i]%2===0){
            odd+=arr[i];
        }else{
            even+=arr[i];
        }
    }else{
        document.write("day ko hop le");
        break;
    }
}
document.write(odd+"<br>");
document.write(even);
