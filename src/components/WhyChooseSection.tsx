import { CheckCircle, Award, Building2, Users } from "lucide-react";

const features = [
  "Empresa 100% peruana desde 2008",
  "Amplio stock de materiales y productos",
  "Atención rápida y eficiente",
  "Línea de créditos con principales proveedores",
  "Clientes institucionales satisfechos",
  "Vendedores especializados",
];

const clients = [
  "Scotiabank",
  "OSCE",
  "Ministerio de Energía y Minas",
  "Ministerio de Transporte",
  "Constructora Titan",
  "Programa JUNTOS",
  "Hospital de Emergencias Pediátricas",
  "Clínica Stella Maris",
  "Clínica Limatambo",
  "Aldeas Infantiles S.O.S",
];

const WhyChooseSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Quiénes Somos
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
              ¿Por qué elegir <span className="text-primary">Ferrot</span>?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              <strong>FERROT E.I.R.L.</strong> es una empresa 100% peruana, creada desde el año 2008 
              con una objetividad de venta y servicio final. Actualmente nos desarrollamos dentro de los 
              estándares de calidad y eficiencia, siendo nuestro principal objetivo la entera satisfacción 
              de las necesidades de nuestro cliente.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
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

          {/* Clients Section */}
          <div className="bg-background rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Building2 className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-heading font-bold text-foreground">
                Nuestros Clientes
              </h3>
            </div>
            <p className="text-center text-muted-foreground mb-8">
              Contamos con una amplia y generosa cartera de clientes satisfechos entre los que se 
              encuentran empresas privadas e instituciones del Estado.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {clients.map((client) => (
                <span
                  key={client}
                  className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-white transition-colors cursor-default"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
