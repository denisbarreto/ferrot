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
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            ¿Por qué comprar en <span className="text-primary">Ferrot</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Más que una ferretería, somos tu aliado para hacer realidad tus proyectos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
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
