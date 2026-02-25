import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

const scaffoldSublines = [
  {
    id: "psi",
    label: "01",
    title: "Patient-Specific Implants",
    subtitle: "Precision-fit. 3D printed. Bioactive.",
    description:
      "Fully customized for each patient and defect, designed and 3D printed from individual CT data to ensure a precise anatomical fit. The porous architecture, enriched with naturally occurring RGD sequences in silk microfibers, promotes osteoblast attachment, bone ingrowth, and regeneration.",
    details: [
      "Precisely tailored to individual defects from CT scan data",
      "Eliminates intraoperative implant modifications",
      "Reduces wound exposure and minimizes operating time",
      "Interconnected porosity promotes cellular attachment and vascularization",
    ],
  },
  {
    id: "grafts",
    label: "02",
    title: "Porous Bone Grafts",
    subtitle: "Osteoconductive. Bioresorbable. Versatile.",
    description:
      "Bioactive, osteoconductive scaffolds designed to support bone regeneration in trauma, tumor, and defect management. Their interconnected porous architecture facilitates cellular infiltration, vascularization, and natural bone remodelling while providing a stable framework.",
    details: [
      "Guides new bone formation within defect sites",
      "Promotes vascularization and bone remodelling",
      "Gradually replaced by native bone over time",
      "Suitable for mandibular reconstruction, large segmental defects, and craniofacial surgery",
    ],
  },
  {
    id: "membranes",
    label: "03",
    title: "Porous Bone Membranes",
    subtitle: "Guided bone regeneration. Dual-layer architecture.",
    description:
      "Designed for predictable bone regeneration across dental, craniofacial, and orthopedic indications. The dual-layer structure features a smooth outer surface preventing epithelial proliferation and porous inner layers promoting osteoblast attachment for guided bone regeneration.",
    details: [
      "Smooth outer layer prevents soft tissue intrusion",
      "Porous inner layers promote osteoblast attachment",
      "Fully resorbable within 6–9 months depending on size and thickness",
      "Adaptable for socket preservation, ridge augmentation, and GBR",
    ],
  },
];

const fixationFeatures = [
  {
    label: "Beveled Edge",
    description:
      "Reduces palpability under the skin for improved patient comfort post-surgery.",
  },
  {
    label: "Partial Countersinks",
    description:
      "Provide stable plate–screw interfaces, minimize micromotion, and maintain a low profile.",
  },
  {
    label: "Straight-Edged Design",
    description:
      "Maintains plate thickness at boundaries for superior strength and resistance to deformation.",
  },
];

const Products = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <Layout>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative h-screen -mt-16 md:-mt-20 mb-[-1px] overflow-hidden"
      >
        <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
          <img
            src="https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=1920&q=80"
            alt="OsteoForge solutions"
            className="w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-foreground/10 to-foreground/55" />
        </motion.div>

        <div className="relative container-full h-full flex flex-col justify-end pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
          >
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/80 mb-5">
              Our Solutions
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[0.9]">
              Two Product
              <br />
              <span className="italic font-normal whitespace-nowrap">Lines</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-lg leading-relaxed">
              Both built on the Seribo™ platform — bioactive, bioresorbable
              implants that heal naturally and eliminate secondary surgery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro — editorial text block */}
      <section className="py-24 md:py-36">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="divider-ornament mb-12">
              <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-primary whitespace-nowrap">
                The Platform
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.25] tracking-tight">
              Seribo™ combines silk fibroin bioactivity with polycaprolactone
              resorbability — enabling implants that promote bone growth,
              dissolve naturally over time, and require no removal surgery.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Product Line 1: Scaffold System */}
      <section className="py-24 md:py-36 bg-bone">
        <div className="container-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-3">
              Product Line 01
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              Seribo™ Scaffold System
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Designed for bone regeneration in trauma, tumor, and defect
              management. Available in three formats, each tailored to specific
              clinical needs.
            </p>
          </motion.div>

          {/* SEM image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 overflow-hidden"
          >
            <div className="relative h-[40vh] md:h-[55vh] overflow-hidden group">
              <img
                src="./Scaffold-System.png"
                alt="Seribo™ Scaffold System — SEM microscopy"
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/70">
                  Seribo™ Scaffold — SEM imaging, scale 200 µm
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
            {scaffoldSublines.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="text-center p-8 md:p-10 border border-border bg-background"
              >
                <span className="text-xs font-medium tracking-[0.2em] text-primary/50 mb-4 block">
                  {item.label}
                </span>
                <h3 className="font-heading text-2xl text-foreground mb-3">
                  {item.title}
                </h3>
                <div className="w-8 h-px bg-primary/30 mx-auto mb-5" />
                <p className="text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-5">
                  {item.subtitle}
                </p>
                <p className="text-muted-foreground text-sm leading-[1.8] mb-6">
                  {item.description}
                </p>
                <ul className="text-left space-y-2">
                  {item.details.map((d) => (
                    <li key={d} className="text-sm text-muted-foreground flex gap-3">
                      <span className="text-primary/60 mt-1 shrink-0">—</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link
              to="/technology"
              className="inline-flex items-center gap-3 text-sm font-medium tracking-[0.08em] uppercase text-foreground hover:text-primary transition-colors group"
            >
              Learn about the Seribo™ Platform
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Product Line 2: CMF Fixation */}
      <section className="py-24 md:py-36">
        <div className="container-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-3">
              Product Line 02
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground">
              Bioresorbable Fixation System — CMF
            </h2>
          </motion.div>

          {/* SEM image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 overflow-hidden"
          >
            <div className="relative h-[40vh] md:h-[55vh] overflow-hidden group">
              <img
                src="./Resorbable-Fixation-System.png"
                alt="Seribo™ Bioresorbable Fixation System — SEM microscopy"
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/70">
                  Seribo™ Fixation Material — SEM imaging, scale 20 µm
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            >
              <p className="text-muted-foreground leading-[1.8] mb-6">
                A bioresorbable fixation system for the stabilisation of
                fractures and reconstruction of the craniomaxillofacial
                skeleton. These implants provide fixation during bone healing,
                then resorb naturally — avoiding the need for removal surgery.
              </p>
              <p className="text-muted-foreground leading-[1.8] mb-8">
                Especially beneficial in pediatric cases, where ongoing bone
                growth makes permanent metal implants unsuitable. Available as
                CMF Plates, Orbital Plates, Neuro Plates, and Mesh Plates.
              </p>
              <div className="border-t border-border pt-6">
                <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-muted-foreground mb-3">
                  Indications
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Fracture repair and reconstruction in the craniomaxillofacial
                  skeleton, for both pediatric and adult patients.
                  Non-load-bearing use in alignment and fixation of fragments,
                  grafts, or substitutes in CMF and mandibular regions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            >
              <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-muted-foreground mb-6">
                Plate Design
              </p>
              {fixationFeatures.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="border-t border-border py-6"
                >
                  <p className="font-heading text-lg text-foreground mb-2">{f.label}</p>
                  <p className="text-sm text-muted-foreground leading-[1.8]">
                    {f.description}
                  </p>
                </motion.div>
              ))}
              <div className="border-t border-border" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA — image background */}
      <section className="py-24 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/65" />
        </div>

        <div className="relative container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          >
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/80 mb-5">
              Get In Touch
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-10 leading-tight">
              Interested in our solutions?
            </h2>
            <Button
              asChild
              size="lg"
              className="rounded-none px-12 py-6 text-sm tracking-[0.12em] uppercase bg-white text-foreground hover:bg-white/90"
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

export default Products;
