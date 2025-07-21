import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const ImageModal = ({ imagenes, indiceActual, onClose, cambiarImagen }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 modal-overlay"
      onClick={handleOverlayClick}
    >
      <button onClick={onClose} className="absolute top-5 right-5 text-white hover:text-red-500">
        <X size={32} />
      </button>

      {indiceActual > 0 && (
        <button
          onClick={() => cambiarImagen(indiceActual - 1)}
          className="absolute left-5 text-white hover:text-yellow-400"
        >
          <ChevronLeft size={40} />
        </button>
      )}

      <img
        src={imagenes[indiceActual]}
        alt={`Imagen ampliada ${indiceActual + 1}`}
        className="max-w-full max-h-[80vh] rounded-lg border border-white/20 shadow-lg"
      />

      {indiceActual < imagenes.length - 1 && (
        <button
          onClick={() => cambiarImagen(indiceActual + 1)}
          className="absolute right-5 text-white hover:text-yellow-400"
        >
          <ChevronRight size={40} />
        </button>
      )}
    </div>
  );
};
