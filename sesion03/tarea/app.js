// Año bisiesto
let anio = Number(prompt("Escribe un añio:"));

if (Number.isNaN(anio)) {
  console.log("Eso no es un numero, intenta de nuevo.");
} else if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
  console.log(`${anio} SI es bisiesto`);
} else {
  console.log(`${anio} NO es bisiesto`);
}

// Calculadora con switch
let num1 = Number(prompt("Primer numero:"));
let num2 = Number(prompt("Segundo numero:"));
let operacion = prompt("Operacion (+, -, * o /):");

if (Number.isNaN(num1) || Number.isNaN(num2)) {
  console.log("Los numeros no son validos.");
} else {
  switch (operacion) {
    case "+":
      console.log(`${num1} + ${num2} = ${num1 + num2}`);
      break;
    case "-":
      console.log(`${num1} - ${num2} = ${num1 - num2}`);
      break;
    case "*":
      console.log(`${num1} * ${num2} = ${num1 * num2}`);
      break;
    case "/":
      if (num2 === 0) {
        console.log("No se puede dividir entre cero.");
      } else {
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
      }
      break;
    default:
      console.log("Esa operacion no existe.");
  }
}

// calculadora de IMC
let peso = Number(prompt("Peso en kg:"));
let estatura = Number(prompt("Estatura en metros:"));

if (Number.isNaN(peso) || Number.isNaN(estatura)) {
  console.log("Los datos no son numeros validos.");
} else {
  let imc = peso / estatura ** 2;
  let clasificacion;

  if (imc < 18.5) {
    clasificacion = "Bajo peso";
  } else if (imc <= 24.9) {
    clasificacion = "Normal";
  } else if (imc <= 29.9) {
    clasificacion = "Sobrepeso";
  } else {
    clasificacion = "Obesidad";
  }

  console.log(`Tu IMC es ${imc.toFixed(1)}: ${clasificacion}`);
}