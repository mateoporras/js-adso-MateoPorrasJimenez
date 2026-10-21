
// esBisiesto(añio)


function esBisiesto(añio){
    if ((añio % 4 === 0 && añio % 100 !== 0) || añio % 400 === 0){
        return true
    }
    return false
}

let añio = Number(prompt("digite un añio"))

if (esBisiesto(añio)){
    console.log(`${añio} si es bisiesto`)
} else {
    console.log(`${añio} no es bisiesto`)
}


// mayorDeTres(a, b, c)

function mayorDeTres(a, b, c){
    let mayor = a
    if (b > mayor){
        mayor = b
    }
    if (c > mayor){
        mayor = c
    }
    return mayor
}

let num1 = Number(prompt("digite el primer numero"))
let num2 = Number(prompt("digite el segundo numero"))
let num3 = Number(prompt("digite el tercer numero"))

console.log(`el mayor es ${mayorDeTres(num1, num2, num3)}`)

// prueba con iguales escribe el mismo numero las 3 veces


// precioFinal(precio, descuento = 0)
// funcion flecha

const precioFinal = (precio, descuento = 0) => precio - (precio * descuento / 100)

let precio = Number(prompt("digite el precio"))
let descuento = Number(prompt("digite el descuento en % o 0 si no hay"))

if (Number.isNaN(descuento)){
    descuento = 0
}

console.log(`el precio final es $${precioFinal(precio, descuento)}`)