import brandsImage from "@/assets/brands-ferrot.png";

const BrandsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
            Calidad Garantizada
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            Marcas de <span className="text-primary">Nuestros Productos</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto px-2">
            Trabajamos con las mejores marcas nacionales e internacionales para garantizar 
            la calidad de todos nuestros productos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8 overflow-hidden">
            <img 
              src={brandsImage} 
              alt="Marcas de productos Ferrot - Bticino, Stanley, Bosch, DeWalt, Philips, 3M, Sika, Pavco, Yale, Rotoplas y más" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
