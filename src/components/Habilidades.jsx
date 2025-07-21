import React from "react";

import {
  Code,  // Genérico para HTML, CSS, JS
  Atom,  // Para React
  Database, // Para MongoDB, MySQL
  Server, // Para Node.js, Express.js
  GitBranch, // Para Git
  Palette, // Para Tailwind CSS
  Leaf, // Para Spring Boot
} from 'lucide-react'; 

export const Habilidades = () => {
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
  ];

  return (
    <section id="habilidades" className="min-h-screen py-16 px-8 md:px-24 lg:px-32 bg-gray-900 text-white font-inter">

      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Habilidades</h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {habilidades.map((habilidad, i) => (

          <div 
            key={i} 
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between hover:scale-105"
          >

            <div className="flex items-center mb-4">

              {habilidad.icon ? (
                <habilidad.icon size={36} className={`mr-4 ${habilidad.color}`} />
              ) : (
                <div className={`w-9 h-9 flex items-center justify-center rounded-full mr-4 text-xl font-bold ${habilidad.color}`}>
                  {habilidad.name.charAt(0)}
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

