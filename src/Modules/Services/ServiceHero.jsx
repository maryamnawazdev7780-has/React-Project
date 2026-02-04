import React from "react";
import { motion } from "framer-motion";

const ServiceHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 1 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section className="relative w-full h-[650px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/h-1-3.jpg" // Replace with your services hero image
          alt="Services Hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Title */}
        <motion.h1
          className="text-white text-1xl md:text-5xl font-medium mb-4"
          variants={itemVariants}
        >
          Ignite the Spark of <br /> Celebration with Eventino
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-white text-lg md:text-xl mb-6 max-w-2xl"
          variants={itemVariants}
        >
          Immerse in the Eventino experience as we meticulously bring your vision
          to life, crafting events that echo with unforgettable memories.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Services
        </motion.button>

        {/* Stats Cards */}
        <motion.div
          className="mt-12 flex flex-wrap gap-6"
          variants={itemVariants}
        >
          <div className="bg-white/10 backdrop-blur-md text-white p-6 rounded-xl min-w-[150px] text-center">
            <p className="text-3xl font-bold">2,876</p>
            <p className="text-sm mt-1">Successful Events</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md text-white p-6 rounded-xl min-w-[150px] text-center">
            <p className="text-3xl font-bold">542</p>
            <p className="text-sm mt-1">Vendor Partners</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md text-white p-6 rounded-xl min-w-[150px] text-center">
            <p className="text-3xl font-bold">90%</p>
            <p className="text-sm mt-1">Client Satisfaction</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md text-white p-6 rounded-xl min-w-[150px] text-center">
            <p className="text-3xl font-bold">4.3K</p>
            <p className="text-sm mt-1">Great Participants</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServiceHero;
