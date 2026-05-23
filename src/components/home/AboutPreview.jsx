import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="py-24 px-6 bg-primary">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden">
            <img
              src="https://media.base44.com/images/public/user_69ef9664f23bb85e6c7f98b2/1ccf14758_WhatsAppImage2026-05-21at081202.jpeg"
              alt="Diva Scents collection"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-secondary text-sm tracking-[0.2em] uppercase font-medium">Our Story</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-3 leading-tight" style={{ letterSpacing: "-0.02em" }}>
            Born in Edo,<br />Made for <span className="text-secondary italic">Royalty</span>
          </h2>
          <p className="mt-6 text-primary-foreground/70 leading-relaxed">
            Diva Scents was born from a simple belief: everyone deserves to smell extraordinary without breaking the bank. From the heart of Edo State, we curate premium fragrances that blend international quality with Nigerian confidence.
          </p>
          <p className="mt-4 text-primary-foreground/70 leading-relaxed">
            Every bottle we offer is handpicked for its longevity, uniqueness, and that unmistakable "heads will turn" effect.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 mt-8 text-secondary font-medium text-sm hover:gap-3 transition-all group">
            Read Our Full Story <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}