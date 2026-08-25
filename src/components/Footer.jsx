import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const LinkedinIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const quickLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/services", label: "Services" },
  { path: "/news", label: "News" },
  { path: "/contact", label: "Contact Us" },
];

const serviceLinks = [
  { path: "/services", label: "Road Freight" },
  { path: "/services", label: "Air Freight" },
  { path: "/services", label: "Sea Freight" },
  { path: "/services", label: "Warehousing" },
  { path: "/services", label: "Customs Clearance" },
  { path: "/services", label: "Express Delivery" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-5">
              {/* <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-navy-900 font-extrabold text-lg leading-none">S</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-extrabold text-white tracking-tight">SKYHAUL</span>
                <span className="text-[10px] font-medium text-navy-300 tracking-widest uppercase -mt-0.5">Logistics</span>
              </div> */}
              <img
                src={`${import.meta.env.BASE_URL}images/logo-white.png`}
                alt="skyhaul"
                className="h-10 sm:h-12 w-auto"
              />
            </Link>
            <p className="text-navy-300 text-sm leading-relaxed mb-6 max-w-xs">
              Premium logistics and freight solutions connecting the UK to the
              world. Trusted by businesses for reliable, efficient, and safe
              cargo transportation.
            </p>
            <div className="flex gap-3">
              {[LinkedinIcon, TwitterIcon, FacebookIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-skyblue text-white hover:bg-white flex items-center justify-center text-navy-300 hover:text-navy-900 transition-all duration-200"
                  aria-label="Social media link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-navy-300 hover:text-gold-400 text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-navy-300 hover:text-gold-400 text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-white mt-0.5 shrink-0" />
                <span className="text-navy-300 text-sm">
                  123 Logistics House, Freight Lane,
                  <br />
                  London, EC2A 4BX, United Kingdom
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-white shrink-0" />
                <a
                  href="tel:+441234567890"
                  className="text-navy-300 hover:text-gold-400 text-sm transition-colors"
                >
                  +44 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-white shrink-0" />
                <a
                  href="mailto:info@skyhaul.co.uk"
                  className="text-navy-300 hover:text-gold-400 text-sm transition-colors"
                >
                  info@skyhaul.co.uk
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                Newsletter
              </h4>
              <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-navy-800 border border-navy-700 rounded-lg sm:rounded-r-none text-sm text-white placeholder-navy-400 focus:outline-none focus:border-gold-400 transition-colors"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gold-400 hover:bg-gold-500 text-navy-900 text-sm font-bold rounded-lg sm:rounded-l-none transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-navy-400 text-xs">
            &copy; 2026 Skyhaul Logistics. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-navy-400 hover:text-navy-200 text-xs transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-navy-400 hover:text-navy-200 text-xs transition-colors"
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
