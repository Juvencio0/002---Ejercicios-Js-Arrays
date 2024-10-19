let numeros = [1,2,3,4,5,6,7,8,9,10,10,10];
let resultado = [];

function eliminardupli(array){
    return[...new Set(array)];
}

let valoresunicos = eliminardupli(numeros);
console.log("Estos son los unicos sin duplicados: "+valoresunicos);
