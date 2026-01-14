const brands = [
  { name: "Bticino", category: "Eléctricos" },
  { name: "Philips", category: "Eléctricos" },
  { name: "GE", category: "Eléctricos" },
  { name: "3M", category: "Industrial" },
  { name: "Stanley", category: "Herramientas" },
  { name: "Black & Decker", category: "Herramientas" },
  { name: "Bosch", category: "Herramientas" },
  { name: "DeWalt", category: "Herramientas" },
  { name: "Bahco", category: "Herramientas" },
  { name: "Sika", category: "Construcción" },
  { name: "Chema", category: "Construcción" },
  { name: "Pavco", category: "Gasfitería" },
  { name: "Rotoplas", category: "Gasfitería" },
  { name: "Vainsa", category: "Sanitarios" },
  { name: "Celima", category: "Cerámicos" },
  { name: "Pirámide", category: "Construcción" },
  { name: "Yale", category: "Seguridad" },
  { name: "Cantol", category: "Seguridad" },
  { name: "Forte", category: "Seguridad" },
  { name: "Tekno", category: "Pinturas" },
  { name: "CPP", category: "Pinturas" },
  { name: "American Colors", category: "Pinturas" },
  { name: "Duracell", category: "Eléctricos" },
  { name: "Energizer", category: "Eléctricos" },
  { name: "Brochas Tumi", category: "Pinturas" },
  { name: "Brochas Águila", category: "Pinturas" },
  { name: "Stretto", category: "Accesorios" },
  { name: "Abralit", category: "Industrial" },
];

const BrandsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
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

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="bg-white rounded-xl p-3 md:p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center group"
              >
                <p className="font-heading font-bold text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
                  {brand.name}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {brand.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
