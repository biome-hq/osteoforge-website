import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <Layout>
      {/* Hero — Full Viewport */}
      <section ref={heroRef} className="relative h-[80vh] md:h-screen overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
          <img
            src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1920&q=80"
            alt="OsteoForge research laboratory"
            className="w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-foreground/10 to-foreground/50" />
        </motion.div>

        <div className="relative container-full h-full flex flex-col justify-end pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/60 mb-5">
              Our Mission
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[0.9]">
              Redefining
              <br />
              <span className="italic font-normal">Regenerative Healthcare</span>
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-lg leading-relaxed">
              Safe, effective, and affordable next-generation bone regeneration
              technology, designed in India for the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-28 md:py-40">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="divider-ornament mb-12">
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary whitespace-nowrap">
                Our Vision
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.25] tracking-tight">
              To establish OsteoForge as a global leader in regenerative
              healthcare by delivering world-class bioresorbable and bioactive
              implant solutions — designed in India, transforming lives
              worldwide.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Story — Large Image + Text */}
      <section className="pb-20 md:pb-32">
        <div className="container-full">
          {/* First story block */}
          <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center mb-24 md:mb-36">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-5"
            >
              <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-5">
                The Problem
              </p>
              <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-tight">
                Why Traditional
                <br />
                <span className="italic">Implants Fail</span>
              </h3>
              <p className="text-muted-foreground leading-[1.8] mb-5">
                Traditional metal implants present significant challenges: they
                require secondary surgeries for removal, cause stress shielding
                that weakens surrounding bone, interfere with post-operative
                imaging, and are unsuitable for pediatric patients whose bones
                are still growing.
              </p>
              <p className="text-muted-foreground leading-[1.8]">
                These limitations lead to increased surgical burden, higher
                healthcare costs, and compromised patient outcomes — problems
                that affect millions of patients worldwide every year.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="md:col-span-7 relative"
            >
              <div className="aspect-[4/5] overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&q=80"
                  alt="Surgical procedure"
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>

          {/* Full-width banner image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-24 md:mb-36"
          >
            <div className="relative h-[50vh] md:h-[70vh] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1920&q=80"
                alt=""
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="font-serif text-3xl md:text-5xl lg:text-6xl text-white text-center max-w-3xl px-6 leading-tight"
                >
                  "Every patient deserves implants that heal with their body,
                  not against it."
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Second story block — reversed */}
          <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="md:col-span-7 md:order-first"
            >
              <div className="aspect-[4/5] overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=1200&q=80"
                  alt="Medical technology innovation"
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="md:col-span-5"
            >
              <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-5">
                Our Solution
              </p>
              <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-tight">
                From Lab
                <br />
                <span className="italic">to Operating Room</span>
              </h3>
              <p className="text-muted-foreground leading-[1.8] mb-5">
                OsteoForge's Seribo™ material platform directly addresses each
                limitation of traditional implants. Our silk fibroin-reinforced
                polymer composite is bioactive — it promotes natural bone growth
                through hydroxyapatite nucleation and RGD-mediated cell
                adhesion.
              </p>
              <p className="text-muted-foreground leading-[1.8]">
                Combined with advanced 3D printing technology, we create
                patient-specific implants that fit precisely, resorb at
                clinically relevant rates synchronized with natural healing, and
                allow clear post-operative imaging for accurate monitoring of
                recovery.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-36 bg-bone">
        <div className="container-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">
              What Guides Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Our Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-16 md:gap-12 lg:gap-20">
            {[
              {
                title: "Scientific Excellence",
                number: "01",
                description:
                  "World-class research combining silk fibroin bioactivity with advanced polymer science, creating implants that are approximately 1.5x stronger than pure PCL while maintaining full bioresorbability.",
              },
              {
                title: "Sustainability",
                number: "02",
                description:
                  "Locally sourced Indian silk reduces environmental impact and strengthens indigenous value chains. Our green 3D printing fabrication minimizes waste and ensures precision manufacturing.",
              },
              {
                title: "Patient-First Innovation",
                number: "03",
                description:
                  "Every product is designed to improve clinical outcomes — reducing surgeries, enabling precise fits from CT data, and empowering surgeons with reliable solutions that enhance quality of life.",
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="text-center"
              >
                <span className="text-[11px] font-semibold tracking-[0.3em] text-primary/50 mb-4 block">
                  {value.number}
                </span>
                <h3 className="font-serif text-2xl text-foreground mb-5">
                  {value.title}
                </h3>
                <div className="w-8 h-px bg-primary/30 mx-auto mb-5" />
                <p className="text-muted-foreground leading-[1.8]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Three-image strip */}
      <section className="py-4 md:py-6">
        <div className="grid grid-cols-3 gap-2 md:gap-4 h-[35vh] md:h-[50vh]">
          {[
            {
              src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
              alt: "Laboratory research",
            },
            {
              src: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=800&q=80",
              alt: "3D printing technology",
            },
            {
              src: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
              alt: "Surgical application",
            },
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="overflow-hidden group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>

        <div className="relative container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/50 mb-5">
              Partner With Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Work With OsteoForge
            </h2>
            <p className="text-white/60 mb-10 max-w-md mx-auto leading-relaxed">
              Whether you're a surgeon, hospital administrator, distributor, or
              researcher, we'd love to discuss how our solutions can serve your
              needs.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-none px-12 py-6 text-sm tracking-[0.15em] uppercase bg-white text-foreground hover:bg-white/90"
            >
              <a href="mailto:info@osteoforge.in">
                Get in Touch
                <ArrowRight className="ml-3 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
