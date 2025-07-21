import React from "react";
import Presentacion from "./pages/Presentacion";
import SobreMi from "./pages/SobreMi";
import Servicios from "./pages/Servicios";

export default function App() {
  return (
    <div className="p-6 space-y-8">
      <Presentacion />
      <SobreMi />
      <Servicios />
    </div>
  );
}
