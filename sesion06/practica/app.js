// Paso 1
let tren = ["Ana", "Luis", "Sofía", "Juan"];
console.log(tren[0], tren.length, tren[tren.length - 1]); // Ana 4 Juan
console.log(tren[4]); // undefined
 
tren.push("María");    // Ana, Luis, Sofía, Juan, María
tren.unshift("Pedro"); // Pedro, Ana, Luis, Sofía, Juan, María
tren.pop();            // Pedro, Ana, Luis, Sofía, Juan
console.log(tren);
console.log(tren.includes("Sofía"), tren.indexOf("Juan")); // true 4
tren.splice(1, 1);     // Pedro, Luis, Sofía, Juan
console.log(tren);
 
// Paso 2
for (let i = 0; i < tren.length; i++) {
    console.log(`${i + 1}. ${tren[i]}`);
}
 
for (const pasajero of tren) {
    console.log(`🚃 ${pasajero}`);
}
 
console.table(tren);
 
// Paso 3
const compras = [];
let producto;
 
do {
    producto = (prompt("Producto (vacío para terminar):") ?? "").trim();
    if (producto !== "") {
        compras.push(producto);
    }
} while (producto !== "");
 
for (let i = 0; i < compras.length; i++) {
    console.log(`${i + 1}. ${compras[i]}`);
}
 
let quitar = (prompt("¿Qué producto quiere quitar?") ?? "").trim();
let posicion = compras.indexOf(quitar);
if (posicion === -1) {
    console.log("Ese producto no está en la lista");
} else {
    compras.splice(posicion, 1);
    console.log(`Se quitó ${quitar}`);
}
console.table(compras);
 
// Paso 4
let nombre = "  Alex Porras  ";
console.log(nombre.length);
console.log(nombre.trim());
console.log(nombre.toUpperCase());
console.log(nombre); // sigue igual
nombre = nombre.trim();
 
console.log(nombre.includes("Porras"));
console.log(nombre.slice(0, 3));
console.log(nombre[0]);
let partes = nombre.split(" ");
console.log(partes, partes.join("-"));
 
// Paso 5
function contarVocales(texto) {
    let vocales = 0;
    for (const letra of texto) {
        if ("aeiouáéíóú".includes(letra.toLowerCase())) {
            vocales++;
        }
    }
    return vocales;
}
 
console.log(contarVocales("Murciélago"));
console.log(contarVocales("Alex Porras"));
console.log(contarVocales("rhythm"));
 
// Paso 6
function iniciales(nombreCompleto) {
    let resultado = "";
    let palabras = nombreCompleto.trim().split(" ");
    for (const palabra of palabras) {
        if (palabra !== "") {
            resultado += palabra[0].toUpperCase();
        }
    }
    return resultado;
}
 
function esPalindromo(frase) {
    let limpia = frase.split(" ").join("").toLowerCase();
    let alReves = limpia.split("").reverse().join("");
    return limpia === alReves;
}
 
console.log(iniciales("Ana María Gómez"));
console.log(esPalindromo("Anita lava la tina"));
console.log(esPalindromo("Hola mundo"));
 