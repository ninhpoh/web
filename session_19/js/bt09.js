let result = "javascript" + 5;
// ! ket qua: "javascript5"
// ? Khi sử dụng toán tử +, nếu một trong hai toán hạng là chuỗi (string), Js sẽ coi đó là nối chuỗi

let result2 = "javascript" - 1;
// ! ket qua: NaN
// ? khac voi "+", Phép trừ (-) thuc hien voi chuc năng y như phép tính thông thường "javascript" không thể chuyển thành số hợp lệ, kết quả là NaN

let result3 = "3" + 2;
// ! ket qua: 32
// ? Khi sử dụng toán tử +, nếu một trong hai toán hạng là chuỗi (string), Js sẽ coi đó là nối chuỗi

let result4 = "5" - 4;
// ! Kết quả: 1
// ?  Phép trừ (-) buộc JavaScript phải chuyển chuỗi "5" thành số 5, rồi thực hiện phép toán 5 - 4, kết quả là 1

let result5 = isNaN( "123");
// ! Kết quả: false
// ? Hàm isNaN() kiểm tra xem giá trị có phải là NaN không. Chuỗi "123" có thể chuyển thành số hợp lệ (123), nên kết quả là false

let result6 = isNaN("hello");
// ! Kết quả: true
// ? Chuỗi "hello" không thể chuyển thành số hợp lệ, nên isNaN("hello") trả về true

let result7 = Number.isNaN("123");
// ! Kết quả: false
// ? Hàm Number.isNaN() chỉ trả về true nếu giá trị thực sự là NaN. "123" là chuỗi, không phải NaN, nên kết quả là false

let result8 = Number.isNaN(NaN);
// ! Kết quả: true
// ? NaN thực sự là NaN, nên Number.isNaN(NaN) trả về true