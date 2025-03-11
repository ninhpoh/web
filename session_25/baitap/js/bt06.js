// function isPalindrome(str) {
//     const len = str.length;
//     let a;
//     for (let i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             a= false;
//         }
//     }
//     a= true;
//     a? console.log("doi xung") :console.log("ko doi xung");
// }
//  str =prompt('sdasd');

function isPalindrome(){
    let str=prompt("sdasd");
    let len = str.length;
    let f=1;
    for(let i =0;i<len/2;i++){
        if(str[i]!==str[len -1-i]){
            f=0;
        }
    }
    f? console.log("doi xung") :console.log("ko doi xung");
}
isPalindrome();
