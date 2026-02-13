import React from "react";
import { FaCircleInfo } from "react-icons/fa6";

const RegistrationNote = () => {
  return (
    <section className="pb-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white border border-gray-100 p-6 md:p-8 rounded-xl flex flex-col md:flex-row items-center gap-6 text-center md:text-left shadow-sm relative overflow-hidden">
          {/* Pathology Background Watermark - Full Secondary Theme */}
          <div className="absolute inset-0 pointer-events-none bg-secondary/5 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/5910956/pexels-photo-5910956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-full object-cover opacity-[0.1] grayscale brightness-50 contrast-125"
            />
            {/* Deep Secondary Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-secondary/15 via-transparent to-secondary/5"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center text-primary text-xl shrink-0">
              <FaCircleInfo />
            </div>
            <div>
              <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-1">
                Onboarding Process
              </h4>
              <p className="text-primary/60 text-sm leading-relaxed font-medium">
                After submitting your registration, our compliance team will
                verify your NABL/ISO certifications and laboratory
                infrastructure within 48-72 hours. Once approved, you can start
                receiving digital sample collection requests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationNote;
