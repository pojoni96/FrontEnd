let campoTexto = document.getElementById("campoTexto");
let titulo = document.getElementById("tituloObjetivo");

campoTexto.addEventListener("input", (e) => {
  titulo.innerText = e.target.value;
});
