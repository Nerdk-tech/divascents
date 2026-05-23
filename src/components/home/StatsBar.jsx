import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "50+", label: "Premium Scents" },
  { value: "Edo", label: "State, Nigeria" },
  { value: "24/7", label: "WhatsApp Support" },
];

export default function StatsBar() {
  return (
    <section className="bg-secondary/10 border-y border-secondary/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}