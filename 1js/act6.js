let arreglo1 = ["a", "b", "c", "d", "e"];
let arreglo2 = ["f", "g", "h"];

function combinacion(arreglo1){
    return arreglo1.concat(arreglo2);
}
let variab = combinacion(arreglo1 , arreglo2);
console.log("Combinacion", variab);
