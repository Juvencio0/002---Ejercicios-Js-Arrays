let inverso = [5,4,3,2,1];


function invertir(arreglo1){
    let resultado = [];

    for (let i = arreglo1.length -1; i>=0; i--){
        resultado.push(arreglo1[i]);
    }
return resultado;
}

let arreglo2 = invertir(inverso);
console.log("este es un arreglo: "+ arreglo2);
