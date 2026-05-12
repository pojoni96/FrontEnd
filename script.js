let resultado = document.getElementById("resultado");
const botonRestar = document.getElementById("botonRestar");
const botonSumar = document.getElementById("botonSumar");

botonSumar.addEventListener("click", () => resultado.innerText++);

botonRestar.addEventListener("click", () => resultado.innerText--);
