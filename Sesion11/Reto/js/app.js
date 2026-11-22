const form = document.querySelector("#formInscripcion");
const resumen = document.querySelector("#resumen");

function validarNombre(valor) {
  if (valor.trim().length < 3) {
    return "El nombre debe tener mínimo 3 letras.";
  }
  return "";
}

function validarDocumento(valor) {
  if (!/^\d{6,10}$/.test(valor.trim())) {
    return "El documento debe tener solo números, de 6 a 10 dígitos.";
  }
  return "";
}

function validarCorreo(valor) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor.trim())) {
    return "Escribe un correo válido, por ejemplo ana@gmail.com";
  }
  return "";
}

function validarTelefono(valor) {
  if (!/^3\d{9}$/.test(valor.trim())) {
    return "El celular debe tener 10 dígitos y empezar por 3.";
  }
  return "";
}

function validarPrograma(valor) {
  if (valor === "") {
    return "Debes elegir un curso.";
  }
  return "";
}

const reglas = {
  nombre: validarNombre,
  documento: validarDocumento,
  correo: validarCorreo,
  telefono: validarTelefono,
  programa: validarPrograma
};

function marcar(id, mensaje) {
  document.querySelector(`#error-${id}`).textContent = mensaje;
  const campo = document.querySelector(`#${id}`);
  if (campo) {
    campo.classList.toggle("invalido", mensaje !== "");
  }
  return mensaje === "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  resumen.textContent = "";

  let valido = true;

  for (const id of Object.keys(reglas)) {
    const valor = document.querySelector(`#${id}`).value;
    valido = marcar(id, reglas[id](valor)) && valido;
  }

  const jornada = form.querySelector('input[name="jornada"]:checked');
  valido = marcar("jornada", jornada === null ? "Debes marcar una jornada." : "") && valido;

  const acepta = document.querySelector("#terminos").checked;
  valido = marcar("terminos", acepta ? "" : "Debes autorizar el tratamiento de datos.") && valido;

  if (!valido) {
    return;
  }

  const nombre = document.querySelector("#nombre").value.trim();
  const programa = document.querySelector("#programa").value;
  resumen.textContent = `✅ Inscripción recibida: ${nombre}, curso ${programa}, jornada ${jornada.value}`;

  form.reset();
});

// Nivel extra: validar mientras escribe
for (const id of Object.keys(reglas)) {
  document.querySelector(`#${id}`).addEventListener("input", (e) => {
    marcar(id, reglas[id](e.target.value));
  });
}

for (const radio of form.querySelectorAll('input[name="jornada"]')) {
  radio.addEventListener("input", () => {
    marcar("jornada", "");
  });
}

document.querySelector("#terminos").addEventListener("input", (e) => {
  marcar("terminos", e.target.checked ? "" : "Debes autorizar el tratamiento de datos.");
});
