/**
 * Calcula el promedio de una lista de numeros.
 * @param {number[]} lista
 * @returns {number}
 */
function calcularPromedio(lista) {
  let suma = 0;

  lista.forEach((num) => (suma += num));

  return suma / lista.length;
}

const listaNumeros = [-9, 8, 10, 5, 66];

console.log(calcularPromedio(listaNumeros));
