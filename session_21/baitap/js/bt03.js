let pass ="12345";
let f=0;
do{
    let input= prompt("nhap mk de dang nhap (12345)");
    if(pass===input){
        document.write("dang nhap thanh cong");
        break;
    }else{
        f++;
        alert("dang nhap khong thanh cong");
    }
}while(f<3);
if(f==3){
    document.write(`loi dang nhap`);
}
