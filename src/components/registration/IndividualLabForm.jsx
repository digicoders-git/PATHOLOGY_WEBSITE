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
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="bg-pure-white p-6 md:p-8 rounded-xl shadow-sm border mb-8 group border-secondary/20 transition-all duration-300 relative"
    style={{ zIndex: 50 - index }}
  >
    {/* Pathology Background Watermark - Full Secondary Theme */}
    <div className="absolute inset-0 pointer-events-none bg-secondary/5 overflow-hidden rounded-xl">
      <div
        className="w-full h-full bg-cover bg-center opacity-[0.12] grayscale brightness-50 contrast-125"
        style={{
          backgroundImage: `url(https://www.umhs-sk.org/hubfs/how-to-become-a-pathologist-physician.jpg)`,
        }}
      />
      {/* Deep Secondary Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-secondary/20 via-transparent to-secondary/10"></div>
    </div>

    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-50">
        <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center text-secondary text-lg group-hover:scale-110 transition-transform duration-500">
          <Icon />
        </div>
        <div>
          <h3 className="text-primary font-bold text-lg md:text-xl tracking-tight">
            {title}
          </h3>
          <div className="h-0.5 w-10 bg-secondary/20 rounded-full mt-1"></div>
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
        className={`w-full bg-background border ${error ? "border-red-500" : "border-gray-200"} p-3.5 rounded-lg text-primary font-medium flex justify-between items-center text-sm transition-all focus:ring-2 focus:ring-primary/10 cursor-pointer`}
      >
        <span className={value ? "text-primary" : "text-primary/40"}>
          {getDisplayLabel()}
        </span>
        <FaChevronDown
          className={`text-xs transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-50 top-full left-0 w-full mt-1 bg-white border border-gray-100 rounded-xl shadow-2xl overflow-hidden max-h-60 overflow-y-auto"
          >
            {options.map((opt) => {
              const optValue = typeof opt === "object" ? opt.value : opt;
              const optLabel = typeof opt === "object" ? opt.label : opt;
              return (
                <button
                  key={optValue}
                  type="button"
                  onClick={() => {
                    onChange(optValue);
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-primary/70 hover:bg-background hover:text-secondary transition-colors cursor-pointer"
                >
                  {optLabel}
                </button>
              );
            })}
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
    <div className="space-y-2">
      <label className="text-primary/70 font-semibold text-[11px] uppercase tracking-wider flex items-center gap-2 cursor-pointer select-none">
        {label} {required && <span className="text-secondary">*</span>}
      </label>

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
          className={`w-full bg-background border ${error ? "border-red-500" : "border-gray-200"} p-3.5 rounded-lg text-primary font-medium focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm min-h-[80px]`}
        />
      ) : type === "file" ? (
        <div className="relative group">
          <input
            type="file"
            name={name}
            onChange={onChange}
            className="hidden"
            id={name}
          />
          <label
            htmlFor={name}
            className={`flex flex-col items-center justify-center border-2 border-dashed ${error ? "border-red-500" : "border-gray-200"} rounded-lg p-4 transition-all cursor-pointer bg-background/50 border-secondary/30`}
          >
            <FaUpload className="text-primary/20 group-hover:text-secondary transition-colors mb-2" />
            <span className="text-[10px] font-bold text-primary/40 uppercase tracking-tighter">
              {value ? "File Selected" : `Upload ${label}`}
            </span>
          </label>
        </div>
      ) : type === "checkbox" ? (
        <div
          className="flex items-center gap-3 p-3.5 bg-background rounded-lg border border-gray-200 hover:border-secondary/20 cursor-pointer transition-all active:scale-95"
          onClick={() => onChange({ target: { name, value: !value } })}
        >
          <div
            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${value ? "bg-secondary border-secondary" : "border-gray-300"}`}
          >
            {value && <FaCheckCircle className="text-white text-[10px]" />}
          </div>
          <span className="text-primary font-semibold text-xs uppercase tracking-tight select-none">
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
          className={`w-full bg-background border ${error ? "border-red-500" : "border-gray-200"} p-3.5 rounded-lg text-primary font-medium focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm`}
        />
      )}

      {error && (
        <p className="text-red-500 text-[10px] font-semibold uppercase tracking-tight flex items-center gap-1 mt-1">
          <FaExclamationCircle /> {error}
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
    pricingItems: [{ test: "", price: "", discountPrice: "" }],
    ambulanceService: false,
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

    if (Object.keys(newErrors).length > 0) {
      console.log("Validation Failed:", newErrors);
    }

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
        { test: "", price: "", discountPrice: "" },
      ],
    }));
  };

  const handlePricingChange = (index, field, value) => {
    const newPricing = [...formData.pricingItems];
    newPricing[index][field] = value;
    setFormData((prev) => ({ ...prev, pricingItems: newPricing }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setSubmitting(true);
      const data = new FormData();

      // Mapping frontend fields to backend schema names
      const schemaMapping = {
        labName: formData.labName,
        labType: formData.labType,
        establishmentYear: formData.establishmentYear,
        registrationNumber: formData.registrationNumber,
        description: formData.description,
        fullAddress: formData.fullAddress,
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
        status: true,
        source: "website",
      };

      // Append basic fields
      Object.keys(schemaMapping).forEach((key) => {
        if (schemaMapping[key] !== undefined && schemaMapping[key] !== null) {
          data.append(key, schemaMapping[key]);
        }
      });

      // Append single files
      if (formData.labLogo) data.append("labLogo", formData.labLogo);
      if (formData.labBanner) data.append("labBanner", formData.labBanner);
      if (formData.pathologyDocs)
        data.append("pathologyDocs", formData.pathologyDocs);

      // Append selectedTests (Array of ObjectIds)
      if (formData.selectedTests.length > 0) {
        data.append("selectedTests", JSON.stringify(formData.selectedTests));
      }

      // Append pricing items as 'test' array [{name, price}]
      const testArray = formData.pricingItems
        .filter((item) => item.test && item.price)
        .map((item) => ({
          name: item.test,
          price: item.price,
          discountPrice: item.discountPrice,
        }));
      data.append("test", JSON.stringify(testArray));

      // Append certifications data and separate files
      const certData = formData.certifications.map((cert) => ({
        name: cert.name,
      }));
      data.append("Certification", JSON.stringify(certData));

      // Append all certification files
      formData.certifications.forEach((cert) => {
        if (cert.file) {
          data.append("certificationFiles", cert.file);
        }
      });

      console.log("Submitting Mapping:", schemaMapping);
      console.log("Submitting raw Files/Arrays:", {
        labLogo: formData.labLogo,
        labBanner: formData.labBanner,
        pathologyDocs: formData.pathologyDocs,
        selectedTests: formData.selectedTests,
        test: testArray,
        Certification: certData,
        certificationFiles: formData.certifications.filter((c) => c.file)
          .length,
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
        className="max-w-4xl mx-auto py-16 text-center"
      >
        <div className="bg-pure-white p-12 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center">
          <FaCheckCircle className="text-secondary text-5xl mb-6" />
          <h2 className="text-2xl font-bold text-primary uppercase tracking-tight mb-4">
            Registration Submitted
          </h2>
          <p className="text-primary/60 font-medium mb-8 max-w-sm">
            Thank you! Your lab registration is being reviewed. Our team will
            contact you within 48 hours.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="bg-primary text-white px-8 py-3.5 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-secondary transition-all"
          >
            Go Back
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-7xl mx-auto px-4">
      <Section title="Basic Lab Information" icon={FaHospital} index={0}>
        <InputField
          label="Lab Name"
          name="labName"
          value={formData.labName}
          onChange={handleChange}
          error={errors.labName}
          placeholder="City Diagnostic Center"
          required
        />
        <InputField
          label="Lab Type"
          name="labType"
          type="select"
          options={["Pathology", "Diagnostic Center", "Radiology"]}
          value={formData.labType}
          onChange={handleChange}
          error={errors.labType}
          required
        />
        <InputField
          label="Establishment Year"
          name="establishmentYear"
          type="number"
          value={formData.establishmentYear}
          onChange={handleChange}
          placeholder="2020"
        />
        <InputField
          label="Registration Number"
          name="registrationNumber"
          value={formData.registrationNumber}
          onChange={handleChange}
          error={errors.registrationNumber}
          placeholder="REG123456"
          required
        />
        <InputField
          label="Lab Logo"
          name="labLogo"
          type="file"
          value={formData.labLogo}
          onChange={handleChange}
        />
        <InputField
          label="Lab Banner"
          name="labBanner"
          type="file"
          value={formData.labBanner}
          onChange={handleChange}
        />
        <div className="md:col-span-3">
          <InputField
            label="Lab Description"
            name="description"
            type="textarea"
            value={formData.description}
            onChange={handleChange}
            placeholder="Brief about your services"
          />
        </div>
      </Section>

      <Section title="Address Details" icon={FaMapMarkerAlt} index={1}>
        <div className="md:col-span-2 lg:col-span-3">
          <InputField
            label="Full Address"
            name="fullAddress"
            value={formData.fullAddress}
            onChange={handleChange}
            error={errors.fullAddress}
            placeholder="Street, Area, Building"
            required
          />
        </div>
        <InputField
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          error={errors.city}
          placeholder="City Name"
          required
        />
        <InputField
          label="State"
          name="state"
          value={formData.state}
          onChange={handleChange}
          error={errors.state}
          placeholder="State Name"
          required
        />
        <InputField
          label="Pincode"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          error={errors.pincode}
          placeholder="400001"
          required
        />
      </Section>

      <Section title="Contact Details" icon={FaPhoneAlt} index={2}>
        <InputField
          label="Primary Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          placeholder="98XXXXXXXX"
          required
        />
        <InputField
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="contact@lab.com"
          required
        />
        <InputField
          label="WhatsApp Number"
          name="whatsapp"
          type="tel"
          value={formData.whatsapp}
          onChange={handleChange}
          placeholder="98XXXXXXXX"
        />
      </Section>

      <Section title="Lab Owner Details" icon={FaUserTie} index={3}>
        <InputField
          label="Owner Name"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
          error={errors.ownerName}
          placeholder="Owner Name"
          required
        />
        <InputField
          label="Owner Phone"
          name="ownerPhone"
          type="tel"
          value={formData.ownerPhone}
          onChange={handleChange}
          placeholder="98XXXXXXXX"
        />
        <InputField
          label="Owner Email"
          name="ownerEmail"
          type="email"
          value={formData.ownerEmail}
          onChange={handleChange}
          placeholder="owner@lab.com"
        />
      </Section>

      <Section title="Tests & Services" icon={FaVial} index={4}>
        <div className="md:col-span-3 space-y-4">
          <label className="text-primary/70 font-semibold text-[11px] uppercase tracking-wider">
            Choose Available Tests
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {loading ? (
              <div className="col-span-full py-4 text-center opacity-50 text-xs font-bold uppercase tracking-widest">
                Loading Tests...
              </div>
            ) : availableTests.length > 0 ? (
              availableTests.map((test) => (
                <div
                  key={test._id}
                  onClick={() => handleTestToggle(test._id)}
                  className={`p-3 rounded-lg border text-xs font-semibold uppercase tracking-tight cursor-pointer transition-all flex items-center justify-between ${
                    formData.selectedTests.includes(test._id)
                      ? "bg-secondary/10 border-secondary text-secondary"
                      : "bg-background border-gray-100 text-primary/60 hover:border-secondary/30"
                  }`}
                >
                  {test.title}
                  {formData.selectedTests.includes(test._id) && (
                    <FaCheckCircle />
                  )}
                </div>
              ))
            ) : (
              <div className="col-span-full py-4 text-center opacity-50 text-xs font-bold uppercase tracking-widest">
                No tests available
              </div>
            )}
          </div>
        </div>
        <InputField
          label="Home Collection"
          name="homeCollection"
          type="checkbox"
          value={formData.homeCollection}
          onChange={handleChange}
        />
        <InputField
          label="24x7 Service"
          name="is24x7"
          type="checkbox"
          value={formData.is24x7}
          onChange={handleChange}
        />
        <InputField
          label="Emergency Service"
          name="emergency"
          type="checkbox"
          value={formData.emergency}
          onChange={handleChange}
        />
        <InputField
          label="Ambulance Service"
          name="ambulanceService"
          type="checkbox"
          value={formData.ambulanceService}
          onChange={handleChange}
        />
      </Section>

      <Section title="Certification & Documents" icon={FaCertificate} index={5}>
        <div className="md:col-span-3 space-y-6">
          {/* <InputField
            label="NABL Certified"
            name="nabl"
            type="checkbox"
            value={formData.nabl}
            onChange={handleChange}
          /> */}

          <div className="space-y-4">
            {/* <h4 className="text-xs font-bold text-primary/40 uppercase tracking-widest border-b pb-2">
              Add More Certifications
            </h4> */}
            {formData.certifications.map((cert, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end bg-background/50 p-4 rounded-lg"
              >
                <InputField
                  label="Certification Name"
                  name={`cert_name_${index}`}
                  value={cert.name}
                  onChange={(e) =>
                    handleCertChange(index, "name", e.target.value)
                  }
                  placeholder="e.g. ISO 9001"
                />
                <div className="relative group">
                  <label className="text-primary/70 font-semibold text-[11px] uppercase mb-2 block">
                    Upload Copy
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
                    className="flex items-center gap-3 bg-white border border-gray-200 p-3.5 rounded-lg text-xs font-bold text-primary/40 cursor-pointer hover:border-secondary/30 transition-all uppercase"
                  >
                    <FaUpload className="text-secondary" />{" "}
                    {cert.file ? cert.file.name : "Select File"}
                  </label>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddCert}
              className="text-secondary font-bold text-[10px] uppercase tracking-widest hover:underline flex items-center gap-2"
            >
              + Add Another Certification
            </button>
          </div>

          <div className="space-y-4 pt-6 mt-6 border-t border-gray-100">
            <h4 className="text-xs font-bold text-primary/40 uppercase tracking-widest border-b pb-2">
              Custom Test Pricing
            </h4>
            {formData.pricingItems.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-background/50 p-4 rounded-lg"
              >
                <InputField
                  label="Test Name"
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
                  label="Price (₹)"
                  name={`price_value_${index}`}
                  type="number"
                  value={item.price}
                  onChange={(e) =>
                    handlePricingChange(index, "price", e.target.value)
                  }
                  placeholder="e.g. 1200"
                />
                <InputField
                  label="Discount Price (₹)"
                  name={`discount_price_${index}`}
                  type="number"
                  value={item.discountPrice}
                  onChange={(e) =>
                    handlePricingChange(index, "discountPrice", e.target.value)
                  }
                  placeholder="e.g. 999"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddPricing}
              className="text-secondary font-bold text-[10px] uppercase tracking-widest hover:underline flex items-center gap-2"
            >
              + Add Another Pricing
            </button>
          </div>

          {/* <div className="pt-6 border-t border-gray-100">
            <InputField
              label="Pathology Related Documents"
              name="pathologyDocs"
              type="file"
              value={formData.pathologyDocs}
              onChange={handleChange}
              required
            />
            <p className="text-[10px] text-primary/40 mt-1 uppercase font-semibold">
              Please upload your laboratory registration, building fitness, or
              fire NOC documents.
            </p>
          </div> */}
        </div>

        {/* <InputField
          label="License Number"
          name="license"
          value={formData.license}
          onChange={handleChange}
          error={errors.license}
          placeholder="LIC123456"
          required
        />
        <InputField
          label="Expiry Date"
          name="expiry"
          type="date"
          value={formData.expiry}
          onChange={handleChange}
        /> */}
      </Section>

      <Section title="Operation Timings" icon={FaClock} index={6}>
        <InputField
          label="Opening Time"
          name="openTime"
          type="time"
          value={formData.openTime}
          onChange={handleChange}
        />
        <InputField
          label="Closing Time"
          name="closeTime"
          type="time"
          value={formData.closeTime}
          onChange={handleChange}
        />
        <InputField
          label="Weekly Off"
          name="weeklyOff"
          type="select"
          options={[
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

      <Section title="Payment Info" icon={FaCreditCard} index={7}>
        <InputField
          label="UPI ID"
          name="upiId"
          placeholder="lab@upi"
          value={formData.upiId}
          onChange={handleChange}
        />
        <InputField
          label="Bank Name"
          name="bankName"
          placeholder="e.g. HDFC Bank"
          value={formData.bankName}
          onChange={handleChange}
        />
        <InputField
          label="Account Number"
          name="accountNumber"
          placeholder="XXXXXXXXXXXX"
          value={formData.accountNumber}
          onChange={handleChange}
        />
        <InputField
          label="IFSC Code"
          name="ifscCode"
          placeholder="HDFC000XXXX"
          value={formData.ifscCode}
          onChange={handleChange}
        />
      </Section>

      <div className="mt-12 mb-20 flex justify-center">
        <button
          type="submit"
          disabled={submitting}
          className="bg-secondary cursor-pointer text-white px-20 py-4 rounded-lg font-bold uppercase text-sm tracking-widest hover:bg-primary transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "Submitting Application..." : "Submit Application"}
        </button>
      </div>
    </form>
  );
};

export default IndividualLabForm;
