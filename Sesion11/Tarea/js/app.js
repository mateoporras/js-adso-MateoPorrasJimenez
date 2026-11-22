// Tarea sesión 11 - Cambio de contraseña con medidor de fuerza

const form = document.querySelector("#formClave");
const clave = document.querySelector("#clave");
const confirmar = document.querySelector("#confirmar");
const fuerza = document.querySelector("#fuerza");
const mensaje = document.querySelector("#mensaje");
const boton = document.querySelector("#guardar");

// Pone ✅ o ❌ en un requisito
function pintar(id, cumple, texto) {
  const li = document.querySelector("#" + id);
  if (cumple) {
    li.textContent = "✅ " + texto;
  } else {
    li.textContent = "❌ " + texto;
  }
}

// Revisa todo cada vez que el usuario escribe
function revisar() {
  const valor = clave.value;

  // los 5 requisitos
  const tieneLongitud = valor.length >= 8;
  const tieneMayuscula = /[A-Z]/.test(valor);
  const tieneMinuscula = /[a-z]/.test(valor);
  const tieneNumero = /\d/.test(valor);
  const tieneSimbolo = /[^A-Za-z0-9]/.test(valor);

  pintar("req-longitud", tieneLongitud, "Al menos 8 caracteres");
  pintar("req-mayuscula", tieneMayuscula, "Una mayúscula");
  pintar("req-minuscula", tieneMinuscula, "Una minúscula");
  pintar("req-numero", tieneNumero, "Un número");
  pintar("req-simbolo", tieneSimbolo, "Un símbolo");

  // contar cuántos se cumplen
  let cuenta = 0;
  if (tieneLongitud) cuenta++;
  if (tieneMayuscula) cuenta++;
  if (tieneMinuscula) cuenta++;
  if (tieneNumero) cuenta++;
  if (tieneSimbolo) cuenta++;

  // decidir la fuerza
  if (cuenta <= 2) {
    fuerza.textContent = "Débil";
    fuerza.className = "debil";
  } else if (cuenta <= 4) {
    fuerza.textContent = "Media";
    fuerza.className = "media";
  } else {
    fuerza.textContent = "Fuerte";
    fuerza.className = "fuerte";
  }

  // revisar que la confirmación coincida
  const coincide = valor === confirmar.value;

  if (confirmar.value !== "" && !coincide) {
    mensaje.textContent = "Las contraseñas no coinciden.";
  } else {
    mensaje.textContent = "";
  }

  // el botón solo se activa con los 5 requisitos y confirmación igual
  if (cuenta === 5 && coincide) {
    boton.disabled = false;
  } else {
    boton.disabled = true;
  }
}

clave.addEventListener("input", revisar);
confirmar.addEventListener("input", revisar);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Contraseña guardada ✅");
  form.reset();
  revisar();
});
