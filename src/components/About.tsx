import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import aboutWindow from "@/assets/about-window.jpg";
import aboutOffice from "@/assets/about-office.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f6f6f4] py-20 md:py-28"
    >
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-[620px] min-h-[500px] md:min-h-[620px]"
          >
            <Sparkles className="absolute left-[8%] top-[12%] z-30 h-7 w-7 text-cyan-500" />
            <Sparkles className="absolute left-[72%] top-[8%] z-30 h-10 w-10 text-stone-300" />
            <Sparkles className="absolute left-[10%] bottom-[10%] z-30 h-8 w-8 text-stone-300" />

            {/* Big image */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute left-0 top-0 h-[380px] w-[260px] overflow-hidden rounded-t-[140px] rounded-b-[60px] border border-slate-300/70 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:h-[440px] sm:w-[300px] md:h-[560px] md:w-[340px]"
            >
              <img
                src={aboutWindow}
                alt="SuperClean team member cleaning a window"
                className="h-full w-full object-cover object-[58%_50%]"
              />
            </motion.div>

            {/* Small overlapping image */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="absolute bottom-0 right-0 h-[260px] w-[200px] overflow-hidden rounded-t-[110px] rounded-b-[50px] border border-slate-300/70 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.14)] sm:h-[320px] sm:w-[240px] md:h-[420px] md:w-[300px]"
            >
              <img
                src={aboutOffice}
                alt="SuperClean team member cleaning an office desk"
                className="h-full w-full object-cover object-[62%_50%]"
              />
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto w-full max-w-[640px]"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">
              About ProFinish Cleaning Co.
            </p>

            <h2 className="mb-6 font-heading text-4xl font-bold leading-tight text-foreground md:text-5xl">
              A cleaner space.
              <br />
              A better first impression.
            </h2>

            <p className="mb-6 text-base leading-8 text-muted-foreground md:text-lg">
              At ProFinish Cleaning Co., we go beyond surface-level cleaning. We
              help homes and businesses feel fresh, polished, and ready for the
              people who matter most. Our team focuses on consistent quality,
              real attention to detail, and service you can rely on.
            </p>

            <p className="mb-10 text-base leading-8 text-muted-foreground md:text-lg">
              Whether you need recurring cleaning, deep cleaning, move-in and
              move-out service, or office cleaning, our goal is simple: give
              you a cleaner, more comfortable space without the stress.
            </p>

            <a
              href="#booking"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              Get a Free Quote
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;