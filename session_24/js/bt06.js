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
    switch (choice) {
        case 1:
            let n = prompt("so luong phan tu trong mang:");
            for (let i = 0; i < n; i++) {
                arr[i] = prompt("nhap phan tu vi tri " + i);
            }
            break;
        case 2:
            console.log(arr);
            break;
        case 3:
            console.log("do dai chuoi: " + arr.length);
            break;
        case 4:
            let f = prompt("ki tu can tim:");
            let q = 0;
            for (let i = 0; i < arr.length; i++) {
                if (f == arr[i]) {
                    q++;
                }
            }
            console.log("ki tu " + f + " xuat hien " + q + " lan");

            break;
        case 5:
            let str = arr.join("");
            let reversedStr = str.split("").reverse().join("");

            if (str === reversedStr) {
                console.log("Chuỗi là chuỗi đối xứng.");
            } else {
                console.log("Chuỗi không phải là chuỗi đối xứng.");
            }
            break;
        case 6:
            let sentence = arr.join(" ");
            let capitalizedSentence = sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

            console.log("Chuỗi sau khi chuyển đổi:", capitalizedSentence);
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!");
    }
} while (choice !== 7);
