import React from "react";
import { services } from "./ServiceData";
import { motion } from "framer-motion";

/* ================= ANIMATION VARIANTS ================= */

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* ================= COMPONENT ================= */

const ServicesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">

      {/* ===== TOP TEXT ===== */}
      <div className="flex items-center justify-center gap-3 pb-4">
        <div
          className="w-0 h-0
          border-t-[8px] border-t-transparent
          border-b-[8px] border-b-transparent
          border-r-[12px] border-r-black"
        ></div>

        <h2 className="text-purple-600 text-2xl">Services</h2>

        <div
          className="w-0 h-0
          border-t-[8px] border-t-transparent
          border-b-[8px] border-b-transparent
          border-l-[12px] border-l-black"
        ></div>
      </div>

      <h1 className="text-center text-4xl font-semibold">
        Get A New Experience With Eventino Services
      </h1>

      {/* ===== GRID ===== */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16"
      >
        {services.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group bg-white rounded-2xl shadow overflow-hidden"
          >

            {/* IMAGE (ROUND → FULL ON HOVER) */}
            <div
              className="
                relative mx-auto mt-6
                w-40 h-40
                rounded-full overflow-hidden
                transition-all duration-500
                group-hover:w-full
                group-hover:h-80
                group-hover:rounded-none
              "
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition"></div>

              {/* CONTENT ON HOVER */}
              <div
                className="
                  absolute inset-0 flex flex-col items-center justify-center
                  text-center text-white
                  opacity-0 translate-y-6
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-500 px-4
                "
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm mt-1">{item.price}</p>

                <button className="mt-4 px-5 py-2 bg-purple-600 rounded-full text-sm">
                  Read More →
                </button>
              </div>
            </div>

            {/* TEXT BELOW (HIDE ON HOVER) */}
            <div className="py-6 text-center group-hover:hidden">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.price}</p>
              <button className="mt-4 px-5 py-2 bg-purple-600 rounded-full text-sm text-white">
                Read More →
              </button>
            </div>

          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;
