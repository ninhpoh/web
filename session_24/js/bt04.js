let matrix = [];
let rows = 0;
let cols = 0;
let choice;

do {
    console.log("==== Menu ====");
    console.log("1. Nhập mảng 2 chiều");
    console.log("2. Hiển thị mảng 2 chiều");
    console.log("3. Tính tổng các phần tử trong mảng");
    console.log("4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó");
    console.log("5. Tính trung bình cộng các phần tử của một hàng cụ thể");
    console.log("6. Đảo ngược các hàng trong mảng");
    console.log("7. Thoát chương trình");
    console.log("================");
    
    choice = parseInt(prompt("Chọn chức năng: "));
    
    switch (choice) {
        case 1:
            rows = parseInt(prompt("Nhập số hàng: "));
            cols = parseInt(prompt("Nhập số cột: "));
            matrix = [];
            for (let i = 0; i < rows; i++) {
                matrix[i] = [];
                for (let j = 0; j < cols; j++) {
                    matrix[i][j] = parseInt(prompt(`Nhập phần tử tại [${i}][${j}]: `));
                }
            }
            break;
        case 2:
            console.log("Mảng 2 chiều:");
            for (let i = 0; i < rows; i++) {
                console.log(matrix[i].join(" "));
            }
            break;
        case 3:
            let sum = 0;
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    sum += matrix[i][j];
                }
            }
            console.log("Tổng các phần tử trong mảng là:", sum);
            break;
        case 4:
            let max = matrix[0][0];
            let maxIndex = [0, 0];
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    if (matrix[i][j] > max) {
                        max = matrix[i][j];
                        maxIndex = [i, j];
                    }
                }
            }
            console.log(`Phần tử lớn nhất là ${max} tại vị trí [${maxIndex[0]}][${maxIndex[1]}]`);
            break;
        case 5:
            let rowIndex = parseInt(prompt("Nhập chỉ số hàng: "));
            if (rowIndex >= 0 && rowIndex < rows) {
                let rowSum = 0;
                for (let j = 0; j < cols; j++) {
                    rowSum += matrix[rowIndex][j];
                }
                console.log(`Trung bình cộng hàng ${rowIndex} là: ${rowSum / cols}`);
            } else {
                console.log("Chỉ số hàng không hợp lệ.");
            }
            break;
        case 6:
            for (let i = 0; i < rows; i++) {
                matrix[i].reverse();
            }
            console.log("Đã đảo ngược các hàng trong mảng.");
            break;
        case 7:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!");
    }
} while (choice !== 7);
