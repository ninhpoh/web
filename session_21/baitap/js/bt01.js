// let a = prompt("nhap so thu nhat");
// let b = prompt("nhap so thu hai");
// let c = prompt("nhap so thu ba");
// let d = prompt("nhap so thu bon");
// let e = prompt("nhap so thu nam");
// let str=a+b+c+d+e;
// console.log(str);
// let r = 0;
// for(let i =0;i<5;i++){
//     if(str[i]%2===0){
//         continue;
//     }
//     r += Number(str[i]);
// }
// console.log(r);

let sum = 0;
for(let i=1;i<6;i++){
    let number = Number(prompt(`nhap so thu ${i}`));
    if(number % 2 !==0){
        sum += number
    }
}
document.write(`tong cua cac so le: ${sum}`)