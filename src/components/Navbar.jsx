import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-gray-400 shadow-md p-9 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Portafolio web</h1>
        <ul className="flex space-x-4 text-sm md:text-base text-gray-900">
          <li><Link to="/" className="hover:text-blue-500">Inicio</Link></li>
          <li><Link to="/sobre-mi" className="hover:text-blue-500">Sobre mí</Link></li>
          <li><Link to="/habilidades" className="hover:text-blue-500">Habilidades</Link></li>
          <li><Link to="/formacion" className="hover:text-blue-500">Formación</Link></li>
          <li><Link to="/proyectos" className="hover:text-blue-500">Proyectos</Link></li>
          <li><Link to="/contacto" className="hover:text-blue-500">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
};