import React, { useState } from 'react';

export default function Estudiantes({ contenidos }) {
  const [filtro, setFiltro] = useState('');

  // Extraemos asignaturas únicas del contenido actual
  const asignaturasUnicas = [...new Set(contenidos.map(c => c.asignatura))];

  const contenidosFiltrados = filtro
    ? contenidos.filter(c => c.asignatura === filtro)
    : contenidos;

  return (
    <section className="max-w-3xl mx-auto p-6 bg-white rounded shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4">Consulta de contenidos académicos</h2>

      <label htmlFor="filtro" className="block mb-2 font-medium">
        Filtrar por asignatura:
      </label>
      <select
        id="filtro"
        className="w-full p-2 mb-6 border rounded"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      >
        <option value="">-- Todas las asignaturas --</option>
        {asignaturasUnicas.map(asig => (
          <option key={asig} value={asig}>{asig}</option>
        ))}
      </select>

      {contenidosFiltrados.length === 0 ? (
        <p>No hay contenidos disponibles para esta asignatura.</p>
      ) : (
        contenidosFiltrados.map(({ id, asignatura, docente, descripcion, archivoURL }) => (
          <article key={id} className="mb-4 border-b pb-4">
            <h3 className="text-lg font-semibold">{asignatura}</h3>
            <p><strong>Docente:</strong> {docente}</p>
            <p><strong>Descripción:</strong> {descripcion}</p>
            {archivoURL && (
              <p>
                <a
                  href={archivoURL}
                  download
                  className="text-blue-600 underline"
                >
                  Descargar archivo
                </a>
              </p>
            )}
          </article>
        ))
      )}
    </section>
  );
}
