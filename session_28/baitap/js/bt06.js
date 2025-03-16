const cart = [

    { name: "Mèn mén", price: 30000, quantity: 2 },

    { name: "Mì tôm", price: 5000, quantity: 1 },

    { name: "Bánh bao", price: 15000, quantity: 3 }

];

function toTal(cart) {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
}

//! (forEach) chay lan luot qua cac phan tu trong mang 
//! item. lay cac gia tri de thuc hien phep tinh
//! tra ve gia tri la total

console.log("Tổng tiền trong giỏ hàng là: " + toTal(cart));
