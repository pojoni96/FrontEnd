/**
 * Retorna una lista con sólo los pares de la lista original.
 * @param{number[]} lista
 * @returns{number[]}
 */
function obtenerPares(lista) {
  let soloPares = [];

  soloPares = lista.filter((num) => num % 2 == 0);

  return soloPares;
}

const listaNumeros = [15, -6, 85, 74, 3];

console.log(obtenerPares(listaNumeros));
