import { motion } from "framer-motion";
import collectionEssentials from "@/assets/collection-essentials.webp";
import collectionFixtures from "@/assets/collection-fixtures.webp";
import collectionTextiles from "@/assets/collection-textiles.webp";

const collections = [
  {
    title: "Bath Essentials",
    description: "Artisan soaps, oils, and botanicals crafted from the finest natural ingredients.",
    image: collectionEssentials,
    alt: "Premium handmade soap bars and dried botanicals on cream marble",
  },
  {
    title: "Fixtures & Hardware",
    description: "Hand-finished brass and bronze fixtures that age with timeless grace.",
    image: collectionFixtures,
    alt: "Luxury brass bathroom faucet with water droplets on marble",
  },
  {
    title: "Textiles & Linens",
    description: "Organic cotton and linen towels woven with meticulous care.",
    image: collectionTextiles,
    alt: "Stacked white linen towels with lavender on wooden shelf",
  },
];

const Collections = () => {
  return (
    <section id="collections" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 md:mb-24"
      >
        <div className="h-px w-16 bg-accent mx-auto mb-6" />
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">Our Collections</h2>
        <p className="font-body text-muted-foreground max-w-lg mx-auto">
          Each piece is thoughtfully designed and meticulously crafted to bring warmth, beauty, and intention to your space.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {collections.map((collection, i) => (
          <motion.div
            key={collection.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/5] overflow-hidden mb-6">
              <img
                src={collection.image}
                alt={collection.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <h3 className="font-display text-xl md:text-2xl text-foreground mb-2">{collection.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{collection.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Collections;
