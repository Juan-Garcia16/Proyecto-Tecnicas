import Estudiantes from './components/Estudiantes.jsx';
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import DocenteForm from './components/DocenteForm.jsx';
import PresentacionProyecto from './pages/PresentacionProyecto.jsx';

function Home() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-green-100 p-6">
      <div className="bg-white/90 rounded-xl shadow-2xl p-10 max-w-xl w-full flex flex-col items-center border border-blue-100">
        <img src="/Logoutp.webp" alt="Logo UTP" className="w-28 h-28 mb-4 drop-shadow-lg animate-bounce" />
        <h1 className="text-4xl font-extrabold mb-3 text-blue-800 text-center drop-shadow-lg">
          Bienvenido a la Plataforma Inclusiva UTP
        </h1>
        <p className="mb-6 text-lg text-gray-700 text-center">
          Accede a los contenidos académicos adaptados para estudiantes con discapacidad auditiva.<br/>
          <span className="text-green-700 font-semibold">¡Una educación accesible para todos!</span>
        </p>
        <nav className="flex gap-6 mt-4">
          <Link to="/plataforma/estudiantes" className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition-all duration-200">Estudiantes</Link>
          <Link to="/plataforma/docentes" className="px-6 py-2 bg-green-600 text-white rounded-full font-semibold shadow hover:bg-green-700 transition-all duration-200">Docentes</Link>
        </nav>
      </div>
    </main>
  );
}

function Docentes({ contenidos, setContenidos }) {
  const agregarContenido = (nuevoContenido) => {
    setContenidos([...contenidos, { id: contenidos.length + 1, ...nuevoContenido }]);
  };

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Sección para Docentes</h2>
      <p className="mb-6">Desde aquí podrás subir tus metodologías y materiales para hacerlos accesibles.</p>
      <DocenteForm onAgregarAsignatura={agregarContenido} />
    </main>
  );
}

function App() {
  // Estado global que guarda todos los contenidos con sus archivos (en memoria)
  const [contenidos, setContenidos] = useState([
    {
      id: 1,
      asignatura: 'Matemáticas',
      docente: 'Ana Pérez',
      descripcion: 'Metodología basada en videos subtitulados y ejercicios prácticos.',
      archivo: null,
      archivoURL: null,
    },
    {
      id: 2,
      asignatura: 'Física',
      docente: 'Carlos Gómez',
      descripcion: 'Uso de gráficos interactivos y resúmenes con lenguaje sencillo.',
      archivo: null,
      archivoURL: null,
    },
    {
      id: 3,
      asignatura: 'Literatura',
      docente: 'Luisa Fernández',
      descripcion: 'Lecturas adaptadas y debates en grupo con interpretación.',
      archivo: null,
      archivoURL: null,
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-green-100">
      <header className="bg-gray-800 text-white p-4">
        <nav className="max-w-3xl mx-auto flex justify-between">
          <Link to="/" className="font-bold text-lg">Plataforma Inclusiva UTP</Link>
          <div className="flex gap-4">
            <a href="https://programasacademicos.utp.edu.co/" target="_blank" rel="noopener noreferrer" className="hover:underline">Posgrados</a>
            <a href="https://app4.utp.edu.co/pe/" target="_blank" rel="noopener noreferrer" className="hover:underline">Portal</a>
          </div>
        </nav>
      </header>

      <div className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<PresentacionProyecto />} />
          <Route path="/plataforma/*" element={
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="estudiantes" element={<Estudiantes contenidos={contenidos} />} />
              <Route path="docentes" element={<Docentes contenidos={contenidos} setContenidos={setContenidos} />} />
            </Routes>
          } />
        </Routes>
      </div>

      <footer className="bg-gray-100 text-center p-4 mt-12 text-gray-700">
        © 2025 Plataforma Inclusiva - Universidad Tecnológica de Pereira
      </footer>
    </div>
  );
}

export default App;
