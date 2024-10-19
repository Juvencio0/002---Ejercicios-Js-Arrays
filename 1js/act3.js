let calificaciones = [2, 3, 5, 10, 10, 10, 10];
let resultado = calcularPromedio(calificaciones);

function calcularPromedio(arreglo) {
     if (arreglo.length === 0) {
     return "No existen calificaciones";
     }

let suma = 0;
     for (let i = 0; i < arreglo.length; i++) {
       suma += arreglo[i];
     }

let promedio = suma / arreglo.length;
     return promedio;
   }
   
console.log("El promedio es:", resultado);
