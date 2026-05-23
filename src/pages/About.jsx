import { motion } from "framer-motion";
import { Heart, Shield, Sparkles, Crown } from "lucide-react";

const values = [
  { icon: Crown, title: "Premium Quality", text: "Every fragrance is handpicked from trusted international brands, ensuring lasting scent and genuine ingredients." },
  { icon: Heart, title: "Affordable Luxury", text: "We believe smelling extraordinary shouldn't cost a fortune. Our prices make luxury accessible to everyone." },
  { icon: Shield, title: "Trust & Authenticity", text: "100% authentic products. No imitations, no compromises. What you order is exactly what you receive." },
  { icon: Sparkles, title: "Confidence in a Bottle", text: "We don't just sell fragrances — we sell the feeling of walking into a room and owning it completely." },
];

export default function About() {
  return (
    <div className="pt-28 pb-24">
      {/* Hero */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-secondary text-sm tracking-[0.2em] uppercase font-medium">Our Story</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary mt-3 leading-tight" style={{ letterSpacing: "-0.02em" }}>
              The Scent of<br /><span className="text-secondary italic">Sovereignty</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Diva Scents was born in the vibrant heart of <strong className="text-primary">Edo State, Nigeria</strong> — a land known for its rich cultural heritage and unapologetic confidence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We started with a simple mission: to make premium, long-lasting fragrances accessible to every Nigerian who believes in the power of a good scent. No overpriced markup, no gatekeeping — just pure, authentic luxury.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From our carefully curated perfume collection to our playful kids range, every product is selected with one question in mind: <em className="text-primary font-medium">"Would a Diva wear this?"</em>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If the answer isn't a resounding yes, it doesn't make the cut.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-3xl overflow-hidden"
          >
            <img
              src="https://media.base44.com/images/public/user_69ef9664f23bb85e6c7f98b2/36ce8a0ea_WhatsAppImage2026-05-21at0812032.jpeg"
              alt="Diva Scents products"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-24 bg-primary">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground text-center mb-16" style={{ letterSpacing: "-0.02em" }}>
            What We <span className="text-secondary italic">Stand For</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary/20 mb-5">
                  <v.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-primary-foreground/60 leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}