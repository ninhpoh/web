function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}
console.log(capitalizeWords("hello WORLD"));      
console.log(capitalizeWords("rIKKei acaDEMy"));   