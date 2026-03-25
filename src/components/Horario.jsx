import { Clock4 } from 'lucide-react'
import React from 'react'

function Horario() {
  // --- CONFIGURACIÓN DINÁMICA (Data Mapping) ---
  const scheduleData = {
    title: "Horarios de Atención",
    days: "Lunes a Viernes",
    shifts: [
      { label: "Mañana", time: "08:00 a 13:00" },
      { label: "Tarde/Noche", time: "14:00 a 22:00" }
    ]
  }

  return (
    <section className="w-full bg-blue-600 py-8 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 text-white">
        
        {/* Icono con contenedor responsivo */}
        <div className="bg-white/30 p-2 sm:p-3 rounded-full flex-shrink-0 animate-pulse">
          <Clock4 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
        </div>

        {/* Textos dinámicos y responsivos */}
        <div className="text-center md:text-left">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight uppercase sm:normal-case">
            {scheduleData.title}
          </h3>
          
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-blue-50 text-base sm:text-lg font-medium">
            <span>{scheduleData.days}</span>
            <span className="hidden sm:block text-blue-300">•</span>
            
            <p className="flex flex-wrap justify-center gap-2">
              {scheduleData.shifts.map((shift, index) => (
                <span key={index} className="flex gap-1">
                  <span className="opacity-80">{shift.label}:</span>
                  <span className="font-bold text-white whitespace-nowrap">{shift.time}</span>
                  {index < scheduleData.shifts.length - 1 && (
                    <span className="hidden lg:block ml-2 text-blue-300">•</span>
                  )}
                </span>
              ))}
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Horario