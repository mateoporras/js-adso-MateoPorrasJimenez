
const catalogo = [
    { codigo: "P01", nombre: "Cuaderno", categoria: "Papel", precio: 4500, stock: 20 },
    { codigo: "P02", nombre: "Lápiz", categoria: "Escritura", precio: 1200, stock: 0 },
    { codigo: "P03", nombre: "Borrador", categoria: "Escritura", precio: 800, stock: 35 },
    { codigo: "P04", nombre: "Regla", categoria: "Geometría", precio: 2000, stock: 10 },
    { codigo: "P05", nombre: "Resaltador", categoria: "Escritura", precio: 3000, stock: 0 },
    { codigo: "P06", nombre: "Carpeta", categoria: "Papel", precio: 2500, stock: 15 }
];
 
function buscarPorCodigo(codigo) {
    for (const p of catalogo) {
        if (p.codigo === codigo.toUpperCase()) {
            return p;
        }
    }
    return null;
}
 
function contarAgotados() {
    let agotados = 0;
    for (const p of catalogo) {
        if (p.stock === 0) {
            agotados++;
        }
    }
    return agotados;
}
 
function valorInventario() {
    let total = 0;
    for (const p of catalogo) {
        total += p.precio * p.stock;
    }
    return total;
}
 
let opcion;
 
do {
    opcion = (prompt("1 Ver catálogo · 2 Buscar por código · 3 Agotados · 4 Valor del inventario · 5 Vender · 0 Salir") ?? "0").trim();
 
    switch (opcion) {
        case "1":
            console.table(catalogo);
            break;
        case "2":
            let codigo = (prompt("Código del producto:") ?? "").trim();
            let producto = buscarPorCodigo(codigo);
            if (producto) {
                console.table([producto]);
            } else {
                console.log("No existe ese código");
            }
            break;
        case "3":
            console.log(`Productos agotados: ${contarAgotados()}`);
            break;
        case "4":
            console.log(`Valor del inventario: $${valorInventario()}`);
            break;
        case "5":
            let codigoVenta = (prompt("Código del producto:") ?? "").trim();
            let aVender = buscarPorCodigo(codigoVenta);
            let cantidad = Number(prompt("Cantidad:"));
            if (!aVender) {
                console.log("No existe ese código");
            } else if (Number.isNaN(cantidad) || cantidad <= 0) {
                console.log("Cantidad no válida");
            } else if (cantidad > aVender.stock) {
                console.log(`Solo quedan ${aVender.stock} de ${aVender.nombre}`);
            } else {
                aVender.stock -= cantidad;
                console.log(`Venta lista. Total: $${cantidad * aVender.precio}`);
            }
            break;
        case "0":
            console.log("Hasta luego");
            break;
        default:
            console.log("Opción no válida");
    }
} while (opcion !== "0");