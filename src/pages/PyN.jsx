import React from "react";
import Horario from "../components/Horario";
import Tilt from 'react-parallax-tilt';
import { ExternalLink, MapPin } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion'




// --- DATOS STATS (cards flip) ---
const stats = [
  {
    numero: "3",
    label: "Nodos Tecnológicos",
    color: "text-red-500",
    backContent: (
      <div className="relative w-full h-full flex items-center justify-center scale-90">
        <img src="src/assets/Logos/NodoCopa.png" className="w-1/2 absolute -translate-x-12 -rotate-12 drop-shadow-lg transition-transform group-hover:-translate-x-16" alt="Copa" />
        <img src="src/assets/Logos/NodoPuesto.png" className="w-1/2 z-20 drop-shadow-2xl scale-110" alt="El Puesto" />
        <img src="src/assets/Logos/NodoSalado.png" className="w-1/2 absolute translate-x-12 rotate-12 drop-shadow-lg transition-transform group-hover:translate-x-16" alt="El Salado" />
      </div>
    )
  },
  {
    numero: "2",
    label: "Puntos Digitales",
    color: "text-cyan-500",
    backContent: (
      <img src="src/assets/Logos/PuntoD.png" className="w-3/5 drop-shadow-xl" alt="Punto Digital" />
    )
  },
  {
    numero: "1",
    label: "Laboratorio de Robótica",
    color: "text-purple-500",
    backContent: (
      <img src="src/assets/Logos/Robotica-NyC.png" className="w-3/5 drop-shadow-xl" alt="Robótica" />
    )
  }
];


const lugares = [
  // punto1
  {
    name: "Punto Digital I",
    address: "Calle Antonio del Pino 700",
    city: "Tinogasta, Catamarca",
    logo: "src/assets/logos/PuntoD.png",
    img: "src/assets/Frentes-Interiores/Punto1Frente.jpeg",
    maps: "https://maps.app.goo.gl/7bJfvYDj64B3f8FWA",
    from: "from-[#9F26C0]",
    to: "to-purple-400",
    services: [
      "Talleres de robótica",
      "Internet gratuito",
      "Trámites online",
      "Sala de Entretenimiento",
      "Capacitaciones",
      "Espacio para todo publico"
    ]
  },
  // punto2 
  {
    name: "Punto Digital II",
    address: "Calle Mario Castro 600",
    city: "Tinogasta, Catamarca",
    logo: "src/assets/logos/PuntoD.png",
    img: "src/assets/Frentes-Interiores/Punto2Frente.png",
    maps: "https://maps.app.goo.gl/tCiGhAD9nNVQpzPX7",
    from: "from-[#1A0EEB]",
    to: "to-blue-400",
    services: [
      "Talleres de robótica",
      "Internet gratuito",
      "Trámites online",
      "Sala de Entretenimiento",
      "Capacitaciones",
      "Espacio para todo publico"
    ]
  },
  // robotica
  {
    name: "Laboratorio de Robótica",
    address: "Articulado con los Puntos Digitales",
    city: "Tinogasta, Catamarca",
    logo: "src/assets/Logos/Robotica-blanco.png",
    img: "src/assets/Robotica/Robotica5.jpg",
    maps: "https://maps.app.goo.gl/7bJfvYDj64B3f8FWA",
    from: "from-[#01EBE5]",
    to: "to-cyan-300",
    services: [
      "Robótica educativa",
      "Programación",
      "Impresión 3D"
    ]
  },
  // Salado 
  {
    name: "Nodo Tecnológico El Salado",
    address: "El Salado",
    city: "Tinogasta, Catamarca",
    logo: "src/assets/Logos/NodoSalado.png",
    img: "src/assets/Frentes-Interiores/NodoSaladoFrente.jpg",
    maps: "https://maps.google.com",
    from: "from-[#22EA0A]",
    to: "to-green-300",
    services: [
      "Talleres de robótica",

      "Conectividad libre",
      "Internet gratuito",
      "Trámites online",
      "Capacitaciones",
      "Espacio para todo publico"
    ]
  },
  // Puesto 
  {
    name: "Nodo Tecnológico El Puesto",
    address: "El Puesto",
    city: "Tinogasta, Catamarca",
    logo: "src/assets/logos/NodoPuesto.png",
    img: "src/assets/Frentes-Interiores/NodoElPuestoFrente1.jpeg",
    maps: "https://maps.app.goo.gl/upSpgF2TQzGHFMyi7",
    from: "from-[#EB6200]",
    to: "to-orange-400",
    services: [
      "Conectividad libre",
      "Internet gratuito",
      "Trámites online",
      "Capacitaciones",
      "Espacio para todo publico"
    ]
  },
  // Copacabana 
  {
    name: "Nodo Tecnológico Copacabana",
    address: "Copacabana",
    city: "Tinogasta, Catamarca",
    logo: "src/assets/logos/NodoCopa.png",
    img: "src/assets/Frentes-Interiores/NodoCopaFrente1.jpeg",
    maps: "#",
    from: "from-[#EB0501]",
    to: "to-red-400",
    services: [
      "Talleres locales",
      "Conectividad libre",
      "Internet gratuito",
      "Trámites online",
      "Capacitaciones",
      "Espacio para todo publico"
    ]
  }
];

