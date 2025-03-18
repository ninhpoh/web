let list = [];
let choise;
let cart = [];
do {
    console.log(`
        1. Hiển thị danh sách sách theo thể loại (Người dùng chọn thể loại để xem sách trong danh mục đó).
        2. Thêm sách mới vào kho
        3. Tìm kiếm sách theo tên hoặc id.
        4. Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).
        5. Sắp xếp sách theo giá:
            a. Tăng dần.
            b. Giảm dần.
        6. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
        7. Hiển thị tổng số lượng sách trong kho.
        8. Thoát chương trình.    
    `);

    choise = +prompt("nhap thao tac");

    switch (choise) {
        case 1:
            showList();
            break;
        case 2:
            addBook();
            break;
        case 3:
            findBook();
            break;
        case 4:
            buyBook();
            break;
        case 5:
            sortBooks();
            break;
        case 6:
            totalCart();
            break;
        case 7:
            totalStock();
            break;
        case 8:
            console.log("thoat");
            break;
        default:
            console.log("sai thao tac");
    }
} while (choise !== 8);

function showList() {
    let category = prompt("the loai:");
    let f = list.filter((book) => book.category == category);
    console.log(f);
}

function addBook() {
    let name = prompt("nhap ten:"); // khong nhap rong
    let price = +prompt("nhap so tien:"); // khong duoc < 0
    let quantity = +prompt("nhap so luong:"); // khong dc < 0
    let category = prompt("the loai:"); // khong nhap rong

    let id = list[list.length - 1].id + 1;

    list.push({ id, name, price, quantity, category });
    console.log(list);
}

function findBook() {
    let keyword = prompt("Nhập tên hoặc ID sách:");
    let result = list.filter(book => book.name.includes(keyword) || book.id == keyword);

    if (result.length > 0) {
        console.log("Kết quả tìm kiếm:", result);
    } else {
        console.log("Không tìm thấy sách.");
    }
}

function buyBook() {
    let bookId = +prompt("Nhập ID sách cần mua:");
    let quantity = +prompt("Nhập số lượng:");

    let book = list.find((b) => b.id === bookId);

    if (!book) {
        console.log("Không tìm thấy sách.");
        return;
    }

    if (book.quantity < quantity) {
        console.log("Số lượng không đủ.");
        return;
    }
    book.quantity -= quantity;

    let cartItem = cart.find((b) => b.id === bookId);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ id: book.id, name: book.name, price: book.price, quantity });
    }

    console.log("Đã mua sách thành công. Giỏ hàng hiện tại:", cart);
}

function sortBooks() {
    let option = prompt("Nhập 'a' để sắp xếp tăng dần, 'b' để giảm dần:");

    if (option === "a") {
        list.sort((a, b) => a.price - b.price);
    } else if (option === "b") {
        list.sort((a, b) => b.price - a.price);
    } else {
        console.log("Lựa chọn không hợp lệ.");
    }

    console.log("Danh sách sách sau khi sắp xếp:", list);
}

function totalCart() {
    let totalQuantity = cart.reduce((sum, book) => sum + book.quantity, 0);
    let totalPrice = cart.reduce((sum, book) => sum + book.price * book.quantity, 0);

    console.log(`Tổng số lượng sách đã mua: ${totalQuantity}`);
    console.log(`Tổng tiền: ${totalPrice} VND`);
}

function totalStock() {
    let total = list.reduce((sum, book) => sum + book.quantity, 0);
    console.log(`Tổng số lượng sách trong kho: ${total}`);
}