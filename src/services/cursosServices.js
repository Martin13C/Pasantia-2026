import cursos from "../data/cursos.json";

// Obtener todos
export const getCursos = () => cursos;

// Cursos activos (NO finalizados)
export const getCursosActivos = () =>
  cursos.filter(curso => !curso.finalizado);

// Cursos finalizados
export const getCursosFinalizados = () =>
  cursos.filter(curso => curso.finalizado);

// Ordenar (activos primero)
export const getCursosOrdenados = () =>
  [...cursos].sort((a, b) => a.finalizado - b.finalizado);

// Buscar
export const buscarCursos = (termino) =>
  cursos.filter(curso =>
    curso.titulo.toLowerCase().includes(termino.toLowerCase())
  );

// Filtrar avanzado
export const filtrarCursos = ({ searchTerm, categoria, nivel }) =>
  cursos.filter(curso => {
    const matchSearch = curso.titulo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = categoria === "Todas" || curso.categoria === categoria;
    const matchNivel = nivel === "Todos" || curso.nivel === nivel;

    return matchSearch && matchCat && matchNivel;
  });