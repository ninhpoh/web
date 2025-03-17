let contact = [
    { id: 1, name: "tran an Ninh", email: "260806tan@gmail.com", phone: "0966557518" }
];
let choise = 0;
do {
    console.log("=====Menu======");
    console.log("1. Them lien he moi");
    console.log("2. Hien danh ba");
    console.log("3. Tim lien he theo sdt");
    console.log("4. Cap nhat lai theo id");
    console.log("5. Xoa lien he");
    console.log("6. Thoat");

    console.log("================");

    choise = +prompt("Thao tac ban muon:");

    switch (choise) {
        case 1:
            let id = parseInt(prompt("Nhập ID:"));
            let name = prompt("Nhập tên:");
            let email = prompt("Nhập email:");
            let phone = prompt("Nhập SDT:");
            addContact(id, name, email, phone);
            break;
        case 2:
            contact.forEach(function (item) {
                console.log(item);
            });
            break;
        case 3:
            findContact();
            break;
        case 5:
            let deleteId = parseInt(prompt("Nhập ID nhân viên cần xóa:"));
            deleteContact(deleteId);
            break;
        case 6:
            console.log("thoat chuong trinh");
            break;
        default:
            console.log("Lệnh không hợp lệ, vui lòng nhập lại!");
    }
} while (choise !== 6);

function addContact(id, name, email, phone) {
    if (contact.some(contacts => contacts.id === id)) { // tim vi theo id neu khong co tra ve -1 -> co the them nv moi 
        console.log(`nguoi có ID ${id} đã tồn tại!`);
        return;
    }
    let contacts = { id, name, email, phone };
    contact.push(contacts);
    console.log(`Đã thêm: ${name}`);
}

function findContact(contacts) {
    let phoneFind = prompt("Nhập số điện thoại muốn tìm:");

    let foundContact = contacts.find(contact => contact.phone == phoneFind);

    if (foundContact) {
        console.log(`Đã tìm thấy: ${foundContact.name}, SĐT: ${foundContact.phone}`);
    } else {
        console.log(`Không tìm thấy số điện thoại: ${phoneFind}`);
    }
}

function updateContact(contact) {
    let newId = +prompt("id muon sua:");
    if (contact.some(contacts => contacts.id === id)) { // tim vi theo id neu khong co tra ve -1 -> co the them nv moi 
        console.log(`nguoi có ID ${id} đã tồn tại!`);
        return;
    }
}

function deleteContact(id) {
    let index = contact.findIndex(contact => contact.id === id); // tim vi theo id neu khong co tra ve -1 nghia la ko ton tai nv theo id do
    if (index !== -1) {
        let confirmed = confirm(`Bạn có chắc muốn xóa ${contact[index].name} không?`); // hien ra thon bao giong voi alet
        if (confirmed) {
            contact.splice(index, 1);
            console.log(`Nguoi có ID ${id} đã bị xóa.`);
        } else {
            console.log("Hủy xóa.");
        }
    } else {
        console.log(`Không tìm thấy nguoi có ID ${id}.`);
    }
}