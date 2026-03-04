import { motion } from "framer-motion";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section id="journal" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto text-center"
      >
        <div className="h-px w-16 bg-accent mx-auto mb-8" />
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Stay Considered</h2>
        <p className="font-body text-muted-foreground mb-10 leading-relaxed">
          Receive stories of craft, new collections, and invitations to private viewings. No noise — only what matters.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full sm:w-80 px-5 py-4 bg-transparent border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-4 bg-foreground text-background font-body text-sm tracking-[0.15em] uppercase hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Newsletter;
