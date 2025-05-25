export default function Header() {
  return (
    <header className="bg-blue-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Plataforma Inclusiva UTP</h1>
      <nav className="space-x-4">
        <a href="#" className="hover:underline">Inicio</a>
        <a href="#" className="hover:underline">Metodología</a>
        <a href="#" className="hover:underline">Recursos</a>
        <a href="#" className="hover:underline">Contacto</a>
      </nav>
    </header>
  );
}