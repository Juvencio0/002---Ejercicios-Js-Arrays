function estaVacio(array) {
    if (array === undefined || array === null) {
      return true;
    }
    for (let elemento of array) {
      return false;
    }
    return true;
}

let arrayVacio = [];
let arrayConElementos = [1, 2, 3];

console.log(estaVacio(arrayVacio));
console.log(estaVacio(arrayConElementos));
console.log(estaVacio(undefined));
console.log(estaVacio(null));