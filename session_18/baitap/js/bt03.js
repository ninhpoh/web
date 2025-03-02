let username = prompt("Mời bạn nhập tên:");
if (username === "ADMIN") {
    let password = prompt("Mời bạn nhập mật khẩu:");
    if (password === "TheMaster") {
        document.write("Welcome");
    } else if (password === null || password === "") {
        document.write("Cancelled");
    } else {
        document.write("Wrong password");
    }
} else if (username === null || username === "") {
    document.write("Cancelled");
} else {
    document.write("I Don't know you");
}