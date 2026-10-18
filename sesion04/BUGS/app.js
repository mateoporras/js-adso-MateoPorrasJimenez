let suma = 0;
const cantidad = 4;

for (let i = 1; i < cantidad; i++) {  // 2 error es <=
  suma = 0; // Error 1
  let nota = prompt(`Nota ${i}:`); // tercer error Number(prompt())
  suma = suma + nota;
}

console.log(`Promedio: ${suma / cantidad}`);


let opcion;
let total = 0;

do {
  opcion = prompt("1 Cuaderno $4.500 · 2 Lápiz $1.200 · 3 Borrador $800 · 0 Pagar");
  switch (opcion) {
    case "1": total += 4500; break;
    case "2": total += 1200; break;
    case "3": total += 800; break;
    case "0": break;
    default: alert("Opción no válida");
  }
  console.log(`Llevas ${total}`);
} while (opcion !== "0");

alert(`Total a pagar: ${total}`);