import { Star, ThumbsUp, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Star, label: "4.9/5 Google Rating", color: "text-primary" },
  { icon: ThumbsUp, label: "30+ Five-Star Reviews", color: "text-primary" },
  { icon: MapPin, label: "Nassau County's Choice", color: "text-primary" },
];

const SocialProof = () => (
  <section className="bg-secondary py-6">
    <div className="container-narrow px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3"
          >
            <s.icon className={`h-5 w-5 ${s.color}`} fill="currentColor" />
            <span className="text-sm font-semibold text-secondary-foreground">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
