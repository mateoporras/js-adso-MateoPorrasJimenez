document.querySelector("#titulo").textContent = "📝 Tareas de Mateo";

const inputTarea = document.querySelector("#nuevaTarea");
const lista = document.querySelector("#lista");
const contador = document.querySelector("#contador");
const btnTema = document.querySelector("#btnTema");
const btnTodas = document.querySelector("#filtroTodas");
const btnPendientes = document.querySelector("#filtroPendientes");
const btnHechas = document.querySelector("#filtroHechas");

const CLAVE = "s12-tareas";

function cargar() {
    try {
        return JSON.parse(localStorage.getItem(CLAVE)) ?? [];
    } catch {
        return [];
    }
}

function guardar() {
    localStorage.setItem(CLAVE, JSON.stringify(tareas));
}

let tareas = cargar();
let filtro = "todas";

function render() {
    guardar();
    lista.innerHTML = "";

    let visibles = tareas;
    if (filtro === "pendientes") {
        visibles = tareas.filter((t) => !t.hecha);
    } else if (filtro === "hechas") {
        visibles = tareas.filter((t) => t.hecha);
    }

    for (const tarea of visibles) {
        const li = document.createElement("li");
        li.classList.toggle("hecha", tarea.hecha);

        const texto = document.createElement("span");
        texto.textContent = tarea.texto;
        texto.addEventListener("click", () => {
            tarea.hecha = !tarea.hecha;
            render();
        });

        const borrar = document.createElement("button");
        borrar.textContent = "❌";
        borrar.addEventListener("click", () => {
            tareas = tareas.filter((t) => t.id !== tarea.id);
            render();
        });

        li.append(texto);
        li.append(borrar);
        lista.append(li);
    }

    const pendientes = tareas.filter((t) => !t.hecha).length;
    contador.textContent = `${pendientes} pendientes de ${tareas.length}`;
}

function elegirFiltro(nuevo) {
    filtro = nuevo;
    btnTodas.classList.toggle("activo", filtro === "todas");
    btnPendientes.classList.toggle("activo", filtro === "pendientes");
    btnHechas.classList.toggle("activo", filtro === "hechas");
    render();
}

function agregar() {
    const texto = inputTarea.value.trim();
    if (texto === "") {
        inputTarea.classList.add("error");
        return;
    }
    tareas.push({ id: Date.now(), texto: texto, hecha: false });
    inputTarea.value = "";
    render();
}

document.querySelector("#btnAgregar").addEventListener("click", agregar);
btnTodas.addEventListener("click", () => elegirFiltro("todas"));
btnPendientes.addEventListener("click", () => elegirFiltro("pendientes"));
btnHechas.addEventListener("click", () => elegirFiltro("hechas"));

inputTarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter") agregar();
});

inputTarea.addEventListener("input", () => {
    inputTarea.classList.remove("error");
});

btnTema.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
    if (document.body.classList.contains("oscuro")) {
        btnTema.textContent = "☀️ Modo claro";
    } else {
        btnTema.textContent = "🌙 Modo oscuro";
    }
});

elegirFiltro("todas");
