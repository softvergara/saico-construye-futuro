
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <div className="absolute inset-0 bg-black/40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="block">SAICO</span>
            <span className="text-orange-400">INGENIERÍA S.A.S</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-4 font-medium">
            "Construimos confianza, edificamos futuro"
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Con 12 años de experiencia en diseño y ejecución de proyectos de obra civil, 
            creamos soluciones innovadoras y sostenibles que transforman espacios e impulsan 
            el desarrollo social, económico y cultural.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('servicios')} 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
            >
              Conoce Nuestros Servicios
            </Button>
            <Button 
              onClick={() => scrollToSection('proyectos')} 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
            >
              Ver Proyectos
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">12+</div>
              <div className="text-sm text-gray-300">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">100+</div>
              <div className="text-sm text-gray-300">Proyectos Ejecutados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">100%</div>
              <div className="text-sm text-gray-300">Compromiso y Calidad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
