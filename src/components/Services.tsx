import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Home, RefreshCw, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const services = [
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    short: "Top-to-bottom scrub for a truly immaculate home.",
    detail: "Our deep cleaning service covers every surface — from baseboards and ceiling fans to inside appliances and behind furniture. Using eco-friendly products, we eliminate built-up grime, allergens, and bacteria for a home that feels brand new.",
  },
  {
    icon: Home,
    title: "Move-In / Move-Out",
    short: "Start fresh or leave it spotless for the next tenant.",
    detail: "Whether you're settling into a new place or handing over the keys, our move-in/move-out cleaning ensures every corner is pristine. We handle cabinets, closets, bathrooms, kitchens, and all living spaces so you can focus on the move.",
  },
  {
    icon: RefreshCw,
    title: "Regular Maintenance",
    short: "Weekly or bi-weekly visits to keep things consistently clean.",
    detail: "Maintain a consistently clean home with our scheduled maintenance plans. Choose weekly, bi-weekly, or monthly visits tailored to your lifestyle. Each session includes dusting, vacuuming, mopping, kitchen and bathroom sanitation, and more.",
  },
];

const Services = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-3">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Eco-friendly cleaning solutions tailored to your home's unique needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-lg border border-border p-8 shadow-card hover:shadow-elevated transition-shadow duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-5">
                <s.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-1">{s.short}</p>
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => setOpen(i)}
              >
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>

        <Dialog open={open !== null} onOpenChange={() => setOpen(null)}>
          {open !== null && (
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle className="font-heading text-xl flex items-center gap-2">
                  {(() => { const Icon = services[open].icon; return <Icon className="h-5 w-5 text-primary" />; })()}
                  {services[open].title}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground mt-3 leading-relaxed">
                  {services[open].detail}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <a href="#booking">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => setOpen(null)}>
                    Get a Free Quote
                  </Button>
                </a>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default Services;
