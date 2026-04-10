import { motion } from "framer-motion";
import { Leaf, Shield, Clock } from "lucide-react";

const features = [
  { icon: Leaf, title: "Eco-Friendly Products", desc: "Safe for your family, pets, and the planet." },
  { icon: Shield, title: "Insured & Bonded", desc: "Full coverage for your peace of mind." },
  { icon: Clock, title: "Flexible Scheduling", desc: "Book times that work around your life." },
];

const About = () => (
  <section id="about" className="section-padding bg-muted">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-3">
          Why SuperClean?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We combine professional-grade results with green cleaning practices to deliver a healthier home for your family.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
              <f.icon className="h-7 w-7 text-accent-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
