// let name = document.getElementById("name").value.trim();
// console.log(name);

function add(){
    let name = document.getElementById("name").value.trim();
    console.log(name);
    localStorage.setItem("name", JSON.stringify(name));
    document.getElementById("name").value="";
    render();
}
function render(){
    let name1 = localStorage.getItem("name");
    document.getElementById("title").innerHTML= `chao ban,`+name1;
}
render();