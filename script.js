const boton = document.getElementById("boton");

/**
 * Retorna el mensaje correspondiente.
 * @param {string} nombre
 * @param {string} apellido
 * @param {string} mail
 * @returns {string}
 */
function cargarMensaje(nombre, apellido, mail) {
  let mensaje = "";

  if (!mail.includes("@")) {
    mensaje = "<div class='formError'><p>Error: Mail incorrecto</p></div>";
  } else if (!nombre || !apellido || !mail)
    mensaje =
      "<div class='formError'><p>Error: no se admiten espacios vacíos</p></div>";
  else
    mensaje = `<div class='formOk'><p>Hola ${nombre} ${apellido}. Te contactaremos a tu correo ${mail}</p></div>`;

  return mensaje;
}

boton.addEventListener("click", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const mail = document.getElementById("mail").value;
  let contenedor = document.getElementById("contenedor");

  contenedor.style.display = "block";
  contenedor.innerHTML = cargarMensaje(nombre, apellido, mail);
});
