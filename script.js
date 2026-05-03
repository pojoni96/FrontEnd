/**
 * Imprime con retraso los elementos de una lista.
 * @param {number[]} lista
 */
function imprimirConRetraso(lista) {
  lista.forEach((num) => {
    setTimeout(console.log(num), 1000);
  });
}

const listaNumeros = [2, 4, 6, 8, 10];

imprimirConRetraso(listaNumeros);
