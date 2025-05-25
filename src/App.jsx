import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import DocenteForm from './components/DocenteForm.jsx';
import Estudiantes from './components/Estudiantes.jsx';

function Home() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Bienvenido a la plataforma inclusiva</h1>
      <p className="mb-6">Accede a los contenidos académicos adaptados para estudiantes con discapacidad auditiva.</p>
      <nav className="flex gap-4">
        <Link to="/estudiantes" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Estudiantes</Link>
        <Link to="/docentes" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Docentes</Link>
      </nav>
    </main>
  );
}

function App() {
  const [contenidos, setContenidos] = useState([
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
  ]);

  const agregarContenido = (nuevoContenido) => {
    setContenidos(prev => [...prev, { id: prev.length + 1, ...nuevoContenido }]);
  };

  return (
    <>
      <header className="bg-gray-800 text-white p-4">
        <nav className="max-w-3xl mx-auto flex justify-between">
          <Link to="/" className="font-bold text-lg">Plataforma Inclusiva UTP</Link>
          <div className="flex gap-4">
            <Link to="/estudiantes" className="hover:underline">Estudiantes</Link>
            <Link to="/docentes" className="hover:underline">Docentes</Link>
          </div>
        </nav>
      </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estudiantes" element={<Estudiantes contenidos={contenidos} />} />
        <Route path="/docentes" element={<DocenteForm onAgregar={agregarContenido} />} />
      </Routes>

      <footer className="bg-gray-100 text-center p-4 mt-12 text-gray-700">
        © 2025 Plataforma Inclusiva - Universidad Tecnológica de Pereira
      </footer>
    </>
  );
}

export default App;
