import React from "react";
import Calajo from '../assets/Profile.jpg'
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <section id="hero" className="flex flex-col md:flex-row min-h-screen">
      {/* Columna izquierda (negra) */}
      <div className="bg-gray-900 text-white flex-1 flex flex-col justify-center items-center p-8 md:items-start md:pl-20">
        <p className="text-lg mb-2 md:text-3xl">Hola 👋</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Yo soy <span className="text-yellow-500">Ignacio Hernandez</span>
        </h1>
        <p className="text-2xl mb-8">
          Soy un desarrollador web apasionado con conocimientos en HTML, CSS, JavaScript, React, Node.js y bases de datos
          como MongoDB y MySQL. <br className="md:hidden" /> Me encanta crear aplicaciones útiles, 
          resolver problemas con código limpio y aprender constantemente nuevas tecnologías para crecer profesionalmente.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full transition duration-300">
          <Link to="/sobre-mi" >SOBRE MI</Link>
        </button>
      </div>

      {/* Columna derecha (amarilla con imagen) */}
      <div className="bg-yellow-500 flex-1 flex justify-center items-center overflow-hidden">
        {/* Usamos una imagen de placeholder por ahora. Deberías reemplazar 'your-image-url.png' con la URL de la imagen de Michael. */}
        {/* Asegúrate de que la imagen tenga un fondo transparente o se integre bien con el amarillo. */}
        <img
          src={Calajo} // Placeholder temporal. Reemplaza esto.
          alt="Michael - Freelance Web Designer & Developer"
          className="w-md h-md object-cover rounded-lg shadow-md"
          // Si tu imagen tiene un fondo, podrías necesitar ajustar el estilo para que se vea bien.
          // Por ejemplo, si la imagen tiene un fondo blanco y quieres que se vea transparente sobre amarillo:
          // style={{ mixBlendMode: 'multiply' }} o 'screen' dependiendo del efecto deseado.
        />
      </div>

      {/* Menú de navegación (parte superior derecha) - Puedes implementarlo como un componente separado */}
      <div className="absolute top-0 right-0 p-8 z-10">
        <button className="text-white md:text-gray-900 text-3xl focus:outline-none">
          {/* Icono de hamburguesa o similar */}
          &#9776;
        </button>
      </div>
    </section>
  );
};