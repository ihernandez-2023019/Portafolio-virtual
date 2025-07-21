import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { proyectos } from "../data/dataProyectos";
import { ImageModal } from "./ImagenModal";

export const DetalleProyecto = () => {
  const { id } = useParams();
  const proyecto = proyectos.find(p => p.id === parseInt(id));

  const [modalAbierto, setModalAbierto] = useState(false);
  const [indiceImagen, setIndiceImagen] = useState(0);

  if (!proyecto) return <div className="text-white p-10">Proyecto no encontrado.</div>;

  const relacionados = proyectos
    .filter(p => p.id !== proyecto.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 md:px-20 py-10 font-inter">
      <h1 className="text-4xl font-bold mb-4">{proyecto.titulo}</h1>
      <p className="text-lg text-gray-300 mb-8">{proyecto.descripcionDetallada}</p>
      <h2 className="text-2xl font-semibold mb-4 mt-10">Habilidades aprendidas</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-10">
        {proyecto.habilidadesAprendidas.map((habilidad, idx) => (
            <li key={idx}>{habilidad}</li>
        ))}
        </ul>

      {proyecto.github && (
        <div className="text-center mt-8">
          <a
            href={proyecto.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded transition"
          >
            Ver código en GitHub
          </a>
        </div>
      )}

      <h2 className="text-2xl font-semibold mb-4 mt-10">Galería del proyecto</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {proyecto.imagenesExtras.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Imagen ${index + 1} de ${proyecto.titulo}`}
            onClick={() => {
              setIndiceImagen(index);
              setModalAbierto(true);
            }}
            className="cursor-pointer w-full h-40 object-cover rounded shadow border border-white/10 hover:scale-105 transition-transform"
          />
        ))}
      </div>

      {/* Modal de imágenes */}
      {modalAbierto && (
        <ImageModal
          imagenes={proyecto.imagenesExtras}
          indiceActual={indiceImagen}
          onClose={() => setModalAbierto(false)}
          cambiarImagen={setIndiceImagen}
        />
      )}

      <h2 className="text-2xl font-semibold mb-4">Programas populares</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {relacionados.map(proj => (
          <Link to={`/proyectos/${proj.id}`} key={proj.id}>
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition duration-300 shadow-md">
              <img
                src={proj.imagen}
                alt={`Vista previa de ${proj.titulo}`}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h1 className="text-xl font-semibold mb-2">{proj.titulo}</h1>
                <p className="text-sm text-gray-300">{proj.descripcion}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/proyectos"
          className="inline-block bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition duration-300 shadow-lg"
        >
          ← Volver a proyectos
        </Link>
      </div>
    </div>
  );
};
