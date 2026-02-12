import React from "react";
import { Link } from "react-router-dom";

const PolicyHero = ({ title, subtitle }) => (
  <section className="relative min-h-[400px] mt-30 flex items-center justify-center overflow-hidden pt-44 pb-20">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop"
        alt="Terms Background"
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

const TermsOfService = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-background">
      <PolicyHero title="Terms of Service" subtitle="Legal Agreement" />
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-pure-white p-10 md:p-16 rounded-[2.5rem] shadow-xl border border-gray-100">
            <div className="prose prose-blue max-w-none">
              <h2 className="text-primary font-black uppercase tracking-tight text-2xl mb-6">
                Agreement to Terms
              </h2>
              <p className="text-primary/70 mb-8 leading-relaxed">
                These Terms of Service constitute a legally binding agreement
                made between you, whether personally or on behalf of an entity
                and our Pathology Center, concerning your access to and use of
                our services.
              </p>

              <h2 className="text-primary font-black uppercase tracking-tight text-2xl mb-6">
                Laboratory Services
              </h2>
              <p className="text-primary/70 mb-8 leading-relaxed">
                Our services include diagnostic testing, sample analysis, and
                reporting. While we strive for absolute accuracy, all dynamic
                biological tests have limitations and should be interpreted by
                qualified medical professionals.
              </p>

              <h2 className="text-primary font-black uppercase tracking-tight text-2xl mb-6">
                User Responsibilities
              </h2>
              <p className="text-primary/70 mb-8 leading-relaxed">
                By using our services, you represent and warrant that all
                registration information you submit will be true, accurate,
                current, and complete. You are responsible for maintaining the
                confidentiality of your account information.
              </p>

              <h2 className="text-primary font-black uppercase tracking-tight text-2xl mb-6">
                Service Modifications
              </h2>
              <p className="text-primary/70 mb-8 leading-relaxed">
                We reserve the right to change, modify, or remove the contents
                of our services at any time or for any reason at our sole
                discretion without notice. We will not be liable to you or any
                third party for any modification, or suspension of the services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsOfService;
