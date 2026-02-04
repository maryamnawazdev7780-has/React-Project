import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutHero = () => {
  // Variants for background image (slide from right + fade)
  const bgVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1.5, ease: "easeOut" } 
    },
  };

  // Variants for title (slide from left + fade)
  const titleVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1, ease: "easeOut" } 
    },
  };

  // Variants for breadcrumb (slide from left + fade, delayed)
  const breadcrumbVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1, ease: "easeOut", delay: 0.5 } 
    },
  };

  return (
    <section className="relative w-full h-[520px] md:h-[620px] overflow-hidden">
      
      {/* Background Image */}
      <motion.img
        src="/assets/h-1-3.jpg"
        alt="About Background"
        className="absolute inset-0 w-full h-full object-cover object-top"
        variants={bgVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
        
        {/* Title */}
        <motion.h1
          className="text-white text-4xl md:text-6xl font-bold mb-4"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          About Us
        </motion.h1>

        {/* Breadcrumb */}
        <motion.nav
          className="flex items-center text-gray-300 text-sm md:text-base"
          variants={breadcrumbVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-purple-400 font-medium">About Us</span>
        </motion.nav>
      </div>
    </section>
  );
};

export default AboutHero;
