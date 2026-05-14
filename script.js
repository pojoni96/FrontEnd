let p1 = document.getElementById("p1");
let p3 = document.getElementById("p3");
const boton = document.getElementById("boton");

function cambiarFondo() {
  p1.className = "claseCompartida";
  p3.className = "claseCompartida";
}

boton.addEventListener("click", cambiarFondo);
