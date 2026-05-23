import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/user_69ef9664f23bb85e6c7f98b2/dd94747ef_WhatsAppImage2026-05-21at081203.jpeg"
          alt="Luxury fragrances"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-secondary font-body text-sm tracking-[0.3em] uppercase mb-6">
              Premium Nigerian Fragrances
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[0.95] tracking-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Smell Like<br />
            <span className="text-secondary italic">a Diva</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 text-primary-foreground/70 text-lg leading-relaxed max-w-md"
          >
            Curated luxury fragrances from Edo State. Bold scents for bold souls — no compromises, only compliments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link to="/shop"
              className="inline-flex items-center gap-2 bg-secondary text-primary px-8 py-4 font-medium text-sm rounded-full hover:bg-secondary/90 transition-all duration-300 group">
              Explore Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact"
              className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 font-medium text-sm rounded-full hover:bg-primary-foreground/10 transition-all duration-300">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-primary-foreground/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-secondary to-transparent" />
      </motion.div>
    </section>
  );
}