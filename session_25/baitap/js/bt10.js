// Xem danh sách sản phẩm có sẵn trong cửa hàng.
// Chọn sản phẩm để mua bằng cách nhập tên sản phẩm.
// Sản phẩm không có trong cửa hàng hiển thị thông báo.
// Sản phẩm có trong cửa hàng khi mua số lượng sẽ giảm đi một, khi số lượng về 0 thì thông báo sản phẩm đã hết.
// Sản phẩm khi mua đã có trong giỏ hàng thì tăng số lượng lên một
//             VD giỏ hàng sau khi mua:  [["mèn mén", 4, 20000], ["bánh bao", 3, 8000]]

// Tính tổng tiền và hiển thị hóa đơn.
// Thoát'


let products= [ ["mi tom", 5, 5000], 
                ["banh mi", 12, 15000], 
                ["banh bao", 5, 8000], 
                ["men men", 30, 20000] ];
let cart=[];
let choise;
do {
    choice = +prompt("mời bạn nhập lựa chọn");
    
   switch (choice) {
    case 1:
        // hiển thị danh sách cách sản phẩm trong cửa hàng
        showProduct();
        break;
    case 2:
        // tiến hành đi mua hàng
        addToCart();
        break;
    case 3:
        // thanh toán
        pay();
        break;
    default:
        break;
   }
} while (choice != 4);
function showProduct(){
    console.log(products[0]);
    console.log(products[1]);
    console.log(products[2]);
    console.log(products[3]);
    
}
function main(){

}
showPro();