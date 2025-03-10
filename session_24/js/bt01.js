let arr = [];
let choise;
let brr = [];
do {
    choise = Number(prompt("lua chon cua ban: (Nhap 9 de hien menu"));

    console.log("====Menu====");
    console.log("1. Nhập mảng");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng");
    console.log("4. Tính tổng các phần tử trong mảng");
    console.log("5. Tìm số lần xuất hiện của một phần tử trong mảng");
    console.log("6. Sắp xếp mảng tăng dần");
    console.log("7. Thoát chương trình");
    console.log("============");

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
            if (arr.length === 0) {
                console.log("Mang trong!");
            } else {
                brr = arr.slice().sort((a, b) => a - b);
                console.log("Gia tri lon nhat: " + brr[brr.length - 1] + ", Gia tri nho nhat: " + brr[0]);
            }
            break;
        case 4:
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            console.log("tong cac phan tu trong mang: " + sum);

            break;
        case 5:
            let a = prompt("nhap ki tu can tim:");
            let f = 0;
                for (let i = 0; i < arr.length; i++) {
                    if (a == arr[i]) {
                        f++;
                    }
                }
                console.log("so " + a + " xuat hien " + f + " lan");
            break;
        case 6:
            arr.sort((a,b)=>a-b);
            console.log(arr);
            
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