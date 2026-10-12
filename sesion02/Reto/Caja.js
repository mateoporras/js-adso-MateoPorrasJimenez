
// el usuariop ingresa el valor correspondiente a cada categoria
const entradaPrecio = prompt("Precio del producto: ");
const entradaCantidad = prompt("Cantidad: ");
const entradaDescuento = prompt("EL porcentaje de descuento: ");

// si alguna entrada da null es porque el usuario dio cancelar
if (entradaPrecio === null || entradaCantidad === null || entradaDescuento === null) {
    alert("Compra cancelada");
} else { 
    // se convierte a numeros despues de que se verifica que el usuario no cancela
    const precio = Number(entradaPrecio);
    const cantidad = Number(entradaCantidad);
    const porcentaje_descuento = Number(entradaDescuento);       
    // se valida si los datos ingresados efectivamente son numeros o se dejo basio algun prompt
    if (Number.isNaN(precio) || Number.isNaN(cantidad) || Number.isNaN(porcentaje_descuento)) {
        alert("Por favor ingresa numeros.");
    } else { 
        // calculos matematicos correspondientes
        const subtotal = precio * cantidad;
        const descuento = subtotal * (porcentaje_descuento / 100);
        const subtotal_con_el_descuento = subtotal - descuento;
        const iva = subtotal_con_el_descuento * 0.19; // el iva con el descuento
        const total = subtotal_con_el_descuento + iva; // total de lo que se debe pagar
        // salida de los datos en la consola usando el método de formato de moneda colombiana
        console.log("SUBTOTAL: " + subtotal.toLocaleString("es-CO", { style: "currency", currency: "COP" }));
        console.log("DESCUENTO: -" + descuento.toLocaleString("es-CO", { style: "currency", currency: "COP" }));
        console.log("IVA 19% : " + iva.toLocaleString("es-CO", { style: "currency", currency: "COP" }));
        console.log("TOTAL: " + total.toLocaleString("es-CO", { style: "currency", currency: "COP" }));
        // cuadro de alerta con el resultado
        alert("El total a pagar es: " + total.toLocaleString("es-CO", { style: "currency", currency: "COP" }));
    }
}