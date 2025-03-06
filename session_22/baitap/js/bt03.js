let str = prompt("nhap chuoi bat ki");
let a="";
if(Number.isInteger(Number(str))){
    let arr1 = str.split("");
    console.log(arr1);
    a = +arr1.reverse().join("");    
    console.log(a);
    // for(let i = arr1.length-1;i>=0;i--){
    //     arr.push(arr1[i]);
    // }
    // console.log(arr);
}else{
    console.log(`day ko hop le`);
}




