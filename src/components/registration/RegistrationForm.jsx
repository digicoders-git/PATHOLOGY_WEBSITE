import React, { useState, useRef, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaNotesMedical,
  FaCheckCircle,
  FaChevronDown,
} from "react-icons/fa";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    mobile: "",
    email: "",
    testDetails: "",
    collectionPreference: "lab",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const genderRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (genderRef.current && !genderRef.current.contains(event.target)) {
        setIsGenderOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Required";
    if (!formData.age) newErrors.age = "Required";
    if (!formData.gender) newErrors.gender = "Required";
    if (!formData.mobile) newErrors.mobile = "Required";
    else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "10 digits";
    if (!formData.email) newErrors.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid";
    if (!formData.testDetails.trim()) newErrors.testDetails = "Required";
    if (formData.collectionPreference === "home" && !formData.address.trim()) {
      newErrors.address = "Required for home collection";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const selectGender = (val) => {
    setFormData({ ...formData, gender: val });
    setIsGenderOpen(false);
    if (errors.gender) setErrors({ ...errors, gender: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-md mx-auto bg-pure-white p-10 rounded-3xl shadow-xl border border-secondary/10">
            <FaCheckCircle className="text-secondary text-5xl mx-auto mb-6 animate-pulse" />
            <h2 className="text-2xl font-semibold text-primary mb-4 uppercase tracking-tight">
              Registration Sent!
            </h2>
            <p className="text-primary/60 text-sm mb-8">
              Out team will call you shortly to confirm your booking.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-primary text-white py-4 rounded-xl font-semibold uppercase text-xs tracking-widest hover:bg-secondary transition-all"
            >
              Done
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-pure-white rounded-3xl shadow-xl overflow-hidden border border-gray-50">
          <div className="bg-primary p-8 text-center">
            <h2 className="text-white text-2xl font-semibold uppercase tracking-tight">
              Patient Registration
            </h2>
            <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] mt-1 font-medium italic">
              Complete clinical details below
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">
              {/* Full Name */}
              <div className="md:col-span-3 space-y-1.5">
                <label className="text-primary/70 font-semibold text-[10px] uppercase tracking-wider flex items-center gap-2">
                  <FaUser className="text-secondary text-[8px]" /> Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Abhay Vishwakarma"
                  className={`w-full bg-background border ${errors.fullName ? "border-red-500" : "border-gray-100"} p-3 rounded-xl text-primary font-medium focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm`}
                />
              </div>

              {/* Age */}
              <div className="md:col-span-1 space-y-1.5">
                <label className="text-primary/70 font-semibold text-[10px] uppercase tracking-wider flex items-center gap-2">
                  <FaCalendarAlt className="text-secondary text-[8px]" /> Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="25"
                  className={`w-full bg-background border ${errors.age ? "border-red-500" : "border-gray-100"} p-3 rounded-xl text-primary font-medium focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm`}
                />
              </div>

              {/* Mobile */}
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-primary/70 font-semibold text-[10px] uppercase tracking-wider flex items-center gap-2">
                  <FaPhone className="text-secondary text-[8px]" /> Mobile
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="9999999999"
                  className={`w-full bg-background border ${errors.mobile ? "border-red-500" : "border-gray-100"} p-3 rounded-xl text-primary font-medium focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm`}
                />
              </div>

              {/* Email */}
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-primary/70 font-semibold text-[10px] uppercase tracking-wider flex items-center gap-2">
                  <FaEnvelope className="text-secondary text-[8px]" /> Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="abhay@example.com"
                  className={`w-full bg-background border ${errors.email ? "border-red-500" : "border-gray-100"} p-3 rounded-xl text-primary font-medium focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm`}
                />
              </div>

              {/* Modern Gender Dropdown */}
              <div className="md:col-span-2 space-y-1.5" ref={genderRef}>
                <label className="text-primary/70 font-semibold text-[10px] uppercase tracking-wider flex items-center gap-2">
                  Gender
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsGenderOpen(!isGenderOpen)}
                    className={`w-full bg-background border ${errors.gender ? "border-red-500" : "border-gray-100"} p-3 rounded-xl text-primary font-medium flex justify-between items-center text-sm transition-all focus:ring-2 focus:ring-primary/10`}
                  >
                    <span
                      className={
                        formData.gender ? "text-primary" : "text-primary/30"
                      }
                    >
                      {formData.gender
                        ? formData.gender.toUpperCase()
                        : "Select Gender"}
                    </span>
                    <FaChevronDown
                      className={`text-[10px] transition-transform ${isGenderOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isGenderOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border border-gray-100 rounded-xl shadow-2xl mt-2 z-30 overflow-hidden animate-in fade-in slide-in-from-top-2">
                      {["Male", "Female", "Other"].map((g) => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => selectGender(g)}
                          className="w-full p-3 text-left hover:bg-background text-sm font-medium text-primary/70 hover:text-secondary transition-all flex items-center justify-between group"
                        >
                          {g}
                          {formData.gender === g && (
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Collection Preference */}
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-primary/70 font-semibold text-[10px] uppercase tracking-wider">
                  Test Preference
                </label>
                <div className="flex bg-background p-1 rounded-xl border border-gray-100 h-[46px]">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, collectionPreference: "lab" })
                    }
                    className={`flex-1 rounded-lg text-[10px] font-semibold uppercase tracking-tight transition-all ${formData.collectionPreference === "lab" ? "bg-primary text-white shadow-md" : "text-primary/50 hover:text-primary"}`}
                  >
                    Lab Visit
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, collectionPreference: "home" })
                    }
                    className={`flex-1 rounded-lg text-[10px] font-semibold uppercase tracking-tight transition-all ${formData.collectionPreference === "home" ? "bg-primary text-white shadow-md" : "text-primary/50 hover:text-primary"}`}
                  >
                    Home Pick
                  </button>
                </div>
              </div>

              {/* Test Details */}
              <div className="md:col-span-4 space-y-1.5">
                <label className="text-primary/70 font-semibold text-[10px] uppercase tracking-wider flex items-center gap-2">
                  <FaNotesMedical className="text-secondary text-[8px]" /> Test
                  Details
                </label>
                <textarea
                  name="testDetails"
                  value={formData.testDetails}
                  onChange={handleChange}
                  rows="2"
                  placeholder="E.g. Full Body Checkup..."
                  className={`w-full bg-background border ${errors.testDetails ? "border-red-500" : "border-gray-100"} p-3 rounded-xl text-primary font-medium focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm`}
                ></textarea>
              </div>

              {/* Address */}
              <div className="md:col-span-4 space-y-1.5">
                <label className="text-primary/70 font-semibold text-[10px] uppercase tracking-wider flex items-center gap-2">
                  <FaMapMarkerAlt className="text-secondary text-[8px]" />{" "}
                  Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="2"
                  placeholder="Complete home address..."
                  className={`w-full bg-background border ${errors.address ? "border-red-500" : "border-gray-100"} p-3 rounded-xl text-primary font-medium focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm`}
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-secondary hover:bg-primary text-white py-4 rounded-xl font-bold uppercase text-xs tracking-[0.2em] shadow-lg hover:shadow-xl transition-all active:scale-[0.98] mt-2"
            >
              Submit Registration
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
