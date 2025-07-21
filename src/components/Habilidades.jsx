import React from "react";
// Importa los íconos necesarios de Lucide React.
// Si necesitas íconos específicos de tecnologías que no están en Lucide,
// podrías considerar usar un CDN de Devicons o Font Awesome, o SVGs personalizados.
// Para este ejemplo, usaré algunos genéricos de Lucide y simularé otros.
// Para los logos específicos de las tecnologías, a menudo se usan Devicons.
// Como no tenemos Devicons directamente, simularé los logos usando íconos de Lucide
// o texto con un color distintivo.
// Para un uso real y más fiel al diseño, podrías añadir:
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">
// en tu index.html y luego usar <i class="devicon-react-original"></i>
import {
  Code,  // Genérico para HTML, CSS, JS
  Atom,  // Para React
  Database, // Para MongoDB, MySQL
  Server, // Para Node.js, Express.js
  GitBranch, // Para Git
  Palette, // Para Tailwind CSS
  Leaf, // Para Spring Boot (simulando una hoja/primavera)
} from 'lucide-react'; 

export const Habilidades = () => {
  // Array de habilidades con nombre, porcentaje y un identificador para el icono
  const habilidades = [
    { name: "React", icon: Atom, percentage: 80, color: "text-blue-400" },
    { name: "Node.js", icon: Server, percentage: 70, color: "text-green-500" },
    { name: "MongoDB", icon: Database, percentage: 90, color: "text-green-400" },
    { name: "MySQL", icon: Database, percentage: 60, color: "text-blue-300" },
    { name: "JavaScript", icon: Code, percentage: 65, color: "text-yellow-400" },
    { name: "HTML", icon: Code, percentage: 90, color: "text-orange-500" },
    { name: "CSS", icon: Code, percentage: 95, color: "text-blue-500" },
    { name: "Git", icon: GitBranch, percentage: 95, color: "text-red-500" },
    { name: "Spring Boot", icon: Leaf, percentage: 98, color: "text-green-600" },
    // Puedes añadir Express.js, Tailwind CSS aquí si quieres que aparezcan con un icono
    // { name: "Tailwind CSS", icon: Palette, percentage: 85, color: "text-cyan-400" },
    // { name: "Express.js", icon: Server, percentage: 70, color: "text-gray-400" },
  ];

  return (
    // Sección principal con fondo oscuro y padding.
    // min-h-screen para ocupar toda la altura.
    <section id="habilidades" className="min-h-screen py-16 px-8 md:px-24 lg:px-32 bg-gray-900 text-white font-inter">
      {/* Título principal de la sección */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Habilidades</h2>

      {/* Grid para organizar las tarjetas de habilidades */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {habilidades.map((habilidad, i) => (
          // Tarjeta individual de habilidad
          <div 
            key={i} 
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between hover:scale-105"
          >
            {/* Contenido superior de la tarjeta: Ícono y nombre de la habilidad */}
            <div className="flex items-center mb-4">
              {/* Renderiza el icono de Lucide si está definido, si no, usa un genérico o inicial */}
              {habilidad.icon ? (
                <habilidad.icon size={36} className={`mr-4 ${habilidad.color}`} />
              ) : (
                <div className={`w-9 h-9 flex items-center justify-center rounded-full mr-4 text-xl font-bold ${habilidad.color}`}>
                  {habilidad.name.charAt(0)} {/* Muestra la primera letra si no hay icono */}
                </div>
              )}
              <span className="text-xl font-semibold">{habilidad.name}</span>
            </div>

            {/* Barra de progreso */}
            <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${habilidad.percentage}%` }}
              ></div>
            </div>

            {/* Porcentaje de habilidad */}
            <div className="text-right text-sm text-gray-400">
              {habilidad.percentage}%
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

