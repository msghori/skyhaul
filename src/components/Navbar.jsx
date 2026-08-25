import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/services", label: "Services" },
  { path: "/news", label: "News" },
  { path: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-white py-3 sm:py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}images/logo-new.png`}
            alt="skyhaul"
            className="w-[100px] md:w-[150px]  h-auto"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                location.pathname === link.path
                  ? "text-navy-900 bg-navy-50"
                  : "text-navy-600 hover:text-navy-900 hover:bg-navy-50/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+441234567890"
            className="flex items-center gap-2 text-sm text-navy-600 hover:text-navy-900 transition-colors"
          >
            <Phone size={16} />
            <span className="font-medium">+44 123 456 7890</span>
          </a>
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-gold-400 hover:bg-gold-500 text-navy-900 text-sm font-bold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-gold-400/25 active:scale-[0.97]"
          >
            Get a Quote
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
          <Link
            to="/contact"
            className="px-3 sm:px-4 py-2 bg-gold-400 text-navy-900 text-xs font-bold rounded-lg"
          >
            Get a Quote
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-navy-900 hover:bg-navy-50 rounded-lg transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden fixed left-0 right-0 bottom-0 bg-white z-40 transition-all duration-300 overflow-y-auto ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          top: headerRef.current
            ? `${headerRef.current.offsetHeight}px`
            : "64px",
        }}
      >
        <div className="flex flex-col p-4 sm:p-6 gap-1 bg-white min-h-full shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-3 rounded-lg text-base font-semibold transition-all ${
                location.pathname === link.path
                  ? "text-navy-900 bg-navy-50"
                  : "text-navy-600 hover:text-navy-900 hover:bg-navy-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+441234567890"
            className="flex items-center gap-3 px-4 py-3 text-navy-600 font-medium"
          >
            <Phone size={18} />
            +44 123 456 7890
          </a>
        </div>
      </div>
    </header>
  );
}
