let year = Number(prompt("nam ban can kiem tra"));
if(year % 100 === 0){
    if(year%400===0){
        document.write("day la nam nhuan");
    }else{
        document.write("day ko phai nam nhuan");
    }
}else{
    if(year%4===0){
        document.write("day la nam nhuan");
    }else{
        document.write("day ko phai nam nhuan");
    }
}