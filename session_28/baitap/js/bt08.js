let persons = [
    {id:1,name:"tran an ninh",position:"SEO",salary:20000000},
];

let choice;
do {
        console.log("========== MENU ==========");
        console.log("1. Thêm nhân viên ");
        console.log("2. Xóa nhân viên theo ID ");
        console.log("3. Cập nhật lương nhân viên theo ID ");
        console.log("4. Tìm kiếm nhân viên theo tên ");
        console.log("5. Thoát chương trình ");
        console.log("==========================");
    choice = +prompt("Nhập thao tác: ");

    switch (choice) {
        case 1:
            let id = parseInt(prompt("Nhập ID nhân viên:"));
            let name = prompt("Nhập tên nhân viên:");
            let position = prompt("Nhập chức vụ:");
            let salary = parseFloat(prompt("Nhập lương:"));
            addPerson(id, name, position, salary);
            break;

        case 2:
            let deleteId = parseInt(prompt("Nhập ID nhân viên cần xóa:"));
            deletePerson(deleteId);
            break;

        case 3:
            let updateId = parseInt(prompt("Nhập ID nhân viên cần cập nhật lương:"));
            let newSalary = parseFloat(prompt("Nhập mức lương mới:"));
            updateSalary(updateId, newSalary);
            break;

        case 4:
            let searchName = prompt("Nhập tên nhân viên cần tìm:");
            searchPersonByName(searchName);
            break;

        case 5:
            console.log("Thoát chương trình.");
            break;

        default:
            console.log("Lệnh không hợp lệ, vui lòng nhập lại!");
    }
} while (choice !== 5);

function addPerson(id, name, position, salary) {
    
    if (persons.some(person => person.id === id)) { // tim vi theo id neu khong co tra ve -1 -> co the them nv moi 
        console.log(`Nhân viên có ID ${id} đã tồn tại!`);
        return;
    }

    let person = { id, name, position, salary };
    persons.push(person);
    console.log(`Đã thêm nhân viên: ${name}`);
    
}

function deletePerson(id) {
    let index = persons.findIndex(person => person.id === id); // tim vi theo id neu khong co tra ve -1 nghia la ko ton tai nv theo id do
    if (index !== -1) {
        let confirmed = confirm(`Bạn có chắc muốn xóa nhân viên ${persons[index].name} không?`); // hien ra thon bao giong voi alet
        if (confirmed) {
            persons.splice(index, 1);
            console.log(`Nhân viên có ID ${id} đã bị xóa.`);
        } else {
            console.log("Hủy xóa nhân viên.");
        }
    } else {
        console.log(`Không tìm thấy nhân viên có ID ${id}.`);
    }
}

function updateSalary(id, newSalary) {
    let person = persons.find(person => person.id === id);
    if (person) {
        person.salary = newSalary;
        console.log(`Đã cập nhật lương cho nhân viên ${person.name} thành ${newSalary}`);
    } else {
        console.log(`Không tìm thấy nhân viên có ID ${id}.`);
    }
}

