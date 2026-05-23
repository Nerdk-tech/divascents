import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppLink } from "../lib/products";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-heading text-2xl tracking-tight font-bold text-primary">
          Diva<span className="text-secondary">Scents</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.to} to={l.to} className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-secondary ${location.pathname === l.to ? "text-secondary" : "text-primary"}`}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <a href={getWhatsAppLink("Hello Diva Scents, I'd like to book a scent consultation.")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium rounded-full hover:bg-secondary hover:text-primary transition-all duration-300">
            <MessageCircle className="w-4 h-4" /> Scent Consultation
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-primary">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-t border-border px-6 pb-6 pt-2">
            {links.map(l => (
              <Link key={l.to} to={l.to} className="block py-3 text-sm font-medium uppercase tracking-wide text-primary hover:text-secondary border-b border-border/50">
                {l.label}
              </Link>
            ))}
            <a href={getWhatsAppLink("Hello Diva Scents!")} target="_blank" rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 text-sm font-medium rounded-full">
              <MessageCircle className="w-4 h-4" /> Scent Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}