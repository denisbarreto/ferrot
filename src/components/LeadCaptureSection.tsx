import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const LeadCaptureSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead captured:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", interest: "" });
    }, 3000);
  };

  return (
    <section id="contacto" className="py-20 bg-dark-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                  ¿Quieres los mejores precios y asesoría gratuita?
                </h2>
                <p className="text-white/70 text-lg">
                  Déjanos tus datos y uno de nuestros asesores te contactará
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    ¡Gracias por contactarnos!
                  </h3>
                  <p className="text-white/70">
                    Un asesor se pondrá en contacto contigo pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      type="text"
                      placeholder="Nombre completo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-14 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Correo electrónico"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-14 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
                      required
                    />
                    <Input
                      type="tel"
                      placeholder="Teléfono"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-14 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
                      required
                    />
                    <Input
                      type="text"
                      placeholder="¿En qué producto estás interesado?"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="h-14 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
                    />
                  </div>
                  <div className="text-center">
                    <Button type="submit" variant="cta" size="xl" className="min-w-64">
                      Quiero una Asesoría
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
