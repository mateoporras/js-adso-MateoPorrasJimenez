const pedidos = [
    { id: 1, cliente: "Ana", plato: "Bandeja paisa", cantidad: 2, precioUnitario: 32000, estado: "entregado", domicilio: true },
    { id: 2, cliente: "Luis", plato: "Ajiaco", cantidad: 1, precioUnitario: 28000, estado: "pendiente", domicilio: false },
    { id: 3, cliente: "Sofía", plato: "Arepa de choclo", cantidad: 4, precioUnitario: 8000, estado: "entregado", domicilio: true },
    { id: 4, cliente: "Juan", plato: "Sancocho", cantidad: 3, precioUnitario: 26000, estado: "pendiente", domicilio: true },
    { id: 5, cliente: "María", plato: "Empanadas x6", cantidad: 2, precioUnitario: 12000, estado: "entregado", domicilio: false },
    { id: 6, cliente: "Pedro", plato: "Bandeja paisa", cantidad: 1, precioUnitario: 32000, estado: "entregado", domicilio: true },
    { id: 7, cliente: "Camila", plato: "Mondongo", cantidad: 2, precioUnitario: 25000, estado: "pendiente", domicilio: false },
    { id: 8, cliente: "Andrés", plato: "Arroz con pollo", cantidad: 3, precioUnitario: 22000, estado: "entregado", domicilio: true },
    { id: 9, cliente: "Valentina", plato: "Ajiaco", cantidad: 2, precioUnitario: 28000, estado: "entregado", domicilio: false },
    { id: 10, cliente: "Daniel", plato: "Chicharrón", cantidad: 5, precioUnitario: 15000, estado: "pendiente", domicilio: true }
];
 
const enPesos = (valor) => valor.toLocaleString("es-CO", { style: "currency", currency: "COP" });
 
// 1. total de cada pedido
const conTotal = pedidos.map((p) => ({ ...p, total: p.cantidad * p.precioUnitario }));
console.table(conTotal);
 
// 2. pedidos pendientes
const pendientes = conTotal.filter((p) => p.estado === "pendiente");
console.log(`Pedidos pendientes: ${pendientes.length}`);
 
// 3. total vendido de los entregados
const totalVendido = conTotal
    .filter((p) => p.estado === "entregado")
    .reduce((suma, p) => suma + p.total, 0);
console.log(`Total vendido: ${enPesos(totalVendido)}`);
 
// 4. los 3 pedidos más grandes
const masGrandes = conTotal.toSorted((a, b) => b.total - a.total).slice(0, 3);
console.table(masGrandes);
 
// 5. buscar un pedido por número
const numero = Number(prompt("Número del pedido:"));
const pedidoBuscado = conTotal.find((p) => p.id === numero);
if (pedidoBuscado) {
    console.table([pedidoBuscado]);
} else {
    console.log("Ese pedido no existe");
}
 
// 6. domicilios pendientes por despachar
const hayDomicilios = conTotal.some((p) => p.estado === "pendiente" && p.domicilio);
console.log(hayDomicilios ? "Todavía hay domicilios pendientes" : "No hay domicilios pendientes");
 