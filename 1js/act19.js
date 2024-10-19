let numeros = [1, 2, 3, 4, 5];

let sumaTotal = numeros.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
});

console.log(sumaTotal);