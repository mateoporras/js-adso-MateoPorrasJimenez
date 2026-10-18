// TABLA A PEDIDO
// Pide un numero y muestra su tabla del 1 al 10

let tabla = Number(prompt("¿De que numero quieres la tabla?"));

if (Number.isNaN(tabla)) {
  console.log("Eso no es un numero.");
} else {
  for (let i = 1; i <= 10; i++) {
    console.log(`${tabla} x ${i} = ${tabla * i}`);
  }
}

// ESTADISTICAS DEL GRUPO
// Pregunta cuantas notas vas a ingresar, pidelas una
// por una rechazando las invalidas con do...while
// y muestra el promedio, la nota mayor y la nota menor

let cantidad = Number(prompt("¿Cuantas notas vas a ingresar?"));

if (Number.isNaN(cantidad) || cantidad <= 0) {
  console.log("Cantidad no valida.");
} else {
  let suma = 0;
  let mayor = -1;  // ninguna nota real es menor que -1
  let menor = 6;   // ninguna nota real es mayor que 6

  for (let i = 1; i <= cantidad; i++) {
    let nota;

    do {
      nota = Number(prompt(`Nota ${i} (de 0 a 5):`));
    } while (Number.isNaN(nota) || nota < 0 || nota > 5);

    suma += nota;

    if (nota > mayor) {
      mayor = nota;
    }

    if (nota < menor) {
      menor = nota;
    }
  }

  let promedio = suma / cantidad;

  console.log(`Promedio: ${promedio.toFixed(1)}`);
  console.log(`Nota mayor: ${mayor.toFixed(1)}`);
  console.log(`Nota menor: ${menor.toFixed(1)}`);
}