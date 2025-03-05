let input = prompt("nhap chuoi bat ki");
let search = prompt("ki tu can tim");

for(let i = 0; i<=input.length;i++){
    if(search==input[i]){
        document.write("ton tai tu can tim");
        break;
    }else{
        document.write("khong ton tai tu can tim");
        break;
    }
}