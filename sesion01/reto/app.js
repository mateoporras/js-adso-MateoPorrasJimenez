// const: valores que no cambian
const nombre = "Mateo Porras"
const programa = "Análisis Y Desarrollo De Software"
const ficha = 3534466
const frase = "Si te caes siete veces, levántate ocho"

// let: valor que sí cambia
let ciudad = "Medellin"

// las impreciones lo que sale en consola
console.log(`👋 Hola, mi nombre es ${nombre}`) // imprime mi nombre
console.log(`📍Mi ciudad es ${ciudad}`) // imprime mi ciudad
console.log(`📚 pertenezco al programa ${programa}, la ficha del programa es ${ficha}`) // imprime el programa y ficha
console.log(`💬 mi frase es ${frase}`) // imprime mi frase

// CAMBIO DE VARIABLE
// Se cambia la ciudad y se muestra el cambio
ciudad = "Bogotá"
console.log(`Ahora vivo en ${ciudad}`) //imptime el cambio de ciudad

// pasa el nombre a mayúsculas y %c aplica el estilo CSS
console.log(`%c${nombre.toUpperCase()}`, "color: purple; font-size: 24px;")