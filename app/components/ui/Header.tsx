import { Pill, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Row */}
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-primary p-2 rounded-lg flex items-center justify-center">
              <Pill className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
            </div>

            <span className="text-lg sm:text-xl font-semibold whitespace-nowrap">
              MediCare Plus
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm xl:text-base">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-primary transition-colors"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("products")}
              className="hover:text-primary transition-colors"
            >
              Products
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-accent transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-4 pt-4 pb-6 border-t border-border">

            <button
              onClick={() => scrollToSection("home")}
              className="text-left py-2 hover:text-primary transition-colors"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("products")}
              className="text-left py-2 hover:text-primary transition-colors"
            >
              Products
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-left py-2 hover:text-primary transition-colors"
            >
              Contact
            </button>

          </nav>
        </div>
      </div>
    </header>
  );
}