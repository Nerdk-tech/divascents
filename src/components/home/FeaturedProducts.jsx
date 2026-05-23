import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../../lib/products";
import ProductCard from "../ProductCard";

export default function FeaturedProducts() {
  const featured = products.filter(p => p.featured);

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14"
        >
          <div>
            <span className="text-secondary text-sm tracking-[0.2em] uppercase font-medium">Curated for You</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mt-2" style={{ letterSpacing: "-0.02em" }}>
              Featured Scents
            </h2>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors group">
            View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}