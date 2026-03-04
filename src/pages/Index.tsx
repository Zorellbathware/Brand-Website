import {
  ArrowRight,
  Download,
  Headset,
  Menu,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Gem,
  Sparkles,
  BadgeCheck,
  PenTool,
  Wrench,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import heroLuxuryImage from "@/assets/custom/hero-luxury.webp";
import heroBasinImage from "@/assets/custom/hero-basin.webp";
import heroMoodImage from "@/assets/custom/hero-mood.webp";
import sinkAccessoryImage from "@/assets/custom/sink-accessory.webp";
import basinStoneImage from "@/assets/custom/basin-stone.webp";
import shopImage from "@/assets/custom/shop.webp";
import mixerBrassImage from "@/assets/custom/mixer-brass.webp";
import categoryBasinMixerImage from "@/assets/categories/basin-mixer.webp";
import categoryAccessoriesImage from "@/assets/categories/accessories.webp";
import categoryBasinImage from "@/assets/categories/basin.webp";
import categoryWallHungToiletImage from "@/assets/categories/wall-hung-toilet.webp";
import categoryWaterClosetImage from "@/assets/categories/water-closet.webp";
import categoryKitchenImage from "@/assets/categories/kitchen.webp";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Collections", href: "#collections" },
  { label: "Service", href: "#service" },
  { label: "Contact", href: "#contact" },
];

const metrics = [
  { icon: Gem, value: "18+", label: "Premium Product Lines" },
  { icon: PenTool, value: "250+", label: "Design Partners" },
  { icon: ShieldCheck, value: "7-Year", label: "Warranty" },
  { icon: BadgeCheck, value: "5-Star", label: "Service Response" },
];

const collections = [
  {
    title: "Basin Mixer",
    text: "Premium placeholder visual for Basin Mixer category.",
    image: categoryBasinMixerImage,
    icon: Sparkles,
  },
  {
    title: "Accessories",
    text: "Premium placeholder visual for Accessories category.",
    image: categoryAccessoriesImage,
    icon: PenTool,
  },
  {
    title: "Basin",
    text: "Premium placeholder visual for Basin category.",
    image: categoryBasinImage,
    icon: ShieldCheck,
  },
  {
    title: "Wall Hung Toilet",
    text: "Premium placeholder visual for Wall Hung Toilet category.",
    image: categoryWallHungToiletImage,
    icon: Sparkles,
  },
  {
    title: "Water Closet",
    text: "Premium placeholder visual for Water Closet category.",
    image: categoryWaterClosetImage,
    icon: ShieldCheck,
  },
  {
    title: "Kitchen",
    text: "Premium placeholder visual for Kitchen category.",
    image: categoryKitchenImage,
    icon: PenTool,
  },
];

const rise = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

