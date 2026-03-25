import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

function ButtonTop() {
  const [visible, setVisible] = useState(false)

  // --- CONFIGURACIÓN DINÁMICA ---
  const config = {
    threshold: 300,          // Distancia de scroll para aparecer
    behavior: "smooth",      // Tipo de scroll
    zIndex: "z-[999]",       // Prioridad máxima de visualización
    styles: {
      base: "fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-blue-600 text-white p-3 sm:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95",
      animation: "animate-bounce-subtle" // Opcional: animación de entrada
    }
  }

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > config.threshold) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisible)
    return () => window.removeEventListener("scroll", toggleVisible)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: config.behavior
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`
        ${config.styles.base} 
        ${config.zIndex}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
      `}
      aria-label="Volver arriba"
    >
      <ArrowUp size={24} className="sm:w-7 sm:h-7" />
    </button>
  )
}

export default ButtonTop