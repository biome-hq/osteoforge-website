import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRef } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const differentiators = [
    {
      number: "01",
      title: "Bioactivity",
      description:
        "Silk fibroin promotes osteogenesis and natural bone mineral growth",
    },
    {
      number: "02",
      title: "Bioresorption",
      description: "Fully resorbable implants — no secondary surgery needed",
    },
    {
      number: "03",
      title: "3D Printability",
      description: "Patient-specific implants from individual CT data",
    },
    {
      number: "04",
      title: "Sustainability",
      description: "Locally sourced silk, green fabrication, minimal waste",
    },
    {
      number: "05",
      title: "Radiolucency",
      description: "Clear post-operative imaging without artifact interference",
    },
  ];

  return (
    <Layout>
      {/* Hero Section — Full Viewport */}
      <section
        ref={heroRef}
        className="relative h-screen -mt-16 md:-mt-20 mb-[-1px] overflow-hidden"
      >
        <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
          <img
            src="./banner5.png"
            alt="Medical technology laboratory"
            className="w-full h-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/10 to-foreground/50" />
        </motion.div>

        <motion.div
          className="relative container-full h-full flex flex-col justify-end pb-20 md:pb-28 pt-16 md:pt-20"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
            className="max-w-3xl"
          >
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white mb-8 leading-[0.9] tracking-tight">
              Reimagining
              <br />
              <span className="italic font-normal whitespace-nowrap">Bone Healing</span>
            </h1>
            <p className="text-base md:text-lg text-white mb-10 leading-relaxed max-w-lg">
              Restoring function. Accelerating recovery.
              <br />
              Safer than ever before.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-none px-10 py-6 text-sm tracking-[0.12em] uppercase"
            >
              <Link to="/technology">
                Learn about our Technology
                <ArrowRight className="ml-3 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Scroll indicator — minimal, professional */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5 text-white/40" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Seribo Technology Section — Asymmetric editorial layout */}
      <section className="py-20 md:py-28">
        <div className="container-full">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              }}
              className="relative aspect-[4/5] overflow-hidden group"
            >
              <img
                src="./seribo.png"
                alt="Seribo™ Material Platform"
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              }}
              className="md:py-12"
            >
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4">
                Our Innovation
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[0.95]">
                Seribo™
              </h2>
              <p className="text-muted-foreground text-[15px] leading-[1.75] mb-8 max-w-md">
                Seribo™ is a proprietary silk microfiber–reinforced polycaprolactone (PCL) composite developed for advanced bone regeneration.
                It combines the bioactivity of silk fibroin with the mechanical strength and controlled resorption of PCL to support predictable healing.
                <br />
                The material enhances cellular adhesion and osteogenesis while providing temporary structural support during bone repair.
                Seribo™ forms the foundation for our 3D printed implants, porous grafts and membranes, and injection-moulded bioresorbable fixation systems for craniomaxillofacial and orthopedic applications.
              </p>
              <Button
                asChild
                size="lg"
                className="rounded-none px-10 py-6 text-sm tracking-[0.12em] uppercase"
              >
                <Link to="/technology">
                  Learn About Seribo™
                  <ArrowRight className="ml-3 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Differentiators — Horizontal numbered list with left-aligned heading */}
      <section className="py-16 md:py-24 bg-bone">
        <div className="container-full">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="md:col-span-5"
            >
              <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">
                Five key advantages that set OsteoForge apart in regenerative
                healthcare.
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-7 flex items-end"
            >
              <p className="text-muted-foreground text-[15px] leading-[1.75] max-w-lg">
                Our Seribo™ platform addresses the fundamental limitations of
                traditional metal implants — from stress shielding and imaging
                interference to the burden of secondary removal surgery.
              </p>
            </motion.div>
          </div>

          <div className="border-t border-border" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="py-8 lg:pr-8 border-b lg:border-b-0 lg:border-r border-border last:border-0"
              >
                <p className="text-xs font-medium text-primary/60 mb-3">
                  {item.number}
                </p>
                <h3 className="font-heading text-lg md:text-xl text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-none px-10 py-6 text-sm tracking-[0.12em] uppercase"
            >
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-3 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
