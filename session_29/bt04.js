let lichLam = [];
let choise;
do {
    console.log("===== Menu ======");
    console.log("1. Thêm công việc mới");
    console.log("2. Hiển thị tất cả các công việc");
    console.log("3. Cập nhật trạng thái công việc theo ID");
    console.log("4. Lọc công việc theo trạng thái (hoàn thành/chưa hoàn thành)");
    console.log("5. Sắp xếp công việc theo trạng thái");
    console.log("6. Thoát");
    console.log("=================");

    choise = +prompt("nhap lua chon:");
    switch (choise) {
        case 1:
            break;
        case 2:
            lichLam.forEach(function (item) {
                console.log(item);
            });
            break;
        case 3:
            updateJob();
            break;
        case 4:
            filterJob();
            break;
        case 5:
            bubbleSortJobs();
            break;
        case 6:
            console.log("thoat chuong trinh");
            break;
        default:
            console.log("Lệnh không hợp lệ, vui lòng nhập lại!");
    }
} while (choise !== 6);

function addJob() {
    let id;
    if(job.length==0){
        id=1;
    }else{
        id= job[job.length-1].id+1;
    }
    let name =prompt("nhap ten cong viec");
    let des = prompt("mo ta cong viec");
    let status = prompt("Nhap trang thai")
}

function updateJob() {
    let id = +prompt("Nhập ID công việc cần cập nhật:");
    let job = lichLam.find(item => item.id === id);

    if (job) {
        job.status = !job.status;
        console.log("Cập nhật trạng thái thành công!");
    } else {
        console.log("Không tìm thấy công việc.");
    }
}

function filterJob() {
    let filterStatus = prompt("Nhập trạng thái cần lọc (hoàn thành/chưa hoàn thành):").toLowerCase();
    let filteredJobs = lichLam.filter(item => item.status === (filterStatus === "hoàn thành"));

    console.log("Danh sách công việc:");
    filteredJobs.forEach(job => console.log(job));
}

function bubbleSortJobs() {
    let n = lichLam.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (!lichLam[j].status && lichLam[j + 1].status) {
                let temp = lichLam[j];
                lichLam[j] = lichLam[j + 1];
                lichLam[j + 1] = temp;
            }
        }
    }
    console.log("Đã sắp xếp công việc!");
}

