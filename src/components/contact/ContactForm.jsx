import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCommentAlt,
} from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return; // Allow only digits during typing
      if (value.length > 10) return; // Prevent more than 10 digits
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Reset error when user starts typing correctly
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Must be a 10-digit number";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Invalid Indian mobile number";
    }

    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
      alert("Success! Your message has been sent.");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setErrors({});
    }
  };

  const inputClasses = (name) =>
    `w-full bg-gray-100 border ${errors[name] ? "border-red-500 focus:ring-red-100" : "border-gray-100 focus:ring-secondary/20 focus:border-secondary"} rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all`;
  const labelClasses =
    "text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block";
  const errorClasses = "text-[10px] text-red-500 font-bold mt-1 ml-1";

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight uppercase tracking-tight"
          >
            Send Us a <span className="text-secondary">Message</span>
          </motion.h2>
          <p className="text-gray-500 text-sm italic max-w-xl mx-auto">
            "Have a specific request or feedback? Fill out the form below and
            our team will get back to you shortly."
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClasses}>Full Name</label>
                <div className="relative">
                  <FaUser
                    className={`absolute left-4 top-1/2 -translate-y-1/2 ${errors.name ? "text-red-300" : "text-gray-300"} text-xs`}
                  />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => validateField("name", e.target.value)}
                    placeholder="Aman Kumar"
                    className={`${inputClasses("name")} pl-10`}
                  />
                </div>
                {errors.name && <p className={errorClasses}>{errors.name}</p>}
              </div>

              <div>
                <label className={labelClasses}>Email Address</label>
                <div className="relative">
                  <FaEnvelope
                    className={`absolute left-4 top-1/2 -translate-y-1/2 ${errors.email ? "text-red-300" : "text-gray-300"} text-xs`}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => validateField("email", e.target.value)}
                    placeholder="aman@example.com"
                    className={`${inputClasses("email")} pl-10`}
                  />
                </div>
                {errors.email && <p className={errorClasses}>{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClasses}>Phone Number (10 Digits)</label>
                <div className="relative">
                  <FaPhone
                    className={`absolute left-4 top-1/2 -translate-y-1/2 ${errors.phone ? "text-red-300" : "text-gray-300"} text-xs`}
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => validateField("phone", e.target.value)}
                    placeholder="9999999999"
                    className={`${inputClasses("phone")} pl-10`}
                  />
                </div>
                {errors.phone && <p className={errorClasses}>{errors.phone}</p>}
              </div>
              <div>
                <label className={labelClasses}>Subject</label>
                <div className="relative">
                  <FaCommentAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 text-xs" />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="General Inquiry"
                    className={`${inputClasses("subject")} pl-10`}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className={labelClasses}>Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) => validateField("message", e.target.value)}
                rows="4"
                placeholder="How can we help you today?"
                className={inputClasses("message")}
              ></textarea>
              {errors.message && (
                <p className={errorClasses}>{errors.message}</p>
              )}
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-flex items-center gap-3 px-10 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-black transition-all shadow-xl text-sm uppercase tracking-tight group"
              >
                <span>Send Message</span>
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
