function findEven(arr){
    if(Array.isArray(arr)==false){
        console.log("dữ liệu không hợp lệ");
        return;
    }
    if(arr.length==0){
        console.log("mảng không chứa phần tử");
        return;  
    }
    let EvenElement=[];
    let f =0;
    for (let i = 0; i < arr.length; i++) {
         if(arr[i]%2==0){
            EvenElement[f]=arr[i];
            f++;
    } 
    }
    console.log(EvenElement);
    return EvenElement;
}

findEven([]);
findEven("fdfdfdf");
findEven([4,4,6,7,1,2,4]);