let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh",
    }
];

do {
    console.log(`
        1. Hiển thị các sản phẩm theo tên danh mục.
        2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
            a. Sản phẩm không có trong cửa hàng hiển thị thông báo.
            b. Sản phẩm có trong cửa hàng
                i. Cho người dùng nhập số lượng sản phẩm muốn mua, mua thành công số lượng sản phẩm trong cửa hàng sẽ bị trừ đi.
                ii. Số lượng sản phẩm trong cửa hàng = 0 hoặc không đủ hiển thị thông báo.
        3. Sắp xếp các sản phẩm trong cửa hàng theo giá:
            a. Tăng dần.
            b. Giảm dần.
        4. Tính số tiền thanh toán trong giỏ hàng.
        5. Thoát.    
    `);

    choise = +prompt("nhap lua chon");

    switch (choise) {
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

} while (choise !== 5);

function showProducts() {
    let show = +prompt(`
        1. mon Kinh
        2. mon Mong
    `);
    if (show == 1) {
        let kinh = products.filter(products => products.category == "món ăn dân tộc Kinh");
        console.log(kinh);
    } else if (show == 2) {
        let mong = products.filter(products => products.category == "món ăn dân tộc Mông");
        console.log(mong);
    } else {
        console.log("khong ton tai danh muc nay");
    }
}

// Hàm chọn mua sản phẩm
function choseProducts() {
    let choseId = prompt('Mời bạn nhập id sản phẩm');
    let shop = products.findIndex(products => products.id == choseId);
    if (shop == -1) {
        console.log('Sản phẩm không có trong giỏ hàng');
    } else {
        let choseQuantity = prompt('Mời bạn nhập số lượng sản phẩm muốn mua');
        if (products[shop].quantity < choseQuantity) {
            console.log(`Sản phẩm chỉ còn ${products[shop].quantity}`);
        } else {
            products[shop].quantity -= choseQuantity;
            // Thêm vào trong giỏ hàng
            // Kiểm tra sản phẩm có trong cửa hàng hay chưa
            let index = carts.findIndex(item => item.id == choseId);
            if (index == -1) {
                // Chứng tỏ sản phẩm không có trong giỏ hàng
                carts.push({
                    id: choseId,
                    name: products[shop].name,
                    quantity: choseQuantity,
                    price: products[shop].price,
                    category: products[shop].category,
                });
            } else {
                // Sản phẩm có trong giỏ hàng rồi cập nhập thêm số lượng
                carts[index].quantity += choseQuantity;
                console.log(carts);
            }
        }
    }
}

// ham sap xep
function sapXep() {
    let sx = +prompt(`
        1. Sắp xếp tăng dần
        2. Sắp xếp giảm dần
    `);

    if (sx === 1 || sx === 2) {
        handleSort(sx, products);
        console.log("Danh sách sản phẩm sau khi sắp xếp:", products);
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