function PyN() {
  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-800">

      {/* ── SECCIÓN 1: HERO ── */}
      <section className="relative w-full bg-slate-50 overflow-hidden pt-20
                          lg:h-screen lg:flex lg:items-center">

        {/* Fondo decorativo — círculos */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none ">
          <motion.svg className="absolute -top-28 -left-28" width="600" height="600" initial={{ opacity: 0, scale: 0.9, x: -100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}>
            <circle cx="300" cy="300" r="300" fill="url(#grad1)" />
            <defs>
              <linearGradient id="grad1">
                <stop offset="0%" stopColor="#155DFC" />
                <stop offset="100%" stopColor="#0C249C" />
              </linearGradient>
            </defs>
          </motion.svg>
          <motion.svg className="absolute -bottom-28 -right-28" width="600" height="600" initial={{ opacity: 0, scale: 0.9, x: -100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}>
            <circle cx="300" cy="300" r="300" fill="url(#grad2)" />
            <defs>
              <linearGradient id="grad2">
                <stop offset="0%" stopColor="#155DFC" />
                <stop offset="100%" stopColor="#0C249C" />
              </linearGradient>
            </defs>
          </motion.svg>
          <motion.svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" width="300" height="300" initial={{ opacity: 0, scale: 0.9, x: -100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}>
            <circle cx="100" cy="100" r="100" fill="url(#grad3)" />
            <defs>
              <linearGradient id="grad3">
                <stop offset="0%" stopColor="#155DFC" />
                <stop offset="100%" stopColor="#0C249C" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto
                        px-6 sm:px-10 lg:px-20
                        grid grid-cols-1 lg:grid-cols-2
                        lg:h-4/5 lg:gap-12 lg:items-center"
        >

          {/* ── TEXTO — primero en mobile, derecha en lg ── */}
          {/* order-1 en mobile (aparece arriba), order-2 en lg (aparece a la derecha) */}
          <motion.div className="order-1 lg:order-2
                          text-center lg:text-left flex flex-col justify-center
                          pt-10 pb-10 lg:pt-0 lg:pb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <h1 className="text-[clamp(3.5rem,12vw,5rem)] lg:text-7xl xl:text-8xl
                           font-black tracking-tighter text-slate-950 italic leading-[0.9]">
              Puntos y<br />
              <span className="text-blue-600">Nodos</span>
            </h1>

            <p className="mt-8 text-base sm:text-lg text-slate-800
                          max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0
                          font-medium leading-relaxed mb-4">
              La Subsecretaría de Desarrollo Integral y Tecnología para la Inclusión cuenta con una red de puntos digitales y nodos tecnológicos distribuidos en todo Tinogasta.
            </p>

            <span className="text-blue-600 font-semibold text-sm sm:text-base">
              ¡Encontrá el más cercano y acercate!
            </span>
          </motion.div>

          {/* ── IMAGEN — segundo en mobile (debajo del texto), izquierda en lg ── */}
          {/* order-2 en mobile (aparece abajo), order-1 en lg (aparece a la izquierda) */}
          <motion.div className="order-2 lg:order-1
                          relative flex items-center justify-center
                          h-[75vw] sm:h-[60vw] md:h-[55vw] lg:h-full
                          pb-10 lg:pb-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}>
            <Tilt
              perspective={1500}
              scale={1.02}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              className="w-full h-full lg:max-h-[75vh] xl:max-h-[85vh]"
            >
              <div className="relative w-full h-full rounded-[3.5rem] overflow-hidden
                              shadow-[0_50px_100px_-20px_rgba(0,0,0,0.18)]
                              bg-slate-200 group border border-white/50">
                <img src="src/assets/Otros/Punto1Juegos3.jpeg" alt="Robotica" className="object-cover h-full" />
                {/* <div className="absolute inset-0 flex items-center justify-center
                                text-slate-400 font-bold uppercase tracking-widest text-sm bg-slate-200">
                  [ Imagen Principal ]
                </div> */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent
                                opacity-0 transition-opacity duration-700" />
              </div>
            </Tilt>
          </motion.div>

        </div>
      </section>

      {/* ── HORARIO ── */}
      <Horario />

      {/* ── RED TECNOLÓGICA ── */}
      <section className="relative py-10 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 overflow-hidden bg-slate-50">

        {/* Fondo decorativo */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="absolute top-10 left-10 w-[400px] h-[400px] text-blue-400/10 blur-3xl" viewBox="0 0 200 200" fill="currentColor">
            <circle cx="100" cy="100" r="100" />
          </svg>
          <svg className="absolute bottom-10 right-10 w-[420px] h-[420px] text-blue-800/30 blur-3xl" viewBox="0 0 200 200" fill="currentColor">
            <circle cx="100" cy="100" r="100" />
          </svg>
          <svg className="absolute top-1/2 left-1/2 w-[500px] h-[500px] text-purple-900/10 blur-3xl -translate-x-1/2 -translate-y-1/2" viewBox="0 0 200 200" fill="currentColor">
            <circle cx="100" cy="100" r="100" />
          </svg>
        </div>

        {/* CABECERA */}
        <motion.div className="text-center mb-10 sm:mb-16" initial={{ opacity: 0, scale: 0.9, y: 80 }}
whileInView={{ opacity: 1, scale: 1, y: 0 }}
transition={{ duration: 0.7, delay: 0.4 }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic text-slate-900 mb-6">
            Ubicaciones y Servicios
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* STATS — cards flip */}
        {/* Mobile: 1 col, tablet: 3 col. aspect-square se mantiene en todos los tamaños */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-16 sm:mb-28">
          {stats.map((stat, i) => (
            <motion.div key={i} className="group [perspective:1000px]" initial={{ opacity: 0, scale: 0.9, y: 80 }}
whileInView={{ opacity: 1, scale: 1, y: 0 }}
transition={{ duration: 0.7, delay: i * 0.30 + 0.6 }}>
              <div className="relative w-full aspect-square transition-transform duration-700
                              [transform-style:preserve-3d]
                              group-hover:[transform:rotateY(180deg)] cursor-pointer">

                {/* FRENTE */}
                <div className="absolute inset-0 bg-white rounded-3xl shadow-xl
                                flex flex-col items-center justify-center [backface-visibility:hidden]">
                  <h3 className={`text-5xl sm:text-6xl font-black ${stat.color}`}>{stat.numero}</h3>
                  <p className="font-bold uppercase text-slate-800 mt-2 text-xs sm:text-sm tracking-tighter text-center px-4">
                    {stat.label}
                  </p>
                </div>

                {/* DORSO */}
                <div className="absolute inset-0 bg-white rounded-3xl shadow-xl
                                flex items-center justify-center
                                [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden">
                  {stat.backContent}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* UBICACIONES — cards flip */}
        {/* Mobile: 1 col, md+: 2 col. Altura fija se mantiene en todos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-14">
          {lugares.map((lugar, index) => (
            <motion.div key={index} className="group" initial={{ opacity: 0, scale: 0.9, x: 300 }}
whileInView={{ opacity: 1, scale: 1, x: 0 }}
transition={{ duration: 0.7, delay: index * 0.20 + 0.3 }}>

              <div className="relative h-[400px] sm:h-[440px] md:h-[460px] w-full
                              transition-transform duration-700
                              [transform-style:preserve-3d]
                              group-hover:[transform:rotateY(180deg)]">

                {/* FRONT */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl [backface-visibility:hidden]">
                  <img src={lugar.img} className="w-full h-full object-cover" alt={lugar.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 text-white">
                    <h3 className="text-2xl sm:text-3xl italic font-black">{lugar.name}</h3>
                    <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>{lugar.city}</span>
                    </div>
                  </div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 bg-white rounded-3xl shadow-xl
                                p-6 sm:p-8 flex flex-col overflow-visible
                                [transform:rotateY(180deg)] [backface-visibility:hidden]">

                  {/* Gradiente tecnológico */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${lugar.from} ${lugar.to}
                                   translate-y-full group-hover:translate-y-0
                                   transition-transform duration-700 ease-out`} />

                  {/* Logo flotante */}
                  <img
                    src={lugar.logo}
                    className="absolute -top-12 sm:-top-16 -right-6 sm:-right-10
                               w-28 sm:w-40
                               opacity-0 group-hover:opacity-100 group-hover:translate-y-2
                               transition duration-500 drop-shadow-2xl"
                    alt={lugar.name}
                  />

                  <div className="flex flex-col h-full relative z-10">
                    <div>
                      <h3 className="text-2xl sm:text-4xl font-black italic text-gray-950 mb-3">
                        {lugar.name}
                      </h3>

                      <div className="flex items-start gap-2 text-white mb-4 sm:mb-5 text-base sm:text-xl">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mt-[2px]" />
                        <div>
                          <p>{lugar.address}</p>
                          <p>{lugar.city}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                        {lugar.services.map((s, i) => (
                          <span key={i}
                            className="text-xs sm:text-sm bg-slate-50 px-3 sm:px-4 py-1.5 sm:py-2
                                       rounded-full text-slate-900 font-medium border-slate-200">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto">
                      <a
                        href={lugar.maps}
                        target="_blank"
                        className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl
                                   bg-gradient-to-r from-blue-600 to-cyan-500
                                   text-white font-semibold text-sm sm:text-base
                                   shadow-md hover:shadow-xl hover:scale-[1.03] transition"
                      >
                        Ver en Google Maps
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

    </div>
  );


}

export default PyN;