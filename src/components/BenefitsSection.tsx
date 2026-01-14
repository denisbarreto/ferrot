import { Truck, Headphones, Tag, CreditCard } from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Entrega Rápida y Segura",
    description: "Recibe tus productos en tiempo récord con nuestro servicio de envío garantizado.",
  },
  {
    icon: Headphones,
    title: "Soporte y Asesoría Experta",
    description: "Nuestro equipo de especialistas te guía en cada paso de tu proyecto.",
  },
  {
    icon: Tag,
    title: "Precios Competitivos",
    description: "Los mejores precios del mercado con ofertas exclusivas para nuestros clientes.",
  },
  {
    icon: CreditCard,
    title: "Opciones de Pago Flexibles",
    description: "Múltiples formas de pago y financiamiento para tu comodidad.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-3 md:mb-4">
            ¿Por qué comprar en <span className="text-primary">Ferrot</span>?
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Más que una ferretería, somos tu aliado para hacer realidad tus proyectos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-background rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-base md:text-lg font-heading font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
