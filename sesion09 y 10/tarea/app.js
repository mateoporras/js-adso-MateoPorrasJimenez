const productos = [
    { nombre: "Casco abatible", precio: 185000 },
    { nombre: "Guantes de cuero", precio: 45000 },
    { nombre: "Candado de disco", precio: 38000 },
    { nombre: "Chaqueta impermeable", precio: 95000 },
    { nombre: "Kit de herramientas", precio: 32000 },
    { nombre: "Soporte para celular", precio: 25000 }
];

const carrito = [];

const listaProductos = document.querySelector("#productos");
const listaCarrito = document.querySelector("#carrito");
const textoVacio = document.querySelector("#vacio");
const textoCantidad = document.querySelector("#cantidad");
const textoTotal = document.querySelector("#total");

function enPesos(valor) {
    return valor.toLocaleString("es-CO", { style: "currency", currency: "COP" });
}

function renderProductos() {
    listaProductos.innerHTML = "";
    for (const producto of productos) {
        const li = document.createElement("li");

        const nombre = document.createElement("span");
        nombre.textContent = producto.nombre;

        const precio = document.createElement("span");
        precio.classList.add("precio");
        precio.textContent = enPesos(producto.precio);

        const agregar = document.createElement("button");
        agregar.textContent = "Agregar";
        agregar.addEventListener("click", () => {
            carrito.push(producto);
            renderCarrito();
        });

        li.append(nombre);
        li.append(precio);
        li.append(agregar);
        listaProductos.append(li);
    }
}

function renderCarrito() {
    listaCarrito.innerHTML = "";
    for (const item of carrito) {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - ${enPesos(item.precio)}`;

        const quitar = document.createElement("button");
        quitar.textContent = "Quitar";
        quitar.classList.add("quitar");
        quitar.addEventListener("click", () => {
            carrito.splice(carrito.indexOf(item), 1);
            renderCarrito();
        });

        li.append(quitar);
        listaCarrito.append(li);
    }

    const total = carrito.reduce((suma, p) => suma + p.precio, 0);
    textoTotal.textContent = `Total: ${enPesos(total)}`;
    textoCantidad.textContent = `(${carrito.length})`;
    textoVacio.classList.toggle("oculto", carrito.length > 0);
}

renderProductos();
renderCarrito();
