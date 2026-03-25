import { NavLink, Link } from "react-router-dom"
import { Menu, X, Info, MapPin, BookOpen, Home } from "lucide-react"
import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // --- CONFIGURACIÓN DINÁMICA (Data Mapping) ---
  const navigationLinks = [
    { name: "Nosotros", path: "/nosotros", icon: <Info size={20} /> },
    { name: "Puntos y Nodos", path: "/puntosnodos", icon: <MapPin size={20} /> },
    { name: "Cursos", path: "/cursos", icon: <BookOpen size={20} />, isButton: true },
  ]

  const linkBase = "relative text-gray-600 hover:text-blue-600 text-sm font-bold tracking-wide transition-colors px-2 py-1"
  const activeStyle = "text-blue-600"

  return (
    <div className="fixed w-full top-2 sm:top-6 flex flex-col items-center px-4 z-[100]">
      <nav className="w-full max-w-[350px] sm:max-w-xl md:max-w-3xl lg:max-w-5xl bg-white/85 backdrop-blur-xl border border-white/20 rounded-[1.5rem] sm:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] px-4 sm:px-8 py-2 flex justify-between items-center transition-all duration-300">

        {/* Logo */}
        <Link to="/" className="hover:scale-105 transition-transform duration-300 ease-out flex-shrink-0">
          <img 
            src="/src/assets/logos/Sub-Negro.png" 
            alt="Home" 
            className="w-28 sm:w-40 transition-all" 
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-10 items-center">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                link.isButton 
                  ? `text-sm px-6 py-2.5 rounded-2xl font-bold transition-all ${
                      isActive ? "bg-gray-50 text-blue-600" : "bg-blue-700 hover:bg-blue-500 text-white shadow-lg shadow-blue-200"
                    }`
                  : `${linkBase} ${isActive ? activeStyle : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {!link.isButton && (
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600 transform origin-left transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600 hover:bg-slate-100 rounded-xl transition-colors outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu - CORREGIDO PARA EVITAR PANTALLA EN BLANCO */}
      {isOpen && (
        <div className="md:hidden mt-3 w-full max-w-[350px] sm:max-w-xl bg-white/95 backdrop-blur-2xl border border-white/20 rounded-[2rem] shadow-2xl p-4 flex flex-col gap-2 animate-in fade-in zoom-in duration-300">
          
      

          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              onClick={() => setIsOpen(false)}
              to={link.path}
              className={({ isActive }) => `
                flex items-center gap-4 p-4 rounded-2xl font-bold transition-all
                ${link.isButton 
                  ? "bg-blue-600 text-white shadow-lg mt-2 justify-center" 
                  : isActive 
                    ? "bg-blue-50 text-blue-600" 
                    : "text-gray-700 hover:bg-slate-50"
                }
              `}
            >
              {/* Renderizamos el icono directamente como propiedad del objeto */}
              {!link.isButton && (
                <span className="text-blue-600">
                  {link.icon}
                </span>
              )}
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar