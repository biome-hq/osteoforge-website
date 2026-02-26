import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";
import { Layout } from "@/components/Layout";

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
            src="./seribo.png"
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
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[0.9]">
              Seribo&trade;
            </h1>
            <p className="text-base md:text-lg text-white max-w-lg leading-relaxed">
              A silk fibroin-reinforced polymer composite that combines
              bioactivity, mechanical strength, and 3D printability for
              next-generation bone healing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-12 md:py-24">
        <div className="container-full">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-4"
            >
              <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">
                What is Seribo
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="md:col-span-8"
            >
              <p className="text-foreground text-[17px] leading-[1.8] mb-6">
                Seribo&trade; is a bioactive and bioresorbable platfrom that combines silk fibroin microfibers with PCL.
              </p>
              <p className="text-foreground text-[17px] leading-[1.8] mb-6">
                This natural fibre–reinforced polymer is engineered to support bone regeneration while providing the mechanical strength required for clinical use.
              </p>
              <p className="text-foreground text-[17px] leading-[1.8] mb-6">
                It is designed to promote cellular response and integration with native bone, offer initial structural stability followed by gradual physiological bioresorption, enable compatibility with advanced fabrication techniques.
              </p>
            </motion.div>
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
            className="relative aspect-[4/3] md:aspect-[21/9] overflow-hidden mb-16"
          >
            <img
              src="./scaffold.png"
              alt="Seribo Scaffold System"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="mb-16">
            <p className="text-muted-foreground text-[15px] leading-[1.8] ">
              Seribo&trade; enables a portfolio of regenerative solutions including patient-specific implants, porous bone grafts, and porous bone membranes. Precision-fit implants are 3D printed from individual CT data for exact anatomical conformity, eliminating intraoperative modifications and reducing operating time, while their interconnected porosity supports osteoblast attachment and vascularization. Porous bone grafts function as osteoconductive, bioresorbable scaffolds that guide new bone formation and gradually remodel into native tissue across trauma and defect indications. Porous bone membranes feature a dual-layer architecture with a smooth outer barrier to prevent soft tissue intrusion and a porous inner layer to promote guided bone regeneration, resorbing over time in alignment with healing.
            </p>
          </div>

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
            <h2 className="font-heading text-3xl md:text-5xl text-foreground">
              Seribo&trade; Fixation System
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
                  src="./fixation.png"
                  alt="Seribo&trade; Fixation System"
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
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
                growth makes permanent metal implants unsuitable.
              </p>
              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Fracture repair and reconstruction in the craniomaxillofacial
                  skeleton (pediatric &amp; adult). Non-load-bearing use in
                  alignment and fixation of fragments, grafts, or substitutes in
                  CMF and mandibular regions.
                  <br />
                  <br />
                  <b>Plate Design</b>
                  <br />
                  <br />

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
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Technology;
