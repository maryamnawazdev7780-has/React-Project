import React from "react";
import "./Services.css";
import { motion } from "framer-motion";

const getAnimation = (direction) => {
  switch (direction) {
    case "top":
      return { y: -80, opacity: 0 };
    case "bottom":
      return { y: 80, opacity: 0 };
    case "left":
      return { x: -80, opacity: 0 };
    case "right":
      return { x: 80, opacity: 0 };
    default:
      return { y: 80, opacity: 0 };
  }
};

const ServiceCard = ({ service, direction }) => {
  return (
    <motion.div
      className="service-card"
      initial={getAnimation(direction)}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="icon">
        <img src={service.img} alt={service.title} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </motion.div>
  );
};

export default ServiceCard;
