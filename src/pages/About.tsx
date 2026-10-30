import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Layout } from "@/components/Layout";

const team = [
  {
    name: "Dr Ramya Bojedla, MDS, PhD",
    role: "Founder & CEO",
    bio: "Dr. Ramya Bojedla, Oral Physician and Maxillofacial Radiologist with 4 years of clinical experience, a Ph.D. from IIT Hyderabad, and over 7 years of research expertise, drives innovation in medical device development with her deep clinical insights.",
    image:
      "./dr-ramya.webp",
  },
  {
    name: "Dr Syam Kumar Y, PhD",
    role: "Co-Founder & CSO",
    bio: "Dr. Syam, with over 15 years of expertise in regulatory affairs, ensures OsteoForge's products meet the highest international quality standards and compliance requirements. His expertise guarantees that our innovations adhere to stringent regulatory benchmarks, ensuring global acceptance and trust.",
    image:
      "./syam.webp",
  },
  {
    name: "Dr Falguni Pati, PhD",
    role: "Advisor",
    bio: "With 20 years of experience, Dr. Pati leads research initiatives at OsteoForge, driving innovation and ensuring the company remains at the forefront of biomedical advancements.",
    image:
      "./falguni.webp",
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
        className="relative h-screen -mt-16 md:-mt-20 -mb-px overflow-hidden"
      >
        <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
          <img
            src="./about-page.webp"
            alt="OsteoForge research laboratory"
            className="w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-foreground/20 via-foreground/10 to-foreground/50" />
        </motion.div>

        <div className="relative container-full h-full flex flex-col justify-end pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[0.9] md:leading-none">
              Redefining
              <br />
              <span className="italic font-normal">Bone Healing</span>
            </h1>
            <p className="text-base md:text-lg text-white max-w-lg leading-relaxed md:leading-7">
              Safe, effective, and affordable next-generation bone regeneration
              technology, designed in India for the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 md:py-28">
        <div className="container-full">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-4"
            >
              <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight md:leading-10">
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
                <div className="aspect-editorial overflow-hidden mb-6 bg-muted group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-[1.5s] ease-out"
                  />
                </div>
                <h3 className="font-heading text-lg text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-xs font-medium tracking-editorial uppercase text-primary mb-4">
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
