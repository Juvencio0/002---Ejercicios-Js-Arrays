let arreglo1 = [1,2,3,4,5];

function arreglo(arreglo1){
    return arreglo1.map(function(numero){
      return numero * 2;
    })
}
let resultado = arreglo(arreglo1)
console.log("Estos son los numeros multiplicados: "+resultado)