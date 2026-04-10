import React from "react";
import { Leaf, Shield, Clock3 } from "lucide-react";

const Features = () => {
  return (
    <section className="bg-white px-4 py-[60px] md:py-[70px]">
      <div className="mx-auto max-w-[1000px]">
        
        {/* Title */}
        <div className="text-center max-w-[700px] mx-auto">
          <h2 className="text-[30px] md:text-[38px] font-bold text-slate-900">
            Why SuperClean?
          </h2>

          <p className="mt-3 text-[16px] md:text-[17px] text-slate-600">
            We combine professional-grade results with green cleaning practices to
            deliver a healthier home for your family.
          </p>
        </div>

        {/* Features */}
        <div className="mt-[40px] grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-slate-50">
              <Leaf className="h-6 w-6 text-[#3f7f5f]" />
            </div>

            <h3 className="mt-4 text-[18px] font-semibold text-slate-900">
              Eco-Friendly Products
            </h3>

            <p className="mt-2 text-[14px] text-slate-600">
              Safe for your family, pets, and the planet.
            </p>
          </div>

          {/* 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-slate-50">
              <Shield className="h-6 w-6 text-[#3f7f5f]" />
            </div>

            <h3 className="mt-4 text-[18px] font-semibold text-slate-900">
              Insured &amp; Bonded
            </h3>

            <p className="mt-2 text-[14px] text-slate-600">
              Full coverage for your peace of mind.
            </p>
          </div>

          {/* 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-slate-50">
              <Clock3 className="h-6 w-6 text-[#3f7f5f]" />
            </div>

            <h3 className="mt-4 text-[18px] font-semibold text-slate-900">
              Flexible Scheduling
            </h3>

            <p className="mt-2 text-[14px] text-slate-600">
              Book times that work around your life.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;