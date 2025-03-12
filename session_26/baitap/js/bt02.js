let a = ["banana","abdc","elephant","bird"];
let b =[];
let c ="dad";
function filter(arr){
    if(Array.isArray(arr)){
        if(arr.length==0){
            console.log("mang ko hop le");
            return;
        }
        let r = arr.filter((item)=>{
            return item.length >=5
        })
        console.log(r);
        
    }else{
        console.log("du lieu ko dung");
    }
}

filter(a);
filter(b);
filter(c);