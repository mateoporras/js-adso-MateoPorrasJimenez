// El portero

let edad = Number(prompt("¿Cuantos añios tienes?"));

if (edad >= 18) {
  console.log("Puedes votar 🗳️");
} else {
  console.log(`Te faltan ${18 - edad} añios para votar`);
}

// Par o impar

let numero = Number(prompt("Escribe un numero:"));

if (numero % 2 === 0) {
  console.log(`${numero} es par`);
} else {
  console.log(`${numero} es impar`);
}


// La escalera de filtros (descuento)

let compra = Number(prompt("Valor de la compra:"));

let descuento;

if (compra >= 200000) {
  descuento = 20;
} else if (compra >= 100000) {
  descuento = 10;
} else {
  descuento = 0;
}

console.log(`Tienes ${descuento}% de descuento`);


// Dos llaves y cualquier entrada

let usuario = prompt("Usuario:");
let clave = prompt("Clave:");

if (usuario === "aprendiz" && clave === "adso2026") {
  console.log("✅ Bienvenido");
} else {
  console.log("❌ Usuario o clave incorrectos");
}


// El ascensor switch

let opcion = prompt("Elige: 1 Empanada, 2 Arepa, 3 Jugo");

switch (opcion) {
  case "1":
    console.log("Empanada: $2.500");
    break;
  case "2":
    console.log("Arepa: $3.000");
    break;
  case "3":
    console.log("Jugo: $4.000");
    break;
  default:
    console.log("Esa opcion no existe");
}