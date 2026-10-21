function saludar(nombre){
    console.log(`Hola ${nombre}`)
}

saludar("Edison")
saludar("Darley")
saludar("Richi")

function areaRectangulo(b, h){
    return b * h
}

let arearec= areaRectangulo(5, 4)
console.log(`el area del rectangulo es ${arearec}`)
console.log(`el area  del rectangulo es ${areaRectangulo(3,8)}`)

function areaRectangulo1(){
    let b = Number(prompt("digite el valor de la base"))
    let h = 10
    return b * h
}

console.log(areaRectangulo())


function esPar(numero) {
  return numero % 2 === 0;
}

let n = Number(prompt("Escribe un número:"));
if (esPar(n)) {
  console.log(`${n} es par`);
} else {
  console.log(`${n} es impar`);
}

// Si no dicen la tasa, usa 19 %
function calcularIVA(precio, tasa = 0.19) {
  return precio * tasa;
}
console.log(calcularIVA(10000));
console.log(calcularIVA(10000, 0.05));

// La misma idea, más corta
const doble = (n) => n * 2;
const saludo = (nombre) => {
  return `Hola, ${nombre}`;
};
console.log(doble(21), saludo("Sofía"));

console.log(clasificarNota(4.8));
console.log(clasificarNota(3.2));
console.log(clasificarNota(1.5));

function evaluarnota(nota){
    if(nota < 3)
        return `${nota} No probado`
    else if(nota < 4.1)
        return  `${nota} Aceptable - Aprovado`
    else if(nota <4.6)
        return `${nota} sobresalinete - Aprovado`
    else
        return `${nota} Excelente - Aprovado`
}

console.log(evaluarnota(4.8));
console.log(evaluarnota(3.2));
console.log(evaluarnota(1.5));