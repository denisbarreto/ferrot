import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import logoFerrot from "@/assets/logo-ferrot-transparent.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ferrot-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src={logoFerrot} 
                alt="Ferrot E.I.R.L." 
                className="h-14 w-auto brightness-110 drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]"
                width={56}
                height={56}
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-white/60 mb-4">
              <strong className="text-white">RUC: 20492571718</strong>
            </p>
            <p className="text-white/60 mb-6">
              Empresa 100% peruana desde 2008. Materiales de construcción, 
              eléctricos, gasfitería, pintura, cerámicos y sanitarios.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {["Inicio", "Productos", "Promociones", "Nosotros", "Contacto"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/60">Teléfono Fijo</p>
                  <a href="tel:+5114717618" className="hover:text-primary transition-colors">
                    (01) 471-7618
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/60">Correo</p>
                  <a href="mailto:ventas@ferrot.pe" className="hover:text-primary transition-colors">
                    ventas@ferrot.pe
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/60">Tienda</p>
                  <a 
                    href="https://maps.app.goo.gl/6op3tShS8JqqsMy58" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    Av. José Leal 1077, Lince, Lima
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">
          <p>© {currentYear} Ferrot. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
