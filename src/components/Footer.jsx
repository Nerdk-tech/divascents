import { Link } from "react-router-dom";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { WHATSAPP_NUMBER, CALL_NUMBER, EMAIL, getWhatsAppLink } from "../lib/products";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="font-heading text-3xl font-bold mb-4">Diva<span className="text-secondary">Scents</span></h3>
            <p className="text-primary-foreground/70 font-body text-sm leading-relaxed max-w-md">
              Premium fragrances curated for the bold, the elegant, and the unforgettable. Based in Edo State, Nigeria — delivering luxury scents nationwide.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-lg mb-4">Explore</h4>
            <div className="space-y-2">
              {[{to:"/",l:"Home"},{to:"/shop",l:"Shop"},{to:"/about",l:"Our Story"},{to:"/contact",l:"Contact"}].map(x => (
                <Link key={x.to} to={x.to} className="block text-sm text-primary-foreground/70 hover:text-secondary transition-colors">{x.l}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading text-lg mb-4">Reach Us</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <a href={getWhatsAppLink("Hello Diva Scents!")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a href={`tel:${CALL_NUMBER}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="w-4 h-4" /> {CALL_NUMBER}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail className="w-4 h-4" /> {EMAIL}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Edo State, Nigeria
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Diva Scents. All rights reserved.
        </div>
      </div>
    </footer>
  );
}