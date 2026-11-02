const agenda = [
    { nombre: "Ana Gómez", telefono: "3001234567", correo: "ana@correo.com" },
    { nombre: "Juan Pérez", telefono: "3109876543", correo: "juan@correo.com" },
    { nombre: "Luis Torres", telefono: "3201112233", correo: "luis@correo.com" }
];
 
let opcion;
 
do {
    opcion = (prompt("1 Agregar · 2 Ver agenda · 3 Buscar · 0 Salir") ?? "0").trim();
 
    switch (opcion) {
        case "1":
            let nombre = (prompt("Nombre:") ?? "").trim();
            let telefono = (prompt("Teléfono:") ?? "").trim();
            let correo = (prompt("Correo:") ?? "").trim();
            if (nombre === "" || telefono === "" || correo === "") {
                console.log("Hay que llenar los 3 datos");
            } else {
                agenda.push({ nombre: nombre, telefono: telefono, correo: correo });
                console.log("Contacto agregado");
            }
            break;
        case "2":
            console.table(agenda);
            break;
        case "3":
            let texto = (prompt("Parte del nombre:") ?? "").trim();
            let resultados = [];
            if (texto === "") {
                console.log("Escribe algo para buscar");
                break;
            }
            for (const contacto of agenda) {
                if (contacto.nombre.toLowerCase().includes(texto.toLowerCase())) {
                    resultados.push(contacto);
                }
            }
            if (resultados.length > 0) {
                console.table(resultados);
            } else {
                console.log("No se encontró ningún contacto");
            }
            break;
        case "0":
            console.log("Hasta luego");
            break;
        default:
            console.log("Opción no válida");
    }
} while (opcion !== "0");
 