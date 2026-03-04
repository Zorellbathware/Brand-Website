import { motion } from "framer-motion";
import heroBath from "@/assets/hero-bath.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBath}
          alt="Luxury marble bathtub in a warm sunlit bathroom"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding pb-16 md:pb-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="h-px w-16 bg-accent mb-8" />
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] mb-6">
            The Art of
            <br />
            <em className="italic">Bathing</em>
          </h1>
          <p className="font-body text-base md:text-lg text-primary-foreground/80 max-w-md mb-10 leading-relaxed">
            Handcrafted bathware designed to transform your daily ritual into an experience of quiet luxury.
          </p>
          <a
            href="#collections"
            className="inline-block font-body text-sm tracking-[0.2em] uppercase text-primary-foreground border border-primary-foreground/40 px-8 py-4 hover:bg-primary-foreground/10 transition-colors duration-300"
          >
            Explore Collections
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
