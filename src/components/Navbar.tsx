
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-800">
              SAICO <span className="text-orange-500">INGENIERÍA</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors">
                Inicio
              </button>
              <button onClick={() => scrollToSection('nosotros')} className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors">
                Nosotros
              </button>
              <button onClick={() => scrollToSection('servicios')} className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors">
                Servicios
              </button>
              <button onClick={() => scrollToSection('proyectos')} className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors">
                Proyectos
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors">
                Contacto
              </button>
              <Button onClick={() => scrollToSection('pqr')} className="bg-orange-500 hover:bg-orange-600">
                PQR
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-800 px-3 py-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button onClick={() => scrollToSection('inicio')} className="block text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium w-full text-left">
                Inicio
              </button>
              <button onClick={() => scrollToSection('nosotros')} className="block text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium w-full text-left">
                Nosotros
              </button>
              <button onClick={() => scrollToSection('servicios')} className="block text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium w-full text-left">
                Servicios
              </button>
              <button onClick={() => scrollToSection('proyectos')} className="block text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium w-full text-left">
                Proyectos
              </button>
              <button onClick={() => scrollToSection('contacto')} className="block text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium w-full text-left">
                Contacto
              </button>
              <Button onClick={() => scrollToSection('pqr')} className="bg-orange-500 hover:bg-orange-600 w-full mt-2">
                PQR
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
