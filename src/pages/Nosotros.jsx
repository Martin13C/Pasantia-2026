import React from 'react';
import {
  Target, Eye, Award, Users, Rocket, Cpu,
  MapPin, Calendar, CheckCircle2, ChevronRight,
  Network, Globe, MousePointer2,
  Code2, History,
  Building2,
  Briefcase,
  Sparkles
} from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { motion, AnimatePresence } from 'framer-motion';
import Seccion1 from '../assets/Otros/EquipoTrabajo.jpeg';
import Seccion2 from '../assets/Otros/Punto1Admin2.jpeg'



const Nosotros = () => {

  const valores = [
    {
      title: "Compromiso",
      desc: "Dedicación total al éxito y bienestar de cada estudiante.",
      icon: <Users />,
      colorText: "text-blue-500",
      from: "from-blue-500",
      to: "to-cyan-400"
    },
    {
      title: "Excelencia",
      desc: "Búsqueda constante de la más alta calidad en todo lo que hacemos.",
      icon: <Award />,
      colorText: "text-purple-500",
      from: "from-purple-500",
      to: "to-indigo-400"
    },
    {
      title: "Inclusión",
      desc: "Educación accesible para todos, sin importar origen o circunstancia.",
      icon: <Globe />,
      colorText: "text-emerald-500",
      from: "from-emerald-500",
      to: "to-teal-400"
    },
    {
      title: "Innovación",
      desc: "Aplicación de tecnología y metodologías vanguardistas.",
      icon: <Rocket />,
      colorText: "text-red-500",
      from: "from-red-500",
      to: "to-orange-400"
    }
  ];

  const hitos = [
    {
      year: "2013",
      title: "Inauguración del NAC Tinogasta",
      date: "23 de octubre de 2013",
      gestion: "Hugo Daniel Ávila",
      coordinador: "Matías Barrionuevo",
      detail:
        "Apertura del Núcleo de Acceso al Conocimiento (NAC) Tinogasta, primer espacio público dedicado a la inclusión digital y acceso a tecnología en el departamento.",
      side: "left",
      color: "from-blue-500/20",
      accent: "group-hover:text-blue-600",
      border: "group-hover:border-blue-500/30"
    },
    {
      year: "2015",
      title: "Transformación a Punto Digital",
      date: "",
      gestion: "Sebastián Nóblega",
      coordinador: "Eliana Chaile",
      detail:
        "El NAC Tinogasta se integra al Programa Punto Digital, incorporándose al Programa Federal de Transformación Pública Digital y ampliando sus servicios tecnológicos.",
      side: "right",
      color: "from-indigo-500/20",
      accent: "group-hover:text-indigo-600",
      border: "group-hover:border-indigo-500/30"
    },
    {
      year: "2020 - 2022",
      title: "Renovación y Expansión",
      date: "",
      coordinador: "Lorena Cabrera (luego Directora)",
      detail:
        "Inauguración del Punto Digital II (19/10/2022) y renovación completa del Punto Digital I. Fortalecimiento del Laboratorio de Robótica y creación de nodos tecnológicos en Salado, El Puesto y Copacabana.",
      side: "left",
      color: "from-emerald-500/20",
      accent: "group-hover:text-emerald-600",
      border: "group-hover:border-emerald-500/30"
    },
    {
      year: "2025",
      title: "Creación de la Subsecretaría - Actualidad",
      date: "",
      liderazgo: [
        { cargo: "Subsecretaria", nombre: "Prof. Lorena Cabrera" },
        { cargo: "Coord. General", nombre: "Prof. Nélida Quintero" },
        { cargo: "Coord. Técnica", nombre: "Prof. Patricia Córdoba" }
      ],
      detail:
        "Creación formal de la Subsecretaría de Desarrollo Integral y Tecnología para la Inclusión, consolidando el crecimiento institucional y ampliando el alcance territorial de los programas tecnológicos.",
      side: "right",
      color: "from-red-500/20",
      accent: "group-hover:text-red-600",
      border: "group-hover:border-red-500/30"
    }
  ];

  // --- DATOS ORGANIGRAMA ---
  const orgNivel1 = {
    area: "Subsecretaría de Desarrollo Integral y Tecnología para la Inclusión",
    nombre: "Prof. Lorena Cabrera",
    border: "border-blue-500/40",
    text: "text-blue-400"
  };

  const orgNivel2 = [
    {
      cargo: "Coordinadora General",
      nombre: "Prof. Nélida Quintero",
      detalle: "A cargo de: Laboratorio de Robótica",
      border: "border-green-500/40",
      text: "text-green-400"
    },
    {
      cargo: "Coordinadora Técnica",
      nombre: "Prof. Patricia Córdoba",
      detalle: "A cargo de: Puntos Digitales I y II",
      border: "border-cyan-400/40",
      text: "text-cyan-300"
    }
  ];

  const orgNivel3 = [
    {
      area: "Nodos Tecnológicos",
      detalle: "El Salado • El Puesto • Copacabana",
      border: "border-red-500/40",
      text: "text-red-400"
    },
    {
      area: "Empleados Administrativos",
      detalle: "Gestión administrativa y atención institucional",
      border: "border-purple-500/40",
      text: "text-purple-400"
    },
    {
      area: "Personal de Limpieza",
      detalle: "Mantenimiento de espacios y equipamiento",
      border: "border-purple-500/40",
      text: "text-purple-400"
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans overflow-hidden">

      {/* SECCIÓN 1: HERO */}
      <section
        className="relative w-full bg-slate-50 overflow-hidden flex flex-col lg:flex-row lg:items-center min-h-screen lg:h-screen pt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Fondo decorativo sutil */}
        <motion.div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 skew-x-12 translate-x-32 z-0" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 lg:h-4/5 lg:gap-12 lg:items-center">

          {/* ── BLOQUE TEXTO ── */}
          <motion.div
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left pt-12 pb-10 lg:pt-0 lg:pb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-[clamp(3.5rem,10vw,6rem)] lg:text-8xl font-black tracking-tighter text-slate-950 italic leading-[0.9] text-shadow-amber-50 text-shadow-xs">
              Sobre <br />
              <span className="text-blue-600">Nosotros</span>
            </h1>

            <motion.p
              className="mt-8 text-base sm:text-lg text-slate-800 max-w-sm sm:max-w-md lg:max-w-lg font-medium leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Somos una organización gubernamental comprometida con la excelencia académica y el desarrollo integral de nuestra sociedad en el departamento de Tinogasta, impulsando el futuro a través de la tecnología.
            </motion.p>
          </motion.div>

          {/* ── BLOQUE IMAGEN ── */}
          <motion.div
            className="relative flex items-center justify-center h-[80vw] sm:h-[50vw] md:h-[40vw] lg:h-full pb-10 lg:pb-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Tilt
              perspective={1500}
              scale={1.02}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              className="w-full h-full lg:max-h-[75vh]"
            >
              <div className="relative w-full h-full rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.18)] bg-slate-200 group border border-white/50">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest text-sm bg-slate-200">
                  <img src={Seccion1} alt="Equipo SubSecretaria-2026" className='h-full object-cover' />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent opacity-0 transition-opacity duration-700" />
              </div>
            </Tilt>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 2: MISIÓN Y VISIÓN */}
      <motion.section
        className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 py-16 sm:py-24" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }}>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Lado Izquierdo: Imagen Secundaria */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl bg-slate-100 aspect-square">
              <img src={Seccion2} alt="Equipo Administrativo Subsecretaria" className='object-cover h-full' />
            </div>
            <motion.div
              className="absolute -bottom-10 -right-10 p-5 sm:p-6 hidden md:block"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <img src="/Logos/Sub-Celeste.png" alt="Logo Subsecretaria" className='w-50' />
            </motion.div>
          </motion.div>

          {/* Lado Derecho: Cards */}
          <motion.div
            className="relative order-1 lg:order-2 flex flex-col gap-6 sm:gap-8 py-4 sm:py-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Card Misión */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <Tilt perspective={1000} className="self-center lg:self-start transform lg:-rotate-2 lg:-translate-x-6 w-full max-w-md">
                <div className="p-6 sm:p-8 md:p-10 w-full bg-white border border-slate-100 rounded-[2rem] sm:rounded-[2.5rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                    <Target className="text-white" size={22} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black italic uppercase tracking-tighter text-slate-900">Misión</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-bold">
                    Brindar educación de calidad accesible y transformadora que empodere a individuos, fomentando habilidades que les permitan alcanzar su máximo potencial.
                  </p>
                </div>
              </Tilt>
            </motion.div>

            {/* Card Visión */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              <Tilt perspective={1000} className="self-center lg:self-end transform lg:rotate-2 lg:translate-x-6 w-full max-w-md">
                <div className="p-6 sm:p-8 md:p-10 w-full bg-slate-900 border border-slate-800 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl flex flex-col gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-900/20">
                    <Eye className="text-white" size={22} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black italic uppercase tracking-tighter text-white">Visión</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-bold">
                    Ser la plataforma educativa líder, reconocida por la excelencia académica e innovación pedagógica, creando una comunidad global de aprendizaje continuo.
                  </p>
                </div>
              </Tilt>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* SECCIÓN 3: VALORES */}
      <motion.section
        className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 pb-16 sm:pb-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter italic text-slate-900">
            Nuestros <span className="text-blue-600">Valores</span>
          </h2>
          <motion.div
            className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mt-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-10 pt-8">
          {valores.map((v, i) => (
            <motion.div
              key={i}
              className="group relative bg-white p-6 sm:p-8 pt-12 sm:pt-14 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            >
              {/* ICONO FLOTANTE */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  <div className={`absolute inset-0 bg-gradient-to-br ${v.from} ${v.to} translate-y-16 group-hover:translate-y-0 transition-transform duration-500`} />
                  <div className={`relative z-10 ${v.colorText} group-hover:text-white transition-colors duration-500 [&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-7 sm:[&>svg]:h-7`}>
                    {v.icon}
                  </div>
                </div>
              </div>

              <motion.div
                className="text-center mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
              >
                <h4 className="font-black tracking-widest text-sm mb-3 text-slate-900">{v.title}</h4>
                <p className="text-slate-500 text-xs font-medium leading-loose">{v.desc}</p>
              </motion.div>

              <motion.div
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-14 bg-gradient-to-b ${v.from} ${v.to} transition-all duration-500 rounded-r-full`}
                initial={{ height: 0 }}
                whileInView={{ height: "3.5rem" }}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
              />
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${v.from}/10 ${v.to}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* COMPROMISO ACTUAL */}
      <motion.section
        className="py-14 sm:py-18 bg-blue-600"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 text-center"
          initial={{ scale: 0.98 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 italic tracking-tight">
            Nuestro <span className="text-white">Compromiso Actual</span>
          </h2>
          <motion.p
            className="mt-6 sm:mt-8 text-slate-100 max-w-3xl mx-auto leading-relaxed font-medium text-sm sm:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Hoy la Subsecretaría articula el Laboratorio de Robótica, los Puntos
            Digitales I y II y los Nodos Tecnológicos en El Salado, El Puesto y
            Copacabana. Trabajamos para que la tecnología sea una herramienta de
            igualdad, desarrollo personal y fortalecimiento comunitario para todos
            los tinogasteños.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* SECCIÓN 4: HISTORIA - LÍNEA DE TIEMPO */}
      <motion.section
        className="px-4 sm:px-6 lg:px-32 xl:px-48 py-14 sm:py-16 bg-gray-950 relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px]" />

        <motion.div
          className="mb-10 sm:mb-14 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white italic tracking-tighter">
            Nuestra <span className="text-blue-500">Historia</span>
          </h2>
          <motion.p
            className="mt-4 sm:mt-6 text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed italic border-b border-blue-500/20 pb-6 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            La Subsecretaría de Desarrollo Integral y Tecnología para la Inclusión de Tinogasta
            tiene sus raíces en las políticas públicas nacionales de inclusión digital que el
            Estado Argentino impulsa desde hace más de una década.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* LÍNEA CENTRAL — solo desktop */}
          <div className="absolute left-1/2 translate-x-1/2 w-[2px] h-full bg-slate-800 hidden lg:block" />

          <motion.div
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {hitos.map((hito, index) => (
              <motion.div
                key={index}
                className={`flex flex-col items-center lg:flex-row w-full mb-8 lg:mb-0 ${hito.side === "right" ? "lg:flex-row-reverse" : ""}`}
                initial={{ opacity: 0, x: hito.side === "right" ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* CARD */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-center">
                  <motion.div
                    className={`relative w-full max-w-sm sm:max-w-md p-6 sm:p-8 bg-white border border-transparent rounded-3xl sm:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 group overflow-hidden ${hito.border}`}
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${hito.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.1 }}
                    />

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-5 sm:mb-6">
                        <span className={`text-3xl sm:text-4xl font-black text-slate-900 tracking-tighter transition-colors duration-500 ${hito.accent}`}>
                          {hito.year}
                        </span>
                        <Calendar className={`text-slate-300 transition-colors duration-500 ${hito.accent}`} size={22} />
                      </div>

                      <h4 className="text-lg sm:text-xl font-black tracking-tighter text-slate-900 mb-2 italic">
                        {hito.title}
                      </h4>

                      <p className={`text-[11px] font-bold tracking-[0.25em] mb-5 sm:mb-6 uppercase transition-colors ${hito.accent}`}>
                        {hito.date}
                      </p>

                      <div className="space-y-3 border-t border-slate-100 pt-4 sm:pt-5">
                        {hito.gestion && (
                          <p className="text-xs text-slate-500 font-medium">
                            <span className="text-slate-900 font-bold uppercase">Gestión:</span>{" "}{hito.gestion}
                          </p>
                        )}
                        {hito.coordinador && (
                          <p className="text-xs text-slate-500 font-medium">
                            <span className="text-slate-900 font-bold uppercase">Coordinación:</span>{" "}{hito.coordinador}
                          </p>
                        )}
                        {hito.liderazgo && hito.liderazgo.map((lid, i) => (
                          <p key={i} className="text-xs text-slate-500 font-medium">
                            <span className="text-slate-900 font-bold uppercase">{lid.cargo}:</span>{" "}{lid.nombre}
                          </p>
                        ))}
                        <p className="text-sm text-slate-600 leading-relaxed mt-3 sm:mt-4 bg-slate-50 p-3 sm:p-4 rounded-2xl italic group-hover:bg-white/10 transition-colors duration-500">
                          "{hito.detail}"
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* INDICADOR CENTRAL — solo desktop */}
                <div className="relative z-20 hidden lg:flex items-center justify-center w-10">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-white border-4 border-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  />
                </div>

                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ORGANIGRAMA INSTITUCIONAL */}
      <motion.section
        className="pt-12 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 bg-gray-100 relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Ondas SVG */}
        <svg className="absolute bottom-0 left-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0110FA" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f8fafc" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path fill="url(#waveGrad)">
            <animate attributeName="d" dur="10s" repeatCount="indefinite"
              values="M0 50 Q 25 30 50 50 Q 75 70 100 50 L 100 100 L 0 100 Z; M0 50 Q 25 70 50 50 Q 75 30 100 50 L 100 100 L 0 100 Z; M0 50 Q 25 30 50 50 Q 75 70 100 50 L 100 100 L 0 100 Z" />
          </path>
          <defs>
            <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#01EAE4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f8fafc" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path fill="url(#waveGrad2)">
            <animate attributeName="d" dur="15s" repeatCount="indefinite"
              values="M0 50 Q 25 30 50 50 Q 75 70 100 50 L 100 100 L 0 100 Z; M0 50 Q 25 70 50 50 Q 75 30 100 50 L 100 100 L 0 100 Z; M0 50 Q 25 30 50 50 Q 75 70 100 50 L 100 100 L 0 100 Z" />
          </path>
        </svg>

        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px]" />

        <div className="relative z-10">
          {/* TÍTULO */}
          <motion.div
            className="text-center mb-8 sm:mb-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black italic tracking-tight">
              Organigrama <span className="text-blue-600">Institucional</span>
            </h2>
          </motion.div>

          {/* NIVEL 1 */}
          <motion.div
            className="flex justify-center mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className={`bg-gray-100 backdrop-blur-lg border ${orgNivel1.border} rounded-2xl sm:rounded-3xl px-6 sm:px-10 py-5 sm:py-6 text-center shadow-xl w-full max-w-[280px]`}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className={`${orgNivel1.text} font-bold uppercase text-xs sm:text-sm tracking-wider mb-2`}>
                {orgNivel1.area}
              </h3>
              <p className="text-gray-900 font-semibold text-sm sm:text-base">{orgNivel1.nombre}</p>
            </motion.div>
          </motion.div>

          {/* LÍNEA */}
          <div className="flex justify-center mb-2">
            <motion.div
              className="w-[2px] h-10 sm:h-12 bg-blue-600"
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            />
          </div>

          {/* NIVEL 2 */}
          <motion.div
            className="flex flex-col sm:grid sm:grid-cols-2 gap-6 sm:gap-10 md:gap-20 mb-2 items-center sm:items-stretch"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {orgNivel2.map((item, i) => (
              <motion.div
                key={i}
                className={`flex ${i === 0 ? "justify-center sm:justify-end" : "justify-center sm:justify-start"}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className={`bg-gray-100 backdrop-blur-lg border ${item.border} rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-5 sm:py-6 text-center shadow-lg w-full max-w-[280px]`}>
                  <h4 className={`${item.text} font-bold text-xs sm:text-sm uppercase mb-1`}>{item.cargo}</h4>
                  <p className="text-black font-semibold mb-2 text-sm sm:text-base">{item.nombre}</p>
                  <p className="text-slate-600 text-xs sm:text-sm">{item.detalle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* LÍNEA */}
          <div className="flex justify-center mb-2">
            <motion.div
              className="w-[2px] h-10 sm:h-12 bg-blue-600"
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            />
          </div>

          {/* NIVEL 3 */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {orgNivel3.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.6 }}
              >
                <div className={`bg-gray-100 backdrop-blur-lg border ${item.border} rounded-2xl sm:rounded-3xl px-5 sm:px-8 py-5 sm:py-6 shadow-lg`}>
                  <h4 className={`${item.text} font-bold text-xs sm:text-sm uppercase mb-2`}>{item.area}</h4>
                  <p className="text-slate-700 text-xs sm:text-sm">{item.detalle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>


    </div>
  );
};

export default Nosotros;