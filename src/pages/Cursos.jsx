import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import {
  Search, Filter, X, Calendar, Clock, User,
  MapPin, Globe, Sparkles, Plus,
  ArrowUpRight, RefreshCcw, LayoutGrid,
  Funnel,
  ChevronDown,
  NotebookPen
} from 'lucide-react';
import { getCursosOrdenados } from "../services/cursosServices";

const cursos = getCursosOrdenados();
// --- MAPEO DE COLORES SUTILES ---
const colorScheme = {
  celeste: { icon: "text-cyan-500", border: "border-cyan-100", bg: "bg-cyan-50/50", button: "bg-cyan-600 shadow-cyan-200" },
  verde: { icon: "text-emerald-500", border: "border-emerald-100", bg: "bg-emerald-50/50", button: "bg-emerald-600 shadow-emerald-200" },
  rojo: { icon: "text-red-500", border: "border-red-100", bg: "bg-red-50/50", button: "bg-red-600 shadow-red-200" },
  morado: { icon: "text-purple-500", border: "border-purple-100", bg: "bg-purple-50/50", button: "bg-purple-600 shadow-purple-200" },
  azul: { icon: "text-blue-500", border: "border-blue-100", bg: "bg-blue-50/50", button: "bg-blue-600 shadow-blue-200" },
  naranja: { icon: "text-orange-500", border: "border-orange-100", bg: "bg-orange-50/50", button: "bg-orange-600 shadow-orange-200" },
  amarillo: { icon: "text-amber-500", border: "border-amber-100", bg: "bg-amber-50/50", button: "bg-amber-600 shadow-amber-200" },
};
const Cursos = () => {
  // --- ESTADOS ---
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategoria, setSelectedCategoria] = useState("Todas");
  const [selectedNivel, setSelectedNivel] = useState("Todos");

  // --- ARRAY DE DATOS (Manejable y escalable) ---



  //     const cursos = [

  //  //     {
  //     //         id: 1,
  //     //         titulo: "Desarrollo con React & Tailwind",
  //     //         descripcion: "Crea interfaces de alto impacto con las herramientas más demandadas",
  //     //         categoria: "Tecnología",
  //     //         nivel: "Intermedio",
  //     //         duracion: "3 meses",
  //     //         profesor: "Ing. Marcos Vera",
  //     //         lugar: "Nodo Tecnológico",
  //     //         fechaPublicacion: "10 Mar 2026",
  //     //         color: "celeste",
  //     //         finalizado: false,
  //     //         urlInscripcion: "https://docs.google.com/forms/d/e/1FAIpQLSfWvthJ8W9C8zCQQh84WnDnXGcp7wmNhpIh3ZxjWwyVxP3TQQ/viewform?usp=publish-editor",
  //     //         urlRedes: "https://instagram.com/tinogasta",
  //     //         imagenPoster: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600"
  //     //    },
  //     //     {
  //     //         id: 2,
  //     //         titulo: "Torneo de E-Sports PlayStation",
  //     //         descripcion: "Competencia oficial de FIFA. Premios y sorteos para todos los participantes.",
  //     //         categoria: "Eventos",
  //     //         nivel: "Avanzado",
  //     //         duracion: "2 días",
  //     //         profesor: "Coord. de Juventud",
  //     //         lugar: "Punto Digital 1",
  //     //         fechaPublicacion: "15 Feb 2026",
  //     //         color: "rojo",
  //     //         finalizado: true,
  //     //         urlInscripcion: "#",
  //     //         urlRedes: "https://facebook.com/tinogasta",
  //     //         imagenPoster: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600"
  //     //     },
  //     //     {
  //     //         id: 3,
  //     //         titulo: "Branding para Emprendedores",
  //     //         descripcion: "Diseña la identidad visual de tu negocio y destaca en el mercado digital.",
  //     //         categoria: "Diseño",
  //     //         nivel: "Principiante",
  //     //         duracion: "5 semanas",
  //     //         profesor: "Lic. Ana Sol",
  //     //         lugar: "Aula de Robótica",
  //     //         fechaPublicacion: "05 Mar 2026",
  //     //         color: "morado",
  //     //         finalizado: false,
  //     //         urlInscripcion: "https://docs.google.com/forms/d/e/1FAIpQLSfWvthJ8W9C8zCQQh84WnDnXGcp7wmNhpIh3ZxjWwyVxP3TQQ/viewform?usp=publish-editor",
  //     //         urlRedes: "https://instagram.com/tinogasta",
  //     //         imagenPoster: "https://images.unsplash.com/photo-1572044162444-ad60f128bde2?q=80&w=600"
  //     //     }, 

  //     ];

  // --- LÓGICA DE FILTRADO ---

  const categoriasUnicas = useMemo(() => {
    const cats = cursos.map(c => c.categoria);
    return ["Todas", ...new Set(cats)];
  }, []);

  const cursosFiltrados = cursos.filter(curso => {
    const matchesSearch = curso.titulo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategoria === "Todas" || curso.categoria === selectedCategoria;
    const matchesNivel = selectedNivel === "Todos" || curso.nivel === selectedNivel;
    return matchesSearch && matchesCat && matchesNivel;
  });

  const limpiarFiltros = () => {
    setSearchTerm("");
    setSelectedCategoria("Todas");
    setSelectedNivel("Todos");
  };




  return (
    <div className="min-h-screen bg-slate-50 font-sans overflow-x-hidden">

      {/* --- HERO SECTION H-SCREEN --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Imagen de fondo sutil */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1920")', backgroundSize: 'cover' }}
        />

        {/* texto */}
        <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-black tracking-tighter italic leading-none"
          >
            CURSOS <br />
            <span className="text-blue-600 italic text-2xl sm:text-3xl md:text-4xl lg:text-6xl block mt-2">
              Talleres, Capacitaciones y Eventos
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 sm:mt-8 text-slate-900 text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Formación gratuita y de calidad. Impulsamos el conocimiento tecnológico y creativo en nuestra comunidad.
          </motion.p>
        </div>
      </section>


      {/* --- SECCIÓN DE FILTRADO --- */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="px-3 sm:px-6 md:px-16 lg:px-32 xl:px-48 relative z-30 mb-10 sm:mb-16 -mt-8 sm:-mt-20"
      >
        <div className="bg-white p-5 sm:p-7 md:p-10 rounded-3xl sm:rounded-[3.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100">
          <div className="flex flex-col gap-5 sm:gap-8">

            {/* Cabecera del Buscador */}
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4 sm:pb-6">
              <motion.div
                whileHover={{ rotate: 15 }}
                className="p-2.5 sm:p-3 bg-blue-600 rounded-xl sm:rounded-2xl text-white shadow-lg shadow-blue-100"
              >
                <Filter size={20} strokeWidth={2.5} />
              </motion.div>
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight italic">
                  Buscar y Filtrar Cursos
                </h1>
                <p className="text-[10px] sm:text-[11px] font-bold text-slate-600 uppercase tracking-[0.2em]">
                  Encuentra tu próxima capacitación
                </p>
              </div>
            </div>

            {/* Input de Búsqueda Principal */}
            <div className="space-y-2 sm:space-y-3">
              <label className="text-sm sm:text-md font-black text-slate-900 uppercase ml-2 flex items-center gap-2">
                Buscar curso
              </label>
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" size={18} strokeWidth={2.5} />
                <input
                  type="text"
                  placeholder="Ej: Diseño grafico, Decoracion, etc..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 sm:py-5 bg-slate-50 border-2 border-transparent rounded-2xl sm:rounded-[2rem] focus:bg-white focus:border-blue-500 focus:ring-0 transition-all text-sm sm:text-base font-bold text-slate-700 shadow-inner"
                />
              </div>
            </div>

            {/* Grid de Filtros Inferiores */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {/* Categoría */}
              <div className="flex-1 space-y-2">
                <label className="text-sm sm:text-md font-black text-slate-900 ml-2 uppercase">Categoría</label>
                <div className="relative">
                  <select
                    value={selectedCategoria}
                    onChange={(e) => setSelectedCategoria(e.target.value)}
                    className="w-full pl-4 sm:pl-6 pr-10 py-3 sm:py-4 bg-slate-50 border-none rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all text-[13px] sm:text-[14px] font-black text-slate-700 appearance-none cursor-pointer"
                  >
                    {categoriasUnicas.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                  <ChevronDown className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 text-blue-600 pointer-events-none" size={18} strokeWidth={2.5} />
                </div>
              </div>

              {/* Nivel */}
              <div className="flex-1 space-y-2">
                <label className="text-sm sm:text-md font-black text-slate-900 ml-2 uppercase">Nivel</label>
                <div className="relative">
                  <select
                    value={selectedNivel}
                    onChange={(e) => setSelectedNivel(e.target.value)}
                    className="w-full pl-4 sm:pl-6 pr-10 py-3 sm:py-4 bg-slate-50 border-none rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all text-[13px] sm:text-[14px] font-black text-slate-700 appearance-none cursor-pointer"
                  >
                    <option value="Todos">Todos los niveles</option>
                    <option value="Principiante">Principiante</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                    <option value="Todo público">Todo Público</option>
                  </select>
                  <ChevronDown className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 text-blue-600 pointer-events-none" size={18} strokeWidth={2.5} />
                </div>
              </div>

              {/* Botón Limpiar */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={limpiarFiltros}
                className="flex-1 w-auto flex items-center justify-center gap-3 py-4 bg-slate-900 text-white rounded-xl sm:rounded-2xl hover:bg-red-600 transition-all duration-300 font-black text-xs uppercase tracking-widest sm:self-end shadow-xl group"
              >
                <RefreshCcw size={16} strokeWidth={2.5} className="group-hover:rotate-180 transition-transform duration-500" />
                Limpiar filtros
              </motion.button>
            </div>
          </div>

          {/* Contador de resultados */}
          <div className="mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-slate-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 px-1 sm:px-2">
            <div className="flex items-center gap-2 sm:gap-3 text-slate-900 font-black text-[10px] sm:text-[11px] uppercase tracking-[0.15em]">
              <LayoutGrid strokeWidth={2.5} size={16} className="text-blue-500" />
              Mostrando {cursosFiltrados.length} resultados encontrados
            </div>
            <AnimatePresence>
              {searchTerm && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="text-[10px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
                >
                  Búsqueda activa: "{searchTerm}"
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* --- LISTADO DE CURSOS --- */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-20 pb-20 sm:pb-32">
        <AnimatePresence mode="popLayout">
          {cursosFiltrados.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 lg:gap-10"
            >
              {cursosFiltrados.map((curso, i) => (
                <motion.div
                  key={curso.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: i % 3 * 0.1, // Stagger manual basado en columnas
                    ease: "easeOut"
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <Tilt
                    tiltMaxAngleX={8}
                    tiltMaxAngleY={8}
                    perspective={1500}
                    tiltEnable={typeof window !== 'undefined' && window.innerWidth >= 640}
                    className="h-[560px] sm:h-[580px] lg:h-[600px] cursor-pointer"
                  >
                    <div
                      className="relative w-full h-full transition-all duration-700"
                      style={{ transformStyle: 'preserve-3d', transform: flippedIndex === i ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                      onClick={() => setFlippedIndex(flippedIndex === i ? null : i)}
                    >

                      {/* FRENTE: INFO */}
                      <div
                        className={`absolute inset-0 bg-white rounded-3xl sm:rounded-[3rem] p-5 sm:p-7 lg:p-8 flex flex-col border-2 ${colorScheme[curso.color].border} shadow-xl overflow-hidden`}
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        {/* Cinta Finalizado */}
                        {curso.finalizado && (
                          <div className="absolute top-7 -right-10 rotate-45 bg-red-600 text-white py-1.5 w-40 sm:py-2 sm:w-48 text-center text-[9px] sm:text-[10px] font-black uppercase tracking-tighter shadow-xl z-20">
                            Finalizado
                          </div>
                        )}

                        <div className="flex-1 overflow-hidden">
                          {/* categoria del curso */}
                          <div className="flex justify-between items-center mb-2">
                            <span className={`px-3 py-1 rounded-full text-[11px] sm:text-[12px] font-black ${colorScheme[curso.color].bg} ${colorScheme[curso.color].icon}`}>
                              {curso.categoria}
                            </span>
                          </div>
                          {/* titulo */}
                          <h3 className="text-2xl sm:text-2xl lg:text-3xl font-black text-slate-900 leading-tight mb-2 italic">
                            {curso.titulo}
                          </h3>
                          {/* fecha de curso */}
                          <div className="text-[10px] font-bold text-slate-600 uppercase flex items-center gap-1.5 mb-2 tracking-wide">
                            <Calendar strokeWidth={2.5} size={13} className={colorScheme[curso.color].icon} />
                            Publicado: {curso.fechaPublicacion}
                          </div>
                          {/* descripcion del curso */}
                          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 font-medium">
                            {curso.descripcion}
                          </p>

                          {/* Datos con Color Sutil */}
                          <div className="grid gap-3 sm:gap-4 mt-auto">
                            {[
                              { icon: Clock, label: "Duración", val: curso.duracion },
                              { icon: User, label: "Instructor", val: curso.profesor },
                              { icon: MapPin, label: "Establecimiento", val: curso.lugar },
                              { icon: Sparkles, label: "Nivel", val: curso.nivel }
                            ].map((item, idx) => (
                              <div key={idx} className="flex items-center gap-3 sm:gap-4 group/item">
                                <div className={`p-2 sm:p-2.5 rounded-xl sm:rounded-2xl ${colorScheme[curso.color].bg} ${colorScheme[curso.color].icon}`}>
                                  <item.icon strokeWidth={2.5} size={16} />
                                </div>
                                <div>
                                  <p className="text-[9px] uppercase font-black text-slate-600 tracking-wider leading-none mb-0.5">{item.label}</p>
                                  <p className="text-xs font-bold text-slate-800">{item.val}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* informar del click para el flayer */}
                        <div className="w-full justify-center text-center items-center py-2 text-slate-500 text-[9px] font-extrabold tracking-widest uppercase animate-pulse">
                          hacer click para ver Flyer
                        </div>

                        {/* Botones al Final */}
                        <div className="">
                          {curso.finalizado ? (
                            <div className="w-full py-3 sm:py-4 bg-slate-100 text-slate-400 rounded-xl sm:rounded-2xl text-[11px] sm:text-[12px] font-black uppercase tracking-widest flex items-center justify-center gap-2">
                              Curso finalizado
                            </div>
                          ) : (
                            <motion.a
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              href={curso.urlInscripcion} target="_blank" rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className={`w-full py-3 sm:py-4 ${colorScheme[curso.color].button} text-white uppercase rounded-xl sm:rounded-2xl text-[11px] sm:text-[12px] tracking-widest font-black flex items-center justify-center gap-2 shadow-md cursor-cell`}
                            >
                              Inscribirse <NotebookPen strokeWidth={2.5} size={15} />
                            </motion.a>
                          )}
                        </div>
                      </div>

                      {/* DORSO: POSTER */}
                      <div
                        className="absolute inset-0 rounded-3xl sm:rounded-[3rem] overflow-hidden bg-slate-900 border-4 border-white shadow-2xl"
                        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                      >
                        <img src={curso.imagenPoster} className="w-full h-full object-cover" alt="Flyer" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent" />

                        <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 px-5 sm:px-8 space-y-3">
                          <p className="text-center text-white/90 text-[9px] font-bold uppercase tracking-widest">
                            Toca para volver a la info
                          </p>
                          <motion.a
                            whileHover={{ y: -5 }}
                            href={curso.urlRedes} target="_blank" rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-full py-3 sm:py-4 bg-white text-slate-900 rounded-xl sm:rounded-2xl text-[11px] sm:text-[12px] font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-2xl"
                          >
                            Ver en Redes <ArrowUpRight strokeWidth={2.5} size={16} />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-16 sm:py-20"
            >
              <div className="bg-white p-8 sm:p-12 rounded-3xl sm:rounded-[3rem] shadow-xl inline-block border border-slate-100">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Globe className="mx-auto text-slate-200 mb-6" size={56} />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-800">No hay resultados</h3>
                <p className="text-slate-500 mt-2 mb-8 text-sm sm:text-base">Intenta ajustar los filtros de búsqueda.</p>
                <button
                  onClick={limpiarFiltros}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-xl sm:rounded-2xl font-black uppercase text-xs tracking-widest shadow-lg shadow-blue-200 hover:bg-slate-900 transition-all"
                >
                  Ver todos los cursos
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Cursos;