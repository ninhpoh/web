function num(arr){
    if(Array.isArray(arr)==false){
        console.log("dữ liệu không hợp lệ");
        return;
    }
    let f =0;
    let b=[];
    for(let i =0;i<arr.length;i++){
        if(Number.isInteger(arr[i])&& arr[i]>0){
            b.push(arr[i]);
            f++;
        }
    }
    f==0? console.log("ko co so nguyen duong"):
     console.log(b.length);
}
num([1,-2,3,-4,5,-6,7]);
num([1,2,-4,-3])
num([-2,-8,-3])