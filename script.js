const colores = ["salmon", "blueviolet", "red", "aquamarine"];
let pos = 0;
const botonCambiarFondo = document.getElementById("botonCambiarFondo");

function cambiarFondo() {
  if (pos == colores.length) pos = 0;

  document.body.style.backgroundColor = colores[pos];

  pos++;
}

botonCambiarFondo.addEventListener("click", cambiarFondo);
