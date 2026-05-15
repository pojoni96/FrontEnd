const boton = document.getElementById("botonIngresarTarea");
const tarea = document.getElementById("tarea");
let contadorTareas = 0;

boton.addEventListener("click", (e) => {
  e.preventDefault();
  let listaTareas = document.getElementById("listaTareas");

  if (tarea.value) {
    contadorTareas++;

    if (contadorTareas == 1)
      document.getElementById("seccionTareas").style.display = "block";

    listaTareas.insertAdjacentHTML(
      "beforeend",
      `
    <li><p id='tarea_${contadorTareas}-${tarea.value}'>${tarea.value}</p><button type='submit' onclick='marcarComoHecho("tarea_${contadorTareas}-${tarea.value}")'>Marcar como hecho</button></li>
    `,
    );
  }
});

/**
 * Tacha el parrafo con el id pasado por parametro de la lista.
 * @param {string} id
 */
function marcarComoHecho(id) {
  let tarea = document.getElementById(id);

  tarea.style.textDecoration = "line-through";
}
