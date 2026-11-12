const aprendices = [
    { nombre: "Ana", nota: 4.5, jornada: "Mañana" },
    { nombre: "Luis", nota: 2.8, jornada: "Tarde" },
    { nombre: "Sofía", nota: 3.9, jornada: "Mañana" },
    { nombre: "Juan", nota: 4.8, jornada: "Noche" },
    { nombre: "María", nota: 2.5, jornada: "Tarde" },
    { nombre: "Pedro", nota: 3.4, jornada: "Noche" }
];
 
// filter
const aprobados = aprendices.filter((a) => a.nota >= 3);
console.table(aprobados);
 
const noche = aprendices.filter((a) => a.jornada === "Noche");
console.table(noche);
 
const manana = aprendices.filter((a) => a.jornada === "Mañana");
console.log(`la jornada de la mañana tiene ${manana.length} personas`);
 
const destacados = aprendices.filter((a) => a.nota >= 4);
console.table(destacados);
 
// map
const nombres = aprendices.map((a) => a.nombre.toUpperCase());
console.log(nombres);
 
const conEstado = aprendices.map((a) => ({
    ...a,
    estado: a.nota >= 3 ? "Aprobado" : "No Aprobado"
}));
console.table(conEstado);
 
// find
const juan = conEstado.find((a) => a.nombre === "Juan");
console.log(juan);
 
// some y every
console.log(aprendices.some((a) => a.nota >= 4.6));
console.log(aprendices.some((a) => a.nombre === "María"));
console.log(aprendices.every((a) => a.nota >= 3));
 
// encadenar
const jornota = aprendices
    .filter((a) => a.jornada === "Mañana" && a.nota >= 3)
    .map((a) => a.nombre.toUpperCase());
console.log(jornota);
 
// reduce
const suma = aprendices.reduce((total, a) => total + a.nota, 0);
console.log(suma);
const promedio = suma / aprendices.length;
console.log(`Promedio del grupo: ${promedio.toFixed(2)}`);
 
// sort
// la primera línea muestra [1, 10, 100, 9] porque ordena como texto
console.log([10, 9, 1, 100].sort());
console.log([10, 9, 1, 100].sort((a, b) => a - b));
 
const ranking = aprendices.toSorted((a, b) => b.nota - a.nota);
console.table(ranking);
console.table([...ranking].reverse());
 
const alfabetico = [...aprendices].sort((a, b) => a.nombre.localeCompare(b.nombre));
console.table(alfabetico);
console.table([...alfabetico].reverse());
 
// JSON
const texto = JSON.stringify(ranking, null, 2);
console.log(typeof texto);
console.log(texto);
 
const desempaquetar = JSON.parse(texto);
console.log(desempaquetar);
console.log(desempaquetar[0].nombre);
 
// reto rápido: contarAgotados en una línea
const catalogo = [
    { codigo: "MT01", nombre: "Pastillas de freno delanteras", precio: 28000, stock: 14 },
    { codigo: "MT02", nombre: "Kit de arrastre", precio: 95000, stock: 6 },
    { codigo: "MT03", nombre: "Bujía NGK", precio: 12000, stock: 40 },
    { codigo: "MT04", nombre: "Aceite 20W-50 1L", precio: 32000, stock: 0 },
    { codigo: "MT05", nombre: "Llanta trasera 90/90-18", precio: 135000, stock: 4 },
    { codigo: "MT06", nombre: "Batería 12V", precio: 110000, stock: 0 },
    { codigo: "MT07", nombre: "Espejo retrovisor", precio: 18000, stock: 22 }
];
 
const contarAgotados = () => catalogo.filter((r) => r.stock === 0).length;
console.log(`Repuestos agotados: ${contarAgotados()}`);