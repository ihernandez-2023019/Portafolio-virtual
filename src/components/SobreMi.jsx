import React from "react";
import Calajo from '../assets/Profile.jpg'
import { Link } from "react-router-dom";
import curriculumPdf from '../assets/Curriculum-Ignacio-Hernandez.pdf'; 

export const SobreMi = () => {
  return (
    // Sección principal con fondo oscuro.
    // min-h-screen asegura que ocupe al menos la altura de la pantalla.
    // px-4 md:px-16 lg:px-24 para un padding responsivo que no sea excesivo, permitiendo más ancho.
    // justify-center y items-center para centrar el contenido.
    <section id="sobre-mi" className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center py-16 px-4 md:px-16 lg:px-24 font-inter">
      
      {/* Contenedor de la imagen de perfil con el borde decorativo */}
      {/* Aumentamos el tamaño del contenedor de la imagen para que ocupe más espacio */}
      <div className="relative w-72 h-72 md:w-96 md:h-96 flex-shrink-0 mb-8 md:mb-0 md:mr-20">
        {/* Imagen de perfil */}
        <img
          src={Calajo}
          alt="Profile"
          className="w-full h-full object-cover rounded-lg shadow-lg relative z-10"
        />
        {/* Borde decorativo amarillo (cuadrado exterior) */}
        <div className="absolute top-4 left-4 w-full h-full border-2 border-yellow-500 rounded-lg z-0"></div>
        {/* Borde decorativo amarillo (cuadrado interior, desplazado) */}
        <div className="absolute top-8 left-8 w-full h-full border-2 border-yellow-500 rounded-lg z-0"></div>
      </div>

      {/* Contenido de texto y botones */}
      {/* Eliminamos el max-w-xl para que el texto pueda expandirse más */}
      {/* Añadimos un padding horizontal para que el texto no se pegue a los bordes en pantallas muy grandes */}
      <div className="flex-1 text-center md:text-left px-4 md:px-0">
        {/* Título "About Me" con la línea decorativa */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Sobre mí
          <div className="w-16 h-1 bg-yellow-500 mx-auto md:mx-0 mt-2"></div> {/* Línea decorativa */}
        </h2>
        {/* Párrafo de descripción */}
        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          Me considero una persona creativa, autodidacta y comprometida. Disfruto trabajar en equipo,
          enfrentar desafíos y encontrar soluciones eficientes. Busco siempre mejorar mis habilidades
          para aportar valor a los proyectos en los que participo.
        </p>
        {/* Segundo párrafo de descripción */}
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        {/* Contenedor de botones */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Botón "HIRE ME" */}
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg">
            <Link to="/contacto" >CONTACTO</Link>
          </button>
          {/* Botón "DOWNLOAD CV" */}
            <a
            href={curriculumPdf}// ¡IMPORTANTE! Cambia esta ruta a la ubicación real de tu archivo CV.
            download="Curriculum Ignacio Hernandez.pdf" // Nombre del archivo que se descargará
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 border border-gray-600 shadow-lg flex items-center justify-center" // Añadido flex para centrar el texto
          >DESCARGAR CV</a>
        </div>
      </div>
    </section>
  );
};