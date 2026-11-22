const form = document.querySelector("#formInscripcion");

function validarNombre(valor) {
  if (valor.trim() === "") return "El nombre es obligatorio.";
  if (valor.trim().length < 3) return "Escribe al menos 3 letras.";
  return "";
}

function marcar(id, mensaje) {
  document.querySelector(`#error-${id}`).textContent = mensaje;
  const campo = document.querySelector(`#${id}`);
  if (campo) campo.classList.toggle("invalido", mensaje !== "");
  return mensaje === "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.querySelector("#nombre").value.trim();
  const programa = document.querySelector("#programa").value;
  const jornada = form.querySelector('input[name="jornada"]:checked');
  const acepta = document.querySelector("#terminos").checked;

  console.log(nombre, programa, jornada ? jornada.value : "sin jornada", acepta);

  marcar("nombre", validarNombre(document.querySelector("#nombre").value));
});
