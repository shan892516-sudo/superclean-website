import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Vero J.",
    text: "The place was super clean! They paid attention to every detail and left my home smelling amazing. I'll definitely be booking again.",
    rating: 5,
  },
  {
    name: "Emily C.",
    text: "Incredible quality and value. The team was punctual, professional, and thorough. My kitchen has never looked this good!",
    rating: 5,
  },
  {
    name: "Michael R.",
    text: "Best cleaning service in Nassau County. They use eco-friendly products which is a huge plus for our family. Highly recommend!",
    rating: 5,
  },
];

const Testimonials = () => {
  const [idx, setIdx] = useState(0);

  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[idx];

  return (
    <section id="reviews" className="section-padding bg-background">
      <div className="container-narrow max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-3">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="bg-card border border-border rounded-lg p-8 shadow-card"
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground italic text-lg leading-relaxed mb-6">
                "{t.text}"
              </p>
              <p className="font-heading font-semibold text-foreground">{t.name}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
