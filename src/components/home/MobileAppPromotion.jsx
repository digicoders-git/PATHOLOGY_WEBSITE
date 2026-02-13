import React from "react";
import { motion } from "framer-motion";
import { FaApple, FaGooglePlay, FaCheckCircle } from "react-icons/fa";

const MobileAppPromotion = () => {
  const features = [
    "Real-time test tracking for patients",
    "Digital workflow management for labs",
    "Instant diagnostic report access",
    "Unified pathological ecosystem",
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-primary">
      {/* Fixed Background Image Layer */}
      <div
        className="absolute inset-0 z-0 opacity-[0.2] pointer-events-none"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "brightness(0.5) contrast(1.2)",
        }}
      ></div>

      {/* Abstract Background Design */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 skew-x-12 translate-x-1/4 z-0"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: App Preview Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 flex justify-center relative"
          >
            {/* Main Phone Mockup */}
            <div className="relative w-[280px] h-[580px] bg-white rounded-[3rem] p-4 shadow-2xl border-[8px] border-primary/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-primary/20 rounded-b-2xl"></div>
              <div className="w-full h-full bg-background rounded-[2.2rem] overflow-hidden flex flex-col p-6">
                <div className="w-12 h-2 bg-gray-200 rounded-full mb-6"></div>
                <div className="flex items-center gap-3 mb-8 text-primary">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold opacity-50 uppercase">
                      Patient Dashboard
                    </div>
                    <div className="text-xs font-black">Test Results Ready</div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-16 bg-white rounded-xl shadow-sm p-3 flex gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gray-50"></div>
                      <div className="flex-1 space-y-2 py-1">
                        <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-50 rounded w-1/2"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Secondary Floating Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-1/4 bg-pure-white p-6 rounded-2xl shadow-2xl border border-secondary/20 max-w-[200px]"
            >
              <div className="text-secondary text-2xl mb-3">
                <FaCheckCircle />
              </div>
              <h4 className="text-primary font-black text-sm uppercase mb-1">
                Live Reports
              </h4>
              <p className="text-primary/50 text-[10px] leading-relaxed">
                Instant notifications for all diagnostic updates.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-10 h-[2px] bg-secondary"></div>
              <span className="text-secondary font-black text-xs uppercase tracking-[0.2em]">
                Mobile Experience
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter mb-8"
            >
              Diagnostics at <br />
              <span className="text-secondary">Your Fingertips</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-base md:text-lg leading-relaxed font-medium mb-10 max-w-xl"
            >
              Our mobile applications are designed for both patients and
              pathology labs. Patients can track tests and reports, while labs
              can manage diagnostic workflows digitally.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-white"
                >
                  <FaCheckCircle className="text-secondary shrink-0" />
                  <span className="text-sm font-bold uppercase tracking-tight">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button className="bg-white text-primary flex items-center gap-3 px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-secondary hover:text-white transition-all shadow-xl">
                <FaApple className="text-xl" />
                App Store
              </button>
              <button className="bg-secondary text-white flex items-center gap-3 px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-xl">
                <FaGooglePlay className="text-lg" />
                Play Store
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-white text-[10px] font-bold uppercase tracking-widest"
            >
              Download the app to experience a more structured diagnostic
              journey.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppPromotion;
