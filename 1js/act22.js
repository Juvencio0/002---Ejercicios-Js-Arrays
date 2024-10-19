let arrayConValores = [0, "", "holas", false, 42, null, undefined];
let arraySinFalsy = arrayConValores.filter(valor => !!valor);

console.log(arraySinFalsy);