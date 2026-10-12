// segundos a reloj
let entradaSegundos = prompt("Escribe los segundos:");

let totalSegundos = Number(entradaSegundos);

if (Number.isNaN(totalSegundos)) {
  console.log("Eso no es un numero, intenta de nuevo.");
} else {
  let horas = Math.floor(totalSegundos / 3600);
  let minutos = Math.floor((totalSegundos % 3600) / 60);
  let segundos = totalSegundos % 60;

  console.log(`${totalSegundos} s -> ${horas} h ${minutos} min ${segundos} s`);
}


// temperatura

let entradaCelsius = prompt("Escribe los grados Celsius:");

let celsius = Number(entradaCelsius);

if (Number.isNaN(celsius)) {
  console.log("Eso no es un numero, intenta de nuevo.");
} else {
  let fahrenheit = celsius * 9 / 5 + 32;

  console.log(`${celsius} °C son ${fahrenheit} °F`);
}

// promedio de notas
let nota1 = Number(prompt("Escribe la nota 1 (de 0.0 a 5.0):"));
let nota2 = Number(prompt("Escribe la nota 2 (de 0.0 a 5.0):"));
let nota3 = Number(prompt("Escribe la nota 3 (de 0.0 a 5.0):"));

if (Number.isNaN(nota1) || Number.isNaN(nota2) || Number.isNaN(nota3)) {
  console.log("Una de las notas no es un numero, revisa los datos.");
} else {
  let promedio = (nota1 + nota2 + nota3) / 3;

  console.log(`Tu promedio es ${promedio.toFixed(1)}`);
}