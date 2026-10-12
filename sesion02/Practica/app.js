const nombre = "Ana";
let edad = 17;
let estatura = 1.68;
let esAprendiz = true;
let apodo;

console.log(typeof nombre, typeof edad, typeof estatura, typeof esAprendiz, typeof apodo);

console.log(7 / 2); // 3.5
console.log(7 % 2); // 1
console.log(2 ** 3); // 8
console.log(10 + 3 * 2); // 16
console.log((10 + 3) * 2); // 26
console.log(0.1 + 0.2); // 0.3


// Si el primero es string va a convertir a todos los de adelante en string
console.log("5" + "5") // 55
console.log("5" + 5 + 5) // 555
console.log(5 + 5) // 10
console.log(5 + 5 + "5") // 105 
console.log("5" * 5) // 25
console.log("Mateo" * 5) // NaN no funciona

console.log(typeof ("5" + "5")) // string
console.log(typeof ("5" + 5 + 5)) // string
console.log(typeof (5 + 5)) // number
console.log(typeof (5 + 5 + "5")) // string el final marco la diferencia del tipo de dato
console.log(typeof ("5" * 5)) // string


// Entradas
let nombre1 = prompt("¿digite su nombre?")

// Si pones un string te dice en la consola que no es un number
let edad1 = Number(prompt("¿Cuántos años tienes?"));
 if (Number.isNaN(edad1)) {
     console.log("Eso no es un número (en la edad)");
}

// Si pones un string te dice en la consola que no es un number
let nota = Number(prompt("Digite su nota de Javascript"));
 if (Number.isNaN(nota)) {
     console.log("Eso no es un número (en la nota)");
}

let suma = edad1 + 15
console.log("su nombre es: " + nombre1)
console.log("y su edad incrementada es: " + suma)
console.log(`su nota definitiva es ${nota}`)


let nota1 = Number(prompt("Digite su nota # 1 de Javascript"))
let nota2 = Number(prompt("Digite su nota # 2 de Javascript"))
let nota3 = Number(prompt("Digite su nota # 3 de Javascript"))

let promedio = (nota1 + nota2 + nota3)/3
console.log(`su nota definita es: ${promedio.toFixed(1)}`)