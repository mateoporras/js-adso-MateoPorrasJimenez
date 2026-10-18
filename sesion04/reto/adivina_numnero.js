// Adivina el numero secreto entre 1 y 100, maximo 7 intentos

let otraVez;

do {
  let secreto = Math.floor(Math.random() * 100) + 1;
  

  let intentos = 0;
  let adivino = false;

  while (intentos < 7 && !adivino) {
    let intento = Number(prompt("Adivina el numero (1 a 100):"));

    if (Number.isNaN(intento) || intento < 1 || intento > 100) {
      console.log("Escribe un numero del 1 al 100, no gastas intento.");
      continue;  // avisa sin gastarle un intento
    }

    intentos++;

    if (intento === secreto) {
      console.log(`Adivinaste en ${intentos} intentos!`);
      adivino = true;
    } else if (intento < secreto) {
      console.log(`Mas alto (intento #${intentos} de 7)`);
    } else {
      console.log(`Mas bajo (intento #${intentos} de 7)`);
    }
  }

  if (!adivino) {
    console.log(`Perdiste. El numero era ${secreto}`);
  }

  otraVez = confirm("¿Jugar otra vez?");
} while (otraVez);