import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, Sparkles } from "lucide-react";
import { products, getWhatsAppLink } from "../lib/products";

function IntensityBar({ level }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Intensity</span>
        <span className="font-medium text-primary">{level}/10</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level * 10}%` }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-full rounded-full bg-gradient-to-r from-secondary/60 via-secondary to-accent"
        />
      </div>
    </div>
  );
}

function NoteColumn({ label, notes, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="text-center"
    >
      <div className="text-xs text-secondary uppercase tracking-[0.2em] font-medium mb-3">{label}</div>
      <div className="space-y-2">
        {notes.map(n => (
          <div key={n} className="bg-muted rounded-full px-4 py-2 text-sm text-primary font-medium">{n}</div>
        ))}
      </div>
    </motion.div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="pt-28 pb-24 px-6 text-center">
        <h1 className="font-heading text-3xl text-primary">Product not found</h1>
        <Link to="/shop" className="text-secondary mt-4 inline-block">Back to Shop</Link>
      </div>
    );
  }

  const waMessage = `Hello Diva Scents! I'm interested in "${product.name}" (${product.category}). Can you assist me with my order?`;

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="aspect-square rounded-3xl overflow-hidden bg-muted"
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <span className="text-secondary text-sm tracking-[0.2em] uppercase font-medium">{product.category}</span>
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary mt-2" style={{ letterSpacing: "-0.02em" }}>
                {product.name}
              </h1>
              <p className="mt-4 text-muted-foreground leading-relaxed">{product.description}</p>
            </motion.div>

            {/* Scent Notes */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-10">
              <h3 className="font-heading text-lg font-semibold text-primary mb-6">Fragrance Architecture</h3>
              <div className="grid grid-cols-3 gap-4">
                <NoteColumn label="Top Notes" notes={product.topNotes} delay={0.3} />
                <NoteColumn label="Heart Notes" notes={product.heartNotes} delay={0.4} />
                <NoteColumn label="Base Notes" notes={product.baseNotes} delay={0.5} />
              </div>
            </motion.div>

            {/* Intensity */}
            <div className="mt-8">
              <IntensityBar level={product.intensity} />
            </div>

            {/* Best For Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {product.bestFor.map(tag => (
                <span key={tag} className="inline-flex items-center gap-1.5 bg-accent/10 text-accent text-xs font-medium px-3 py-1.5 rounded-full">
                  <Sparkles className="w-3 h-3" /> {tag}
                </span>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href={getWhatsAppLink(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-secondary hover:text-primary transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5" />
              Secure Your Bottle
            </motion.a>
          </div>
        </div>
      </div>

      {/* Fixed mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-background/95 backdrop-blur-md border-t border-border p-4 z-40">
        <a
          href={getWhatsAppLink(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-3.5 rounded-full font-medium text-sm"
        >
          <MessageCircle className="w-4 h-4" /> Discuss this Fragrance
        </a>
      </div>
    </div>
  );
}