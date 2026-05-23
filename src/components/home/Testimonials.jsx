import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "../../lib/products";

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="text-secondary text-sm tracking-[0.2em] uppercase font-medium">Testimonials</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mt-2" style={{ letterSpacing: "-0.02em" }}>
            What Our Divas Say
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />)}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.text}"</p>
              <div className="mt-5 pt-4 border-t border-border">
                <div className="font-heading font-semibold text-primary">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}