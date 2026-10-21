function leerNumero(mensaje){
    let numero
    do {
        numero = Number(prompt(mensaje))
    } while (Number.isNaN(numero))
    return numero
}

function pesosadolares(){
    let cop = leerNumero("digite cuantos pesos tiene")
    let usd = leerNumero("ingrese a cuanto esta el dolar?")
    return `usted posee esta cantidad de dolares ${cop / usd}` 
}

function conversortemperatura(){
    let c = leerNumero("digite cuantos grados °C hay")
    return `los grados ${c} centigrados son ${c * 9 / 5 + 32} °F`
}

function kmamll(){
    let km = leerNumero("digite la cantidad de kilometros")
    return `${km} kilometros son ${km * 0.621371} millas`
}

function segundosahora(){
    let segundos = leerNumero("digite la cantidad de segundos")
    return `${segundos} segundos son ${segundos / 3600} horas`
}

// nivel extra litros a galones, con la funcion flecha
const litrosagal = (litros) => `${litros} litros son ${litros * 0.264172} galones`

let conversiones = 0

let opcion = Number(prompt("menu \n1. pesos a dolares\n2. °c a °f\n3. km a millas\n4. segundos a horas\n5. litros a galones\n0. salir"))

while (opcion !== 0){
    switch (opcion){
        case 1: 
            console.log(pesosadolares())
            conversiones++
            break
        case 2:
            console.log(conversortemperatura())
            conversiones++
            break
        case 3:
            console.log(kmamll())
            conversiones++
            break
        case 4:
            console.log(segundosahora())
            conversiones++
            break
        case 5:
            console.log(litrosagal(leerNumero("digite la cantidad de litros")))
            conversiones++
            break
        default:
            alert("debes poner un numero del 1 al 0")
            console.log("debes elegir una opcion entre 0 y 5")
            break
    }
    opcion = Number(prompt("menu \n1. pesos a dolares\n2. °c a °f\n3. km a millas\n4. segundos a horas\n5. litros a galones\n0. salir"))
}

console.log(`hiciste ${conversiones} conversiones, adios!`)