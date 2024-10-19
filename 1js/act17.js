function nomayoresaN(arreglo, N) {
    return arreglo.every(numero => numero > N);
  }
  let numeros = [5, 8, 12, 7];
  let valorN = 4;
  
  let todosMayores = nomayoresaN(numeros, valorN);
  
  if (todosMayores) {
    console.log("Todos los números son mayores que", valorN);
  } else {
    console.log("No todos los números son mayores que", valorN);
  } 
  