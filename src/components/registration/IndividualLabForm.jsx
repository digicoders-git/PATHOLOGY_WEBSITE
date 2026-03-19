import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHospital,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUserTie,
  FaVial,
  FaCertificate,
  FaClock,
  FaCreditCard,
  FaCheckCircle,
  FaExclamationCircle,
  FaUpload,
  FaChevronDown,
} from "react-icons/fa";
import { getTestServices } from "../../apis/testService";
import { createRegistration } from "../../apis/registration";

const Section = ({ title, icon: Icon, children, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
    className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 mb-8 group transition-all duration-300 relative overflow-hidden ring-1 ring-gray-200/50"
  >
    {/* Minimal Accent Bar */}
    <div className="absolute top-0 left-0 w-full h-1 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-50">
        <div className="w-10 h-10 bg-secondary/5 rounded-lg flex items-center justify-center text-secondary text-lg group-hover:bg-secondary group-hover:text-white transition-all duration-300">
          <Icon />
        </div>
        <div>
          <h3 className="text-primary font-bold text-lg md:text-xl tracking-tight">
            {title}
          </h3>
          <div className="h-0.5 w-8 bg-secondary rounded-full mt-1.5 transition-all duration-500 group-hover:w-16"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  </motion.div>
);

const ModernDropdown = ({ label, options, value, onChange, error }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getDisplayLabel = () => {
    if (!value) return `Select ${label}`;
    const selected = options.find((opt) =>
      typeof opt === "object" ? opt.value === value : opt === value,
    );
    return typeof selected === "object" ? selected.label : selected;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-white border ${error ? "border-red-500" : "border-gray-200"} p-3 rounded-lg text-primary font-medium flex justify-between items-center text-sm transition-all hover:border-primary/40 focus:ring-2 focus:ring-primary/5 cursor-pointer shadow-xs outline-none`}
      >
        <span className={value ? "text-primary font-semibold" : "text-black/40 font-medium"}>
          {getDisplayLabel()}
        </span>
        <FaChevronDown
          className={`text-[10px] transition-transform duration-300 opacity-40 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-[100] top-full left-0 w-full mt-1 bg-white border border-gray-100 rounded-lg shadow-xl overflow-hidden max-h-60 overflow-y-auto"
          >
            <div className="p-1">
              {options.map((opt) => {
                const optValue = typeof opt === "object" ? opt.value : opt;
                const optLabel = typeof opt === "object" ? opt.label : opt;
                const isSelected = value === optValue;
                return (
                  <button
                    key={optValue}
                    type="button"
                    onClick={() => {
                      onChange(optValue);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm font-semibold rounded-md transition-all duration-200 cursor-pointer mb-0.5 last:mb-0 ${isSelected
                      ? "bg-primary text-white"
                      : "text-black/40 hover:bg-primary/5 hover:text-primary"
                      }`}
                  >
                    {optLabel}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  required,
  options,
}) => {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-end px-1">
        <label className="text-black font-bold text-[9px] uppercase tracking-widest flex items-center gap-1.5 cursor-pointer select-none">
          {label} {required && <span className="text-secondary text-[14px] leading-none -mt-0.5">*</span>}
        </label>
      </div>

      {type === "select" ? (
        <ModernDropdown
          label={label}
          options={options}
          value={value}
          onChange={(val) => onChange({ target: { name, value: val } })}
          error={error}
        />
      ) : type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows="3"
          className={`w-full bg-white border ${error ? "border-red-500" : "border-gray-200"} p-3 rounded-lg text-black font-semibold focus:ring-2 focus:ring-primary/5 outline-none transition-all text-sm min-h-[90px] shadow-xs hover:border-primary/40 resize-none`}
        />
      ) : type === "file" ? (
        <div className="relative group/file">
          <input
            type="file"
            name={name}
            onChange={onChange}
            className="hidden"
            id={name}
          />
          <label
            htmlFor={name}
            className={`flex flex-col items-center justify-center border-2 border-dashed ${error ? "border-red-500" : "border-gray-100"} rounded-lg p-6 transition-all cursor-pointer bg-gray-50/20 hover:bg-white hover:border-primary/40`}
          >
            <div className="w-10 h-10 bg-white shadow-xs rounded-lg flex items-center justify-center mb-3 border border-gray-50 group-hover/file:scale-105 transition-all">
              <FaUpload className="text-primary/30 group-hover/file:text-secondary transition-colors text-xs" />
            </div>
            <span className="text-[9px] font-bold text-primary/40 uppercase tracking-widest text-center">
              {value ? "File Selected" : `Upload ${label}`}
            </span>
            {value && (
              <span className="mt-2 text-[8px] text-secondary font-bold break-all max-w-[180px] text-center bg-secondary/5 px-2 py-0.5 rounded-full">
                {typeof value === 'object' ? value.name : 'Selected'}
              </span>
            )}
          </label>
        </div>
      ) : type === "checkbox" ? (
        <div
          className={`flex items-center gap-4 p-3 rounded-lg border transition-all duration-300 cursor-pointer shadow-xs select-none ${value
            ? "bg-primary/[0.02] border-primary/20"
            : "bg-white border-gray-100 hover:border-primary/30"
            }`}
          onClick={() => onChange({ target: { name, value: !value } })}
        >
          <div
            className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-300 ${value
              ? "bg-secondary border-secondary scale-105"
              : "bg-white border-gray-200"
              }`}
          >
            {value && <FaCheckCircle className="text-white text-[10px]" />}
          </div>
          <span className={`font-bold text-[10px] uppercase tracking-wider transition-colors duration-300 ${value ? "text-primary" : "text-black"}`}>
            {label}
          </span>
        </div>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onKeyDown={(e) => {
            if (type === "number" && (e.key === "-" || e.key === "e")) {
              e.preventDefault();
            }
          }}
          min={type === "number" ? "0" : undefined}
          placeholder={placeholder}
          className={`w-full bg-white border ${error ? "border-red-500" : "border-gray-200"} p-3 rounded-lg text-black font-semibold focus:ring-2 focus:ring-primary/5 outline-none transition-all text-sm shadow-xs hover:border-primary/40`}
        />
      )}

      {error && (
        <p className="text-red-500 text-[9px] font-bold uppercase tracking-widest flex items-center gap-1.5 px-1">
          <FaExclamationCircle className="text-[10px]" /> {error}
        </p>
      )}
    </div>
  );
};

const IndividualLabForm = () => {
  const [formData, setFormData] = useState({
    labName: "",
    labLogo: null,
    labBanner: null,
    labType: "",
    description: "",
    establishmentYear: "",
    registrationNumber: "",
    fullAddress: "",
    areaName: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
    mapLocation: "",
    phone: "",
    altPhone: "",
    email: "",
    website: "",
    whatsapp: "",
    ownerName: "",
    ownerPhone: "",
    ownerEmail: "",
    ownerId: null,
    selectedTests: [],
    testCategories: "",
    homeCollection: false,
    is24x7: false,
    emergency: false,
    pickupRadius: "",
    priceList: null,
    customPricing: "",
    offer: "",
    nabl: false,
    nablCert: null,
    license: "",
    expiry: "",
    openTime: "",
    closeTime: "",
    weeklyOff: "",
    holidays: "",
    paymentMethods: [],
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    upiId: "",
    labPhotos: null,
    staffCount: "",
    equipment: "",
    specialization: "",
    pathologyDocs: null,
    certifications: [{ name: "", file: null }],
    pricingItems: [{ test: "", price: "", percentage: "", discountPrice: "" }],
    ambulanceService: false,
    password: "",
  });

  const [availableTests, setAvailableTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const resData = await getTestServices({ limit: 100, status: true });
        if (resData.success) {
          setAvailableTests(resData.data);
        }
      } catch (error) {
        console.error("Failed to fetch tests:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTests();
  }, []);

  const validate = () => {
    let newErrors = {};
    if (!formData.labName?.trim()) newErrors.labName = "Required";
    if (!formData.labType) newErrors.labType = "Required";
    if (!formData.registrationNumber?.trim())
      newErrors.registrationNumber = "Required";
    if (!formData.fullAddress?.trim()) newErrors.fullAddress = "Required";
    if (!formData.areaName?.trim()) newErrors.areaName = "Required";
    if (!formData.city?.trim()) newErrors.city = "Required";
    if (!formData.pincode?.trim()) newErrors.pincode = "Required";
    else if (!/^\d{6}$/.test(formData.pincode))
      newErrors.pincode = "Invalid 6 digits";
    if (!formData.phone?.trim()) newErrors.phone = "Required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Invalid 10 digits";
    if (!formData.email?.trim()) newErrors.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid format";
    if (!formData.ownerName?.trim()) newErrors.ownerName = "Required";
    if (!formData.password?.trim()) newErrors.password = "Required";
    else if (formData.password.length < 6)
      newErrors.password = "Min 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else if (type === "number") {
      const numValue = value === "" ? "" : Math.max(0, parseInt(value) || 0);
      setFormData((prev) => ({ ...prev, [name]: numValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleTestToggle = (id) => {
    setFormData((prev) => ({
      ...prev,
      selectedTests: prev.selectedTests.includes(id)
        ? prev.selectedTests.filter((t) => t !== id)
        : [...prev.selectedTests, id],
    }));
  };

  const handleAddCert = () => {
    setFormData((prev) => ({
      ...prev,
      certifications: [...prev.certifications, { name: "", file: null }],
    }));
  };

  const handleCertChange = (index, field, value) => {
    const newCerts = [...formData.certifications];
    newCerts[index][field] = value;
    setFormData((prev) => ({ ...prev, certifications: newCerts }));
  };

  const handleAddPricing = () => {
    setFormData((prev) => ({
      ...prev,
      pricingItems: [
        ...prev.pricingItems,
        { test: "", price: "", percentage: "", discountPrice: "" },
      ],
    }));
  };

  const handlePricingChange = (index, field, value) => {
    const newPricing = [...formData.pricingItems];
    newPricing[index][field] = value;
    if (field === "percentage" || field === "price") {
      const price = parseFloat(field === "price" ? value : newPricing[index].price);
      const pct = parseFloat(field === "percentage" ? value : newPricing[index].percentage);
      if (!isNaN(price) && !isNaN(pct) && pct >= 0 && pct <= 100) {
        newPricing[index].discountPrice = Math.round(price - (price * pct) / 100);
      } else {
        newPricing[index].discountPrice = "";
      }
    }
    setFormData((prev) => ({ ...prev, pricingItems: newPricing }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setSubmitting(true);
      const data = new FormData();

      const schemaMapping = {
        labName: formData.labName,
        labType: formData.labType,
        establishmentYear: formData.establishmentYear,
        registrationNumber: formData.registrationNumber,
        description: formData.description,
        fullAddress: formData.fullAddress,
        areaName: formData.areaName,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
        phone: formData.phone,
        email: formData.email,
        whatsapp: formData.whatsapp,
        ownerName: formData.ownerName,
        ownerPhone: formData.ownerPhone,
        ownerEmail: formData.ownerEmail,
        homeCollection: formData.homeCollection,
        is24x7: formData.is24x7,
        emergency: formData.emergency,
        ambulanceService: formData.ambulanceService,
        openTime: formData.openTime,
        closeTime: formData.closeTime,
        weeklyOff: formData.weeklyOff,
        upiId: formData.upiId,
        bankName: formData.bankName,
        accountNumber: formData.accountNumber,
        ifscCode: formData.ifscCode,
        password: formData.password,
        status: true,
        source: "website",
      };

      Object.keys(schemaMapping).forEach((key) => {
        if (schemaMapping[key] !== undefined && schemaMapping[key] !== null) {
          data.append(key, schemaMapping[key]);
        }
      });

      if (formData.labLogo) data.append("labLogo", formData.labLogo);
      if (formData.labBanner) data.append("labBanner", formData.labBanner);
      if (formData.pathologyDocs)
        data.append("pathologyDocs", formData.pathologyDocs);

      if (formData.selectedTests.length > 0) {
        data.append("selectedTests", JSON.stringify(formData.selectedTests));
      }

      const testArray = formData.pricingItems
        .filter((item) => item.test && item.price)
        .map((item) => ({
          name: item.test,
          price: item.price,
          discountPrice: item.discountPrice,
        }));
      data.append("test", JSON.stringify(testArray));

      const certData = formData.certifications.map((cert) => ({
        name: cert.name,
      }));
      data.append("Certification", JSON.stringify(certData));

      formData.certifications.forEach((cert) => {
        if (cert.file) {
          data.append("certificationFiles", cert.file);
        }
      });

      const resData = await createRegistration(data);

      if (resData.success) {
        setIsSuccess(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        alert(resData.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      alert(
        error.response?.data?.message ||
        "Submission failed. Please check your connection.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-4xl mx-auto py-16 text-center px-4"
      >
        <div className="bg-white p-10 md:p-16 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center">
          <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <FaCheckCircle className="text-secondary text-5xl" />
            </motion.div>
          </div>
          <h2 className="text-2xl font-bold text-primary uppercase tracking-tight mb-4">
            Registration Submitted
          </h2>
          <p className="text-black font-semibold mb-10 max-w-sm leading-relaxed text-xs">
            Thank you! Your lab details are under review. Our team will
            contact you within 48 business hours.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="bg-primary text-white px-10 py-3.5 rounded-lg font-bold uppercase text-[10px] tracking-widest transition-all hover:bg-primary/90"
          >
            Continue to Web
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-full mx-auto px-6 pb-4">
      <Section title="Basic Lab Information" icon={FaHospital} index={0}>
        <InputField
          label="Lab Registered Name"
          name="labName"
          value={formData.labName}
          onChange={handleChange}
          error={errors.labName}
          placeholder="e.g. City Diagnostic Center"
          required
        />
        <InputField
          label="Laboratory Category"
          name="labType"
          type="select"
          options={["Pathology", "Diagnostic Center", "Radiology"]}
          value={formData.labType}
          onChange={handleChange}
          error={errors.labType}
          required
        />
        <InputField
          label="Year of Establishment"
          name="establishmentYear"
          type="number"
          value={formData.establishmentYear}
          onChange={handleChange}
          placeholder="e.g. 2020"
        />
        <InputField
          label="Govt Registration No."
          name="registrationNumber"
          value={formData.registrationNumber}
          onChange={handleChange}
          error={errors.registrationNumber}
          placeholder="e.g. REG12345"
          required
        />
        <InputField
          label="Upload Lab Logo"
          name="labLogo"
          type="file"
          value={formData.labLogo}
          onChange={handleChange}
        />
        <InputField
          label="Upload Lab Banner"
          name="labBanner"
          type="file"
          value={formData.labBanner}
          onChange={handleChange}
        />
        <div className="md:col-span-3">
          <InputField
            label="Professional Description"
            name="description"
            type="textarea"
            value={formData.description}
            onChange={handleChange}
            placeholder="Introduce your laboratory and services..."
          />
        </div>
      </Section>

      <Section title="Address Details" icon={FaMapMarkerAlt} index={1}>
        <div className="md:col-span-2 lg:col-span-3">
          <InputField
            label="Complete Office Address"
            name="fullAddress"
            value={formData.fullAddress}
            onChange={handleChange}
            error={errors.fullAddress}
            placeholder="Street, Building, Landmark..."
            required
          />
        </div>
        <InputField
          label="Local Area Name"
          name="areaName"
          value={formData.areaName}
          onChange={handleChange}
          error={errors.areaName}
          placeholder="e.g. Indira Nagar"
          required
        />
        <InputField
          label="City / District"
          name="city"
          value={formData.city}
          onChange={handleChange}
          error={errors.city}
          placeholder="e.g. Lucknow"
          required
        />
        <InputField
          label="State / Province"
          name="state"
          value={formData.state}
          onChange={handleChange}
          error={errors.state}
          placeholder="e.g. Uttar Pradesh"
          required
        />
        <InputField
          label="Postal Pincode"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          error={errors.pincode}
          placeholder="e.g. 226016"
          required
        />
      </Section>

      <Section title="Contact Information" icon={FaPhoneAlt} index={2}>
        <InputField
          label="Primary Phone Contact"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          placeholder="98XXXXXXXX"
          required
        />
        <InputField
          label="Official Email ID"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="contact@lab.com"
          required
        />
        <InputField
          label="WhatsApp Support No."
          name="whatsapp"
          type="tel"
          value={formData.whatsapp}
          onChange={handleChange}
          placeholder="98XXXXXXXX"
        />
        <div className="md:col-span-2">
          <InputField
            label="Laboratory Account Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            placeholder="Minimum 6 characters for security"
            required
          />
        </div>
      </Section>

      <Section title="Laboratory Owner Details" icon={FaUserTie} index={3}>
        <InputField
          label="Registered Owner Name"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
          error={errors.ownerName}
          placeholder="e.g. Dr. Rajesh Kumar"
          required
        />
        <InputField
          label="Owner Mobile Contact"
          name="ownerPhone"
          type="tel"
          value={formData.ownerPhone}
          onChange={handleChange}
          placeholder="98XXXXXXXX"
        />
        <InputField
          label="Owner Personal Email"
          name="ownerEmail"
          type="email"
          value={formData.ownerEmail}
          onChange={handleChange}
          placeholder="owner@lab.com"
        />
      </Section>

      <Section title="Services & Diagnostics" icon={FaVial} index={4}>
        <div className="md:col-span-3 space-y-4">
          <label className="text-black font-bold text-[9px] uppercase tracking-widest px-1">
            Available Medical Tests
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {loading ? (
              <div className="col-span-full py-12 text-center opacity-30 text-[9px] font-bold uppercase tracking-widest">
                Fetching test catalog...
              </div>
            ) : availableTests.length > 0 ? (
              availableTests.map((test) => {
                const isSelected = formData.selectedTests.includes(test._id);
                return (
                  <div
                    key={test._id}
                    onClick={() => handleTestToggle(test._id)}
                    className={`p-3.5 rounded-lg border text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-all duration-200 flex items-center justify-between shadow-xs ${isSelected
                      ? "bg-primary text-white border-primary shadow-md shadow-primary/10"
                      : "bg-white border-gray-100 text-primary/60 hover:border-primary/40"
                      }`}
                  >
                    <span className="truncate pr-2">{test.title}</span>
                    {isSelected && (
                      <FaCheckCircle className="text-secondary text-[14px]" />
                    )}
                  </div>
                );
              })
            ) : (
              <div className="col-span-full py-10 text-center opacity-40 text-[9px] font-bold uppercase tracking-widest bg-gray-50/50 rounded-xl border border-dashed border-gray-100">
                No tests available for this area
              </div>
            )}
          </div>
        </div>

        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 mt-6 border-t border-gray-50">
          <InputField
            label="Home Collection"
            name="homeCollection"
            type="checkbox"
            value={formData.homeCollection}
            onChange={handleChange}
          />
          <InputField
            label="Round-The-Clock"
            name="is24x7"
            type="checkbox"
            value={formData.is24x7}
            onChange={handleChange}
          />
          <InputField
            label="Emergency Support"
            name="emergency"
            type="checkbox"
            value={formData.emergency}
            onChange={handleChange}
          />
          <InputField
            label="Ambulance Support"
            name="ambulanceService"
            type="checkbox"
            value={formData.ambulanceService}
            onChange={handleChange}
          />
        </div>
      </Section>

      <Section title="Certifications & Files" icon={FaCertificate} index={5}>
        <div className="md:col-span-3 space-y-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between px-1">
              <h4 className="text-[9px] font-bold text-primary/40 uppercase tracking-widest">Clinical Certificates</h4>
              <button
                type="button"
                onClick={handleAddCert}
                className="flex items-center gap-1.5 bg-primary/5 hover:bg-primary text-primary hover:text-white px-4 py-2 rounded-lg transition-all border border-primary/5 text-[9px] font-extrabold uppercase tracking-widest"
              >
                + Add New
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {formData.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50/20 p-6 rounded-xl border border-gray-100 relative group/cert shadow-xs"
                >
                  <InputField
                    label="Certificate Title"
                    name={`cert_name_${index}`}
                    value={cert.name}
                    onChange={(e) =>
                      handleCertChange(index, "name", e.target.value)
                    }
                    placeholder="e.g. ISO Certified"
                  />
                  <div className="space-y-2">
                    <label className="text-black font-bold text-[9px] uppercase tracking-widest block px-1">
                      Soft Copy
                    </label>
                    <input
                      type="file"
                      className="hidden"
                      id={`cert_file_${index}`}
                      onChange={(e) =>
                        handleCertChange(index, "file", e.target.files[0])
                      }
                    />
                    <label
                      htmlFor={`cert_file_${index}`}
                      className="flex items-center gap-4 bg-white border border-gray-100 p-3 rounded-lg text-[9px] font-bold text-primary/30 cursor-pointer hover:border-primary/40 transition-all uppercase tracking-widest shadow-xs"
                    >
                      <FaUpload className="text-secondary text-xs" />
                      <span className="truncate max-w-[150px]">
                        {cert.file ? cert.file.name : "Select File"}
                      </span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 pt-8 mt-8 border-t border-gray-50">
            <div className="flex items-center justify-between px-1">
              <h4 className="text-[9px] font-bold text-primary/40 uppercase tracking-widest">Custom Rate List</h4>
              <button
                type="button"
                onClick={handleAddPricing}
                className="flex items-center gap-1.5 bg-primary/5 hover:bg-primary text-primary hover:text-white px-4 py-2 rounded-lg transition-all border border-primary/5 text-[9px] font-extrabold uppercase tracking-widest"
              >
                + Add Rate
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {formData.pricingItems.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-gray-50/20 p-6 rounded-xl border border-gray-100 shadow-xs"
                >
                  <InputField
                    label="Medical Test"
                    name={`price_test_${index}`}
                    type="select"
                    options={availableTests.map((t) => ({
                      value: t._id,
                      label: t.title,
                    }))}
                    value={item.test}
                    onChange={(e) =>
                      handlePricingChange(index, "test", e.target.value)
                    }
                  />
                  <InputField
                    label="Standard (₹)"
                    name={`price_value_${index}`}
                    type="number"
                    value={item.price}
                    onChange={(e) =>
                      handlePricingChange(index, "price", e.target.value)
                    }
                    placeholder="e.g. 2000"
                  />
                  <InputField
                    label="Percentage (%)"
                    name={`price_pct_${index}`}
                    type="number"
                    value={item.percentage}
                    onChange={(e) =>
                      handlePricingChange(index, "percentage", e.target.value)
                    }
                    placeholder="e.g. 10"
                  />
                  <InputField
                    label="Offer Rate (₹)"
                    name={`discount_price_${index}`}
                    type="number"
                    value={item.discountPrice}
                    onChange={(e) =>
                      handlePricingChange(index, "discountPrice", e.target.value)
                    }
                    placeholder="e.g. 1499"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="Operational Hours" icon={FaClock} index={6}>
        <InputField
          label="Opening Clock"
          name="openTime"
          type="time"
          value={formData.openTime}
          onChange={handleChange}
        />
        <InputField
          label="Closing Clock"
          name="closeTime"
          type="time"
          value={formData.closeTime}
          onChange={handleChange}
        />
        <InputField
          label="Weekly Holiday"
          name="weeklyOff"
          type="select"
          options={[
            "None (Open All Week)",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ]}
          value={formData.weeklyOff}
          onChange={handleChange}
        />
      </Section>

      <Section title="Digital Payments" icon={FaCreditCard} index={7}>
        <InputField
          label="Registered UPI ID"
          name="upiId"
          placeholder="yourname@bank"
          value={formData.upiId}
          onChange={handleChange}
        />
        <InputField
          label="Full Bank Name"
          name="bankName"
          placeholder="e.g. HDFC Bank"
          value={formData.bankName}
          onChange={handleChange}
        />
        <InputField
          label="Account Number"
          name="accountNumber"
          placeholder="Type carefully"
          value={formData.accountNumber}
          onChange={handleChange}
        />
        <InputField
          label="Swift / IFSC Code"
          name="ifscCode"
          placeholder="e.g. HDFC0001234"
          value={formData.ifscCode}
          onChange={handleChange}
        />
      </Section>

      <div className="mt-1 flex flex-col items-center gap-6">
        <button
          type="submit"
          disabled={submitting}
          className="group bg-primary text-white px-16 py-4 rounded-lg font-bold uppercase text-[10px] tracking-widest transition-all shadow-md hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "Processing Application..." : "Submit Registration"}
        </button>
      </div>
    </form>
  );
};

export default IndividualLabForm;
