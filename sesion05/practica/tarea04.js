let cnotas
let nota
let mayor = 0
let menor = 5.1
let suma= 0
do{
    cnotas = Number(prompt("digite la cantidad de notas"))
} while (Number.isNaN(cnotas) || cnotas < 0 || Number.isInteger (cnotas) != true)

for (let i = 0; i < cnotas; i++){
    do{
        nota = Number(prompt(`${i+1}: Digite la nota`))
    }while (Number.isNaN(nota) || cnotas < 0 || nota > 5)

    suma += nota
    if(nota > mayor)
        mayor = nota
    if(nota < menor)
        menor = nota

}

let promedio = suma / cnotas
alert(`el promedio de notas es ${promedio}\nLa nota mayor es ${mayor}\nLa nota menor es ${menor}`)