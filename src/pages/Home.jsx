import { Monitor, Wifi, BookOpen, Users, FileText, Gamepad2, Cpu, LayoutGrid, Building2, MapPin, ArrowRight, ExternalLink, ArrowUpRight, Plus, Share2, CalendarCheck, MonitorPlay, Info, CheckCircle2, Zap } from 'lucide-react';
import Tilt from 'react-parallax-tilt'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Horario from '../components/Horario';
import Microcine1 from '../assets/Frentes-Interiores/Microcine1.jpeg';
import Aula1 from '../assets/Frentes-Interiores/Punto1Aula1.jpeg';
import Microcine2 from '../assets/Frentes-Interiores/Punto2Microcine2.jpg';
import Aula2 from '../assets/Frentes-Interiores/Punto2Aula.jpg';
import Salado from '../assets/Frentes-Interiores/NodoSaladoInterior.jpeg';
import Copa from '../assets/Frentes-Interiores/NodoCopaFrente.jpeg';
import Puesto from '../assets/Frentes-Interiores/NodoElPuesto3.jpeg';
import Card1 from '../assets/Robotica/Robotica2.jpg';
import Card2 from '../assets/Otros/Punto2Decoracion.jpeg';
import Card3 from '../assets/Otros/NodoElPuesto5.jpeg';

