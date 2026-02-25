import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";
import { Layout } from "@/components/Layout";

const differentiators = [
  {
    number: "01",
    title: "Bioactivity & Biomimicry",
    description:
      "Seribo enables a bioactive, biomimetic environment that supports osteointegration and regenerative healing. The platform architecture is designed to encourage cellular attachment and progressive mineralization, allowing the scaffold to actively participate in bone regeneration rather than function as a passive structural substitute.",
  },
  {
    number: "02",
    title: "Physiological Bioresorption",
    description:
      "Seribo supports controlled bioresorption at clinically relevant rates aligned with the natural bone healing cascade. The material maintains mechanical stability during early regeneration and progressively facilitates physiological load transfer to newly formed bone, eliminating the need for secondary removal procedures.",
  },
  {
    number: "03",
    title: "Radiolucency",
    description:
      "Seribo provides radiolucent performance that allows unobstructed X-ray and CT visualization of the healing site. This enables accurate monitoring of regeneration without the imaging artifacts commonly associated with metallic implants.",
  },
  {
    number: "04",
    title: "3D Printability",
    description:
      "Seribo integrates seamlessly with FDM-based 3D printing to enable complex, patient-specific geometries. The controlled porous architecture promotes cellular infiltration, vascularization, and uniform tissue integration — supporting predictable regenerative outcomes.",
  },
  {
    number: "05",
    title: "Sustainability",
    description:
      "Seribo combines advanced biomaterials with additive manufacturing to ensure precision fabrication and reduced material waste. The platform is designed for scalable production and cost-efficient deployment while aligning with broader sustainability goals in healthcare.",
  },
];

