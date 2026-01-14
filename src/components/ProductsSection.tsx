import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import productTools from "@/assets/product-tools.jpg";
import productFasteners from "@/assets/product-fasteners.jpg";
import productElectrical from "@/assets/product-electrical.jpg";
import productConstruction from "@/assets/product-construction.jpg";
import productGarden from "@/assets/product-garden.jpg";

const products = [
  {
    name: "Materiales de Construcción",
    description: "Cemento, arena, bloques, fierros y todo lo que necesitas para tu obra.",
    image: productConstruction,
    category: "Construcción",
  },
  {
    name: "Material Eléctrico",
    description: "Cables, interruptores, tomacorrientes y paneles. Marcas: Bticino, Philips, GE.",
    image: productElectrical,
    category: "Eléctricos",
  },
  {
    name: "Gasfitería y Sanitarios",
    description: "Tuberías, conexiones, griferías y sanitarios. Marcas: Pavco, Vainsa, Rotoplas.",
    image: productFasteners,
    category: "Gasfitería",
  },
  {
    name: "Herramientas Profesionales",
    description: "Taladros, sierras, rotomartillos. Marcas: DeWalt, Stanley, Bosch, Bahco.",
    image: productTools,
    category: "Herramientas",
  },
  {
    name: "Pinturas y Acabados",
    description: "Pinturas, brochas, rodillos y accesorios. Marcas: Tekno, CPP, American Colors.",
    image: productGarden,
    category: "Pinturas",
  },
];

const ProductsSection = () => {
  return (
    <section id="productos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Catálogo
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            Productos Destacados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encuentra todo lo que necesitas para tus proyectos de construcción y mejoras del hogar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500 ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 ? "h-96 lg:h-full" : "h-64"}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ferrot-black/90 via-ferrot-black/40 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="inline-block px-3 py-1 bg-primary/90 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                  {product.category}
                </span>
                <h3 className={`font-heading font-bold mb-2 ${index === 0 ? "text-2xl" : "text-xl"}`}>
                  {product.name}
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  {product.description}
                </p>
                <Button variant="heroOutline" size="sm" className="group/btn">
                  Ver más
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
