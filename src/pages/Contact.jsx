import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, MapPin, Send } from "lucide-react";
import { WHATSAPP_NUMBER, CALL_NUMBER, EMAIL, getWhatsAppLink } from "../lib/products";

const occasions = ["A Wedding", "Daily Power", "A Gift", "Date Night", "Office Wear", "Other"];
const notePrefs = ["Floral", "Oud/Woody", "Fresh/Citrus", "Sweet/Vanilla", "Spicy/Oriental"];

export default function Contact() {
  const [name, setName] = useState("");
  const [occasion, setOccasion] = useState("");
  const [notes, setNotes] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let waMsg = `Hello Diva Scents! My name is ${name}.`;
    if (occasion) waMsg += ` I'm looking for a scent for ${occasion}.`;
    if (notes) waMsg += ` I prefer ${notes} notes.`;
    if (message) waMsg += ` ${message}`;
    waMsg += " Can you assist me?";
    window.open(getWhatsAppLink(waMsg), "_blank");
  };

  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-secondary text-sm tracking-[0.2em] uppercase font-medium">Get in Touch</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary mt-2" style={{ letterSpacing: "-0.02em" }}>
            Let's Find Your<br /><span className="text-secondary italic">Signature Scent</span>
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mt-16">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              We're WhatsApp-first because we believe luxury service should feel personal. Reach out and one of our scent consultants will guide you to the perfect fragrance.
            </p>

            <div className="space-y-5">
              <a href={getWhatsAppLink("Hello Diva Scents! I'd like to inquire about your fragrances.")} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-muted hover:bg-secondary/10 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-medium text-primary group-hover:text-secondary transition-colors">WhatsApp</div>
                  <div className="text-sm text-muted-foreground">0905 248 0595</div>
                </div>
              </a>

              <a href={`tel:${CALL_NUMBER}`} className="flex items-center gap-4 p-4 rounded-2xl bg-muted hover:bg-secondary/10 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-medium text-primary group-hover:text-secondary transition-colors">Call Us</div>
                  <div className="text-sm text-muted-foreground">0811 133 3242</div>
                </div>
              </a>

              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 p-4 rounded-2xl bg-muted hover:bg-secondary/10 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-medium text-primary group-hover:text-secondary transition-colors">Email</div>
                  <div className="text-sm text-muted-foreground">{EMAIL}</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-medium text-primary">Location</div>
                  <div className="text-sm text-muted-foreground">Edo State, Nigeria</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Message Studio Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border rounded-3xl p-8 space-y-6"
          >
            <h3 className="font-heading text-xl font-semibold text-primary">Message Studio</h3>
            <p className="text-sm text-muted-foreground">Tell us what you're looking for and we'll respond on WhatsApp.</p>

            <div>
              <label className="text-sm font-medium text-primary mb-1.5 block">Your Name</label>
              <input value={name} onChange={e => setName(e.target.value)} required placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-primary placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" />
            </div>

            <div>
              <label className="text-sm font-medium text-primary mb-1.5 block">I'm looking for a scent for...</label>
              <select value={occasion} onChange={e => setOccasion(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-primary focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all">
                <option value="">Select occasion</option>
                {occasions.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-primary mb-1.5 block">I prefer notes of...</label>
              <select value={notes} onChange={e => setNotes(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-primary focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all">
                <option value="">Select preference</option>
                {notePrefs.map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-primary mb-1.5 block">Additional Message</label>
              <textarea value={message} onChange={e => setMessage(e.target.value)} rows={3} placeholder="Tell us more..."
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-primary placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none" />
            </div>

            <button type="submit"
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-full font-medium hover:bg-secondary hover:text-primary transition-all duration-300">
              <Send className="w-4 h-4" /> Send via WhatsApp
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}