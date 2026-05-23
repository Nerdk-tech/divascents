import { useState } from "react";
import { motion } from "framer-motion";
import { products, categories } from "../lib/products";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter(p => p.category === active);

  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14">
          <span className="text-secondary text-sm tracking-[0.2em] uppercase font-medium">The Collection</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary mt-2" style={{ letterSpacing: "-0.02em" }}>
            Our Fragrances
          </h1>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === c
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-secondary/20"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">No products in this category yet.</div>
        )}
      </div>
    </div>
  );
}