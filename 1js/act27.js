function contarOcurrencias(array, valor) {
    return array.reduce((contador, elemento) => {
      return elemento === valor ? contador + 1 : contador;
    }, 0);
  }

  let numeros = [1, 2, 3, 2, 4, 2, 5];
  let valorBuscado = 2;
  
  let cantidadOcurrencias = contarOcurrencias(numeros, valorBuscado);
  console.log(`El número ${valorBuscado} aparece ${cantidadOcurrencias} veces`);