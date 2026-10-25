function contarPalabras(frase) {
    let partes = frase.trim().split(" ");
    let cantidad = 0;
    for (const parte of partes) {
        if (parte !== "") {
            cantidad++;
        }
    }
    return cantidad;
}
 
console.log(contarPalabras("hola mundo"));
console.log(contarPalabras("   hola    mundo   feo "));
console.log(contarPalabras(""));
 
function formatoTitulo(frase) {
    let partes = frase.trim().split(" ");
    let resultado = [];
    for (const parte of partes) {
        if (parte !== "") {
            let primera = parte[0].toUpperCase();
            let resto = parte.slice(1).toLowerCase();
            resultado.push(primera + resto);
        }
    }
    return resultado.join(" ");
}
 
console.log(formatoTitulo("hOLA mUNDO"));
console.log(formatoTitulo("  ana   maría GÓMEZ "));
 