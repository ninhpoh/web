let job = [];

function render() {
    let str = "";
    for (let i = 0; i < job.length; i++) {
        str += `
        <div class="job">
            <p>${job[i].name}</p>
            <div class="button-container">
                <button onclick="editJob(${job[i].id})">Sửa</button>
                <button onclick="deleteJob(${job[i].id})">Xóa</button>
            </div>
        </div>
        `;
    }
    document.getElementsByClassName("job-container")[0].innerHTML = str;
}

function addJob() {
    let text = document.getElementById("text").value.trim();
    if (text === "") {
        alert("Vui lòng nhập công việc!");
        return;
    }
    let newJob = { name: text, id: job.length > 0 ? job[job.length - 1].id + 1 : 1 };
    job.push(newJob);
    document.getElementById("text").value = "";
    render();
}

function deleteJob(id) {
    let confirmDelete = confirm("Bạn có chắc chắn muốn xóa?");
    if (confirmDelete) {
        job = job.filter(item => item.id !== id);
        render();
    }
}

function editJob(id) {
    let newName = prompt("Nhập tên công việc mới:");
    if (newName !== null && newName.trim() !== "") {
        let index = job.findIndex(item => item.id === id);
        if (index !== -1) {
            job[index].name = newName.trim();
            render();
        }
    }
}

render();
