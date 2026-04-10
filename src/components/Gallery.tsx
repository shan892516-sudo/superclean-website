import React, { useRef, useState } from "react";

import before1 from "@/assets/before1.png";
import after1 from "@/assets/after1.png";
import before2 from "@/assets/before2.png";
import after2 from "@/assets/after2.png";
import before3 from "@/assets/before-living.jpg";
import after3 from "@/assets/after-living.jpg";

type BeforeAfterCardProps = {
  before: string;
  after: string;
  title: string;
};

const BeforeAfterCard = ({ before, after, title }: BeforeAfterCardProps) => {
  const [slider, setSlider] = useState(50);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);

  const updateSlider = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const percent = ((clientX - rect.left) / rect.width) * 100;
    const clamped = Math.max(0, Math.min(100, percent));
    setSlider(clamped);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateSlider(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    updateSlider(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <div className="flex w-full flex-col items-center">
      <div className="w-full max-w-[350px] overflow-hidden rounded-[20px] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.10)] sm:max-w-[380px] md:max-w-[360px]">
        <div
          ref={containerRef}
          className="relative aspect-[16/11] w-full overflow-hidden rounded-[20px] bg-slate-100"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          <img
            src={after}
            alt={`${title} after`}
            className="absolute inset-0 h-full w-full object-cover pointer-events-none select-none"
            draggable={false}
          />

          <img
            src={before}
            alt={`${title} before`}
            className="absolute inset-0 h-full w-full object-cover pointer-events-none select-none"
            style={{
              clipPath: `inset(0 ${100 - slider}% 0 0)`,
            }}
            draggable={false}
          />

          <div className="absolute left-4 top-4 z-20 min-w-[84px] rounded-[10px] bg-[#dbe8f3] px-4 py-[10px] text-center text-[13px] font-semibold leading-none text-white shadow-sm">
            Before
          </div>

          <div className="absolute right-4 top-4 z-20 min-w-[84px] rounded-[10px] bg-[#5b926f] px-4 py-[10px] text-center text-[13px] font-semibold leading-none text-white shadow-sm">
            After
          </div>

          <div
            className="absolute top-0 z-20 h-full w-[2px] bg-white/90"
            style={{ left: `${slider}%`, transform: "translateX(-50%)" }}
          />

          <div
            className="absolute top-1/2 z-30 cursor-ew-resize touch-none"
            style={{ left: `${slider}%`, transform: "translate(-50%, -50%)" }}
          >
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[#5b926f] bg-white shadow-md">
              <span className="text-[16px] font-semibold leading-none text-[#5b926f]">
                ‹›
              </span>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-4 text-[15px] font-medium text-slate-700">
        {title}
      </h3>
    </div>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="bg-white px-4 py-[56px] md:py-[80px]">
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="text-[34px] font-bold text-slate-900 md:text-[54px]">
            See the Difference
          </h2>

          <p className="mt-4 text-[16px] text-slate-600 md:text-[20px]">
            Drag the slider to reveal our before &amp; after transformations.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-8 md:grid md:grid-cols-3 md:gap-6 md:justify-items-center">
          <BeforeAfterCard before={before1} after={after1} title="Kitchen" />
          <BeforeAfterCard before={before2} after={after2} title="Bathroom" />
          <BeforeAfterCard before={before3} after={after3} title="Living Room" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;