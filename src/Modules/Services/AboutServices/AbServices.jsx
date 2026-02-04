import React from "react";
import { motion } from "framer-motion";
import { AbData } from "./AbData";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.15,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 120,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1], // ultra smooth easing
    },
  },
};

const AbServices = () => {
  return (
    <section className="bg-gray-50 py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-purple-600 font-semibold mb-3">
            ◆ About Our Services
          </p>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            We Create Unforgettable <br /> Event Experiences
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-14"
        >
          {AbData.map((item) => (
            <motion.div
              key={item.id}
              variants={card}
              className="relative text-center"
            >
              {/* Floating Image */}
              <div className="relative z-10 flex justify-center">
                <motion.img
                  src={item.img}
                  alt={item.title}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="w-[260px] h-[180px] object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Card */}
              <div
                className="bg-white rounded-2xl shadow-lg pt-32 pb-10 px-8
                           -mt-24 hover:shadow-2xl transition-shadow duration-500"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AbServices;
