let form = document.getElementById("formulario");
form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  let nombre = document.getElementById("nombre").value;
  let asunto = document.getElementById("asunto").value;
  let mensaje = document.getElementById("mensaje").value;

  let resultado = validacion(nombre, asunto, mensaje);

  if (resultado) {
    setTimeout(() => {
    document.querySelector(".resultado").innerHTML =
      // "Mensaje Enviado con Éxito !!!";
        form.reset();
      }, 1500);
  }
});

const validacion = (nombre, asunto, mensaje) => {
  let valido = true;
  let rgx = /^[a-zA-Z ]*$/;

  // Validar el Nombre
  if (rgx.test(nombre) === false || nombre === "") {
    valido = false;
    document.querySelector(".errorNombre").innerHTML =
      "El Nombre es Requerido.";
  }

  // Validar el Asunto
  if (rgx.test(asunto) === false || asunto === "") {
    valido = false;
    document.querySelector(".errorAsunto").innerHTML =
      "El Asunto es Requerido.";
  }

  // Validar el Mensaje
  if (rgx.test(mensaje) === false || mensaje === "") {
    valido = false;
    document.querySelector(".errorMensaje").innerHTML =
      "El Mensaje es Requerido.";
  }

  return valido;
};