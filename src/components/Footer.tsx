const Footer = () => {
  return (
    <footer id="contact" className="px-6 md:px-12 lg:px-24 py-16 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <span className="font-display text-2xl tracking-[0.2em] uppercase text-foreground">Aumé</span>
          <p className="font-body text-sm text-muted-foreground mt-4 max-w-sm leading-relaxed">
            Handcrafted bathware for those who believe that beauty lives in the details.
          </p>
        </div>

        <div>
          <h4 className="font-body text-xs tracking-[0.2em] uppercase text-foreground mb-5">Explore</h4>
          <ul className="space-y-3">
            {["Collections", "Our Story", "Journal", "Stockists"].map((link) => (
              <li key={link}>
                <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-body text-xs tracking-[0.2em] uppercase text-foreground mb-5">Connect</h4>
          <ul className="space-y-3">
            {["Instagram", "Pinterest", "Contact Us", "Press"].map((link) => (
              <li key={link}>
                <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
        <p className="font-body text-xs text-muted-foreground">
          © 2026 Aumé. All rights reserved.
        </p>
        <p className="font-body text-xs text-muted-foreground mt-2 md:mt-0">
          Crafted with intention.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
