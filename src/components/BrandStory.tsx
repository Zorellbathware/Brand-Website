import { motion } from "framer-motion";
import aboutCraft from "@/assets/about-craft.webp";

const BrandStory = () => {
  return (
    <section id="our-story" className="section-padding bg-card">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={aboutCraft}
              alt="Artisan ceramic bathroom accessories on marble surface"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="h-px w-16 bg-accent mb-8" />
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6 leading-tight">
            Rooted in
            <br />
            <em className="italic">Craft</em>
          </h2>
          <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
            <p>
              Founded in the quiet workshops of coastal Portugal, Aumé was born from a belief that the objects we live with
              should be as considered as the spaces they inhabit.
            </p>
            <p>
              Every piece begins with raw, honest materials — Carrara marble, hand-forged brass, organic cotton — shaped by
              artisans who have dedicated their lives to mastering a single craft.
            </p>
            <p>
              We don't follow trends. We pursue timelessness.
            </p>
          </div>
          <a
            href="#journal"
            className="inline-block mt-10 font-body text-sm tracking-[0.2em] uppercase text-foreground border-b border-accent pb-1 hover:border-foreground transition-colors duration-300"
          >
            Read Our Story
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;
