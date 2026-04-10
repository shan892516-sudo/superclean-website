import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  {
    title: "Deep Cleaning Timelapse",
    thumbnail:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=500&fit=crop",
    url: "#",
  },
  {
    title: "Our Eco-Friendly Process",
    thumbnail:
      "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=500&fit=crop",
    url: "#",
  },
  {
    title: "Customer Home Tour",
    thumbnail:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
    url: "#",
  },
];

const VideoShowcase = () => {
  return (
    <section id="videos" className="section-padding bg-muted">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-3">
            Watch Us in Action
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            See how we transform homes with our professional cleaning service.
          </p>
        </motion.div>

        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg group cursor-pointer bg-secondary">
                <img
                  src={v.thumbnail}
                  alt={v.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width={800}
                  height={500}
                />
                <div className="absolute inset-0 bg-secondary/40 group-hover:bg-secondary/30 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="h-7 w-7 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>
              <p className="text-center text-sm font-medium text-foreground mt-3">
                {v.title}
              </p>
            </motion.div>
          ))}
        </div>

        <div
          className="md:hidden overflow-x-auto overscroll-x-contain snap-x snap-mandatory scroll-smooth pb-2 scrollbar-hide"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollPaddingLeft: "16px",
            scrollPaddingRight: "16px",
          }}
        >
          <div className="flex gap-4 px-4 w-max">
            {videos.map((v) => (
              <div
                key={v.title}
                className="snap-start shrink-0 w-[82vw] max-w-[340px]"
              >
                <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg bg-secondary">
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    className="w-full h-full object-cover"
                    loading="eager"
                    width={800}
                    height={500}
                  />
                  <div className="absolute inset-0 bg-secondary/35 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg">
                      <Play className="h-7 w-7 text-primary-foreground ml-1" />
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm font-medium text-foreground mt-3">
                  {v.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          Videos coming soon — stay tuned!
        </p>
      </div>
    </section>
  );
};

export default VideoShowcase;