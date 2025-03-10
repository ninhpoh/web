let arr = [];
let choise;
do {
    choise = Number(prompt("lua chon cua ban:"));

    console.log("==== Menu ====");
    console.log("1. Nhập mảng số nguyên");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó");
    console.log("4. Tính tổng và trung bình cộng của các số dương trong mảng");
    console.log("5. Đảo ngược mảng");
    console.log("6. Kiểm tra mảng có đối xứng không");
    console.log("7. Thoát chương trình");
    console.log("==============");


    switch (choise) {
        case 1:
            let length = Number(prompt("Moi ban nhap vao so phan tu trong mang:"));
            if (length > 0) {
                for (let i = 1; i <= length; i++) {
                    do {
                        let number = prompt("Moi ban nhap vao gia tri vi tri thu " + i);
                        if (Number.isInteger(Number(number))) {
                            arr.push(Number(number));
                            break;
                        } else {
                            alert("Moi ban nhap lai gia tri so nguyen tai vi tri " + i);
                        }
                    } while (1);
                }

            } else {
                console.log("So luong phan tu khong hop le!");
            }
            break;
        case 2:
            console.log(arr);
            break;
        case 3:
            let arr11 = arr[0];
            for (let i = 0; i < arr.length; i++) {
                
                if (arr11 < arr[i]) {
                    arr11 = arr[i];
                }
            }
            console.log("so lon nhat la: " + arr11);
            break;
        case 4:
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                if(arr[i]>0){
                sum += arr[i];
                }
            }
            console.log("tong cac phan tu trong mang: " + sum);
            let re = sum / arr.length;
            console.log("tbc cua mang; " + re);


            break;
        case 5:
            
            break;
        case 6:
            arr.sort((a, b) => a - b);
            console.log(arr[arr.length - 2]);

            break;
        case 7:
            console.log("thoat chuong trinh");
            break;
        case 9:
            break;
        default:
            console.log("loi thao tac");
            break;
    }
} while (choise !== 7);
