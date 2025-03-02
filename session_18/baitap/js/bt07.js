let a = Number(prompt("so thu nhat:"));
let b = Number(prompt("so thu hai:"));
let f = prompt("phep tinh muon lam (+,-,*,/)");
switch(f){
    case "+":
        document.write("phep cong a+b="+(a+b));
        break;
    case "-":
        document.write("phep tru a-b="+(a-b));
        break;
    case "*":
            document.write("phep nhan a*b="+(a*b));
            break;
    case "/":
        document.write("phep chia a/b="+(a/b));
        break;
    default:
        document.write("loi cu phap");
}