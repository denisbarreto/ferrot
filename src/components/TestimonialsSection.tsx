import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Contratista General",
    content: "Ferrot se ha convertido en mi proveedor de confianza. La calidad de los productos y la asesoría técnica son excepcionales. Los precios son muy competitivos.",
    rating: 5,
    avatar: "CM",
  },
  {
    name: "María González",
    role: "Arquitecta",
    content: "Excelente servicio y productos de primera calidad. El equipo de Ferrot siempre está dispuesto a ayudar con recomendaciones técnicas para mis proyectos.",
    rating: 5,
    avatar: "MG",
  },
  {
    name: "Roberto Sánchez",
    role: "Maestro de Obra",
    content: "La entrega rápida y los precios competitivos me han ayudado a mantener mis proyectos a tiempo y dentro del presupuesto. ¡100% recomendado!",
    rating: 5,
    avatar: "RS",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="promociones" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mt-2 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto">
            Miles de profesionales confían en Ferrot para sus proyectos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-background rounded-2xl p-8 shadow-lg relative group hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-ferrot-gold text-ferrot-gold" />
                ))}
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-heading font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
