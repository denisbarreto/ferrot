import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Productos", href: "#productos" },
    { label: "Promociones", href: "#promociones" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ferrot-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-heading font-bold text-xl">F</span>
            </div>
            <span className="text-white font-heading font-bold text-2xl tracking-tight">
              Ferrot
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/80 hover:text-primary font-medium transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+5119876543" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(01) 987 6543</span>
            </a>
            <Button variant="cta" size="lg">
              Solicita tu Cotización
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-white/10 animate-fade-in">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 text-white/80 hover:text-primary font-medium transition-colors text-sm uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-white/10">
              <Button variant="cta" size="lg" className="w-full">
                Solicita tu Cotización
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
