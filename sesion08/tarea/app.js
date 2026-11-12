const textoPeliculas = `[
  {"titulo": "Encanto", "anio": 2021, "genero": "Animación", "calificacion": 4.4},
  {"titulo": "El abrazo de la serpiente", "anio": 2015, "genero": "Drama", "calificacion": 4.6},
  {"titulo": "Coco", "anio": 2017, "genero": "Animación", "calificacion": 4.8},
  {"titulo": "Pájaros de verano", "anio": 2018, "genero": "Drama", "calificacion": 4.3},
  {"titulo": "Intensamente 2", "anio": 2024, "genero": "Animación", "calificacion": 4.2},
  {"titulo": "Interestelar", "anio": 2014, "genero": "Ciencia ficción", "calificacion": 4.7},
  {"titulo": "Dune", "anio": 2021, "genero": "Ciencia ficción", "calificacion": 4.1},
  {"titulo": "La estrategia del caracol", "anio": 1993, "genero": "Comedia", "calificacion": 4.5}
]`;
 
// 1. de texto a arreglo
const peliculas = JSON.parse(textoPeliculas);
 
// 2. filter
const animacion = peliculas.filter((p) => p.genero === "Animación");
console.table(animacion);
 
const recientes = peliculas.filter((p) => p.anio >= 2018);
console.table(recientes);
 
// 3. map
const titulos = peliculas.map((p) => p.titulo.toUpperCase());
console.log(titulos);
 
// 4. reduce
const sumaCalificaciones = peliculas.reduce((suma, p) => suma + p.calificacion, 0);
const promedio = sumaCalificaciones / peliculas.length;
console.log(`Calificación promedio: ${promedio.toFixed(2)}`);
 
// 5. top 3 en JSON
const top3 = peliculas.toSorted((a, b) => b.calificacion - a.calificacion).slice(0, 3);
const textoTop3 = JSON.stringify(top3, null, 2);
console.log(textoTop3);
 