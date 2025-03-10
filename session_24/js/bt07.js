let arr = [];
let choice;
do {
    console.log("==== Menu ====");
    console.log("1. Nhập chuỗi");
    console.log("2. Hiển thị chuỗi");
    console.log("3. Tính độ dài của chuỗi");
    console.log("4. Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi");
    console.log("5. Kiểm tra chuỗi có phải là chuỗi đối xứng không");
    console.log("6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ");
    console.log("7. Thoát chương trình");
    console.log("================");

    choice = parseInt(prompt("Chọn chức năng: "));
    switch(choice){
        case 1:
            let n = prompt("so luong phan tu trong mang:");
            for(let i = 0;i<n;i++){
                arr[i]=prompt("nhap phan tu vi tri "+i);
            }
            break;
        case 2:
            console.log(arr);
            break;
        case 3:
            console.log("do dai chuoi: "+arr.length);
            break;
        case 4:
            let kyTu = prompt("Nhập ký tự cần đếm:");
            let dem = 0;
            for (let i = 0; i < chuoi.length; i++) {
                if (chuoi[i] === kyTu) {
                    dem++;
                }
            }
            console.log("Số lần xuất hiện của ký tự '" + kyTu + "': " + dem);
            
            break;
        case 5:
            let daoNguoc = "";
            for (let i = chuoi.length - 1; i >= 0; i--) {
                daoNguoc += chuoi[i];
            }
            if (chuoi === daoNguoc) {
                console.log("Chuỗi là chuỗi đối xứng");
            } else {
                console.log("Chuỗi không phải là chuỗi đối xứng");
            }
            break;
        case 6:
            let words = chuoi.split(" ");
            let result = "";
            for (let i = 0; i < words.length; i++) {
                if (words[i].length > 0) {
                    result += words[i][0].toUpperCase() + words[i].slice(1) + " ";
                }
            }
            chuoi = result.trim();
            console.log("Chuỗi sau khi chuyển đổi: " + chuoi);    
        break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!");
    }
}while (choice !== 7);
