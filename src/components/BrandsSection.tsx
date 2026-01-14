import logo3m from "@/assets/brands/3m.svg";
import logoBlackDecker from "@/assets/brands/blackdecker.svg";
import logoBosch from "@/assets/brands/bosch.svg";
import logoEnergizer from "@/assets/brands/energizer.svg";
import logoGe from "@/assets/brands/ge.svg";
import logoPhilips from "@/assets/brands/philips.svg";
import logoStanley from "@/assets/brands/stanley.svg";

// Marcas con logos
const brandsWithLogos = [
  { name: "Stanley", logo: logoStanley },
  { name: "Bosch", logo: logoBosch },
  { name: "Black & Decker", logo: logoBlackDecker },
  { name: "Philips", logo: logoPhilips },
  { name: "3M", logo: logo3m },
  { name: "GE", logo: logoGe },
  { name: "Energizer", logo: logoEnergizer },
];

// Marcas adicionales sin logo (texto estilizado)
const additionalBrands = [
  "DeWalt", "Bticino", "Bahco", "Sika", "Chema", "Pavco", "Rotoplas", 
  "Vainsa", "Celima", "Yale", "Cantol", "Forte", "Tekno", "CPP", 
  "American Colors", "Duracell", "Pirámide", "Abralit"
];

const BrandsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
            Calidad Garantizada
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-3 md:mb-4">
            Marcas de <span className="text-primary">Nuestros Productos</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Trabajamos con las mejores marcas nacionales e internacionales
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Logos principales */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 md:gap-6 mb-8 md:mb-12">
            {brandsWithLogos.map((brand) => (
              <div
                key={brand.name}
                className="bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center aspect-square"
              >
                <img
                  src={brand.logo}
                  alt={`Logo ${brand.name}`}
                  className="w-full h-full object-contain max-h-12 md:max-h-16 filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* Marcas adicionales en texto */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <p className="text-center text-xs md:text-sm text-muted-foreground mb-4 uppercase tracking-wider font-medium">
              Y muchas más marcas de calidad
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:gap-x-6 md:gap-y-3">
              {additionalBrands.map((brand) => (
                <span
                  key={brand}
                  className="text-sm md:text-base lg:text-lg font-heading font-bold text-foreground/70 hover:text-primary transition-colors cursor-default"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
