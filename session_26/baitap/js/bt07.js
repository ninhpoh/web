let arr = [];
function input(arr) {
        for (let i = 0; i < 10; i++){
            do {
                arr[i] = +prompt(`mời bạn nhập phần tử thứ ${i+1}`);
                if (Number.isInteger(arr[i])) {
                    break;
                } else {
                    alert("lỗi cú pháp mời bạn nhập lại ") 
                }
            } while (1);
        }
    return arr;
}
function filter(arr) {
    arr = input(arr);
    if (Array.isArray(arr)) {
        if (arr.length===0) {
            console.log("Mảng không có phần tử nào");
            return;
        }
        let result = arr.filter((item) => item % 2 === 0).map((item) => item ** 2);
        console.log(result);
    } else{
        console.log("dữ liệu không hợp lệ")
    }
}
filter(arr);