import { CheckCircle, Building2, MoreHorizontal } from "lucide-react";

// Client logos
import logoBetz from "@/assets/clients/betz.png";
import logoClubPetroperu from "@/assets/clients/club-petroperu.png";
import logoSP from "@/assets/clients/sp.png";
import logoYMSA from "@/assets/clients/ymsa.png";
import logoIGP from "@/assets/clients/igp.png";
import logoCongreso from "@/assets/clients/congreso.png";

const features = [
  "Empresa 100% peruana desde 2008",
  "Amplio stock de materiales y productos",
  "Atención rápida y eficiente",
  "Línea de créditos con principales proveedores",
  "Clientes institucionales satisfechos",
  "Vendedores especializados",
];

const clientsWithLogos = [
  { name: "Betz", logo: logoBetz },
  { name: "Club Petroperú", logo: logoClubPetroperu },
  { name: "S&P", logo: logoSP },
  { name: "YMSA Constructora", logo: logoYMSA },
  { name: "Instituto Geofísico del Perú", logo: logoIGP },
  { name: "Congreso de la República", logo: logoCongreso },
];

const additionalClients = [
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
    <section id="nosotros" className="py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
              Quiénes Somos
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4 md:mb-6 px-2">
              ¿Por qué elegir <span className="text-primary">Ferrot</span>?
            </h2>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto px-2">
              <strong>FERROT E.I.R.L.</strong> es una empresa 100% peruana, creada desde el año 2008 
              con una objetividad de venta y servicio final. Actualmente nos desarrollamos dentro de los 
              estándares de calidad y eficiencia, siendo nuestro principal objetivo la entera satisfacción 
              de las necesidades de nuestro cliente.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-12 md:mb-16">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="flex items-center gap-3 bg-background p-3 md:p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium text-sm md:text-base text-left">{feature}</span>
              </div>
            ))}
          </div>

          {/* Clients Section */}
          <div className="bg-background rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
              <Building2 className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                Nuestros Clientes
              </h3>
            </div>
            <p className="text-center text-muted-foreground text-sm md:text-base mb-6 md:mb-8 px-2">
              Contamos con una amplia y generosa cartera de clientes satisfechos entre los que se 
              encuentran empresas privadas e instituciones del Estado.
            </p>

            {/* Client Logos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6 mb-6 md:mb-8">
              {clientsWithLogos.map((client) => (
                <div
                  key={client.name}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex items-center justify-center aspect-square"
                >
                  <img
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    className="w-full h-full object-contain max-h-16 md:max-h-20"
                  />
                </div>
              ))}
              {/* "Y más" card */}
              <div className="bg-primary/10 rounded-xl p-4 shadow-sm flex flex-col items-center justify-center aspect-square">
                <MoreHorizontal className="w-8 h-8 text-primary mb-2" />
                <span className="text-primary font-bold text-sm">Y más...</span>
              </div>
            </div>

            {/* Additional Clients as Tags */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {additionalClients.map((client) => (
                <span
                  key={client}
                  className="px-3 md:px-4 py-1.5 md:py-2 bg-muted rounded-full text-xs md:text-sm font-medium text-foreground hover:bg-primary hover:text-white transition-colors cursor-default"
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
