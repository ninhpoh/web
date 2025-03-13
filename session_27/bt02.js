function addStd(){
    let n=prompt("so luong sv muon them")
    let name;
    for(let i =0;i<n;i++){
        name = prompt("ten sv vi tri "+(i+1));
        listStd.push(name);
    }
}
function showStd(){
    console.log(listStd);
}
function searchStd(){
    let f = prompt("sv muon tim:");
    let n = listStd.indexOf(f);
    if (n>-1){
        console.log("sv muon muon tim o vi tri"+ (n+1));
    }else{
        console.log("sv khong co trong danh sach");
    }
    
}
function deleteStd() {
    let name = prompt("Nhập tên sinh viên muốn xóa:");
    let index = listStd.indexOf(name);

    if (index > -1) {
        listStd.splice(index, 1);
        console.log(`Đã xóa sinh viên "${name}" khỏi danh sách.`);
    } else {
        console.log(`Không tìm thấy sinh viên "${name}" trong danh sách.`);
    }
}
let listStd=[];
let choice;
do{
    console.log("1. Nhập danh sách sinh viên.");
    console.log("2. Hiển thị danh sách sinh viên.");
    console.log("3. Tìm sinh viên theo tên.");
    console.log("4. Xóa sinh viên khỏi danh sách.");
    console.log("5. Thoát.");

    choice = +prompt("nhap thao tac:");
    switch(choice){
        case 1:
            addStd();
            break;
        case 2:
            showStd();
            break;
        case 3:
            searchStd();
            break;
        case 4:
            deleteStd();
            break;
        case 5:
            console.log("Cảm ơn bạn đã sử dụng chương trình");
            break;
        default:
            console.log("sai cu phap");
            break;
    }
}while(choice!==5);
