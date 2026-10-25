const DOMINIO = "@adso.ejemplo.co";
const conTilde = "áéíóúüñ";
const sinTilde = "aeiouun";
 
function quitarTildes(texto) {
    let resultado = "";
    for (const letra of texto) {
        let pos = conTilde.indexOf(letra);
        if (pos !== -1) {
            resultado += sinTilde[pos];
        } else {
            resultado += letra;
        }
    }
    return resultado;
}
 
const correos = [];
let nombreCompleto;
 
do {
    nombreCompleto = (prompt("Nombre completo (vacío para terminar):") ?? "").trim();
 
    if (nombreCompleto !== "") {
        let todas = nombreCompleto.split(" ");
        let partes = [];
        for (const palabra of todas) {
            if (palabra !== "") {
                partes.push(palabra);
            }
        }
 
        if (partes.length < 2) {
            alert("Escribe al menos un nombre y un apellido");
        } else {
            // con 2 palabras el apellido es la última, con 3 o más es la penúltima
            let apellido;
            if (partes.length === 2) {
                apellido = partes[1];
            } else {
                apellido = partes[partes.length - 2];
            }
 
            let usuario = partes[0][0] + apellido;
            usuario = quitarTildes(usuario.toLowerCase());
 
            let correo = usuario + DOMINIO;
            let contador = 2;
            while (correos.includes(correo)) {
                correo = usuario + contador + DOMINIO;
                contador++;
            }
 
            correos.push(correo);
        }
    }
} while (nombreCompleto !== "");
 
for (let i = 0; i < correos.length; i++) {
    console.log(`${i + 1}. ${correos[i]}`);
}
console.log(`Total de correos: ${correos.length}`);