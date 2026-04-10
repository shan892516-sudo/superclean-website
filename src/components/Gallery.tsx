import { useState } from "react";
import { motion } from "framer-motion";

import beforeKitchen from "@/assets/before-kitchen.jpg";
import afterKitchen from "@/assets/after-kitchen.jpg";
import beforeBathroom from "@/assets/before-bathroom.jpg";
import afterBathroom from "@/assets/after-bathroom.jpg";
import beforeLiving from "@/assets/before-living.jpg";
import afterLiving from "@/assets/after-living.jpg";

const pairs = [
  { label: "Kitchen", before: beforeKitchen, after: afterKitchen },
  { label: "Bathroom", before: beforeBathroom, after: afterBathroom },
  { label: "Living Room", before: beforeLiving, after: afterLiving },
];

const BeforeAfterSlider = ({
  before,
  after,
  label,
}: {
  before: string;
  after: string;
  label: string;
}) => {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg aspect-[4/3] select-none group bg-white">
      <img
        src={after}
        alt={`${label} after cleaning`}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={before}
          alt={`${label} before cleaning`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
      </div>

      <div
        className="absolute top-0 bottom-0 z-10"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-0 bottom-0 w-0.5 -translate-x-1/2 bg-background/90" />
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-md cursor-ew-resize">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-primary"
          >
            <path
              d="M5 3L1.5 8L5 13M11 3L14.5 8L11 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <span className="absolute top-3 left-3 bg-secondary/80 text-secondary-foreground text-xs font-semibold px-2 py-1 rounded">
        Before
      </span>
      <span className="absolute top-3 right-3 bg-primary/80 text-primary-foreground text-xs font-semibold px-2 py-1 rounded">
        After
      </span>

      <input
        type="range"
        min="0"
        max="100"
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
        aria-label={`Before and after slider for ${label}`}
      />
    </div>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-3">
            See the Difference
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Drag the slider to reveal our before &amp; after transformations.
          </p>
        </motion.div>

        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {pairs.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <BeforeAfterSlider {...p} />
              <p className="text-center text-sm font-medium text-muted-foreground mt-3">
                {p.label}
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
            {pairs.map((p) => (
              <div
                key={p.label}
                className="snap-start shrink-0 w-[82vw] max-w-[340px]"
              >
                <BeforeAfterSlider {...p} />
                <p className="text-center text-sm font-medium text-muted-foreground mt-3">
                  {p.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;