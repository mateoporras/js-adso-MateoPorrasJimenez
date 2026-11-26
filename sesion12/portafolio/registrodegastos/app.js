const CLAVE = "s12-gastos";
const categorias = ["Transporte", "Comida", "Estudio", "Entretenimiento", "Otros"];

function cargar() {
    try {
        return JSON.parse(localStorage.getItem(CLAVE)) ?? [];
    } catch {
        return [];
    }
}

function guardar() {
    localStorage.setItem(CLAVE, JSON.stringify(gastos));
}

function pesos(valor) {
    return valor.toLocaleString("es-CO", { style: "currency", currency: "COP" });
}

let gastos = cargar();

const form = document.querySelector("#formGasto");
const inputDescripcion = document.querySelector("#descripcion");
const inputMonto = document.querySelector("#monto");
const selectCategoria = document.querySelector("#categoria");
const inputFecha = document.querySelector("#fecha");
const textoError = document.querySelector("#error");
const tablaGastos = document.querySelector("#tablaGastos");
const textoTotal = document.querySelector("#total");
const listaCategorias = document.querySelector("#porCategoria");

function render() {
    guardar();
    tablaGastos.innerHTML = "";

    for (const g of gastos) {
        const fila = document.createElement("tr");
        for (const valor of [g.fecha, g.descripcion, g.categoria, pesos(g.monto)]) {
            const celda = document.createElement("td");
            celda.textContent = valor;
            fila.append(celda);
        }

        const celdaBorrar = document.createElement("td");
        const borrar = document.createElement("button");
        borrar.textContent = "🗑️";
        borrar.addEventListener("click", () => {
            gastos = gastos.filter((x) => x.id !== g.id);
            render();
        });
        celdaBorrar.append(borrar);
        fila.append(celdaBorrar);

        tablaGastos.append(fila);
    }

    const total = gastos.reduce((suma, g) => suma + g.monto, 0);
    textoTotal.textContent = pesos(total);

    listaCategorias.innerHTML = "";
    for (const c of categorias) {
        const totalCategoria = gastos
            .filter((g) => g.categoria === c)
            .reduce((suma, g) => suma + g.monto, 0);
        if (totalCategoria > 0) {
            const li = document.createElement("li");
            li.textContent = `${c}: ${pesos(totalCategoria)}`;
            listaCategorias.append(li);
        }
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const descripcion = inputDescripcion.value.trim();
    const monto = Number(inputMonto.value);
    const categoria = selectCategoria.value;
    const fecha = inputFecha.value;

    if (descripcion.length < 3) {
        textoError.textContent = "La descripción debe tener al menos 3 letras.";
        return;
    }
    if (Number.isNaN(monto) || monto <= 0) {
        textoError.textContent = "El monto debe ser mayor que cero.";
        return;
    }
    if (categoria === "") {
        textoError.textContent = "Elige una categoría.";
        return;
    }
    if (fecha === "") {
        textoError.textContent = "Elige una fecha.";
        return;
    }

    textoError.textContent = "";
    gastos.push({ id: Date.now(), descripcion: descripcion, monto: monto, categoria: categoria, fecha: fecha });
    form.reset();
    render();
});

document.querySelector("#btnBorrarTodo").addEventListener("click", () => {
    if (confirm("¿Seguro que quieres borrar todos los gastos?")) {
        gastos = [];
        render();
    }
});

render();
