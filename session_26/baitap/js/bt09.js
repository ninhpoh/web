let arr = [];
function input(arr) {
    let n = +prompt("mời bạn nhập số phần tử từ 10-20")
    if (n < 10 || n > 20 || !Number.isInteger(n)) {
        alert("lỗi cú pháp mời bạn nhập lại")
        return false;
    } else {
        for (let i = 0; i < n; i++){
            do {
                arr[i] = +prompt(`mời bạn nhập phần tử thứ ${i+1}`);
                if (Number.isInteger(arr[i])) {
                    break;
                } else {
                    alert("lỗi cú pháp mời bạn nhập lại ") 
                }
            } while (1);
        }
    }
    return arr;
}
function filter(arr) {
    arr = input(arr);
    if (Array.isArray(arr)) {
        if (arr.length===0) {
            console.log("Mảng không có phần tử nào")
            return;
        }
        let totalEven = 0;
        let totalOdd = 0;
        arr.forEach(element => {
            if (element%2==0) {
                totalEven += element;
            } else {
                totalOdd += element;
            }
        });
        totalEven ? console.log(`totalEven = ${totalEven}`) : console.log("trong mảng không có phần  tử chẵn");
        totalEven ? console.log(`totalOdd = ${totalOdd}`) : console.log("trong mảng không có phần  tử lẻ");
        console.log(result);
    } else{
        console.log("dữ liệu không hợp lệ")
    }
}
filter(arr);