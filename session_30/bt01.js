let products = [
    { id: 1, name: "mèn mén", price: 20000, quantity: 20, category: "món ăn dân tộc Mông" },
    { id: 2, name: "mứt", price: 80000, quantity: 21, category: "món ăn dân tộc Kinh" },
    { id: 3, name: "cơm lam", price: 40000, quantity: 15, category: "món ăn dân tộc Mông" },
    { id: 4, name: "bánh đậu xanh", price: 60000, quantity: 30, category: "món ăn dân tộc Kinh" }
];

let carts = [];
let choice;

do {
    console.log(`
        1. Hiển thị các sản phẩm theo danh mục.
        2. Chọn sản phẩm để mua.
        3. Sắp xếp sản phẩm theo giá.
            a. Tăng dần.
            b. Giảm dần.
        4. Tính tổng số tiền thanh toán trong giỏ hàng.
        5. Thoát.
    `);

    choice = +prompt("Nhập lựa chọn:");
    
    switch (choice) {
        case 1:
            showProducts();
            break;
        case 2:
            choseProducts();
            break;
        case 3:
            sapXep();
            break;
        case 4:
            totalPrice();
            break;
        case 5:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Sai thao tác. Vui lòng nhập lại!");
    }
} while (choice !== 5);

function showProducts() {
    let show = +prompt(`
        1. Món ăn dân tộc Kinh
        2. Món ăn dân tộc Mông
    `);
    
    if (show === 1) {
        let kinh = products.filter(product => product.category === "món ăn dân tộc Kinh");
        console.log("Danh sách món ăn dân tộc Kinh:", kinh);
    } else if (show === 2) {
        let mong = products.filter(product => product.category === "món ăn dân tộc Mông");
        console.log("Danh sách món ăn dân tộc Mông:", mong);
    } else {
        console.log("Không tồn tại danh mục này.");
    }
}

function choseProducts() {
    let choseId = +prompt("Nhập ID sản phẩm muốn mua:");
    let productIndex = products.findIndex(product => product.id === choseId);

    if (productIndex === -1) {
        console.log("Sản phẩm không có trong cửa hàng.");
        return;
    }

    let choseQuantity = +prompt("Nhập số lượng muốn mua:");

    if (products[productIndex].quantity < choseQuantity) {
        console.log(`Sản phẩm chỉ còn ${products[productIndex].quantity} cái.`);
    } else {
        products[productIndex].quantity -= choseQuantity;

        let cartIndex = carts.findIndex(item => item.id === choseId);
        
        if (cartIndex === -1) {
            carts.push({
                id: choseId,
                name: products[productIndex].name,
                quantity: choseQuantity,
                price: products[productIndex].price,
                category: products[productIndex].category
            });
        } else {
            carts[cartIndex].quantity += choseQuantity;
        }

        console.log("Giỏ hàng hiện tại:", carts);
    }
}

function sapXep() {
    let sx = +prompt(`
        1. Sắp xếp tăng dần
        2. Sắp xếp giảm dần
    `);

    if (sx === 1 || sx === 2) {
        handleSort(sx, products);
        console.log("Danh sách sản phẩm sau khi sắp xếp:");
        products.forEach(product => console.log(product));
    } else {
        console.log("Lựa chọn không hợp lệ.");
    }
}

function handleSort(sx, products) {
    products.sort((a, b) => sx === 1 ? a.price - b.price : b.price - a.price);
}

function totalPrice() {
    if (carts.length === 0) {
        console.log("Giỏ hàng trống.");
        return;
    }

    let total = carts.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log(`Tổng số tiền thanh toán: ${total} VND`);
}
