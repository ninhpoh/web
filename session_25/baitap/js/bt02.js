function sum(a,b){
    if(Number.isInteger(Number(a))&&Number.isInteger(Number(b))){
        return a+b;
    }else{
        console.log("du lieu ko hop le");
    }
}

console.log(sum(2,6));
console.log(sum(3,"text"));
console.log(sum(2.4,4));
console.log(sum(7,-7));


