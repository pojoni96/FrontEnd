let boton = document.getElementById("boton");
let parrafo = document.getElementById("parrafo");
let mostrarParrafo = false;

boton.addEventListener("click", () => {
  if (mostrarParrafo) {
    parrafo.style.display = "block";
    boton.innerText = "Ocultar Párrafo";
    mostrarParrafo = false;
  } else {
    parrafo.style.display = "none";
    boton.innerText = "Mostrar Párrafo";
    mostrarParrafo = true;
  }
});
