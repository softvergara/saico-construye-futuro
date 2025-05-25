
const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Quiénes Somos?
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="SAICO Ingeniería construcción"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">SAICO Ingeniería S.A.S</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Somos una empresa constructora dedicada al diseño y ejecución de proyectos de obra civil, 
              abarcando vías, parques, polideportivos y viviendas. Con 12 años de experiencia, nos 
              especializamos en crear soluciones innovadoras y sostenibles, comprometidos con la 
              transformación de espacios que impulsen el desarrollo social, económico y cultural.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              En SAICO Ingeniería, la <strong>Calidad de los Procesos y Productos</strong>, la 
              <strong> Responsabilidad Social Empresarial</strong> y la <strong>Armonía Ambiental</strong> son 
              los pilares que garantizan la satisfacción de nuestros clientes y el éxito de cada proyecto.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Misión</h3>
            <p className="text-gray-700 leading-relaxed">
              Realizar proyectos de construcción civil, que abarcan tanto el diseño, construcción e ingeniería, 
              así como la interventoría para el sector industrial, comercial e institucional. Garantizando un 
              entorno agradable con el medio ambiente y satisfaciendo las necesidades de los clientes como 
              también el desarrollo de nuestro entorno social y económico.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visión</h3>
            <p className="text-gray-700 leading-relaxed">
              Ser reconocidos en Colombia por nuestra experiencia, liderazgo y confiabilidad en el sector 
              de la construcción, destacándose en la formulación y ejecución de proyectos de alto impacto 
              que contribuyan al desarrollo territorial, social y económico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
