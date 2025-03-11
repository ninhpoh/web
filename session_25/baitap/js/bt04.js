function element(a){
    if(Number.isInteger(Number(a))==false||a<0){
        console.log("dữ liệu không hợp lệ");
        return;
    }
    let f=0;
    for(let i = 1;i<=a;i++){
        if (a%i==0){
            f++;
        }
    }
    if(f==2){
        console.log("la so ngto");
        return;
    }
        console.log("ko phai la so ngto");
}
element(7);
element("text");
element(6);