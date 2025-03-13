let choice;
let pi = Math.PI;
function cvQ(a){
    return a*2*pi;
}
function sQ(a){
    return a*a*pi;
}
function areaRectangle(a,b){
    return a*b;
}
function cvHcn(a,b){
    return (a+b)*2;
}
do {
    console.log("1. tinh dien tich hinh tron.");
    console.log("2. tinh chu vi hinh tron.");
    console.log("3. tinh dien tich hinh chu nhat.");
    console.log("4. tinh chu vi hinh chu nhat.");
    console.log("5. Thoát.");

    choice = +prompt("nhap thao tac:");
    switch (choice) {
        case 1:
            let dk=+prompt("nhap ban kinh");
            console.log("chu vi hinh tron "+cvQ(dk).toFixed(2));
            break;
        case 2:
            let bk=+prompt("nhap ban kinh");
            console.log("dien tich hinh tron "+sQ(bk).toFixed(2));
            break;
        case 3:
            let r = +prompt("nhap chieu rong");
            let d = +prompt("nhap chieu dai");
            console.log("dien tich hcn "+areaRectangle(r,d));
            break;
        case 4:
            let c = +prompt("nhap chieu rong");
            let p = +prompt("nhap chieu dai");
            console.log("chu vi hcn "+cvHcn(c,p));
            break;
        case 5:
            console.log("Cảm ơn bạn đã sử dụng chương trình");
            break;
        default:
            console.log("sai cu phap");
            break;
    }
} while (choice !== 5);