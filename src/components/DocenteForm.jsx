import React, { useState } from 'react';

export default function DocenteForm() {
  const [nombre, setNombre] = useState('');
  const [asignatura, setAsignatura] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [archivo, setArchivo] = useState(null);
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !asignatura || !descripcion) {
      setMensaje('Por favor, complete todos los campos.');
      return;
    }
    // Aquí iría lógica para enviar o guardar datos
    setMensaje(`Contenido enviado para ${asignatura} por ${nombre}`);
    
    // Limpiar formulario
    setNombre('');
    setAsignatura('');
    setDescripcion('');
    setArchivo(null);
    e.target.reset();
  };

  return (
    <section className="max-w-2xl mx-auto p-6 bg-white rounded shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4">Formulario para docentes</h2>
      <form onSubmit={handleSubmit} aria-label="Formulario para subir metodología y contenido">
        <label className="block mb-2" htmlFor="nombreDocente">
          Nombre del docente
        </label>
        <input
          id="nombreDocente"
          type="text"
          className="w-full p-2 border rounded mb-4"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label className="block mb-2" htmlFor="asignatura">
          Asignatura
        </label>
        <input
          id="asignatura"
          type="text"
          className="w-full p-2 border rounded mb-4"
          value={asignatura}
          onChange={(e) => setAsignatura(e.target.value)}
          required
        />

        <label className="block mb-2" htmlFor="descripcion">
          Descripción de la metodología
        </label>
        <textarea
          id="descripcion"
          className="w-full p-2 border rounded mb-4"
          rows="4"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />

        <label className="block mb-2" htmlFor="archivo">
          Subir archivo (opcional)
        </label>
        <input
          id="archivo"
          type="file"
          className="mb-4"
          onChange={(e) => setArchivo(e.target.files[0])}
          accept=".pdf,.doc,.docx,.ppt,.pptx"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Enviar
        </button>
      </form>
      {mensaje && <p className="mt-4 text-green-700">{mensaje}</p>}
    </section>
  );
}
