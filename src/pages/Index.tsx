import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
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
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white mb-8 leading-[0.9] tracking-tight">
              Reimagining
              <br />
              <span className="italic font-normal whitespace-nowrap">Bone Healing</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 mb-10 leading-relaxed max-w-lg">
              Restoring function, reconfiguring aesthetics. Faster and safer
              than ever.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-none px-10 py-6 text-sm tracking-[0.15em] uppercase btn-premium"
            >
              <Link to="/technology">
                Explore Technology
                <ArrowRight className="ml-3 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4 text-white/50" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Seribo Technology Section */}
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
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&q=80"
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
              <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-4">
                Our Innovation
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[0.95]">
                Seribo™ Material Platform
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
                A revolutionary silk fibroin-reinforced polymer composite
                combining bioactivity, mechanical strength, and 3D printability.
                Seribo™ enables implants that promote natural bone growth and
                dissolve safely over time.
              </p>
              <Button
                asChild
                size="lg"
                className="rounded-none px-10 py-6 text-sm tracking-[0.15em] uppercase btn-premium"
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

      {/* Key Differentiators */}
      <section className="py-24 md:py-32 bg-bone">
        <div className="container-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
            className="text-center mb-16"
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-6">
              Why Seribo™
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.3] max-w-3xl mx-auto">
              Five key advantages that set OsteoForge apart in regenerative
              healthcare.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6 mb-12">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center md:text-left"
              >
                <p className="text-[11px] font-semibold tracking-[0.3em] text-primary mb-3">
                  {item.number}
                </p>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-none px-10 py-6 text-sm tracking-[0.15em] uppercase"
            >
              <Link to="/about">
                Learn More
                <ArrowRight className="ml-3 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1920&q=80"
            alt="Partner with OsteoForge"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>

        <div className="relative container-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/70 mb-6">
              Partner With Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-[1.2]">
              Ready to Transform Patient Outcomes?
            </h2>
            <p className="text-white/80 leading-relaxed mb-10 max-w-lg mx-auto">
              Whether you're a surgeon, distributor, or researcher, we'd love to
              discuss how OsteoForge can serve your needs.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-none px-10 py-6 text-sm tracking-[0.15em] uppercase bg-white text-foreground hover:bg-white/90"
            >
              <a href="mailto:info@osteoforge.in">
                Contact Our Team
                <ArrowRight className="ml-3 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