const comparisonData = [
  { feature: "Bioactivity for bone regrowth", metal: false, other: false, seribo: true },
  { feature: "No secondary surgery", metal: false, other: true, seribo: true },
  { feature: "Radiolucent performance", metal: false, other: true, seribo: true },
  { feature: "Patient-specific 3D printing", metal: false, other: false, seribo: true },
  { feature: "Pediatric-suitable", metal: false, other: true, seribo: true },
];

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
      <section
        ref={heroRef}
        className="relative h-screen -mt-16 md:-mt-20 mb-[-1px] overflow-hidden"
      >
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
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/80 mb-5">
              Innovation
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[0.9]">
              Seribo&trade;
              <br />
              <span className="italic font-normal">Material Platform</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-lg leading-relaxed">
              A silk fibroin-reinforced polymer composite that combines
              bioactivity, mechanical strength, and 3D printability for
              next-generation bone healing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Seribo — Pull-quote */}
      <section className="py-24 md:py-36">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="divider-ornament mb-10">
              <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-primary whitespace-nowrap">
                The Science
              </span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground leading-[1.35] tracking-tight">
              Seribo&trade; is an advanced bioactive and bioresorbable
              composite, combining silk fibroin microfibers with
              polycaprolactone (PCL). This natural fibre-reinforced polymer
              composite delivers a unique balance of bioactivity, mechanical
              strength, and manufacturability.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* 5 Key Differentiators */}
      <section className="py-20 md:py-28 bg-bone">
        <div className="container-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-3">
              Key Advantages
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">
              Five Pillars of Innovation
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-border">
            {differentiators.slice(0, 3).map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="py-10 md:pr-10 border-b md:border-b-0 md:border-r border-border last:border-0"
              >
                <span className="text-xs font-medium text-primary/50 mb-3 block">
                  {item.number}
                </span>
                <h3 className="font-heading text-xl text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-[1.8]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-border">
            {differentiators.slice(3).map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i + 3) * 0.1 }}
                className="py-10 md:pr-10 border-b md:border-b-0 md:border-r border-border last:border-0"
              >
                <span className="text-xs font-medium text-primary/50 mb-3 block">
                  {item.number}
                </span>
                <h3 className="font-heading text-xl text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-[1.8]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 md:py-28">
        <div className="container-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-3">
              Compare
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">
              Why Seribo&trade; Over Traditional Implants?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="overflow-x-auto"
          >
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="border-b-2 border-foreground">
                  <th className="py-4 pr-8 text-sm font-medium text-foreground">
                    Feature
                  </th>
                  <th className="py-4 px-6 text-sm font-medium text-muted-foreground text-center">
                    Metal Implants
                  </th>
                  <th className="py-4 px-6 text-sm font-medium text-muted-foreground text-center">
                    Other Bioresorbables
                  </th>
                  <th className="py-4 px-6 text-sm font-medium text-primary text-center">
                    Seribo™
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.feature} className="border-b border-border">
                    <td className="py-4 pr-8 text-sm text-foreground">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {row.metal ? (
                        <Check className="w-4 h-4 text-primary mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {row.other ? (
                        <Check className="w-4 h-4 text-primary mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {row.seribo ? (
                        <Check className="w-4 h-4 text-primary mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Seribo Scaffold System — Product Line 01 */}
      <section className="py-20 md:py-28 bg-bone">
        <div className="container-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-3">
              Product Line 01
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-6">
              Seribo&trade; Scaffold System
            </h2>
            <p className="text-muted-foreground text-[15px] leading-[1.8] max-w-2xl">
              Designed for bone regeneration in trauma, tumor, and defect
              management. Combining silk fibroin bioactivity with PCL's
              resorbability, the system restores bone through osteoconductive
              and bioactive 3D printed scaffolds.
            </p>
          </motion.div>

          {/* Main image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[21/9] overflow-hidden mb-16"
          >
            <img
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&q=80"
              alt="Seribo Scaffold System"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/70">
                Seribo™ Scaffold — SEM imaging, scale 200 µm
              </p>
            </div>
          </motion.div>

          {/* Three scaffold sub-lines */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {scaffoldSublines.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="p-8 md:p-10 bg-bone"
              >
                <span className="text-xs font-medium tracking-[0.2em] text-primary/50 mb-4 block">
                  {item.label}
                </span>
                <h3 className="font-heading text-2xl text-foreground mb-3">
                  {item.title}
                </h3>
                <div className="w-8 h-px bg-primary/30 mb-5" />
                <p className="text-xs font-medium tracking-[0.08em] uppercase text-muted-foreground mb-5">
                  {item.subtitle}
                </p>
                <p className="text-muted-foreground text-sm leading-[1.8] mb-6">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.details.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bioresorbable Fixation System — CMF — Product Line 02 */}
      <section className="py-20 md:py-28">
        <div className="container-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-3">
              Product Line 02
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground">
              Bioresorbable Fixation System — CMF
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="md:col-span-7"
            >
              <div className="relative aspect-[4/3] overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=1200&q=80"
                  alt="CMF Fixation System"
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/70">
                    Seribo™ Fixation Material — SEM imaging, scale 20 µm
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="md:col-span-5"
            >
              <p className="text-muted-foreground text-[15px] leading-[1.8] mb-6">
                A bioresorbable fixation system for the stabilisation of
                fractures and reconstruction of the craniomaxillofacial
                skeleton. These implants provide fixation during bone healing,
                then resorb naturally, avoiding removal surgery.
              </p>
              <p className="text-muted-foreground text-[15px] leading-[1.8] mb-8">
                Especially beneficial in pediatric cases, where ongoing bone
                growth makes permanent metal implants unsuitable. Available in
                CMF Plates, Orbital Plates, Neuro Plates, and Mesh Plates.
              </p>
              <div className="border-t border-border pt-6">
                <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-muted-foreground mb-3">
                  Indications
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Fracture repair and reconstruction in the craniomaxillofacial
                  skeleton (pediatric &amp; adult). Non-load-bearing use in
                  alignment and fixation of fragments, grafts, or substitutes in
                  CMF and mandibular regions.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Plate design features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-16 md:mt-20"
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
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Technology;
