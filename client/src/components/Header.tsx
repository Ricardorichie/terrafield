import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Leaf, Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { href: "home", label: "Home" },
    { href: "about", label: "About Us" },
    { href: "farms", label: "Our Farms" },
    { href: "services", label: "Processing" },
    { href: "export", label: "Export" },
    { href: "products", label: "Marketplace" },
    { href: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <Leaf className="text-terra-green text-2xl" />
            <span className="text-xl font-bold terra-deep">TerraField Farms</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="terra-gray hover:terra-green transition-colors duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-terra-gold hover:bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
              onClick={() => scrollToSection("products")}
            >
              Shop Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden terra-gray hover:terra-green"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="terra-gray hover:terra-green transition-colors duration-200 font-medium text-left"
                >
                  {link.label}
                </button>
              ))}
              <Button
                className="bg-terra-gold hover:bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 w-fit"
                onClick={() => scrollToSection("products")}
              >
                Shop Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
