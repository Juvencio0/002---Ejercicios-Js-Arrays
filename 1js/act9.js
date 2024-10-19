let arreglo = [1, 2, 3, 4, 5, 6];

function filtrarPares(arreglo) {
  let numerosPares = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
      numerosPares.push(arreglo[i]);
    }
  }
  return numerosPares;
}

let resultado = filtrarPares(arreglo);
console.log("Estos son los valores filtrados pares: "+ resultado);