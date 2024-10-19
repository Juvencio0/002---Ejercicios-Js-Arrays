let array1 = [3, 1, 4];
let array2 = [5, 9, 2];
let array3 = [6, 8];

const arrayCombinado = array1.concat(array2, array3);
arrayCombinado.sort((a, b) => a - b);

console.log(arrayCombinado); 