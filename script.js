let parrafos = document.querySelectorAll("p");
const boton = document.getElementById("boton");

boton.addEventListener("click", () =>
  parrafos.forEach((p) => (p.className = "nuevoEstilo")),
);
