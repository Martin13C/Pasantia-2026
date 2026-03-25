import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Code2, AlertTriangle } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

function NotFound() {
  const navigate = useNavigate();

  // --- CONFIGURACIÓN DINÁMICA (Data Mapping) ---
  const content = {
    errorCode: "404",
    tag: "Error de Acceso",
    title: { main: "Página no", highlight: "encontrada" },
    description: "Lo sentimos, la dirección digital que intentas consultar no existe o fue dada de baja de la infraestructura actual.",
    buttons: [
      { 
        label: "Volver", 
        icon: <ArrowLeft size={18} />, 
        action: () => navigate(-1),
        style: "bg-white border-2 border-slate-200 text-slate-500 hover:border-slate-950 hover:text-slate-950 hover:bg-slate-50" 
      },
      { 
        label: "Inicio de Sistema", 
        icon: <Home size={18} />, 
        action: () => navigate('/'),
        style: "bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-200" 
      }
    ],
    footer: "JMC • SUBSECRETARÍA TECNOLOGÍA"
  };

  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-center px-6 overflow-hidden font-sans">
      
      {/* Fondos (Ondas SVG) Responsivas */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[20vh] sm:h-1/4 z-0 pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F40A00" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F40A00" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F40A00" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#F40A00" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path fill="url(#waveGrad)">
          <animate attributeName="d" dur="10s" repeatCount="indefinite"
            values="M0 50 Q 25 30 50 50 Q 75 70 100 50 L 100 100 L 0 100 Z; M0 50 Q 25 70 50 50 Q 75 30 100 50 L 100 100 L 0 100 Z; M0 50 Q 25 30 50 50 Q 75 70 100 50 L 100 100 L 0 100 Z" />
        </path>
        <path fill="url(#waveGrad2)">
          <animate attributeName="d" dur="15s" repeatCount="indefinite"
            values="M0 50 Q 25 30 50 50 Q 75 70 100 50 L 100 100 L 0 100 Z; M0 50 Q 25 70 50 50 Q 75 30 100 50 L 100 100 L 0 100 Z; M0 50 Q 25 30 50 50 Q 75 70 100 50 L 100 100 L 0 100 Z" />
        </path>
      </svg>

      {/* Decoración de Fondo */}
      <div className="absolute top-24 right-10 sm:right-24 w-64 h-64 sm:w-96 sm:h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* CONTENIDO PRINCIPAL EN 3D */}
      <Tilt perspective={1200} scale={1.02} transitionSpeed={1500} tiltMaxAngleX={7} tiltMaxAngleY={7}>
        <div className="relative z-10 flex flex-col items-center text-center">
          
          {/* NÚMERO 404 - Responsivo para 350px */}
          <div className="flex flex-col items-center mb-4">
            <h1 className="text-[100px] sm:text-[140px] md:text-[180px] font-black leading-none tracking-tighter text-slate-950 select-none">
              {content.errorCode}
            </h1>
            <div className="flex items-center gap-3 px-4 py-2 bg-red-50 rounded-full border border-red-100 -mt-2 sm:-mt-8 shadow-sm">
              <AlertTriangle size={16} className="text-red-600" />
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-red-600">
                {content.tag}
              </span>
            </div>
          </div>

          {/* TEXTO INFORMATIVO */}
          <div className="space-y-4 max-w-xs sm:max-w-md mt-6 sm:mt-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter">
              {content.title.main} <span className="text-red-600 underline decoration-red-200 decoration-4 underline-offset-4">{content.title.highlight}</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed">
              {content.description}
            </p>
          </div>

          {/* BOTONES DINÁMICOS */}
          <div className="flex flex-col sm:flex-row gap-4 pt-10 w-full justify-center">
            {content.buttons.map((btn, idx) => (
              <button 
                key={idx}
                onClick={btn.action}
                className={`group relative flex items-center justify-center gap-3 px-8 py-4 rounded-2xl transition-all duration-300 font-black uppercase tracking-widest text-sm ${btn.style}`}
              >
                <span className="transition-transform group-hover:scale-110">
                  {btn.icon}
                </span>
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </Tilt>

      {/* FIRMA TÉCNICA */}
      <div className="absolute bottom-6 sm:bottom-10 flex flex-col items-center gap-2">
        <div className="h-6 sm:h-8 w-[1px] bg-slate-200 mb-2" />
        <div className="flex items-center gap-3 text-slate-900">
          <Code2 size={16} className="text-red-600" />
          <span className="text-[9px] sm:text-[10px] font-black tracking-[0.4em] uppercase text-center">
            {content.footer}
          </span>
        </div>
      </div>

    </div>
  )
}

export default NotFound