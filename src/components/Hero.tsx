import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight text-background mb-4"
        >
          A Spotless Home, A Healthier Life.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-background/85 mb-8 font-body"
        >
          Floral Park's 4.9-Star Rated Professional Cleaning Service.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#booking">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base px-8 w-full sm:w-auto"
            >
              Get a Free Quote
            </Button>
          </a>

          <a href="tel:9292610266">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white bg-white/10 hover:bg-white/20 hover:text-white font-semibold text-base gap-2 px-8 w-full sm:w-auto opacity-100"
            >
              <Phone className="h-4 w-4" /> Call Now
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;