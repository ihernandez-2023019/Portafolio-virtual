import React from "react";

import { Github, Facebook, Instagram, Linkedin } from 'lucide-react'; 

export const Contacto = () => (

  <section id="contacto" className="min-h-screen py-16 px-8 md:px-24 lg:px-32 bg-gray-900 text-white font-inter">

    <div className="max-w-3xl mx-auto">

      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">
        Vías de contacto
      </h2>

      <p className="text-lg text-center mb-12 leading-relaxed text-gray-300">
        ¿Te interesa saber más sobre mi trabajo o sobre cómo puedo colaborar
        en tu proyecto? <span className="font-bold text-white">Contáctame</span> por cualquiera de las siguientes vías.
      </p>

      <div className="text-center mb-16">
        <p className="text-xl mb-2 text-white">el123nachino@gmail.com</p>
        <p className="text-xl text-white">+502 5314-9709</p>
      </div>

      <form className="w-full">
        <div className="mb-6">
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Nombre"
            className="w-full py-3 px-0 bg-transparent border-b border-gray-700 focus:outline-none focus:border-yellow-500 text-white placeholder-gray-400"
          />
        </div>
        <div className="mb-6">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full py-3 px-0 bg-transparent border-b border-gray-700 focus:outline-none focus:border-yellow-500 text-white placeholder-gray-400"
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            id="asunto"
            name="asunto"
            placeholder="Asunto"
            className="w-full py-3 px-0 bg-transparent border-b border-gray-700 focus:outline-none focus:border-yellow-500 text-white placeholder-gray-400"
          />
        </div>
        <div className="mb-8">
          <textarea
            id="mensaje"
            name="mensaje"
            rows="4"
            placeholder="Escribe tu mensaje aquí..."
            className="w-full py-3 px-0 bg-transparent border-b border-gray-700 focus:outline-none focus:border-yellow-500 text-white placeholder-gray-400 resize-none"
          ></textarea>
        </div>
        
        <div className="text-center">
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-12 rounded-lg transition duration-300 shadow-md"
          >
            Enviar
          </button>
        </div>
      </form>

      <div className="mt-16 text-center border-t border-gray-700 pt-8">
        <h3 className="text-xl font-bold mb-6 uppercase text-white">
          REDES SOCIALES
        </h3>
        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/ihernandez-2023019" 
            target="_blank" 
            rel="noreferrer"
            className="text-white hover:text-gray-400 transition duration-300" 
            aria-label="GitHub"
          >
            <Github size={40} /> 
          </a>
          <a 
            href="https://www.facebook.com/ignaciosebastian.hernandezpayes/" 
            target="_blank" 
            rel="noreferrer"
            className="text-white hover:text-gray-400 transition duration-300"
            aria-label="Facebook"
          >
            <Facebook size={40} />
          </a>
          <a 
            href="https://www.instagram.com/el123nachino/" 
            target="_blank" 
            rel="noreferrer"
            className="text-white hover:text-gray-400 transition duration-300"
            aria-label="Instagram"
          >
            <Instagram size={40} />
          </a>
          <a 
            href="https://www.linkedin.com/in/ignacio-sebastian-hern%C3%A1ndez-payes-b802a0376/" 
            target="_blank" 
            rel="noreferrer"
            className="text-white hover:text-gray-400 transition duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={40} />
          </a>
        </div>
      </div>
    </div>
  </section>
);
