let arr = [];
let choise;
do{
    choise = Number(prompt("lua chon cua ban: (Nhap 9 de hien menu)"));

    console.log("====Menu====");
    console.log("1. Nhập mảng");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm các phần tử chẵn và lẻ");
    console.log("4. Tính trung bình cộng của mảng");
    console.log("5. Xóa phần tử tại vị trí chỉ định");
    console.log("6. Tìm phần tử lớn thứ hai trong mảng");
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
            let k=0;
            let j=0;
            let even=[];
            let odd=[];
            for(let i = 0;i<arr.length;i++){
                if(arr[i]%2===0){
                    even[k]=arr[i];
                    k++;
                }else{
                    odd[j]=arr[i];
                    j++;
                }
            }
            console.log(even);
            console.log(odd);            
            break;
        case 4:
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            console.log("tong cac phan tu trong mang: " + sum);
            let re = sum/arr.length;
            console.log("tbc cua mang; "+re);
            

            break;
        case 5:
            let a = +prompt("nhap vi tri can xoa:");
            if(Number.isInteger(Number(a))||a>0){
                arr.splice(a,1);
            }else{
                console.log("ko ton tai vi tri nay");   
            }
            arr.splice(a,1);
            break;
        case 6:
            arr.sort((a,b)=>a-b);
            console.log(arr[arr.length-2]);
            
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
