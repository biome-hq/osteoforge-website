import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

const differentiators = [
  {
    number: "01",
    title: "Bioactivity & Biomimicry",
    description:
      "Silk fibroin facilitates mesenchymal stem cell differentiation, enhances adhesion, and promotes osteogenesis. The RGD motif in Antheraea mylitta silk supports osteointegration, wound healing, and tissue regeneration. Carbonyl groups serve as nucleation sites for calcium salts, forming bone-like apatite.",
  },
  {
    number: "02",
    title: "Physiological Bioresorption",
    description:
      "Controlled degradation at clinically relevant rates, synchronized with natural healing. Enhanced mechanical strength approximately 1.5\u00D7 stronger than pure PCL. Maintains stability while gradually transferring load to regenerating bone, eliminating the need for secondary surgery.",
  },
  {
    number: "03",
    title: "3D Printability",
    description:
      "Compatible with FDM-based 3D printing technologies, enabling patient-specific implants and complex scaffold designs. Interconnected porous structures promote cellular attachment, vascularization, and uniform tissue integration for faster bone regeneration.",
  },
  {
    number: "04",
    title: "Sustainability",
    description:
      "Locally sourced silk reduces environmental impact and strengthens indigenous value chains. Green fabrication with 3D printing minimizes waste and ensures precision. A commitment to eco-conscious, affordable healthcare, blending innovation with sustainability.",
  },
  {
    number: "05",
    title: "Radiolucency",
    description:
      "Radiographic transparency allows clear X-ray and CT imaging of underlying bone. Enables accurate monitoring of healing and regeneration, unlike radiopaque metal implants that create imaging artifacts.",
  },
];

const comparisons = [
  {
    title: "Metal Implants",
    description:
      "Require secondary removal surgery, cause stress shielding, interfere with imaging",
  },
  {
    title: "Other Bioresorbables",
    description:
      "Limited bioactivity, lower mechanical strength, less controlled resorption rates",
  },
  {
    title: "Seribo\u2122",
    description:
      "Bioactive bone growth, controlled resorption, 1.5\u00D7 strength, clear imaging, patient-specific 3D printing",
  },
];

const Technology = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[80vh] md:h-screen overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
          <img
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&q=80"
            alt="Seribo material platform"
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
              Innovation
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[0.9]">
              Seribo&trade;
              <br />
              <span className="italic font-normal">Material Platform</span>
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-lg leading-relaxed">
              A silk fibroin-reinforced polymer composite that combines
              bioactivity, mechanical strength, and 3D printability for
              next-generation bone healing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Seribo */}
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
                The Science
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.25] tracking-tight">
              Seribo&trade; is an advanced bioactive and bioresorbable composite,
              combining silk fibroin microfibers with polycaprolactone (PCL).
              This natural fibre-reinforced polymer composite delivers a unique
              balance of bioactivity, mechanical strength, and manufacturability.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* 5 Key Differentiators */}
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
              Key Advantages
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Five Pillars of Innovation
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-12 lg:gap-20">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="text-center"
              >
                <span className="text-[11px] font-semibold tracking-[0.3em] text-primary/50 mb-4 block">
                  {item.number}
                </span>
                <h3 className="font-serif text-2xl text-foreground mb-5">
                  {item.title}
                </h3>
                <div className="w-8 h-px bg-primary/30 mx-auto mb-5" />
                <p className="text-muted-foreground leading-[1.8]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 md:py-36">
        <div className="container-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">
              Compare
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Why Seribo&trade; Over Traditional Implants?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-12">
            {comparisons.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="text-center p-8 md:p-10 border border-border"
              >
                <h3 className="font-serif text-2xl text-foreground mb-5">
                  {item.title}
                </h3>
                <div className="w-8 h-px bg-primary/30 mx-auto mb-5" />
                <p className="text-muted-foreground leading-[1.8]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=1920&q=80"
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
              Explore Further
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-10 leading-tight">
              See Seribo&trade; in Action
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-none px-12 py-6 text-sm tracking-[0.15em] uppercase bg-white text-foreground hover:bg-white/90"
              >
                <Link to="/products">
                  View Products
                  <ArrowRight className="ml-3 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-none px-12 py-6 text-sm tracking-[0.15em] uppercase text-white border-white hover:bg-white hover:text-foreground"
              >
                <Link to="/psi-workflow">
                  PSI Workflow
                  <ArrowRight className="ml-3 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Technology;
