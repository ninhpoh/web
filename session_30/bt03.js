let store = []; 
let cart = []; 
let choice;

do {
    console.log(`
        1. Hiển thị danh sách điện thoại theo hãng.
        2. Thêm điện thoại mới vào cửa hàng.
        3. Tìm kiếm điện thoại theo tên hoặc ID.
        4. Mua điện thoại.
        5. Thanh toán giỏ hàng.
        6. Sắp xếp điện thoại theo giá: (nhap 1 hoac 2)
            a. Tăng dần.
            b. Giảm dần.
        7. Hiển thị tổng số tiền của điện thoại trong kho.
        8. Hiển thị tổng số lượng điện thoại theo từng hãng.
        9. Thoát chương trình.
    `);

    choice = +prompt("Nhập thao tác:");

    switch (choice) {
        case 1:
            showPhone();
            break;
        case 2:
            addPhone();
            break;
        case 3:
            findPhone();
            break;
        case 4:
            buyPhone();
            break;
        case 5:
            checkout();
            break;
        case 6:
            sortPhones();
            break;
        case 7:
            totalStore();
            break;
        case 8:
            totalByCompany();
            break;
        case 9:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Sai thao tác. Vui lòng nhập lại!");
    }
} while (choice !== 9);

function showPhone() {
    let company = prompt("Nhập hãng điện thoại:");
    let filteredPhones = store.filter((phone) => phone.company.toLowerCase() === company.toLowerCase());

    if (filteredPhones.length === 0) {
        console.log(`Không có điện thoại nào của hãng ${company}`);
    } else {
        console.log(`Danh sách điện thoại của hãng ${company}:`, filteredPhones);
    }
}

function addPhone() {
    let id = store.length > 0 ? store[store.length - 1].id + 1 : 1;
    let name, price, quantity, company;

    do {
        name = prompt("Nhập tên điện thoại:");
    } while (!name.trim());

    do {
        price = +prompt("Nhập giá tiền:");
    } while (price <= 0);

    do {
        quantity = +prompt("Nhập số lượng:");
    } while (quantity < 0);

    do {
        company = prompt("Nhập hãng điện thoại:");
    } while (!company.trim());

    store.push({ id, name, price, quantity, company });
    console.log("Đã thêm điện thoại:", store);
}

function findPhone() {
    let keyword = prompt("Nhập tên hoặc ID điện thoại:");
    let result = store.filter(phone => phone.name.includes(keyword) || phone.id == keyword);

    if (result.length > 0) {
        console.log("Kết quả tìm kiếm:", result);
    } else {
        console.log("Không tìm thấy điện thoại.");
    }
}

function buyPhone() {
    let phoneId = +prompt("Nhập ID điện thoại cần mua:");
    let quantity = +prompt("Nhập số lượng:");

    let phone = store.find((p) => p.id === phoneId);

    if (!phone) {
        console.log("Không tìm thấy điện thoại.");
        return;
    }

    if (phone.quantity < quantity) {
        console.log("Số lượng không đủ.");
        return;
    }

  
    phone.quantity -= quantity;

 
    let cartItem = cart.find((p) => p.id === phoneId);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ id: phone.id, name: phone.name, price: phone.price, quantity });
    }

    console.log("Đã mua điện thoại thành công. Giỏ hàng hiện tại:", cart);
}

function checkout() {
    if (cart.length === 0) {
        console.log("Giỏ hàng trống.");
        return;
    }

    let totalPrice = cart.reduce((sum, phone) => sum + phone.price * phone.quantity, 0);
    console.log(`Thanh toán thành công! Tổng tiền: ${totalPrice} VND`);

    cart = []; 
}

function sortPhones() {
    let option = +prompt("Nhập '1' để sắp xếp tăng dần, '2' để giảm dần:");

    if (option === 1) {
        store.sort((a, b) => a.price - b.price);
    } else if (option === 2) {
        store.sort((a, b) => b.price - a.price);
    } else {
        console.log("Lựa chọn không hợp lệ.");
    }

    console.log("Danh sách điện thoại sau khi sắp xếp:", store);
}

function totalStore() {
    let totalValue = store.reduce((sum, phone) => sum + phone.price * phone.quantity, 0);
    console.log(`Tổng giá trị điện thoại trong kho: ${totalValue} VND`);
}

function totalByCompany() {
    let companyCount = {};

    store.forEach((phone) => {
        if (companyCount[phone.company]) {
            companyCount[phone.company] += phone.quantity;
        } else {
            companyCount[phone.company] = phone.quantity;
        }
    });

    console.log("Tổng số lượng điện thoại theo hãng:", companyCount);
}