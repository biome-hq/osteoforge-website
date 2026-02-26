import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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

const team = [
  {
    name: "Dr Ramya Bojedla, MDS, PhD",
    role: "Founder & CEO",
    bio: "Dr. Ramya Bojedla, Oral Physician and Maxillofacial Radiologist with 4 years of clinical experience, a Ph.D. from IIT Hyderabad, and over 7 years of research expertise, drives innovation in medical device development with her deep clinical insights.",
    image:
      "./dr-ramya.png",
  },
  {
    name: "Dr Syam Kumar Y, PhD",
    role: "Co-Founder & Chief Scientific Officer",
    bio: "Dr. Syam, with over 15 years of expertise in regulatory affairs, ensures OsteoForge's products meet the highest international quality standards and compliance requirements. His expertise guarantees that our innovations adhere to stringent regulatory benchmarks, ensuring global acceptance and trust.",
    image:
      "./syam.png",
  },
  {
    name: "Dr Falguni Pati, PhD",
    role: "Advisor",
    bio: "With 20 years of experience, Dr. Pati leads research initiatives at OsteoForge, driving innovation and ensuring the company remains at the forefront of biomedical advancements.",
    image:
      "./falguni.png",
  },
];

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
      <section
        ref={heroRef}
        className="relative h-screen -mt-16 md:-mt-20 mb-[-1px] overflow-hidden"
      >
        <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
          <img
            src="./about-page.png"
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
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[0.9]">
              Redefining
              <br />
              <span className="italic font-normal">Bone Healing</span>
            </h1>
            <p className="text-base md:text-lg text-white max-w-lg leading-relaxed">
              Safe, effective, and affordable next-generation bone regeneration
              technology, designed in India for the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-24 md:py-36">
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
                About Us
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
                OsteoForge is a medical technology startup focused on developing next-generation solutions for bone healing and regeneration. We design bioactive, bioresorbable implants that are safe, effective, and engineered to integrate naturally with bone.
              </p>
              <p className="text-foreground text-[17px] leading-[1.8] mb-6">
                Our goal is to replace traditional metal implants with advanced materials that promote natural bone growth, dissolve safely over time, and remove the need for secondary surgeries.
              </p>
              <p className="text-foreground text-[17px] leading-[1.8] mb-6">
                With world-class innovations made in India, OsteoForge is redefining regenerative healthcare and taking breakthrough solutions from India to the world.
              </p>
            </motion.div>
          </div>
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

      {/* Team Section */}
      <section className="py-20 md:py-28">
        <div className="container-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">
              The Team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Portrait */}
                <div className="aspect-[3/4] overflow-hidden mb-6 bg-muted group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-[1.5s] ease-out"
                  />
                </div>
                <h3 className="font-heading text-lg text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-primary mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-[1.8]">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