export function Home() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progress = Math.min(scrollY / 800, 1);
  const scaleValue = 1 + (progress * 0.4);
  const blurValue = progress * 8;
  const tiltValue = progress * 10;

  const [flippedIndex, setFlippedIndex] = useState(null);
  const handleFlip = (i) => {
    setFlippedIndex(flippedIndex === i ? null : i);
  };

  // Seccion de servicio 
  const servicios = [
    {
      icon: <Wifi size={32} />,
      title: "Internet Gratis",
      desc: "Zona WiFi y estaciones de trabajo libres para todos los ciudadanos.",
      from: "from-[#9F26C0]", to: "to-purple-400",
      shadow: "shadow-[#9F26C0]/20", colorText: "text-[#9F26C0]", hex: "#9F26C0"
    },
    {
      icon: <BookOpen size={32} />,
      title: "Capacitaciones",
      desc: "Cursos certificados en herramientas digitales y oficios modernos.",
      from: "from-[#1A0EEB]", to: "to-blue-400",
      shadow: "shadow-[#1A0EEB]/20", colorText: "text-[#1A0EEB]", hex: "#1A0EEB"
    },
    {
      icon: <Gamepad2 size={32} />,
      title: "Cine y Videojuegos",
      desc: "Espacio de recreación equipado con consolas y proyeccion.",
      from: "from-[#01EBE5]", to: "to-cyan-300",
      shadow: "shadow-[#01EBE5]/20", colorText: "text-[#01EBE5]", hex: "#01EBE5"
    },
    {
      icon: <Users size={32} />,
      title: "Espacios Disponibles",
      desc: "Áreas diseñadas para el trabajo colaborativo, reuniones y capacitaciones grupales.",
      from: "from-[#22EA0A]", to: "to-green-300",
      shadow: "shadow-[#22EA0A]/20", colorText: "text-[#22EA0A]", hex: "#22EA0A"
    },
    {
      icon: <FileText size={32} />,
      title: "Asistencia Digital",
      desc: "Te ayudamos con tus trámites de Mi Argentina, ANSES y gestiones gubernamentales.",
      from: "from-[#EB6200]", to: "to-orange-400",
      shadow: "shadow-[#EB6200]/20", colorText: "text-[#EB6200]", hex: "#EB6200"
    },
    {
      icon: <Cpu size={32} />,
      title: "Aula de Robótica",
      desc: "Aprendizaje práctico en programación, electrónica, impresiones 3D y armado de kits robóticos.",
      from: "from-[#EB0501]", to: "to-red-400",
      shadow: "shadow-[#EB0501]/20", colorText: "text-[#EB0501]", hex: "#EB0501"
    },
  ];
  // Seccion de Espacios disponibles
  const pasos = [
    {
      icon: <CalendarCheck className="text-[#9F26C0]" size={28} />,
      text: "Fecha y horario solicitado",
      color: "#9F26C0"
    },
    {
      icon: <MonitorPlay className="text-[#22EA0A]" size={28} />,
      text: "Tipo de actividad o capacitación",
      color: "#22EA0A"
    },
    {
      icon: <Users className="text-[#EB0501]" size={28} />,
      text: "Cantidad estimada de participantes",
      color: "#EB0501"
    }
  ];

  const espacios = [
    { title: "Microcine Punto Digital 1", cap: "60 pers.", info: "Proyector, Sonido, Microfono, Pantalla", img: {Microcine1}, icon: "/Logos/PuntoD.png" },

    { title: "Aula de Informatica Punto Digital 1", cap: "16 pers.", info: "Televisor, Microfono, Pizarron", img: {Aula1}, icon: "/Logos/PuntoD.png" },

    { title: "Microcine Punto Digital 2", cap: "40 pers.", info: "Proyector, Sonido, Microfono, Pantalla", img: {Microcine2}, icon: "/Logos/PuntoD.png" },

    { title: "Aula de Informatica Punto Digital 2", cap: "16 pers.", info: "Televisor, Microfono, Sonido, Pizarron", img: {Aula2}, icon: "/Logos/PuntoD.png" },

    { title: "Nodo Tecnologico El Salado", cap: "10 pers.", info: "Microfono, Sonido, Pizarron", img: {Salado}, icon: "/Logos/NodoSalado.png" },

    { title: "Nodo Tecnologico Copacabana", cap: "10 pers.", info: "", img: {Copa}, icon: "/Logos/NodoCopa.png" },

    { title: "Nodo tecnologico El Puesto", cap: "10 pers.", info: "Televisor, Sonido, Microfono", img: {Puesto}, icon: "/Logos/NodoPuesto.png" },
  ];

  // seccion de cartas y direccion 
  const cards = [
    {
      id: "01",
      title: "Aula Robótica",
      img: {Card1},
      x: -140, y: -60, rotate: -15,
      color: "#9F26C0",
      link: "#"
    },
    {
      id: "02",
      title: "Puntos Digitales",
      img: {Card2},
      x: 40, y: 60, rotate: 10,
      color: "#22EA0A",
      link: "#"
    },
    {
      id: "03",
      title: "Nodos Tecnologicos",
      img: {Card3},
      x: 100, y: -80, rotate: 5,
      color: "#EB0501",
      link: "#"
    }
  ];

  const localidades = [
    { name: "Tinogasta", url: "https://maps.google.com/?q=Tinogasta" },
    { name: "El Salado", url: "https://maps.app.goo.gl/1eDN84L7F4bACybP7" },
    { name: "Copacabana", url: "https://maps.app.goo.gl/GToMw5XfBzAqExxd6" },
    { name: "El Puesto", url: "https://maps.app.goo.gl/dh8AenEeocotbLwj8" }
  ];



  return (
    <div className="bg-gray-50 min-h-screen font-sans text-slate-950">

      {/* --- SECCIÓN 1: HERO (Contenedor de Scroll de 200vh para dar "recorrido" a la animación) --- */}
      <section className="relative h-[150vh] bg-white">



        {/* El contenedor Sticky es el que mantiene todo en pantalla (h-screen) */}
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

          {/* Fondos (Ondas SVG) - Z-0 */}
          <svg
            className="absolute bottom-0 left-0 w-full h-full z-0 pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >

            {/* ola 1 */}
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

            {/* ola 2 */}
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

          {/* Cabecera de Texto - Se desvanece y sube */}
          <motion.div
            className="absolute top-52 md:top-48 md:max-w-4xl w-full text-center px-6 py-6 transition-all duration-300 ease-out z-50 bg-white/85 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl"
            style={{
              opacity: 1 - progress * 2,
              transform: `translateY(${progress * -100}px)`,
              pointerEvents: progress > 0.5 ? 'none' : 'auto'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-5 md:mb-10 text-slate-950">
              Tu puerta al <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400">
                Mundo digital en Tinogasta
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-800 font-medium max-w-2xl mx-auto">
              Conectividad, Capacitación y Entretenimiento.
            </p>

          </motion.div>


          {/* --- SECCIÓN MÓVIL (Solo visible hasta md) --- */}
          <div className="md:hidden w-full h-screen flex items-center justify-center px-6 relative z-30">
            <div
              className=" w-5/6 h-4/6 transition-all duration-300 ease-out shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden"
              style={{
                // Aplica el mismo efecto de escala que el hero principal
                transform: `scale(${scaleValue})`,
                borderRadius: "2rem",
                // Opcional: un ligero desenfoque o desvanecimiento si quieres replicar todo el efecto
                filter: `blur(${blurValue}px)`,
                opacity: 1 - progress
              }}
            >
              <img
                src="src/assets/Grid/ReunionPunto1.jpg"
                className="w-full h-full object-cover"
                alt="Tinogasta Digital Móvil"
              />
            </div>
          </div>

          {/* Grid Contenedor - Centrado en la pantalla */}
          <div
            className="hidden md:flex w-full max-w-[1400px] mx-auto py-6 relative z-20"
            style={{ perspective: "1200px" }}
          >
            <div
              className="grid grid-cols-12 gap-4 md:gap-6 items-center h-[500px] transition-transform duration-300 ease-out"
              style={{ transform: `rotateX(${tiltValue}deg)` }}
            >

              {/* LADO IZQUIERDO */}
              <div className="col-span-1 h-[40%] transition-all duration-700"
                style={{ filter: `blur(${blurValue}px) grayscale(${progress})`, opacity: 1 - progress }}>
                {/* Imagen */}
                <img src="src/assets/Grid/TallerCostura.jpeg" className="w-full h-full object-cover rounded-[2rem] shadow-xl hover:scale-110 hover:-translate-y-4 transition-all duration-500" alt="Punto Digital" />
              </div>

              <div className="col-span-2 h-[70%] flex flex-col gap-6 transition-all duration-700"
                style={{ filter: `blur(${blurValue}px) grayscale(${progress})`, opacity: 1 - progress }}>
                {/* Imagen X2 */}
                <img src="src/assets/Grid/Reunion4.jpeg" className="w-full h-1/2 object-cover rounded-[2.5rem] shadow-xl hover:scale-105 transition-all duration-500" alt="Capacitación" />
                <img src="src/assets/Grid/ProfeTaller.jpeg" className="w-full h-1/2 object-cover rounded-[2.5rem] shadow-xl hover:scale-105 transition-all duration-500" alt="Comunidad" />
              </div>

              {/* CENTRO (Escala x2) */}
              <div className="col-span-6 h-full relative z-30">
                <div
                  className="w-full h-full transition-all duration-300 ease-out shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden"
                  style={{
                    transform: `scale(${scaleValue})`,
                    borderRadius: "3rem"
                  }}
                >
                  <img
                    src="src/assets/Grid/ReunionPunto1.jpg"
                    className="w-full h-full object-cover"
                    alt="Tinogasta Digital"
                  />
                </div>

              </div>

              {/* LADO DERECHO */}
              <div className="col-span-2 h-[70%] flex flex-col gap-6 transition-all duration-700"
                style={{ filter: `blur(${blurValue}px) grayscale(${progress})`, opacity: 1 - progress }}>
                <img src="src/assets/Grid/Robotica1.jpg" className="w-full h-1/2 object-cover rounded-[2.5rem] shadow-xl hover:scale-105 transition-all duration-500" alt="Tecnología" />
                <img src="src/assets/Grid/RCP.jpg" className="w-full h-1/2 object-cover rounded-[2.5rem] shadow-xl hover:scale-105 transition-all duration-500" alt="Robótica" />
              </div>

              <div className="col-span-1 h-[40%] transition-all duration-700"
                style={{ filter: `blur(${blurValue}px) grayscale(${progress})`, opacity: 1 - progress }}>
                <img src="src/assets/Grid/RoboticaClases.jpg" className="w-full h-full object-cover rounded-[2rem] shadow-xl hover:scale-110 hover:-translate-y-4 transition-all duration-500" alt="Nodos" />
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ── SECCIÓN 2: HORARIOS ── */}
      <Horario />
      {/* ── SECCIÓN 3: SERVICIOS ── */}
      <motion.section
        className="w-full bg-slate-100 py-16 flex flex-col overflow-hidden relative lg:h-screen"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Ondas SVG */}
        <svg className="absolute bottom-0 left-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradS" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0110FA" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f8fafc" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path fill="url(#waveGradS)">
            <animate attributeName="d" dur="10s" repeatCount="indefinite"
              values="M0 50 Q 25 30 50 50 Q 75 70 100 50 L 100 100 L 0 100 Z; M0 50 Q 25 70 50 50 Q 75 30 100 50 L 100 100 L 0 100 Z; M0 50 Q 25 30 50 50 Q 75 70 100 50 L 100 100 L 0 100 Z" />
          </path>
          <defs>
            <linearGradient id="waveGrad2S" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#01EAE4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f8fafc" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path fill="url(#waveGrad2S)">
            <animate attributeName="d" dur="15s" repeatCount="indefinite"
              values="M0 50 Q 25 30 50 50 Q 75 70 100 50 L 100 100 L 0 100 Z; M0 50 Q 25 70 50 50 Q 75 30 100 50 L 100 100 L 0 100 Z; M0 50 Q 25 30 50 50 Q 75 70 100 50 L 100 100 L 0 100 Z" />
          </path>
        </svg>

        {/* Cabecera */}
        <motion.div
          className="text-center mb-8 sm:mb-0 lg:h-1/5 px-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic text-slate-950 mb-4">
            Servicios Gratuitos para Todos
          </h2>
          <motion.div
            className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          />
        </motion.div>

        {/* Grid servicios */}
        <div className="flex-1 lg:h-4/5 max-w-6xl mx-auto w-full px-4 sm:px-8 pb-12 pt-8 lg:pt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-14 sm:gap-y-16 lg:h-full lg:items-center">
            {servicios.map((item, idx) => (
              <motion.div
                key={idx}
                className="group relative bg-white p-5 sm:p-6 pt-12 rounded-2xl transition-all duration-500 hover:-translate-y-2 shadow-lg flex flex-col justify-between min-h-[160px] md:pt-10 lg:max-h-[280px] lg:h-full lg:pt-14"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              >
                <motion.div
                  className="z-20 absolute -top-8 left-6"
                  whileHover={{ scale: 1.1, rotate: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-2xl shadow-xl ${item.shadow} flex items-center justify-center relative overflow-hidden transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${item.from} ${item.to} translate-y-16 group-hover:translate-y-0 transition-transform duration-500`}
                      initial={{ y: 20 }}
                      whileInView={{ y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 + 0.2 }}
                    />
                    <div className={`relative z-10 ${item.colorText} group-hover:text-white transition-colors duration-500 [&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-7 sm:[&>svg]:h-7`}>
                      {item.icon}
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="mt-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                >
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1 leading-tight">{item.title}</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-snug line-clamp-3">{item.desc}</p>
                </motion.div>
                <motion.div
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-12 bg-gradient-to-b ${item.from} ${item.to} transition-all duration-500 rounded-r-full`}
                  initial={{ height: 0 }}
                  whileInView={{ height: "3rem" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 + 0.4 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── SECCIÓN 4: ESPACIOS DISPONIBLES ── */}
      <motion.section
        className="relative py-16 sm:py-20 bg-white overflow-hidden px-4 sm:px-8 lg:px-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#9F26C0]/20 rounded-full blur-[100px] z-10"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#22EA0A]/20 rounded-full blur-[100px] z-10"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 items-stretch">
            {/* Lado izquierdo: info */}
            <motion.div
              className="lg:w-[35%] flex flex-col justify-between py-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl italic font-black text-slate-900 leading-[1.1] mb-3 tracking-tighter">
                    Espacios Comunitarios <br />
                    <span className="text-blue-600">Disponibles.</span>
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                    ¿Necesitás un espacio para realizar capacitaciones gratuitas? Nuestros centros están abiertos para instituciones de Tinogasta.
                  </p>
                </motion.div>

                <div className="space-y-3">
                  <h4 className="text-slate-900 font-bold text-sm sm:text-base flex items-center gap-2">
                    <Info size={16} className="text-[#22EA0A]" />
                    ¿Cómo solicitarlo?
                  </h4>
                  <p className="text-slate-500 text-sm mt-2">
                    Presentá una nota física dirigida a la Subsecretaría de Tecnología con 24 hs de anticipacion con la siguiente información:
                  </p>

                  <div className="grid gap-1.5">
                    {pasos?.map((paso, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className="flex items-center gap-3 p-2 bg-slate-50 border border-slate-100 rounded-lg transition-all hover:bg-white"
                      >
                        <div className="p-1 bg-white rounded shadow-sm scale-90">{paso.icon}</div>
                        <span className="text-slate-600 font-medium text-[11px] leading-none">{paso.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className='flex flex-row gap-3 items-center bg-amber-50/50 p-2'>
                    <div className="shrink-0">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-white text-[9px] font-bold">!</span>
                    </div>
                    <p className="text-amber-800 text-[10px] font-semibold leading-tight">
                      Importante: Como unico requisito se solicitan elementos de limpieza.
                    </p>
                  </div>
                </div>
              </div>

              <motion.a
                className="group w-full mt-6 lg:mt-4 px-5 py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg flex items-center justify-center gap-3 text-xs tracking-wide"
                href="https://docs.google.com/forms/d/e/1FAIpQLScInUWtjZ_0XuuJMkrwbgxfpJx8jAtTAFNoNjIPe1SMsLDiYA/viewform?usp=header"
                target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                DESCARGAR MODELO DE NOTA
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Lado derecho: grilla espacios */}
            <div className="lg:w-[65%] grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {espacios.map((espacio, i) => (
                <Tilt
                  key={i}
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  perspective={1000}
                  transitionSpeed={1500}
                  scale={1.03}
                  gyroscope={true}
                  className="h-36 sm:h-40 md:h-44 cursor-pointer"
                >
                  <motion.div
                    className="relative w-full h-full transition-all duration-500"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: flippedIndex === i ? "rotateY(180deg)" : "rotateY(0deg)"
                    }}
                    onClick={() => handleFlip(i)}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    {/* FRENTE */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      viewport={{ once: true }}
                      className="absolute inset-0 group rounded-3xl overflow-hidden border border-slate-100 bg-white hover:shadow-xl transition-all duration-300"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${espacio.img})` }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-90" />
                      <div className="absolute inset-0 p-3 sm:p-5 flex flex-col justify-end">
                        <h3 className="text-white font-bold text-xs sm:text-sm md:text-base leading-tight mb-1">{espacio.title}</h3>
                        <span className="w-fit px-2 py-0.5 bg-white/20 backdrop-blur-md rounded-lg text-[8px] sm:text-[9px] text-white font-bold border border-white/10 uppercase">
                          {espacio.cap}
                        </span>
                      </div>
                    </motion.div>

                    {/* DORSO */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl bg-blue-600 p-4 sm:p-6 flex flex-col justify-center items-center text-center border border-blue-400 shadow-xl"
                      style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                      initial={{ opacity: 0, rotateY: 180 }}
                      animate={flippedIndex === i ? { opacity: 1, rotateY: 180 } : { opacity: 0, rotateY: 180 }}
                      transition={{ duration: 0.4 }}
                    >
                      <img src={espacio.icon} alt="icon" className="w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3 object-contain" />
                      <h4 className="text-white font-black text-[9px] sm:text-[10px] uppercase tracking-tighter mb-1 opacity-80">
                        Información del lugar
                      </h4>
                      <p className="text-white text-[11px] sm:text-[12px] font-medium leading-snug">{espacio.info}</p>
                      <div className="mt-3 sm:mt-4 text-[7px] sm:text-[8px] text-white/60 font-bold uppercase">Click para cerrar</div>
                    </motion.div>
                  </motion.div>
                </Tilt>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── SECCIÓN 5: VINCULACIONES ── */}
      <motion.section
        className="bg-slate-950 text-white relative overflow-hidden py-16 sm:py-20 lg:h-screen lg:flex lg:items-center px-4 sm:px-8 lg:px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            className="mb-8 sm:mb-10 italic"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
              Conectados con <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Nación, Provincia y Municipio
              </span>
            </h2>
          </motion.div>

          {/* Grid vinculaciones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-auto md:auto-rows-[180px]">
            {/* CARD 1: PUNTO DIGITAL */}
            <motion.div
              className="sm:col-span-2 md:col-span-2 md:row-span-2 rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group bg-gradient-to-br from-blue-700 to-blue-900 border border-white/10 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.6)] hover:border-blue-400 hover:scale-[0.97] min-h-[200px] md:min-h-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute -bottom-12 -right-12 opacity-20 group-hover:opacity-60 group-hover:rotate-12 group-hover:scale-125 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-700 pointer-events-none"
                initial={{ scale: 0.8, opacity: 0.1 }}
                whileInView={{ scale: 1, opacity: 0.2 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img src="/Logos/PuntoD-B.png" alt="Logo punto digital" />
              </motion.div>
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Punto Digital</h3>
                <p className="text-blue-100 opacity-80 max-w-xs text-sm sm:text-base">
                  Red federal de espacios públicos, libres y gratuitos.
                </p>
              </div>
              <motion.a
                href="https://www.argentina.gob.ar/jefatura/innovacion-ciencia-y-tecnologia/tics/punto-digital"
                target="_blank" rel="noreferrer"
                className="relative z-10 w-fit flex items-center gap-2 bg-white text-slate-950 px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl font-bold hover:bg-slate-200 transition-all duration-300 group-hover:translate-x-2 shadow-xl text-sm sm:text-base mt-6 md:mt-0"
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.98 }}
              >
                Explorar <ArrowUpRight size={18} />
              </motion.a>
            </motion.div>

            {/* CARD 2: MUNICIPIO */}
            <motion.div
              className="sm:col-span-2 md:col-span-2 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 flex flex-col text-black justify-between relative overflow-hidden bg-slate-100 border hover:border-blue-700 transition-all duration-500 hover:scale-[0.97] hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.6)] group min-h-[160px] md:min-h-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute -right-8 -top-8 opacity-10 group-hover:opacity-40 group-hover:-rotate-12 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-700"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <img src="/Logos/Tino-N.png" alt="Logo Muni" />
              </motion.div>
              <div className="relative z-10">
                <h4 className="text-lg sm:text-xl font-bold">Municipalidad de Tinogasta</h4>
                <p className="text-slate-500 text-sm">Impulsando el desarrollo local.</p>
              </div>
              <motion.a
                href="https://tinogasta.gob.ar/" target="_blank" rel="noreferrer"
                className="relative z-10 w-fit flex items-center gap-2 text-slate-950 px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl font-bold bg-gradient-to-br from-blue-600 to-cyan-300 transition-all duration-300 group-hover:translate-x-2 shadow-xl text-sm sm:text-base mt-4 md:mt-0"
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.98 }}
              >
                Visitar Sitio <ArrowUpRight size={18} />
              </motion.a>
            </motion.div>

            {/* CARD 3: MI ARGENTINA */}
            <motion.a
              className="rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 flex flex-col relative overflow-hidden bg-cyan-500 text-white transition-all duration-500 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:scale-[0.97] hover:border hover:border-white group min-h-[140px] md:min-h-0"
              href="https://www.argentina.gob.ar/miargentina" target="_blank" rel="noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute -bottom-10 -left-10 opacity-20 group-hover:opacity-50 group-hover:rotate-12 group-hover:scale-125 transition-all duration-700"
                initial={{ scale: 0.5, opacity: 0.1 }}
                whileInView={{ scale: 1, opacity: 0.2 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <FileText size={140} strokeWidth={1.5} />
              </motion.div>
              <h4 className="font-black text-xl sm:text-2xl relative z-10">miArgentina</h4>
            </motion.a>

            {/* CARD 4: NODOS */}
            <motion.a
              className="rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-500 hover:border-emerald-400/50 hover:shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)] hover:scale-[0.97] group min-h-[140px] md:min-h-0"
              href='https://portal.catamarca.gob.ar/organismos/ministerio-de-educacion-ciencia-y-tecnologia' target="_blank" rel="noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-40 group-hover:rotate-45 group-hover:scale-150 transition-all duration-1000"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <img src="/Logos/Robotica-blanco.png" alt="Logo Robotica" className='w-28 sm:w-36' />
              </motion.div>
              <div>
                <h4 className="font-bold text-slate-400 italic text-sm">Nodos Tecnológicos</h4>
                <h4 className="font-bold text-slate-400 italic text-sm">Robotica</h4>
                <p className="text-xl sm:text-2xl font-black uppercase tracking-tighter leading-none mt-1">
                  Innovación <br /> Provincial
                </p>
              </div>
            </motion.a>
          </div>
        </div>
      </motion.section>


      {/* ── SECCIÓN 6: EDIFICIOS — CARTAS NAIPES ── */}
      <motion.section
        className="relative bg-gray-50 overflow-hidden px-4 sm:px-6 py-16 sm:py-20 lg:h-screen lg:min-h-[700px] lg:flex lg:items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Ondas SVG */}
        <svg className="absolute bottom-0 left-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradE" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0110FA" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f8fafc" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path fill="url(#waveGradE)">
            <animate attributeName="d" dur="10s" repeatCount="indefinite"
              values="M0 50 Q 25 30 50 50 Q 75 70 100 50 L 100 100 L 0 100 Z; M0 50 Q 25 70 50 50 Q 75 30 100 50 L 100 100 L 0 100 Z; M0 50 Q 25 30 50 50 Q 75 70 100 50 L 100 100 L 0 100 Z" />
          </path>
          <defs>
            <linearGradient id="waveGrad2E" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#01EAE4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f8fafc" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path fill="url(#waveGrad2E)">
            <animate attributeName="d" dur="15s" repeatCount="indefinite"
              values="M0 50 Q 25 30 50 50 Q 75 70 100 50 L 100 100 L 0 100 Z; M0 50 Q 25 70 50 50 Q 75 30 100 50 L 100 100 L 0 100 Z; M0 50 Q 25 30 50 50 Q 75 70 100 50 L 100 100 L 0 100 Z" />
          </path>
        </svg>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20 w-full">
          {/* TEXTO — arriba en mobile, derecha en lg */}
          <div className="order-1 lg:order-2 lg:w-1/2 z-10 text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black italic text-slate-950 leading-[0.85] mb-6 sm:mb-8"
            >
              Presencia en <br />
              <span className="text-blue-600">todo el territorio.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-slate-800 leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0"
            >
              No somos solo una oficina. Somos una red descentralizada diseñada para que ningún vecino tenga que viajar kilómetros para acceder a la tecnología.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-3 sm:gap-4 mx-auto lg:mx-0 lg:flex lg:flex-wrap w-full"
            >
              {localidades.map((loc, i) => (
                <motion.a
                  key={i}
                  href={loc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-white shadow-sm border border-slate-200 rounded-2xl text-slate-700 font-bold text-sm sm:text-base hover:border-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 active:scale-95 group"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MapPin size={18} className="text-blue-500 group-hover:text-blue-600" />
                  {loc.name}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* CARTAS NAIPES — debajo en mobile, izquierda en lg */}
          <div className="order-2 lg:order-1 lg:w-1/2 relative w-full flex items-center justify-center h-[360px] sm:h-[440px] md:h-[500px] lg:h-[500px] md:h-[600px] perspective-[1200px]">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                drag
                dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
                dragElastic={0.2}
                initial={{ x: card.x, y: card.y, rotate: card.rotate, opacity: 0, scale: 0.5 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{
                  scale: 1.05, rotate: 0, zIndex: 50, rotateX: 6, rotateY: -6,
                  transition: { type: "spring", stiffness: 150, damping: 25 }
                }}
                className="absolute w-52 h-[300px] sm:w-64 sm:h-[360px] md:w-72 md:h-[400px] lg:w-72 lg:h-[400px] xl:w-80 xl:h-[450px] rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.25)] overflow-hidden cursor-grab active:cursor-grabbing group bg-slate-900"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000 brightness-[0.8] group-hover:brightness-110"
                  style={{ backgroundImage: `url(${card.img})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                </div>
                <div className="relative h-full p-6 sm:p-8 md:p-10 flex flex-col justify-between pointer-events-none">
                  <span
                    className="text-6xl sm:text-7xl md:text-8xl font-black italic tracking-tighter transition-all duration-700"
                    style={{ color: card.color, filter: `drop-shadow(0 0 15px ${card.color}44)` }}
                  >
                    {card.id}
                  </span>
                  <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <h5
                      className="text-white font-bold text-xl sm:text-2xl md:text-3xl mb-3"
                      style={{ textShadow: `0 0 20px ${card.color}` }}
                    >
                      {card.title}
                    </h5>
                    <div
                      className="w-16 h-1.5 rounded-full"
                      style={{ backgroundColor: card.color, boxShadow: `0 0 20px ${card.color}` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* --- SECCIÓN 7: CTA COMPACTO --- */}
      <motion.section
        className="relative w-full px-6 lg:pb-12 lg:px-42 overflow-hidden flex items-center justify-center h-[50vh] md:h-[33vh] bg-slate-50"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full relative z-10">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/80 backdrop-blur-md border border-white shadow-xl rounded-[2.5rem] p-8 md:p-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Texto - Título directo */}
            <div className="text-center md:text-left">
              <motion.h2
                className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Encuentra nuestra<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                  Instalacion mas cercana
                </span>
              </motion.h2>
            </div>

            {/* Botón - Compacto y llamativo */}
            <div className="shrink-0">
              <motion.a
                href="/puntosnodos"
                className="group flex items-center gap-3 px-8 py-4 bg-slate-950 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <span>Explorar</span>
                <div className="p-1 rounded-lg transition-colors duration-300">
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>


    </div>
  );
}

export default Home;