function isStrongPassword(password) {
    if (password.length < 8) return false;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    return hasUpperCase && hasLowerCase && hasNumber;
}

console.log(isStrongPassword("Abc123!@"));
console.log(isStrongPassword("weakpass")); 


// function isStrongPassword(password="") {
//     let arr = password.split("");
//     console.log(arr);
    
//     let fUpcase = true;
//     if (arr.length < 8) {
//         for (let i = 0; i < password.length; i++) {
//             if (arr[i].indexOf(0 && 1 && 2 && 3 && 4 && 5 && 6 && 7 && 8 && 9) !== -1) {
//                 fUpcase=f;
//             }
//         }
//     }
//     return fUpcase;
// }
// console.log(isStrongPassword("Abc123!@"));
// console.log(isStrongPassword("Abdasdvdsdf"));

