import React from "react";
import { FaCircleInfo } from "react-icons/fa6";

const RegistrationNote = () => {
  return (
    <section className="pb-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white/50 backdrop-blur-sm border border-primary/5 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-xl flex-shrink-0">
            <FaCircleInfo />
          </div>
          <div>
            <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-1">
              Important Note
            </h4>
            <p className="text-primary/60 text-sm leading-relaxed font-medium">
              Registration allows pathology service coordination, sample
              collection scheduling, and diagnostic reporting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationNote;
