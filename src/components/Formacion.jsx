import React, { useState } from "react";

import { GraduationCap, School, ChevronDown, ChevronUp } from 'lucide-react'; 

export const Formacion = () => {

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const formaciones = [
    {
      nivel: "Primaria",
      lugar: "Colegio El Caminante",
      fecha: "2012 - 2019",
      icon: School,
      details: null
    },
    {
      nivel: "Básicos",
      lugar: "Instituto Federico Mora",
      fecha: "2020 - 2020",
      icon: School,
      details: null
    },
    {
      nivel: "Básicos",
      lugar: "Colegio Galeotti Torres",
      fecha: "2021 - 2022",
      icon: School,
      details: null
    },
    {
      nivel: "Diversificado - Perito en Informática",
      lugar: "Instituto Técnico Laboral Kinal",
      fecha: "2023 - 2025",
      icon: GraduationCap,
      details: [
        { subNivel: "4to Perito", description: "Aqui fue cuando empeso el aprendisaje de la programación." },
        { subNivel: "5to Perito", description: "Cambio de lenguajes y mas pruebas para saber si se logro aprender de mejor manera." },
        { subNivel: "6to Perito", description: "Perfección de los lenguajes antiguos y una nueva curva de aprendizaje." }
      ]
    }
  ];

  return (
    <section id="formacion" className="min-h-screen py-16 px-8 md:px-24 lg:px-32 bg-gray-900 text-white font-inter">

      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Formación Académica</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {formaciones.map((formacion, i) => (

          <div 
            key={i} 
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
          >

            {formacion.icon && (
              <formacion.icon size={48} className="text-yellow-500 mb-4" />
            )}
            

            <h3 className="text-2xl font-semibold mb-2">{formacion.nivel}</h3>
            
            <p className="text-lg text-gray-300 mb-1">{formacion.lugar}</p>
            
            <p className="text-sm text-gray-400">{formacion.fecha}</p>

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
