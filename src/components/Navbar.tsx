import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-mar-de-becas.png";

const navLinks = [
  { href: "#inicio", key: "inicio" },
  { href: "#nosotros", key: "nosotros" },
  { href: "#servicios", key: "servicios" },
  { href: "https://becariodelmudno.netlify.app/", key: "curso", external: true },
  { href: "#testimonios", key: "testimonios" },
  { href: "#noticias", key: "noticias" },
];

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    void i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Mar de Becas"
              className="h-14 w-auto object-contain"
            />
            <span
              className={`font-bold text-xl transition-colors ${
                isScrolled ? "text-foreground" : "text-white drop-shadow-sm"
              }`}
            >
              Mar de Becas
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
            <button
              type="button"
              onClick={toggleLanguage}
              className={`rounded-full border px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                isScrolled
                  ? "border-border bg-card text-foreground hover:border-primary"
                  : "border-white/40 bg-white/10 text-white hover:border-white"
              }`}
            >
              {t("language.label")}
            </button>
            <a href="#contacto">
              <Button variant={isScrolled ? "default" : "hero"} size="sm">
                {t("nav.contacto")}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-card shadow-xl animate-fade-in">
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-foreground font-medium py-2 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                className="rounded-full border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition hover:border-primary"
              >
                {t("language.label")}
              </button>
              <a href="#contacto" onClick={() => setIsOpen(false)}>
                <Button variant="default" className="mt-4 w-full">
                  {t("nav.contacto")}
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
