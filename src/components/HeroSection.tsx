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
    // Here you would typically send this to your backend
    alert("¡Gracias! Un asesor se pondrá en contacto contigo pronto.");
    setFormData({ name: "", phone: "", email: "" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-ferrot-black/85" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/40 rounded-full mb-6">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Ferretería Digital #1 en México
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight mb-6">
              Todo en Ferretería y Materiales para{" "}
              <span className="text-primary">tus Proyectos</span>
            </h1>

            <p className="text-xl text-white/70 mb-8 max-w-xl">
              Entrega rápida, asesoría técnica y precios competitivos. 
              Tu proyecto es nuestra prioridad.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button variant="hero" size="xl" className="group">
                Cotiza Ahora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl">
                <FileText className="w-5 h-5" />
                Catálogo de Productos
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                +10,000 clientes satisfechos
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                Envío a todo México
              </div>
            </div>
          </div>

          {/* Right Content - Lead Form */}
          <div className="animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md mx-auto lg:ml-auto">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-bold text-ferrot-black mb-2">
                  Cotización Rápida
                </h3>
                <p className="text-muted-foreground">
                  Déjanos tus datos y te contactamos en minutos
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 border-2 border-muted focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Tu teléfono"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 border-2 border-muted focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Tu correo electrónico"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 border-2 border-muted focus:border-primary"
                    required
                  />
                </div>
                <Button type="submit" variant="cta" size="xl" className="w-full">
                  Quiero mi Cotización
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>

              <p className="text-center text-xs text-muted-foreground mt-4">
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
