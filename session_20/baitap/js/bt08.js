let n = Number(prompt("nhap so bat ki:"));
let f =0;
let list="";
for(let i = 1;i<=n;i++){
    if(n % i === 0){
        console.log(i)
        f++;
    }
    if(f===2){
        list+=i+",";
    }
}
console.log(list)
document.write(list);

