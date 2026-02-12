import React from "react";
import { Link } from "react-router-dom";

const PolicyHero = ({ title, subtitle }) => (
  <section className="relative min-h-[400px] mt-30 flex items-center justify-center overflow-hidden pt-44 pb-20">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
        alt="Policy Background"
        className="w-full h-full object-cover object-[center_10%] opacity-60"
      />
      <div className="absolute inset-0 bg-[#1E3A5F]/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F] via-transparent to-transparent"></div>
    </div>
    <div className="container mx-auto px-6 relative z-10 text-center">
      <span className="text-secondary font-bold text-xs uppercase tracking-[0.4em] mb-4 block">
        {subtitle}
      </span>
      <h1 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tight mb-8">
        {title}
      </h1>
      <div className="flex items-center justify-center gap-3 text-white/90 text-xs font-medium uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md w-fit mx-auto px-8 py-3 rounded-full border border-white/20">
        <Link to="/" className="hover:text-secondary transition-colors">
          Home
        </Link>
        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
        <span className="text-white/70">{title}</span>
      </div>
    </div>
  </section>
);

const PrivacyPolicy = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-background">
      <PolicyHero title="Privacy Policy" subtitle="Legal Information" />
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-pure-white p-10 md:p-16 rounded-[2.5rem] shadow-xl border border-gray-100">
            <div className="prose prose-blue max-w-none">
              <h2 className="text-primary font-black uppercase tracking-tight text-2xl mb-6">
                Introduction
              </h2>
              <p className="text-primary/70 mb-8 leading-relaxed">
                Welcome to our Pathology Center. We are committed to protecting
                your personal information and your right to privacy. If you have
                any questions or concerns about our policy, or our practices
                with regards to your personal information, please contact us.
              </p>

              <h2 className="text-primary font-black uppercase tracking-tight text-2xl mb-6">
                Information We Collect
              </h2>
              <p className="text-primary/70 mb-8 leading-relaxed">
                We collect personal information that you voluntarily provide to
                us when registering at the laboratory, expressing an interest in
                obtaining information about us or our services, or otherwise
                contacting us.
              </p>

              <h2 className="text-primary font-black uppercase tracking-tight text-2xl mb-6">
                How We Use Your Information
              </h2>
              <p className="text-primary/70 mb-8 leading-relaxed">
                We use personal information collected via our website for a
                variety of business purposes described below. We process your
                personal information for these purposes in reliance on our
                legitimate business interests, in order to enter into or perform
                a contract with you, with your consent, and/or for compliance
                with our legal obligations.
              </p>

              <h2 className="text-primary font-black uppercase tracking-tight text-2xl mb-6">
                Data Security
              </h2>
              <p className="text-primary/70 mb-8 leading-relaxed">
                We have implemented appropriate technical and organizational
                security measures designed to protect the security of any
                personal information we process. However, please also remember
                that we cannot guarantee that the internet itself is 100%
                secure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
