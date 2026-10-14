let nombre = prompt("Nombre del aprendiz:");
let entradaNota = prompt("Nota (de 0.0 a 5.0):");

let nota = Number(entradaNota);

// Primero valido si no es numero
if (Number.isNaN(nota)) {
  alert("La nota no es un numero. Recarga con F5 e intenta de nuevo.");
} else if (nota < 0 || nota > 5) {
  // Segundo si esta fuera de rango
  alert("La nota debe estar entre 0.0 y 5.0. Intenta de nuevo.");
} else {
  // Tercero clasifico, empezando por la condicion mas exigente
  let resultado;

  if (nota >= 4.6) {
    resultado = "Excelente";
  } else if (nota >= 4.0) {
    resultado = "Sobresaliente";
  } else if (nota >= 3.0) {
    resultado = "Aprobado";
  } else {
    resultado = "No aprobado";
  }

  console.log(`Aprendiz: ${nombre}`);
  console.log(`Nota: ${nota.toFixed(1)}`);
  console.log(`Resultado: ${resultado}`);

  alert(`${nombre}, tu nota es ${nota.toFixed(1)}: ${resultado}`);

  // la jornada con switch
  let jornada = prompt("Jornada (M, T o N):");

  switch (jornada.toUpperCase()) {
    case "M":
      alert("Jornada manana");
      break;
    case "T":
      alert("Jornada tarde");
      break;
    case "N":
      alert("Jornada noche");
      break;
    default:
      alert("Esa jornada no existe");
  }
}