let Toan = prompt("moi nhap mon toan:");
let numToan = Number (Toan);
let Ly = prompt("moi nhap mon ly:");
let numLy = Number (Ly);
let Hoa = prompt("moi nhap mon hoa:");
let numHoa = Number (Hoa);
let sum = numToan + numLy + numHoa;
let poin = sum / 3; 
console.log(poin);
document.write("diem tb cua ban la: "+ poin+"<br>");

if(poin >= 8){
    document.write("hoc sinh gioi");
}else if(poin <= 7.9 && poin >= 6.5){
    document.write("hoc sinh kha"); 
}else if(poin <= 6.4 && poin >= 5){
    document.write("hoc sinh trung binh"); 
}else{
    document.write("hoc sinh yeu"); 
}