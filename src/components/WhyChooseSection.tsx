import { CheckCircle } from "lucide-react";

const features = [
  "Más de 10,000 productos disponibles",
  "Asesoría técnica especializada",
  "Entregas en todo México",
  "Garantía en todos los productos",
  "Atención personalizada 24/7",
  "Financiamiento disponible",
];

const WhyChooseSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Sobre Nosotros
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
            ¿Por qué elegir <span className="text-primary">Ferrot</span>?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            Ferrot es la ferretería digital que entiende tus necesidades. Desde proyectos de construcción 
            hasta mejoras del hogar, tenemos todo lo que necesitas con la calidad que mereces. 
            Nuestro compromiso es ser tu aliado de confianza en cada proyecto.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="flex items-center gap-3 bg-background p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium text-left">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
