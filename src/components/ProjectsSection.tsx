
const ProjectsSection = () => {
  const projects = [
    {
      title: "Polideportivo Municipal",
      description: "Construcción completa de complejo deportivo con canchas múltiples y graderías para 500 personas.",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Infraestructura Deportiva",
      year: "2023"
    },
    {
      title: "Conjunto Residencial Los Cedros",
      description: "Desarrollo habitacional de 120 viviendas con zonas comunes y áreas verdes.",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Vivienda",
      year: "2023"
    },
    {
      title: "Vía de Acceso Rural",
      description: "Construcción y pavimentación de 5 km de vía que conecta comunidades rurales.",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Infraestructura Vial",
      year: "2022"
    },
    {
      title: "Parque Central",
      description: "Renovación integral de parque urbano con senderos peatonales y mobiliario urbano.",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Espacio Público",
      year: "2022"
    },
    {
      title: "Centro Comercial Plaza Norte",
      description: "Construcción de centro comercial de tres niveles con locales comerciales y parqueaderos.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Comercial",
      year: "2021"
    },
    {
      title: "Edificio de Oficinas Torres del Este",
      description: "Construcción de edificio corporativo de 8 pisos con modernas instalaciones.",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Corporativo",
      year: "2021"
    }
  ];

  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Proyectos
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nos llena de satisfacción haber participado en el desarrollo de proyectos que han 
            contribuido al crecimiento de diversas industrias y comunidades en Colombia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-800 text-white px-3 py-1 text-sm font-semibold rounded-full">
                    {project.year}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-500 text-white px-3 py-1 text-sm font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              Nuestro equipo de expertos está listo para convertir tu visión en realidad. 
              Contáctanos para una consultoría personalizada.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contacto');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-200"
            >
              Iniciar Proyecto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
