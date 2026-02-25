import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Layout } from "@/components/Layout";

const team = [
  {
    name: "Dr Ramya Bojedla, MDS, PhD",
    role: "Founder & CEO",
    bio: "Dr. Ramya Bojedla, Oral Physician and Maxillofacial Radiologist with 4 years of clinical experience, a Ph.D. from IIT Hyderabad, and over 7 years of research expertise, drives innovation in medical device development with her deep clinical insights.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
  },
  {
    name: "Dr Syam Kumar Y, PhD",
    role: "Co-Founder & Chief Scientific Officer",
    bio: "Dr. Syam, with over 15 years of expertise in regulatory affairs, ensures OsteoForge's products meet the highest international quality standards and compliance requirements. His expertise guarantees that our innovations adhere to stringent regulatory benchmarks, ensuring global acceptance and trust.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80",
  },
  {
    name: "Dr Falguni Pati, PhD",
    role: "Advisor",
    bio: "With 20 years of experience, Dr. Pati leads research initiatives at OsteoForge, driving innovation and ensuring the company remains at the forefront of biomedical advancements.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
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
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[0.9]">
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
                OsteoForge is a medical technology startup focused on creating next-generation solutions for bone healing and regeneration. We develop bioactive, bioresorbable, and 3D printed implants that are safe, effective, and naturally integrate with the native bone.
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
      <section className="md:py-28">
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
                    className="w-full h-full object-cover object-top transition-transform duration-[1.5s] ease-out group-hover:scale-105"
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
