import React, { useState } from 'react';

const contenidosSimulados = [
  {
    id: 1,
    asignatura: 'Matemáticas',
    docente: 'Ana Pérez',
    descripcion: 'Metodología basada en videos subtitulados y ejercicios prácticos.',
    archivo: null,
  },
  {
    id: 2,
    asignatura: 'Física',
    docente: 'Carlos Gómez',
    descripcion: 'Uso de gráficos interactivos y resúmenes con lenguaje sencillo.',
    archivo: 'fisica-metodologia.pdf',
  },
  {
    id: 3,
    asignatura: 'Literatura',
    docente: 'Luisa Fernández',
    descripcion: 'Lecturas adaptadas y debates en grupo con interpretación.',
    archivo: null,
  },
];

export default function Estudiantes() {
  const [filtro, setFiltro] = useState('');

  const asignaturasUnicas = [...new Set(contenidosSimulados.map(c => c.asignatura))];

  const contenidosFiltrados = filtro
    ? contenidosSimulados.filter(c => c.asignatura === filtro)
    : contenidosSimulados;

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
        contenidosFiltrados.map(({ id, asignatura, docente, descripcion, archivo }) => (
          <article key={id} className="mb-4 border-b pb-4">
            <h3 className="text-lg font-semibold">{asignatura}</h3>
            <p><strong>Docente:</strong> {docente}</p>
            <p><strong>Descripción:</strong> {descripcion}</p>
            {archivo && (
              <p>
                <a
                  href={`/archivos/${archivo}`}
                  target="_blank"
                  rel="noopener noreferrer"
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
