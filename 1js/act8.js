let arreglo1 = [1,2,3,4,5];
let arreglo2 = [6, 7, 8];

function siesxiste(arreglo, valor){
    return arreglo.includes(valor);
}

console.log(siesxiste(arreglo2, 3)); 
console.log(siesxiste(arreglo2, 6));
console.log(siesxiste(arreglo2, 7));