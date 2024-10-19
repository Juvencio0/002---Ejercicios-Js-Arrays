let numeros  = [10, 20, 30, 40, 50] 

function nMayor(array) {
    let mayor = array[0]; 

    for (let i = 1; i < array.length; i++) {
      if (array[i] > mayor) {
        mayor = array[i];
      }
    }
  
    return mayor;
  }
  
  console.log("Este es el número mayor:", nMayor(numeros));