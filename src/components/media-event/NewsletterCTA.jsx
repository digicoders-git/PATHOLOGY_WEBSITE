import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaRegEnvelope } from "react-icons/fa";

const NewsletterCTA = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.", {
        style: {
          borderRadius: "12px",
          background: "#111",
          color: "#fff",
          fontSize: "13px",
        },
      });
      return;
    }

    toast.success("Thank you for subscribing to Labo India updates!", {
      style: {
        borderRadius: "12px",
        background: "#111",
        color: "#fff",
        fontSize: "13px",
      },
      iconTheme: {
        primary: "#FF0000",
        secondary: "#FFFFFF",
      },
    });
    setEmail("");
  };

  return (
    <section className="py-6 pb-20 bg-white">
      <div className="container mx-auto px-6 lg:px-16 max-w-[1360px]">
        <div className="relative overflow-hidden bg-red-50/70 border border-red-100 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left Side: Logo + Text */}
          <div className="flex items-center gap-4 sm:gap-6 w-full lg:w-auto">
            {/* Labo India Logo Icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-secondary text-white flex items-center justify-center shrink-0 shadow-lg shadow-secondary/20">
              <div className="text-center">
                <span className="block text-xs sm:text-sm font-black leading-tight">LABO°</span>
                <span className="block text-[8px] sm:text-[9px] font-bold tracking-widest leading-none">INDIA</span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-black tracking-tight font-sans">
                Stay Updated with Labo India
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm font-medium mt-1">
                Subscribe to our newsletter for the latest news and updates.
              </p>
            </div>
          </div>

          {/* Right Side: Subscription Form Input Bar */}
          <form
            onSubmit={handleSubscribe}
            className="w-full lg:w-auto flex-1 max-w-lg flex items-center bg-white rounded-full p-1.5 border border-gray-200 shadow-sm focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/20 transition-all"
          >
            <div className="pl-4 pr-2 text-gray-400">
              <FaRegEnvelope className="text-base" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full bg-transparent text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-hidden py-2"
            />
            <button
              type="submit"
              className="bg-secondary hover:bg-red-700 text-white font-black text-xs sm:text-sm px-6 sm:px-8 py-2.5 rounded-full transition-all duration-300 shadow-md shadow-secondary/20 hover:shadow-lg active:scale-95 shrink-0 cursor-pointer"
            >
              Subscribe
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
