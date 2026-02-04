import { servicesData } from "./ServicesData";
import { motion } from "framer-motion";

const AboutServices = () => {
  // Variants for the parent container to stagger children
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // delay between each card
      },
    },
  };

  // Variants for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      {/* ===== TOP ===== */}
      <p className="text-purple-600 font-semibold mb-2">Services</p>

      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-bold leading-snug">
          Get A New Experience With <br /> Eventino Services
        </h2>

        <div className="flex gap-3">
          <button className="px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition">
            ← Prev
          </button>
          <button className="px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition">
            Next → 
          </button>
        </div>
      </div>

      {/* ===== CARDS ===== */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // trigger when 20% of container is visible
      >
        {servicesData.map((item) => (
          <motion.div
            key={item.id}
            className="group relative rounded-2xl overflow-hidden h-[380px]"
            variants={cardVariants}
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Purple Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Plus Icon */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition duration-500">
              <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold">
                +
              </div>
            </div>

            {/* Content */}
            <div
              className={`absolute bottom-6 left-6 right-6 rounded-xl px-5 py-4 transition duration-500
              ${
                item.featured
                  ? "bg-purple-600 text-white"
                  : "bg-white group-hover:bg-purple-600 group-hover:text-white"
              }`}
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm opacity-90">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AboutServices;
