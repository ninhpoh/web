let a = [2,4,5,7,3,432,44,542,31,36];
let b =[];
let c ="dad";
function filter(arr){
    if(Array.isArray(arr)){
        if(arr.length==0){
            console.log("mang ko hop le");
            return;
        }
        let r = arr.filter((item)=>{
            return item >=10
        })
        console.log(r);
        



         
    }else{
        console.log("du lieu ko dung");
    }
}

filter(a);
filter(b);
filter(c);