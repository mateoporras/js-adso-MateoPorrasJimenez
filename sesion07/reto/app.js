const catalogo = [
    { codigo: "MT01", nombre: "Pastillas de freno delanteras", categoria: "Frenos", precio: 28000, stock: 14 },
    { codigo: "MT02", nombre: "Kit de arrastre", categoria: "Transmisión", precio: 95000, stock: 6 },
    { codigo: "MT03", nombre: "Bujía NGK", categoria: "Motor", precio: 12000, stock: 40 },
    { codigo: "MT04", nombre: "Aceite 20W-50 1L", categoria: "Lubricantes", precio: 32000, stock: 0 },
    { codigo: "MT05", nombre: "Llanta trasera 90/90-18", categoria: "Llantas", precio: 135000, stock: 4 },
    { codigo: "MT06", nombre: "Batería 12V", categoria: "Eléctrico", precio: 110000, stock: 0 },
    { codigo: "MT07", nombre: "Espejo retrovisor", categoria: "Accesorios", precio: 18000, stock: 22 }
];
 
function buscarPorCodigo(codigo) {
    for (const moto of catalogo) {
        if (moto.codigo === codigo.toUpperCase()) {
            return moto;
        }
    }
    return null;
}
 
function contarAgotados() {
    let cuenta = 0;
    for (const moto of catalogo) {
        if (moto.stock === 0) {
            cuenta++;
        }
    }
    return cuenta;
}
 
function valorInventario() {
    let suma = 0;
    for (const moto of catalogo) {
        suma += moto.precio * moto.stock;
    }
    return suma;
}
 
function enPesos(valor) {
    return valor.toLocaleString("es-CO", { style: "currency", currency: "COP" });
}
 
let opcion;
 
do {
    opcion = (prompt("1 Ver catálogo · 2 Buscar por código · 3 Agotados · 4 Valor del inventario · 5 Vender · 0 Salir") ?? "0").trim();
 
    switch (opcion) {
        case "1":
            console.table(catalogo);
            break;
        case "2":
            let codigoBuscado = (prompt("Código del repuesto:") ?? "").trim();
            let resultado = buscarPorCodigo(codigoBuscado);
            if (resultado === null) {
                console.log("Ese código no existe");
            } else {
                console.table([resultado]);
            }
            break;
        case "3":
            console.log(`Repuestos agotados: ${contarAgotados()}`);
            break;
        case "4":
            console.log(`Valor del inventario: ${enPesos(valorInventario())}`);
            break;
        case "5":
            let codigoVenta = (prompt("Código del repuesto a vender:") ?? "").trim();
            let repuesto = buscarPorCodigo(codigoVenta);
            if (repuesto === null) {
                console.log("Ese código no existe");
                break;
            }
            let unidades = Number(prompt(`¿Cuántas unidades de ${repuesto.nombre}?`));
            if (Number.isNaN(unidades) || unidades <= 0) {
                console.log("Cantidad no válida");
            } else if (unidades > repuesto.stock) {
                console.log(`No alcanza, solo quedan ${repuesto.stock}`);
            } else {
                repuesto.stock -= unidades;
                console.log(`Venta hecha: ${enPesos(unidades * repuesto.precio)}`);
            }
            break;
        case "0":
            console.log("Hasta luego");
            break;
        default:
            console.log("Opción no válida");
    }
} while (opcion !== "0");
