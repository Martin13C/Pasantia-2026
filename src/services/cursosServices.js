import cursos from "../data/cursos.json";

/**
 * Función auxiliar interna para ordenar:
 * 1. Activos primero (finalizado: false)
 * 2. ID descendente (ID más alto = más reciente)
 */
const ordenarCursosLogica = (lista) => {
  return [...lista].sort((a, b) => {
    // Primero comparamos el estado 'finalizado'
    if (a.finalizado !== b.finalizado) {
      return a.finalizado - b.finalizado; 
      // false (0) viene antes que true (1)
    }

    // Si ambos tienen el mismo estado, ordenamos por ID de mayor a menor
    return b.id - a.id;
  });
};

// Obtener todos los cursos ordenados
export const getCursos = () => ordenarCursosLogica(cursos);

// Cursos activos (ordenados por ID más reciente)
export const getCursosActivos = () =>
  ordenarCursosLogica(cursos.filter(curso => !curso.finalizado));

// Cursos finalizados (ordenados por ID más reciente)
export const getCursosFinalizados = () =>
  ordenarCursosLogica(cursos.filter(curso => curso.finalizado));

// Esta función ahora es redundante pero la mantenemos por compatibilidad
export const getCursosOrdenados = () => ordenarCursosLogica(cursos);

// Buscar por texto (mantiene el orden)
export const buscarCursos = (termino) => {
  const filtrados = cursos.filter(curso =>
    curso.titulo.toLowerCase().includes(termino.toLowerCase())
  );
  return ordenarCursosLogica(filtrados);
};

// Filtrado avanzado con orden automático
export const filtrarCursos = ({ searchTerm = "", categoria = "Todas", nivel = "Todos" }) => {
  const filtrados = cursos.filter(curso => {
    const matchSearch = curso.titulo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = categoria === "Todas" || curso.categoria === categoria;
    const matchNivel = nivel === "Todos" || curso.nivel === nivel;

    return matchSearch && matchCat && matchNivel;
  });

  return ordenarCursosLogica(filtrados);
};