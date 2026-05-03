/**
 * Imprime con retraso los elementos de una lista.
 * @param {number[]} lista
 */
function imprimirConRetraso(lista) {
  lista.forEach((num, index) => {
    setTimeout(() => console.log("Numero " + num), 1000 * index);
  });
}

const listaNumeros = [2, 4, 6, 8, 10];

imprimirConRetraso(listaNumeros);
