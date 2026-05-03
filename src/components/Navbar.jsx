import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl border-b border-stone-200/50 dark:border-stone-800/50 shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-container-max mx-auto">
        <a href="#home" className="text-2xl font-black text-primary font-h1">
          SipScene Café
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-on-surface-variant font-medium hover:text-primary transition-colors font-body-md hover:bg-surface-container-highest rounded-lg px-3 py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button className="bg-primary text-on-primary font-label-sm px-6 py-3 rounded-full hover:opacity-90 active:scale-[0.98] transition-all hidden md:block shadow-soft">
          Order Now
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-stone-900 border-b border-stone-200 shadow-soft">
          <nav className="flex flex-col items-center py-6 gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-on-surface-variant hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-primary text-on-primary font-label-sm px-8 py-3 rounded-full w-3/4 max-w-xs mt-2 shadow-soft">
              Order Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
