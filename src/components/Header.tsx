import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoFerrot from "@/assets/logo-ferrot.jpg";

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-secondary/20 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center">
            <img 
              src={logoFerrot} 
              alt="Ferrot E.I.R.L. - Ferretería Digital" 
              className="h-14 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-secondary hover:text-primary font-medium transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+5119876543" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(01) 987 6543</span>
            </a>
            <Button variant="cta" size="lg">
              Solicita tu Cotización
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-secondary p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-secondary/10 animate-fade-in bg-white">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 text-secondary hover:text-primary font-medium transition-colors text-sm uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-secondary/10">
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
