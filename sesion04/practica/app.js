// let numero = Number(prompt("digite un numero para crearle su tabla"))
// for (let i = 1; i <= 10; i++) {
//   console.log(`${numero} * ${i} = ${numero * i}`);
// }

// let numero2 = Number(prompt("digite un numero para crearle su tabla"))
// for (let i = 20; i >= 0; i--) {
//   console.log(`${numero2} * ${i} = ${numero2 * i}`);
// }

let numero = Number(prompt("Digite un numero  para crearle su tabla"))
let i = 0
while(i <= 10){
    console.log(`${numero} * ${i} = ${numero * i}`)
    i++
}


let ahorro = Number(prompt("ingrese cuanto va a ahorrar"))
let suma = 0;    // acumulador
let semanas = 0;   // contador

while (suma < 100000) {
  suma += ahorro;
  semanas++;
}
console.log(`Llegaste a ${suma} en ${semanas} semanas`);


let n = Number(prompt("ingrese un numero"))
let suma1 = 0
let contimpares = 0
for(let i =0; i<= n; i++){
    suma += i
    if(i % 2 == 0)
        contpares += 1 
    else
        contimpares += 1
}
alert(`la suma de los numeros entre 1 y ${n} es ${suma}`)
alert(`la cantidad de pares entre 1 y ${n} es ${contrapares}`)
alert(`la cantidad de impares entre 1 y ${n} es ${contimpares}`)


let nota;
do {
  nota = Number(prompt("Nota de 0 a 5:"));
} while (Number.isNaN(nota) || nota < 0 || nota > 5);

console.log(`Nota válida: ${nota}`);

let respuesta 
do{
    respuesta = prompt("esta todo claro??").toLowerCase()
} while (respuesta != "si")

    console.log("comprendio el tema??")