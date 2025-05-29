import React, { useState } from 'react';

function filtrarUnicos(arr, key) {
  return [...new Set(arr.map(c => c[key]))];
}

export default function Estudiantes({ contenidos }) {
  const [programa, setPrograma] = useState('');
  const [semestre, setSemestre] = useState('');
  const [asignatura, setAsignatura] = useState('');

  // Filtrar programas únicos
  const programasUnicos = filtrarUnicos(contenidos, 'programa');
  const semestresUnicos = programa
    ? filtrarUnicos(contenidos.filter(c => c.programa === programa), 'semestre')
    : filtrarUnicos(contenidos, 'semestre');
  const asignaturasUnicas = programa && semestre
    ? filtrarUnicos(contenidos.filter(c => c.programa === programa && c.semestre === semestre), 'asignatura')
    : filtrarUnicos(contenidos, 'asignatura');

  const contenidosFiltrados = contenidos.filter(c =>
    (!programa || c.programa === programa) &&
    (!semestre || c.semestre === semestre) &&
    (!asignatura || c.asignatura === asignatura)
  );

  return (
    <section className="max-w-3xl mx-auto p-6 bg-white rounded shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4">Consulta de contenidos académicos</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label htmlFor="programa" className="block mb-2 font-medium">Programa académico:</label>
          <select
            id="programa"
            className="w-full p-2 border rounded"
            value={programa}
            onChange={e => { setPrograma(e.target.value); setSemestre(''); setAsignatura(''); }}
          >
            <option value="">-- Todos los programas --</option>
            {programasUnicos.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="semestre" className="block mb-2 font-medium">Semestre:</label>
          <select
            id="semestre"
            className="w-full p-2 border rounded"
            value={semestre}
            onChange={e => { setSemestre(e.target.value); setAsignatura(''); }}
            disabled={!programa}
          >
            <option value="">-- Todos los semestres --</option>
            {semestresUnicos.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="asignatura" className="block mb-2 font-medium">Asignatura:</label>
          <select
            id="asignatura"
            className="w-full p-2 border rounded"
            value={asignatura}
            onChange={e => setAsignatura(e.target.value)}
            disabled={!semestre}
          >
            <option value="">-- Todas las asignaturas --</option>
            {asignaturasUnicas.map(a => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>
      </div>

      {contenidosFiltrados.length === 0 ? (
        <p>No hay contenidos disponibles para la selección.</p>
      ) : (
        contenidosFiltrados.map(({ id, asignatura, docente, descripcion, archivoURL, programa, semestre }) => (
          <article key={id} className="mb-4 border-b pb-4">
            <h3 className="text-lg font-semibold">{asignatura}</h3>
            <p><strong>Programa:</strong> {programa} | <strong>Semestre:</strong> {semestre}</p>
            <p><strong>Docente:</strong> {docente}</p>
            <p><strong>Descripción:</strong> {descripcion}</p>
            {archivoURL && (
              <p>
                <a href={archivoURL} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Ver archivo</a>
              </p>
            )}
          </article>
        ))
      )}
    </section>
  );
}
