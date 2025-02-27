let numA = Number (prompt("so thu nhat: "));
let numB = Number (prompt("so thu Hai: "));
let min = Math.min(numA,numB);
let max = Math.max(numA,numB);

let final = Math.floor(Math.random(min) * max);

document.write(final);
