import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Inicio } from "./components/Inicio";
import { SobreMi } from "./components/SobreMi";
import { Habilidades } from "./components/Habilidades";
import { Formacion } from "./components/Formacion";
import { Proyectos } from "./components/Proyectos";
import { Contacto } from "./components/Contacto";
import { DetalleProyecto } from "./components/DetalleProyecto";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/formacion" element={<Formacion />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/proyectos/:id" element={<DetalleProyecto />} />
        </Routes>
      </div>
    </>
  );
}

export default App;