let poin = Number(prompt("so nam kinh nhiem cua ban?"));
if(poin > 6){
    document.write("Quan ly");
}else if(poin <= 6 && poin >= 4  ){
    document.write("Chuyen vien"); 
}else if(poin >1 && poin <= 3){
    document.write("nhan vien"); 
}else{
    document.write("nhan vien moi"); 
}