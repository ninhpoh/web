let list =[];
let choise=0;
do{
    console.log("=====Menu======");
    console.log("1. Them san phan moi");
    console.log("2. Hien danh muc san pham");
    console.log("3. hien chi tiet theo id");
    console.log("4. Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm");
    console.log("5. Xoa san pham");
    console.log("6. Loc san pham theo khoang gia");
    console.log("================");
    
    choise = +prompt("Thao tac ban muon:");

    switch(choise){
        case 1:
            let id = parseInt(prompt("Nhập ID:"));
            let name = prompt("Nhập tên:");
            let price = prompt("Nhập gia:");
            let category = prompt("Nhập danh muc:");
            let quantity = prompt("nhap so luong trong kho:")
            addList(id, name, price, category, quantity);
            break;
        case 2:
            list.forEach(function(item) {
                console.log(item);
            });
            break;
        case 3:
            findContact();
            break;
        case 4:
            
            let updateId = parseInt(prompt("Nhập ID sản phẩm cần cập nhật:"));
            updateProduct(updateId);
            
            break;
        case 5:
            let deleteId = parseInt(prompt("Nhập ID sp cần xóa:"));
            deleteContact(deleteId);
            break;
        case 6:
            filterProductsByPrice();
            break;
        case 7:
            console.log("thoat chuong trinh");
            break;
        default:
            console.log("Lệnh không hợp lệ, vui lòng nhập lại!");
    }
}while(choise !== 7);

function addList(id, name, price, category, quantity) {
    if (list.some(lists => lists.id === id)) { // tim vi theo id neu khong co tra ve -1 -> co the them nv moi 
        console.log(`Sp có ID ${id} đã tồn tại!`);
        return;
    }
    let lists = { id, name, price, category, quantity };
    list.push(lists);
    console.log(`Đã thêm: ${name}`);
}

function findContact(lists) {
    let findId = prompt("id muon tim:");

    let foundContact = lists.find(list => list.id == findId);

    if (foundContact) {
        console.log(`Đã tìm thấy: ${foundContact.name}, SĐT: ${foundContact.id}`);
    } else {
        console.log(`Không tìm thấy sp: ${findId}`);
    }
}

function updateProduct(id) {
    let product = list.find(item => item.id === id);
    if (!product) {
        console.log(`Không tìm thấy sản phẩm có ID ${id}.`);
        return;
    }
    product.name = prompt("Nhập tên mới:") || product.name;
    product.price = parseFloat(prompt("Nhập giá mới:")) || product.price;
    product.category = prompt("Nhập danh mục mới:") || product.category;
    product.quantity = parseInt(prompt("Nhập số lượng mới:")) || product.quantity;
    console.log("Thông tin sản phẩm đã được cập nhật!");
}

function deleteContact(id) {
    let index = contact.findIndex(contact => contact.id === id); // tim vi theo id neu khong co tra ve -1 nghia la ko ton tai nv theo id do
    if (index !== -1) {
        let confirmed = confirm(`Bạn có chắc muốn xóa ${contact[index].name} không?`); // hien ra thon bao giong voi alet
        if (confirmed) {
            contact.splice(index, 1);
            console.log(`Sp có ID ${id} đã bị xóa.`);
        } else {
            console.log("Hủy xóa.");
        }
    } else {
        console.log(`Không tìm thấy Sp có ID ${id}.`);
    }
}

function filterProductsByPrice() {
    let minPrice = parseFloat(prompt("Nhập giá thấp nhất:"));
    let maxPrice = parseFloat(prompt("Nhập giá cao nhất:"));
    let filteredList = list.filter(item => item.price >= minPrice && item.price <= maxPrice);
    if (filteredList.length > 0) {
        console.log("Danh sách sản phẩm trong khoảng giá:");
        filteredList.forEach(item => console.log(item));
    } else {
        console.log("Không có sản phẩm nào trong khoảng giá này.");
    }
}
