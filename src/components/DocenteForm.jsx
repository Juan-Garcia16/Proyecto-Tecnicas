import React, { useState } from 'react';
import { PROGRAMAS, SEMESTRES } from '../constants/programas.js';
import { Link } from 'react-router-dom';

export default function DocenteForm({ onAgregarAsignatura }) {
  const [nombre, setNombre] = useState('');
  const [asignatura, setAsignatura] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [archivo, setArchivo] = useState(null);
  const [mensaje, setMensaje] = useState('');
  const [programa, setPrograma] = useState('');
  const [semestre, setSemestre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !asignatura || !descripcion || !programa || !semestre) {
      setMensaje('Por favor, complete todos los campos.');
      return;
    }

    // Crear URL local para el archivo
    let archivoURL = null;
    if (archivo) {
      archivoURL = URL.createObjectURL(archivo);
    }

    onAgregarAsignatura({
      docente: nombre,
      asignatura,
      descripcion,
      archivo,
      archivoURL,
      programa,
      semestre,
    });

    setMensaje(`Contenido enviado para ${asignatura} por ${nombre}`);

    // Limpiar formulario
    setNombre('');
    setAsignatura('');
    setDescripcion('');
    setArchivo(null);
    setPrograma('');
    setSemestre('');
    e.target.reset();
  };

  return (
    <section className="max-w-2xl mx-auto p-6 bg-white rounded shadow-md mt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Formulario para docentes</h2>
        <Link to="/plataforma" className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold shadow hover:bg-blue-200 transition-all ml-4 whitespace-nowrap">
          ← Volver
        </Link>
      </div>
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

        <label className="block mb-2" htmlFor="programa">
          Programa académico
        </label>
        <select
          id="programa"
          className="w-full p-2 border rounded mb-4"
          value={programa}
          onChange={e => setPrograma(e.target.value)}
          required
        >
          <option value="">-- Seleccione un programa --</option>
          {PROGRAMAS.map(p => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>

        <label className="block mb-2" htmlFor="semestre">
          Semestre
        </label>
        <select
          id="semestre"
          className="w-full p-2 border rounded mb-4"
          value={semestre}
          onChange={e => setSemestre(e.target.value)}
          required
        >
          <option value="">-- Seleccione un semestre --</option>
          {SEMESTRES.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

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
