import React from "react";
import { services } from "./ServiceData";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import "./Services.css";


const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ServiceSection = () => {
  return (
    <motion.div
      className="py-16 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} 
    >
      

      <div className="flex flex-col md:flex-row justify-center py-12 items-center gap-8 ">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }} 
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceSection;
