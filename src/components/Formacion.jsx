import React, { useState } from "react";
// Importa íconos de Lucide React para representar la educación y la funcionalidad de expansión.
// Asegúrate de tener lucide-react instalado: npm install lucide-react
import { GraduationCap, School, ChevronDown, ChevronUp } from 'lucide-react'; 

export const Formacion = () => {
  // Estado para controlar la expansión de la sección de Diversificado.
  // Almacenará el índice de la formación expandida, o null si ninguna está expandida.
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Función para alternar el estado de expansión de una formación.
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Datos de formación académica.
  // La entrada de Diversificado ahora incluye una propiedad 'details' para la información adicional.
  const formaciones = [
    {
      nivel: "Primaria",
      lugar: "Colegio El Caminante",
      fecha: "2012 - 2019",
      icon: School,
      details: null // No hay detalles adicionales para Primaria
    },
    {
      nivel: "Básicos",
      lugar: "Instituto Federico Mora",
      fecha: "2020 - 2020",
      icon: School,
      details: null // No hay detalles adicionales para Básicos
    },
    {
      nivel: "Básicos",
      lugar: "Colegio Galeotti Torres",
      fecha: "2021 - 2022",
      icon: School,
      details: null // No hay detalles adicionales para Básicos
    },
    {
      nivel: "Diversificado - Perito en Informática",
      lugar: "Instituto Técnico Laboral Kinal",
      fecha: "2023 - 2025",
      icon: GraduationCap,
      details: [ // Detalles anidados para la sección de Diversificado
        { subNivel: "4to Perito", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { subNivel: "5to Perito", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { subNivel: "6to Perito", description: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris." }
      ]
    }
  ];

  return (
    // Sección principal con fondo oscuro, padding y altura mínima de pantalla.
    <section id="formacion" className="min-h-screen py-16 px-8 md:px-24 lg:px-32 bg-gray-900 text-white font-inter">
      {/* Título principal de la sección */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Formación Académica</h2>

      {/* Contenedor para las tarjetas de formación, usando un grid responsivo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {formaciones.map((formacion, i) => (
          // Tarjeta individual de formación
          <div 
            key={i} 
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
          >
            {/* Ícono de la formación */}
            {formacion.icon && (
              <formacion.icon size={48} className="text-yellow-500 mb-4" />
            )}
            
            {/* Nivel de formación */}
            <h3 className="text-2xl font-semibold mb-2">{formacion.nivel}</h3>
            
            {/* Lugar de estudio */}
            <p className="text-lg text-gray-300 mb-1">{formacion.lugar}</p>
            
            {/* Período de tiempo */}
            <p className="text-sm text-gray-400">{formacion.fecha}</p>

            {/* Renderizado condicional para el botón de expansión si hay detalles */}
            {formacion.details && (
              <button 
                onClick={() => toggleExpand(i)} 
                className="mt-4 text-yellow-500 hover:text-yellow-400 transition-colors duration-200 flex items-center justify-center"
              >
                {expandedIndex === i ? (
                  <>
                    Ver menos <ChevronUp size={20} className="ml-2" />
                  </>
                ) : (
                  <>
                    Ver más <ChevronDown size={20} className="ml-2" />
                  </>
                )}
              </button>
            )}

            {/* Detalles expandibles para la sección de Diversificado */}
            {formacion.details && expandedIndex === i && (
              <div className="mt-6 w-full text-left border-t border-gray-700 pt-4">
                {formacion.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="mb-4 last:mb-0">
                    <h4 className="text-xl font-semibold text-yellow-500 mb-1">{detail.subNivel}</h4>
                    <p className="text-base text-gray-300 leading-relaxed">{detail.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
