import React from 'react';
import { Link } from 'react-router-dom';

export default function PresentacionProyecto() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-green-100 p-6">
      <div className="bg-white/90 rounded-2xl shadow-2xl p-10 max-w-3xl w-full flex flex-col items-center border border-blue-100">
        <img src="/src/assets/Logoutp.webp" alt="Logo UTP" className="w-32 h-32 mb-6 drop-shadow-lg" />
        <h1 className="text-4xl font-extrabold mb-4 text-blue-800 text-center drop-shadow-lg">
          Plataforma Inclusiva UTP
        </h1>
        <h2 className="text-2xl font-bold mb-2 text-green-700 text-center">Accesibilidad comunicativa en el entorno universitario</h2>
        <p className="mb-4 text-lg text-gray-700 text-center">
          Desarrollo de una plataforma inclusiva para estudiantes con discapacidad auditiva.
        </p>
        <section className="mb-6 text-gray-700 text-base text-justify w-full max-w-2xl">
          <h3 className="font-semibold text-lg mb-1">¿Por qué este proyecto?</h3>
          <p className="mb-2">La inclusión educativa de personas con discapacidad auditiva es un reto en la educación superior. Aunque existen intérpretes y apoyos, los contenidos no siempre están centralizados ni adaptados, dificultando el aprendizaje autónomo y la participación activa. Este proyecto busca crear una solución digital específica para la Universidad Tecnológica de Pereira (UTP), alineada con estándares internacionales de accesibilidad y diseño universal para el aprendizaje.</p>
          <h3 className="font-semibold text-lg mb-1 mt-4">Objetivo general</h3>
          <p className="mb-2">Diseñar e implementar una plataforma web que permita a los docentes de la UTP compartir los contenidos de sus asignaturas de manera estructurada y accesible, facilitando así el aprendizaje de todos los estudiantes, especialmente aquellos con discapacidad auditiva.</p>
          <h3 className="font-semibold text-lg mb-1 mt-4">¿Qué ofrece la plataforma?</h3>
          <ul className="list-disc pl-6 mb-2">
            <li>Consulta de materiales por programa académico y semestre.</li>
            <li>Subida de contenidos por parte de los docentes, adaptados a diferentes metodologías.</li>
            <li>Interfaz accesible, intuitiva y compatible con tecnologías de apoyo.</li>
            <li>Filtros inteligentes para encontrar asignaturas y recursos relevantes.</li>
            <li>Enlaces útiles a sistemas institucionales.</li>
          </ul>
          <h3 className="font-semibold text-lg mb-1 mt-4">Metodología</h3>
          <ul className="list-disc pl-6 mb-2">
            <li>Entrevistas y encuestas a estudiantes y docentes.</li>
            <li>Observación del entorno de aprendizaje actual.</li>
            <li>Pruebas piloto y análisis de usabilidad.</li>
          </ul>
          <h3 className="font-semibold text-lg mb-1 mt-4">Impacto esperado</h3>
          <p>Reducir barreras comunicativas, democratizar el acceso al conocimiento y fomentar una cultura institucional más inclusiva en la UTP. El modelo puede ser replicado en otras universidades.</p>
        </section>
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center mt-4">
          <Link to="/plataforma" className="px-8 py-3 bg-blue-800 text-white rounded-full font-extrabold shadow-lg hover:bg-green-600 transition-all duration-200 text-center  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 tracking-widest text-lg">Consulta tus Asignaturas!</Link>
        </div>
      </div>
    </main>
  );
}
