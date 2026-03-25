import React from 'react'
import { Instagram, Facebook, Mail, Code2, ExternalLink } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

function Footer() {
  const currentYear = new Date().getFullYear();

  // --- CONFIGURACIÓN DINÁMICA ---
  const socialLinks = [
    { icon: <Instagram size={40} />, href: "https://www.instagram.com/puntodigital_mt", filter: "hover:drop-shadow-[0_0_15px_rgba(236,72,153,0.7)]", color: "hover:text-pink-500" },
    { icon: <Facebook size={40} />, href: "https://www.facebook.com/share/17VyC4nVKR/", filter: "hover:drop-shadow-[0_0_15px_rgba(37,99,235,0.7)]", color: "hover:text-blue-600" },
    { icon: <Mail size={40} />, href: "https://mail.google.com/mail/?view=cm&fs=1&to=mtinogasta2@puntodigital.gob.ar&su=Consulta", filter: "hover:drop-shadow-[0_0_15px_rgba(239,68,68,0.7)]", color: "hover:text-red-500" },
    { icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.41-.16 1.02.13 2.12.83 2.89.69.83 1.76 1.34 2.84 1.31 1.07.01 2.11-.47 2.78-1.29.5-.59.75-1.35.74-2.11-.03-4.54-.01-9.07-.01-13.61z" />
        </svg>
      ),
      href: "https://www.tiktok.com/@puntos.digitales6?_r=1&_t=ZS-94FZaWHMdtp",
      filter: "hover:drop-shadow-[0_0_15px_rgba(34,234,10,0.7)]",
      color: "hover:text-[#22EA0A]"
    },
  ];

  const officialSites = [
    { name: "Punto Digital Nacional", url: "https://www.argentina.gob.ar/jefatura/innovacion-ciencia-y-tecnologia/tics/punto-digital", neon: "group-hover:from-purple-600/20 group-hover:to-purple-600/5", border: "group-hover:border-purple-500/50" },
    { name: "Mi Argentina", url: "https://www.argentina.gob.ar/miargentina", neon: "group-hover:from-blue-600/20 group-hover:to-blue-600/5", border: "group-hover:border-blue-500/50" },
    { name: "Municipalidad de Tinogasta", url: "https://tinogasta.gob.ar/", neon: "group-hover:from-emerald-600/20 group-hover:to-emerald-600/5", border: "group-hover:border-emerald-500/50" },
    { name: "Ministerio Educacion C y T ", url: "https://tinogasta.gob.ar/", neon: "group-hover:from-red-600/20 group-hover:to-red-600/5", border: "group-hover:border-red-500/50" },
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-400 border-t border-slate-900 pt-10 pb-4 px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center">

        {/* COL 1: LOGO */}
        <div className="flex justify-center lg:justify-start">
          <Tilt perspective={1000} scale={1.1} transitionSpeed={2000}>
            <img
              src="src/assets/Logos/Sub-Blanco.png"
              alt="Logo Subsecretaría"
              className="h-20 sm:h-28 w-auto object-contain drop-shadow-[0_0_20px_rgba(37,99,235,0.2)]"
            />
          </Tilt>
        </div>

        {/* COL 2: PÁRRAFO */}
        <div className="flex items-center">
          <p className="text-slate-500 text-sm leading-relaxed text-center lg:text-left font-medium border-l-0 lg:border-l border-slate-800 lg:pl-6 italic max-w-xs mx-auto lg:mx-0">
            Impulsando la transformación digital de Tinogasta con innovación, acceso equitativo y formación constante para el futuro.
          </p>
        </div>

        {/* COL 3: SITIOS OFICIALES */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-2 text-center lg:text-left">Sitios Oficiales</h4>
          {officialSites.map((site, i) => (
            <Tilt key={i} perspective={800} scale={1.05} transitionSpeed={1000} className="group">
              <a
                href={site.url}
                target="_blank"
                rel="noreferrer"
                className={`relative flex items-center justify-between px-5 py-3 bg-slate-900/40 border border-slate-800/50 rounded-xl transition-all duration-500 ${site.border}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-700 opacity-0 group-hover:opacity-100 rounded-xl ${site.neon}`} />
                <span className="relative z-10 text-sm font-bold text-slate-400 group-hover:text-white transition-colors">{site.name}</span>
              </a>
            </Tilt>
          ))}
        </div>

        {/* COL 4: REDES SOCIALES */}
        <div className="flex flex-wrap justify-center lg:justify-end gap-6 sm:gap-10">
          {socialLinks.map((social, i) => (
            <div key={i}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-slate-600 transition-all duration-300 ${social.color} ${social.filter} block`}
              >
                {social.icon}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* SECCIÓN INFERIOR */}
      <div className="max-w-7xl mx-auto w-full pt-6 mt-8 border-t border-slate-900/80 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] sm:text-[10px] font-bold tracking-widest text-center">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-slate-700 uppercase">
          <span>© {currentYear} MUNICIPALIDAD DE TINOGASTA</span>
          <span className="hidden md:block w-1 h-1 bg-slate-800 rounded-full" />
          <span>Subsecretaría de Tecnología</span>
        </div>

        <div className="flex items-center gap-2 px-5 py-2 bg-slate-900/50 border border-slate-800/50 rounded-full group transition-all hover:border-blue-500/30">
          <span className="text-slate-600 uppercase tracking-tighter">Desarrolladores</span>
          <span className="text-white text-xs font-black tracking-tighter group-hover:text-blue-500 transition-colors">JMC</span>
          <Code2 size={14} className="text-blue-600" />
        </div>
      </div>
    </footer>
  )
}

export default Footer