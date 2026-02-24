import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Patient Imaging",
    description:
      "High-resolution CT scans of the defect site are acquired, providing the foundation for precise implant design.",
  },
  {
    number: "02",
    title: "3D Reconstruction",
    description:
      "CT data is processed to generate an accurate 3D model of the patient's anatomy, mapping the defect in detail.",
  },
  {
    number: "03",
    title: "Implant Design",
    description:
      "Using advanced CAD software, the implant is designed to perfectly fit the patient's defect while incorporating optimal porosity for bone ingrowth.",
  },
  {
    number: "04",
    title: "3D Printing",
    description:
      "The customized implant is fabricated using FDM 3D printing with Seribo\u2122, producing a bioactive, porous, and bioresorbable scaffold.",
  },
  {
    number: "05",
    title: "Post-Processing",
    description:
      "Printed implants undergo finishing and sterilization procedures to ensure surgical readiness and regulatory compliance.",
  },
  {
    number: "06",
    title: "Surgical Placement",
    description:
      "The PSI is implanted with a precise fit, reducing intraoperative modifications, minimizing wound exposure, and shortening operating time.",
  },
];

const benefits = [
  {
    title: "Precise Fit",
    description:
      "Custom-designed from patient CT data, eliminating intraoperative modifications and reducing surgical time",
  },
  {
    title: "Faster Recovery",
    description:
      "Minimized wound exposure and precise anatomical fit contribute to accelerated healing and improved outcomes",
  },
  {
    title: "Natural Healing",
    description:
      "Bioactive Seribo\u2122 scaffold promotes bone ingrowth and regeneration, resorbing as native bone forms",
  },
];

const PSIWorkflow = () => {
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
            src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1920&q=80"
            alt="Patient-specific implant workflow"
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
              PSI Process
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[0.9]">
              Patient-Specific
              <br />
              <span className="italic font-normal">Implant Workflow</span>
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-lg leading-relaxed">
              From CT scan to surgical placement — a streamlined process for
              precision implants tailored to each patient.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
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
                How It Works
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.25] tracking-tight">
              Our PSI implants are manufactured using FDM-based 3D printing
              technology with our patented Seribo&trade; filament, ensuring
              bioactivity, porosity, and bioresorbability tailored to each
              patient.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* 6-Step Workflow */}
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
              Step by Step
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              The PSI Journey
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-12 lg:gap-20">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="text-center"
              >
                <span className="text-[11px] font-semibold tracking-[0.3em] text-primary/50 mb-4 block">
                  {step.number}
                </span>
                <h3 className="font-serif text-2xl text-foreground mb-5">
                  {step.title}
                </h3>
                <div className="w-8 h-px bg-primary/30 mx-auto mb-5" />
                <p className="text-muted-foreground leading-[1.8]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              Why PSI
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Clinical Advantages
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-20">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="text-center"
              >
                <h3 className="font-serif text-2xl text-foreground mb-5">
                  {benefit.title}
                </h3>
                <div className="w-8 h-px bg-primary/30 mx-auto mb-5" />
                <p className="text-muted-foreground leading-[1.8]">
                  {benefit.description}
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
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1920&q=80"
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
              Get Started
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Request a PSI Consultation
            </h2>
            <p className="text-white/60 mb-10 max-w-md mx-auto leading-relaxed">
              Our clinical engineering team will work with you from imaging to
              implant delivery.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-none px-12 py-6 text-sm tracking-[0.15em] uppercase bg-white text-foreground hover:bg-white/90"
            >
              <a href="mailto:info@osteoforge.in">
                Contact Us
                <ArrowRight className="ml-3 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PSIWorkflow;
