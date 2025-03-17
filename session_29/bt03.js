
let menu = {};

let luaChon;
do {
    console.log("===== MENU ======");
    console.log("1. Thêm món ăn vào danh mục");
    console.log("2. Xóa món ăn theo tên khỏi danh mục");
    console.log("3. Cập nhật thông tin món ăn theo tên");
    console.log("4. Hiển thị toàn bộ menu");
    console.log("5. Tìm kiếm món ăn theo tên");
    console.log("6. Thoát");
    console.log("=================");
    luaChon = prompt("nhap lu chon:");
    switch (luaChon) {
        case "1":
            let danhMucThem = prompt("Nhap danh muc:");
            let tenMonAnThem = prompt("Nhap ten mon an:");
            let giaThem = prompt("Nhap gia:");
            let moTaThem = prompt("Nhap mo ta:");
            console.log(themMonAn(danhMucThem, tenMonAnThem, giaThem, moTaThem));
            break;
        case "2":
            let danhMucXoa = prompt("Nhap danh muc:");
            let tenMonAnXoa = prompt("Nhap ten mon an can xoa:");
            console.log(xoaMonAn(danhMucXoa, tenMonAnXoa));
            break;
        case "3":
            let danhMucCapNhat = prompt("Nhap danh muc:");
            let tenMonAnCapNhat = prompt("Nhap ten mon an can cap nhat:");
            let giaMoi = prompt("Nhap gia moi:");
            let moTaMoi = prompt("Nhap mo ta moi:");
            console.log(capNhatMonAn(danhMucCapNhat, tenMonAnCapNhat, giaMoi, moTaMoi));
            break;
        case "4":
            console.log(hienThiMenu());
            break;
        case "5":
            let tenMonAnTimKiem = prompt("Nhap ten mon an can tim:");
            console.log(timMonAn(tenMonAnTimKiem));
            break;
        case "6":
            console.log("Tam biet!");
            break;
        default:
            console.log("Lua chon khong hop le.");
    }
} while (luaChon !== "6");

function themMonAn(danhMuc, tenMonAn, gia, moTa) {
    if (!menu[danhMuc]) {
        menu[danhMuc] = [];
    }
    menu[danhMuc].push({ ten: tenMonAn, gia: gia, moTa: moTa });
    return "Da them mon an.";
}
function xoaMonAn(danhMuc, tenMonAn) {
    if (!menu[danhMuc]) {
        return "Danh muc khong ton tai.";
    }
    menu[danhMuc] = menu[danhMuc].filter(monAn => monAn.ten !== tenMonAn);
    return "Da xoa mon an.";
}
function capNhatMonAn(danhMuc, tenMonAn, giaMoi, moTaMoi) {
    if (!menu[danhMuc]) {
        return "Danh muc khong ton tai.";
    }
    for (let i = 0; i < menu[danhMuc].length; i++) {
        if (menu[danhMuc][i].ten === tenMonAn) {
            menu[danhMuc][i].gia = giaMoi;
            menu[danhMuc][i].moTa = moTaMoi;
            return "Da cap nhat mon an.";
        }
    }
    return "Khong tim thay mon an.";
}
function hienThiMenu() {
    let ketQua = "Menu nha hang:\n";
    for (let danhMuc in menu) {
        ketQua += "- " + danhMuc + ":\n";
        for (let monAn of menu[danhMuc]) {
            ketQua += "  + " + monAn.ten + " - " + monAn.gia + " - " + monAn.moTa + "\n";
        }
    }
    return ketQua;
}
function timMonAn(tenMonAn) {
    for (let danhMuc in menu) {
        for (let monAn of menu[danhMuc]) {
            if (monAn.ten === tenMonAn) {
                return "Mon an " + tenMonAn + " thuoc danh muc " + danhMuc + ": " + monAn.gia + " - " + monAn.moTa;
            }
        }
    }
    return "Khong tim thay mon an.";
}

