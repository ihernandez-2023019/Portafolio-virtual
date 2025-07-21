import React from "react";
import { Code, ExternalLink } from 'lucide-react';
import { proyectos } from "../data/dataProyectos"; // ✅ Importación
import { Link } from "react-router-dom";

export const Proyectos = () => {
  return (
    <section id="proyectos" className="min-h-screen py-16 px-8 md:px-24 lg:px-32 bg-gray-900 text-white font-inter">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Proyectos</h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-8"></div>
        <p className="text-lg text-gray-300 leading-relaxed">
          Aquí puedes explorar algunos de mis trabajos más recientes y destacados.
          Cada proyecto refleja mi compromiso con la calidad y la innovación.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {proyectos.map(proj => (
          <div 
            key={proj.id} 
            className={`${proj.colorClass} p-6 rounded-lg shadow-lg flex flex-col justify-between transform transition-transform duration-300 hover:scale-105`}
          >
            {/* Imagen del proyecto */}
            <img 
              src={proj.imagen} 
              alt={`Imagen del proyecto ${proj.titulo}`} 
              className="w-full h-40 object-cover rounded mb-4 border border-white/20"
            />

            {/* Contenido textual */}
            <div>
              <Code size={32} className="text-white mb-2 opacity-75" />
              <h3 className="text-xl font-bold mb-1 text-white">{proj.titulo}</h3>
              <p className="text-sm text-white opacity-90 leading-relaxed">{proj.descripcion}</p>
            </div>

            <Link 
              to={`/proyectos/${proj.id}`} 
              className="mt-4 inline-flex items-center text-white text-base font-semibold hover:underline"
            >
              Más información
              <ExternalLink size={18} className="ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
