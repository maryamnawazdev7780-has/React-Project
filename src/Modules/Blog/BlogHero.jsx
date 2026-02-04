import { Link } from "react-router-dom";
import { motion } from "framer-motion";



const BlogHero = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[380px] mt-20 md:mt-24 overflow-hidden">

      {/* BG IMAGE (ZOOM ON SCROLL) */}
      <motion.img
        src="/assets/Conference.jpg"
        alt="Blog Hero"
        className="absolute inset-0 w-full h-full object-cover object-center"
        initial={{ scale: 1.15, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LEFT TEXT */}
        <motion.h1
          className="text-white text-3xl md:text-4xl font-bold"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Blog Details
        </motion.h1>

        {/* RIGHT BREADCRUMB */}
        <motion.p
          className="text-white text-sm md:text-base flex items-center gap-2"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
        <Link to="/service">Service</Link>

          <span>|</span>
          <span className="opacity-80">Blog Details</span>
        </motion.p>

      </div>
    </section>
  );
};

export default BlogHero;
