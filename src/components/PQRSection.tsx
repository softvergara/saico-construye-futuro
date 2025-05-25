
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const PQRSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    subject: '',
    message: '',
    rating: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario PQR enviado:', formData);
    toast({
      title: "PQR enviado exitosamente",
      description: "Hemos recibido tu solicitud. Te responderemos pronto.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      type: '',
      subject: '',
      message: '',
      rating: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="pqr" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            PQR - Peticiones, Quejas y Reclamos
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tu opinión es muy importante para nosotros. Comparte tu experiencia o 
            presenta tu solicitud de manera fácil y rápida.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Información personal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre Completo *
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono
              </label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full"
                placeholder="320 123 4567"
              />
            </div>

            {/* Tipo de PQR */}
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Solicitud *
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">Selecciona una opción</option>
                <option value="peticion">Petición</option>
                <option value="queja">Queja</option>
                <option value="reclamo">Reclamo</option>
                <option value="felicitacion">Felicitación</option>
                <option value="sugerencia">Sugerencia</option>
              </select>
            </div>

            {/* Asunto */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Asunto *
              </label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full"
                placeholder="Resumen breve de tu solicitud"
              />
            </div>

            {/* Calificación del servicio */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ¿Cómo calificas nuestro servicio?
              </label>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <label key={rating} className="flex items-center">
                    <input
                      type="radio"
                      name="rating"
                      value={rating.toString()}
                      checked={formData.rating === rating.toString()}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="text-sm">{rating} {rating === 1 ? 'Muy malo' : rating === 5 ? 'Excelente' : ''}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Describe detalladamente tu solicitud *
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full"
                placeholder="Proporciona todos los detalles relevantes sobre tu solicitud..."
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Preguntas de Satisfacción:</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• ¿El proyecto se entregó en el tiempo acordado?</li>
                <li>• ¿La calidad de los materiales cumplió tus expectativas?</li>
                <li>• ¿El equipo de trabajo fue profesional y cortés?</li>
                <li>• ¿Recomendarías nuestros servicios?</li>
                <li>• ¿Qué aspectos podríamos mejorar?</li>
              </ul>
            </div>

            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold">
              Enviar PQR
            </Button>
          </form>
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p>Tiempo de respuesta estimado: 3-5 días hábiles</p>
          <p>Para casos urgentes, contáctanos directamente al +57 320 695 7771</p>
        </div>
      </div>
    </section>
  );
};

export default PQRSection;