const Index = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const heroGallery = [
    heroBasinImage,
    heroMoodImage,
    sinkAccessoryImage,
    basinStoneImage,
    mixerBrassImage,
    categoryBasinMixerImage,
    categoryAccessoriesImage,
    categoryBasinImage,
    categoryWallHungToiletImage,
    categoryWaterClosetImage,
    categoryKitchenImage,
    heroLuxuryImage,
  ];
  const [baseImageIndex, setBaseImageIndex] = useState(0);
  const [stackOffset, setStackOffset] = useState(0);
  const [animateStack, setAnimateStack] = useState(false);
  const cycleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animatingRef = useRef(false);
  const dragStartYRef = useRef<number | null>(null);
  const dragTriggeredRef = useRef(false);
  const galleryLength = heroGallery.length;
  const slot = 192; // 176px card height + 16px gap

  useEffect(() => {
    heroGallery.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const stepHeroTicker = useCallback(
    (direction: "down" | "up") => {
      if (animatingRef.current) return;
      animatingRef.current = true;
      setAnimateStack(true);
      setStackOffset(direction === "down" ? slot : -slot);

      cycleTimeoutRef.current = setTimeout(() => {
        setAnimateStack(false);
        setBaseImageIndex((prev) =>
          direction === "down" ? (prev - 1 + galleryLength) % galleryLength : (prev + 1) % galleryLength,
        );
        setStackOffset(0);
        animatingRef.current = false;
      }, 820);
    },
    [galleryLength, slot],
  );

  useEffect(() => {
    const cycleInterval = 2500;
    const intervalId = setInterval(() => stepHeroTicker("down"), cycleInterval);

    return () => {
      clearInterval(intervalId);
      if (cycleTimeoutRef.current) clearTimeout(cycleTimeoutRef.current);
    };
  }, [stepHeroTicker]);

  return (
    <div className="min-h-screen bg-[#f6f1e8] text-[#15130f]">
      <header className="sticky top-0 z-50 border-b border-[#dccfbd] bg-[#f6f1e8]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-10">
          <a href="#top" className="shrink-0" onClick={() => setMobileOpen(false)}>
            <img src="/ZORELL_LOGO_CROPPED.svg" alt="Zorell" className="h-16 w-auto md:h-20 lg:h-24" />
          </a>

          <nav className="hidden items-center gap-2 rounded-full border border-[#d8cab8] bg-white/80 p-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-5 py-2.5 text-sm font-bold tracking-[0.05em] text-[#3a3128] transition hover:bg-[#15130f] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+919995226622"
              className="inline-flex items-center gap-2 rounded-full bg-[#d63e43] px-4 py-2 text-xs font-semibold tracking-[0.08em] text-white shadow-[0_12px_26px_rgba(214,62,67,0.3)] md:text-sm"
            >
              <PhoneCall className="h-4 w-4" />
              <span className="hidden sm:inline">Call Now</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ccb79e] bg-white text-[#15130f] lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden border-t border-[#e1d4c4] bg-[#f6f1e8] lg:hidden"
        >
          <nav className="mx-auto grid max-w-7xl gap-2 px-5 py-4 md:px-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg border border-[#e0d3c2] bg-white px-4 py-3 text-base font-bold tracking-[0.04em] text-[#2a221b]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </motion.div>
      </header>

      <main id="top">
        <section className="px-5 pb-14 pt-8 md:px-10 md:pb-20 md:pt-12">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[36px] border border-[#d8cab8] bg-[#14110e]">
              <div className="absolute inset-0">
                <img src={heroLuxuryImage} alt="Zorell premium bathroom" className="h-full w-full object-cover opacity-45" loading="eager" />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(20,17,14,0.94)_0%,rgba(20,17,14,0.72)_45%,rgba(20,17,14,0.35)_100%)]" />

              <div className="relative grid min-h-[620px] gap-8 px-6 py-10 md:px-10 md:py-12 lg:grid-cols-[1fr_0.9fr] lg:items-end">
                <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.12 }}>
                  <motion.p variants={rise} className="text-xs tracking-[0.24em] text-white/70">
                    PREMIUM BATHROOM COLLECTION
                  </motion.p>
                  <motion.h1 variants={rise} className="mt-4 font-sans text-6xl font-bold leading-[0.9] tracking-tight text-white md:text-8xl lg:text-[7rem]">
                    A New Signature
                    <br />
                    For Premium
                    <br />
                    Bathrooms
                  </motion.h1>
                  <motion.p variants={rise} className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                    Distinctive bathware with timeless form, premium material quality, and engineered reliability.
                  </motion.p>

                  <motion.div variants={rise} className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="tel:+919995226622"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d63e43] px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-[0_16px_30px_rgba(214,62,67,0.35)]"
                    >
                      <PhoneCall className="h-4 w-4" />
                      Call Now
                    </a>
                    <a
                      href="/Zorell_Product_Catalogue.pdf"
                      download="Zorell Product Catalogue.pdf"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white backdrop-blur"
                    >
                      <Download className="h-4 w-4" />
                      Download Catalogue
                    </a>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="grid gap-4 lg:justify-self-end"
                >
                  <motion.article whileHover={{ y: -6 }} className="overflow-hidden rounded-[24px] border border-white/20 bg-white/10 p-2 backdrop-blur">
                    <div
                      className="relative h-[560px] w-[320px] overflow-hidden rounded-[18px] touch-none select-none"
                      style={{ touchAction: "none", userSelect: "none" }}
                      onDragStart={(e) => e.preventDefault()}
                      onPointerDown={(e) => {
                        if (e.button !== 0) return;
                        e.preventDefault();
                        dragStartYRef.current = e.clientY;
                        dragTriggeredRef.current = false;
                        (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
                      }}
                      onPointerMove={(e) => {
                        if (dragStartYRef.current === null || dragTriggeredRef.current || animatingRef.current) return;
                        const delta = e.clientY - dragStartYRef.current;
                        if (Math.abs(delta) < 36) return;
                        dragTriggeredRef.current = true;
                        stepHeroTicker(delta < 0 ? "up" : "down");
                      }}
                      onPointerUp={(e) => {
                        dragStartYRef.current = null;
                        dragTriggeredRef.current = false;
                        if ((e.currentTarget as HTMLDivElement).hasPointerCapture(e.pointerId)) {
                          (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId);
                        }
                      }}
                      onPointerCancel={() => {
                        dragStartYRef.current = null;
                        dragTriggeredRef.current = false;
                      }}
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          transform: `translateY(${stackOffset}px)`,
                          transition: animateStack ? "transform 820ms cubic-bezier(0.22, 1, 0.36, 1)" : "none",
                        }}
                      >
                        <img
                          src={heroGallery[(baseImageIndex - 1 + galleryLength) % galleryLength]}
                          alt="Premium product visual"
                          className="absolute left-0 top-0 h-44 w-[320px] -translate-y-48 rounded-[18px] object-cover"
                          loading="eager"
                          draggable={false}
                        />
                        <img
                          src={heroGallery[baseImageIndex % galleryLength]}
                          alt="Premium product visual"
                          className="absolute left-0 top-0 h-44 w-[320px] rounded-[18px] object-cover"
                          loading="eager"
                          draggable={false}
                        />
                        <img
                          src={heroGallery[(baseImageIndex + 1) % galleryLength]}
                          alt="Premium product visual"
                          className="absolute left-0 top-0 h-44 w-[320px] translate-y-48 rounded-[18px] object-cover"
                          loading="eager"
                          draggable={false}
                        />
                        <img
                          src={heroGallery[(baseImageIndex + 2) % galleryLength]}
                          alt="Premium product visual"
                          className="absolute left-0 top-0 h-44 w-[320px] translate-y-96 rounded-[18px] object-cover"
                          loading="eager"
                          draggable={false}
                        />
                        <img
                          src={heroGallery[(baseImageIndex + 3) % galleryLength]}
                          alt="Premium product visual"
                          className="absolute left-0 top-0 h-44 w-[320px] translate-y-[36rem] rounded-[18px] object-cover"
                          loading="eager"
                          draggable={false}
                        />
                      </div>
                    </div>
                  </motion.article>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs tracking-[0.08em] text-white w-fit">
                    <ShieldCheck className="h-4 w-4 text-[#ff9ea1]" />
                    7-Year Warranty
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#1d1813] px-5 py-12 text-white md:px-10 md:py-16">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
            {metrics.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <Icon className="h-5 w-5 text-[#f6c89f]" />
                  <p className="mt-2 text-2xl">{item.value}</p>
                  <p className="text-sm text-white/75">{item.label}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="about" className="px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[34px] border border-[#d9cdbc] bg-white">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <motion.img
                initial={{ opacity: 0, scale: 1.03 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                src={shopImage}
                alt="Zorell premium mixer close-up"
                className="h-[420px] w-full object-cover lg:h-full"
                loading="lazy"
              />

              <motion.div
                initial={{ opacity: 0, x: 26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="p-8 md:p-12"
              >
                <p className="text-xs tracking-[0.22em] text-[#897460]">ABOUT ZORELL</p>
                <h2 className="mt-3 max-w-2xl text-4xl leading-tight md:text-6xl">Design confidence for complete bathroom spaces.</h2>

                <div className="mt-6 space-y-4 text-base leading-relaxed text-[#5f554a] md:text-lg">
                  <p>
                    Zorell builds bathware collections that merge practical performance with premium visual quality. Our mixers, sanitaryware, and accessories are developed to work as one coherent system.
                  </p>
                  <p>
                    Every product is shaped around durability, installation practicality, and refined detailing so your bathrooms stay elegant and reliable for years.
                  </p>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {["Precision Development", "Balanced Form & Function", "Consistent Project Language", "Long-Term Reliability"].map((point) => (
                    <div key={point} className="inline-flex items-center gap-2 rounded-lg border border-[#e4d9cb] bg-[#fbf8f3] px-4 py-3 text-sm text-[#4f453a]">
                      <BadgeCheck className="h-4 w-4 text-[#d63e43]" />
                      {point}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="collections" className="bg-[#17130f] px-5 py-16 text-white md:px-10 md:py-24">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs tracking-[0.22em] text-white/65">COLLECTIONS</p>
            <h2 className="mt-3 text-4xl md:text-6xl">Curated Product Worlds</h2>

            <div className="mt-8 grid grid-cols-2 gap-4 md:mt-10 md:grid-cols-3 md:gap-8">
              {collections.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.09 }}
                    whileHover={{ y: -8 }}
                    className="space-y-2 md:space-y-4"
                  >
                    <div className="overflow-hidden rounded-2xl">
                      <motion.img whileHover={{ scale: 1.06 }} src={item.image} alt={item.title} className="h-28 w-full object-cover md:h-72" loading="lazy" />
                    </div>
                    <p className="hidden items-center gap-2 text-[#f6c89f] md:inline-flex">
                      <Icon className="h-4 w-4" />
                      <span className="text-xs tracking-[0.18em]">PREMIUM RANGE</span>
                    </p>
                    <h3 className="text-base leading-tight md:text-2xl">{item.title}</h3>
                    <p className="hidden text-sm leading-relaxed text-white/75 md:block">{item.text}</p>
                    <a href="#contact" className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.08em] text-white/90 md:hidden">
                      Enquire
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                    <a href="#contact" className="hidden items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-white md:inline-flex">
                      Enquire
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="service" className="px-5 py-12 md:px-10 md:py-24">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[34px] border border-[#d9cdbc] bg-white">
            <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[linear-gradient(140deg,#1b1611_0%,#2b241d_60%,#3a2f25_100%)] p-6 text-white md:p-12"
              >
                <p className="text-xs tracking-[0.24em] text-white/70">SERVICE SUPPORT</p>
                <h3 className="mt-3 text-3xl leading-tight md:mt-4 md:text-6xl">Reliable assistance, whenever you need it.</h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 md:mt-5 md:text-lg">
                  Our dedicated service team provides technical guidance and product support to ensure your bathroom systems perform smoothly. From installation assistance to after-sales service, Zorell is committed to maintaining long-term reliability for every project.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 md:p-12"
              >
                <div className="rounded-[22px] border border-[#d9cdbc] bg-[#faf7f1] p-6 md:p-7">
                  <p className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-[#7d6a58]">
                    <Headset className="h-4 w-4" />
                    SERVICE CENTER
                  </p>
                  <p className="mt-3 text-4xl leading-none tracking-tight md:text-5xl whitespace-nowrap">9947 400 300</p>
                  <p className="mt-4 text-sm text-[#6d5f51] md:text-base">Warranty and service support available for eligible products.</p>
                  <a href="tel:+919947400300" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#171512] px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white md:w-auto">
                    <Wrench className="h-4 w-4" />
                    Call Service Center
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 py-14 md:px-10 md:py-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-[32px] border border-[#2b2520] bg-[#171310]"
            >
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                <div className="p-8 text-white md:p-12">
                  <p className="text-xs tracking-[0.24em] text-white/65">CONTACT</p>
                  <h3 className="mt-4 text-4xl leading-none md:text-6xl">SRS Trade Links</h3>

                  <div className="mt-6 inline-flex max-w-2xl items-start gap-3 text-base leading-relaxed text-white/82 md:text-lg">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#ff9ca0]" />
                    <p>
                      17/790 A, Near Bharath Petrol Pump
                      <br />
                      Main Road, Vengara - 676304
                      <br />
                      Malappuram, Kerala, India
                    </p>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-4">
                      <p className="text-xs tracking-[0.16em] text-white/65">SALES</p>
                      <p className="mt-1 text-xl text-white">+91 9995 22 66 22</p>
                    </div>
                    <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-4">
                      <p className="text-xs tracking-[0.16em] text-white/65">WEBSITE</p>
                      <p className="mt-1 text-xl text-white">zorellbathware.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f8f2e8] p-8 md:p-12">
                  <p className="text-xs tracking-[0.22em] text-[#8a7560]">CONNECT NOW</p>
                  <h4 className="mt-3 text-3xl leading-tight text-[#171512] md:text-4xl">Let us help you choose the right product line.</h4>

                  <div className="mt-8 space-y-4">
                    <a href="tel:+919995226622" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d73d42] px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white">
                      <PhoneCall className="h-4 w-4" />
                      Call Sales
                    </a>
                    <a
                      href="/Zorell_Product_Catalogue.pdf"
                      download="Zorell Product Catalogue.pdf"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#c8b49c] bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-[#171512]"
                    >
                      <Download className="h-4 w-4" />
                      Download Catalogue
                    </a>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <footer className="border-t border-[#2f2822] bg-[#171310] px-5 py-12 text-white md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <img src="/ZORELL_LOGO_CROPPED.svg" alt="Zorell" className="h-14 w-auto brightness-0 invert" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#d7c0a8]">
              Premium bathware solutions for modern homes, hospitality spaces, and architecture-led projects.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-[#d8b79a]">QUICK LINKS</p>
            <div className="mt-4 grid gap-2 text-sm text-white/85">
              <a href="#top" className="hover:text-[#f1cfad]">
                Home
              </a>
              <a href="#about" className="hover:text-[#f1cfad]">
                About
              </a>
              <a href="#collections" className="hover:text-[#f1cfad]">
                Collections
              </a>
              <a href="#service" className="hover:text-[#f1cfad]">
                Service
              </a>
              <a href="#contact" className="hover:text-[#f1cfad]">
                Contact
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-[#d8b79a]">CONTACT INFO</p>
            <div className="mt-4 space-y-2 text-sm text-white/85">
              <p>Sales: +91 9995 22 66 22</p>
              <p>Service: 9947 400 300</p>
              <p>Website: zorellbathware.com</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 overflow-hidden rounded-2xl border border-white/15 bg-white/5">
          <iframe
            title="Zorell map"
            src="https://www.google.com/maps?q=17%2F790%20A%20Near%20Bharath%20Petrol%20Pump%20Main%20Road%20Vengara%20676304%20Malappuram%20Kerala&output=embed"
            className="h-44 w-full md:h-52"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Zorell. All rights reserved.</p>
          <p>Premium bathware for signature interiors.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;


