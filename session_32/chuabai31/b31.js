let job =[
    {
        id:1,
        name: "cau lao"
    },
    {
        id: 2,
        name: "sabjd"
    },
    {
        id: 3,
        name: "sasabd"
    },
];

function render(){
    let str = "";
    for (let i =0;i <job.length;i++){
        str+=
        `
        <li> ${job[i].name}<button onclick="deleteJob(${job[i].id})">xoa</button></li>
        `
    }
    document.getElementsByClassName("job")[0].innerHTML=str;
    console.log(str);
    
}
render();

function deleteJob(id){
    console.log("xoa thang nay",id);
    let index = job.findIndex(item=>item.id==id);
    job.splice(index,1);
    render();
}   
