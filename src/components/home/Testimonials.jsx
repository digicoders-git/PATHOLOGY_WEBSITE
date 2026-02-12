import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Abhishek Sharma",
    role: "Regular Patient",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "The staff here is incredibly professional and the reports were delivered much faster than I expected",
    rating: 5,
  },
  {
    id: 2,
    name: "Dr. Kavita Singh",
    role: "Physician",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "I always refer my patients to this pathology center because of their accuracy and state-of-the-art equipment..",
    rating: 5,
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    role: "Health Enthusiast",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    content:
      "Affordable health packages and very convenient home collection service. The technicians are well-trained and very polite.",
    rating: 5,
  },
  {
    id: 4,
    name: "Neha Gupta",
    role: "Corporate Professional",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    content:
      "Clean environment and very organized process. I was in and out for my blood test in less than 15 minutes. Very efficient!",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden border-t border-gray-100">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-secondary font-black tracking-[0.2em] text-xs md:text-sm uppercase mb-3">
            Testimonials
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-6 leading-tight">
            What Our <span className="text-secondary">Patients</span> Say
          </h3>
          <p className="text-primary/70 text-sm md:text-base leading-relaxed">
            We are committed to providing the best healthcare services. Here's
            what our satisfied patients and doctors have to say about their
            experience with us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-16 testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white p-8 rounded shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col h-full hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-all duration-300 group">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < testimonial.rating
                            ? "text-yellow-400"
                            : "text-gray-200"
                        }
                        size={14}
                      />
                    ))}
                  </div>

                  <div className="relative mb-8">
                    <FaQuoteLeft
                      className="text-secondary/10 absolute -top-4 -left-2"
                      size={40}
                    />
                    <p className="text-primary/80 italic leading-relaxed relative z-10 text-sm md:text-base">
                      "{testimonial.content}"
                    </p>
                  </div>

                  <div className="mt-auto flex items-center gap-4 border-t border-gray-100 pt-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary/20 p-0.5">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-primary font-black text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-secondary font-bold text-xs uppercase tracking-wider">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style jsx>{`
        .testimonial-swiper :global(.swiper-pagination-bullet-active) {
          background: #2a9d8f !important;
          width: 25px;
          border-radius: 5px;
        }
        .testimonial-swiper :global(.swiper-pagination-bullet) {
          background: #1e3a5f;
          opacity: 0.2;
        }
        .testimonial-swiper :global(.swiper-pagination-bullet-active) {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
