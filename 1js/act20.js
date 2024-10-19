function calcular(numeros) {
    return numeros.reduce((productoAcumulado, numero) => {
      return productoAcumulado * numero;
    }, 1); 
  }

  let arreglo = [2, 3, 4, 5];
  let resultado = calcular(arreglo);
  console.log(resultado);