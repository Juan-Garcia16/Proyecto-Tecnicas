import React from 'react';
import { Link } from 'react-router-dom';

export default function InfoPlataforma() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-green-100 p-6">
      <div className="bg-white/90 rounded-2xl shadow-2xl p-10 max-w-2xl w-full flex flex-col items-center border border-blue-100">
        <img src="/src/assets/Logoutp.webp" alt="Logo UTP" className="w-32 h-32 mb-6 drop-shadow-lg" />
        <h1 className="text-4xl font-extrabold mb-4 text-blue-800 text-center drop-shadow-lg">
          Plataforma Inclusiva UTP
        </h1>
        <p className="mb-6 text-lg text-gray-700 text-center">
          Esta plataforma busca facilitar el acceso a contenidos académicos adaptados para estudiantes con discapacidad auditiva, promoviendo la inclusión y la igualdad de oportunidades en la Universidad Tecnológica de Pereira.
        </p>
        <ul className="mb-6 text-gray-700 text-base list-disc pl-6 text-left w-full max-w-lg">
          <li><b>Acceso organizado:</b> Consulta materiales por programa académico y semestre.</li>
          <li><b>Subida de contenidos:</b> Los docentes pueden subir metodologías y materiales accesibles.</li>
          <li><b>Filtros inteligentes:</b> Encuentra fácilmente asignaturas y recursos relevantes.</li>
          <li><b>Enlaces útiles:</b> Acceso directo a sistemas institucionales para estudiantes y docentes.</li>
        </ul>
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center mt-4">
          <Link to="/estudiantes" className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition-all duration-200 text-center">Ir a Estudiantes</Link>
          <Link to="/docentes" className="px-6 py-2 bg-green-600 text-white rounded-full font-semibold shadow hover:bg-green-700 transition-all duration-200 text-center">Ir a Docentes</Link>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center mt-6">
          <a href="https://programasacademicos.utp.edu.co/" target="_blank" rel="noopener noreferrer" className="underline text-blue-700">Portal Académico UTP</a>
          <a href="https://app4.utp.edu.co/pe/" target="_blank" rel="noopener noreferrer" className="underline text-green-700">Portal Docente UTP</a>
        </div>
      </div>
    </main>
  );
}
