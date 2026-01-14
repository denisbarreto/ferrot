import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, FileText } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead captured:", formData);
    alert("¡Gracias! Un asesor se pondrá en contacto contigo pronto.");
    setFormData({ name: "", phone: "", email: "" });
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
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
              <Button variant="hero" size="lg" className="group text-sm md:text-base">
                Cotiza Ahora
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="lg" className="text-sm md:text-base">
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

          {/* Right Content - Lead Form */}
          <div className="animate-slide-in-right mt-6 lg:mt-0" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl max-w-sm sm:max-w-md mx-auto lg:ml-auto">
              <div className="text-center mb-4 md:mb-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-ferrot-black mb-1 md:mb-2">
                  Cotización Rápida
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
                  Déjanos tus datos y te contactamos
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-10 md:h-12 border-2 border-muted focus:border-primary text-sm md:text-base"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Tu teléfono"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-10 md:h-12 border-2 border-muted focus:border-primary text-sm md:text-base"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Tu correo electrónico"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-10 md:h-12 border-2 border-muted focus:border-primary text-sm md:text-base"
                    required
                  />
                </div>
                <Button type="submit" variant="cta" size="lg" className="w-full text-sm md:text-base h-10 md:h-12">
                  Quiero mi Cotización
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </form>

              <p className="text-center text-[10px] md:text-xs text-muted-foreground mt-3 md:mt-4">
                Al enviar, aceptas nuestros términos y condiciones
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
