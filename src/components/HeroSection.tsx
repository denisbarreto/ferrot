import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center py-24 md:py-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-ferrot-black/85" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto lg:mx-0">
          {/* Content */}
          <div className="text-white animate-fade-in-up text-center lg:text-left">
            <div className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-primary/20 border border-primary/40 rounded-full mb-4 md:mb-6">
              <span className="text-primary text-xs md:text-sm font-semibold uppercase tracking-wider">
                Desde 2008 al servicio del Perú
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-black leading-tight mb-4 md:mb-6">
              Todo lo que necesitas...{" "}
              <span className="text-primary block sm:inline">¡Nosotros lo tenemos!</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
              Materiales de construcción, eléctricos, gasfitería, pintura, cerámicos y sanitarios. 
              Calidad y eficiencia para la satisfacción de nuestros clientes.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group text-sm md:text-base" onClick={scrollToContact}>
                Cotiza Ahora
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="heroOutline" 
                size="lg" 
                className="text-sm md:text-base"
                onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <FileText className="w-4 h-4 md:w-5 md:h-5" />
                Catálogo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 md:gap-6 text-xs md:text-sm text-white/60 justify-center lg:justify-start">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                +16 años de experiencia
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                Clientes institucionales
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                Amplio stock
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
