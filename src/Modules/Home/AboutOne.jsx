import React from "react";
import { motion } from "framer-motion";
import Button from "../../Component/Button";

/* Left Image Animation */
const leftVariant = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

/* Right Content Animation */
const rightVariant = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const AboutOne = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          variants={leftVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative bg-white p-4 sm:p-6 lg:p-9"
        >
          <img
            src="/assets/about.png"
            alt="About"
            className="w-full h-auto object-cover rounded-lg"
          />

          {/* Experience Badge */}
          <div
            className="
              absolute 
              top-1/2 left-1/2 
              -translate-x-1/2 -translate-y-1/2 
              bg-purple-500 text-white rounded-full shadow 
              flex items-center justify-center text-center
              w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52
              p-4
            "
          >
            <h1 className="text-sm sm:text-base lg:text-lg font-semibold">
              15+ Years <br /> of Experience
            </h1>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white p-6 sm:p-8 lg:p-10"
        >
          <h4 className="text-purple-500 text-lg sm:text-xl font-bold font-serif">
            About Us
          </h4>

          <h1 className="text-black text-2xl sm:text-3xl font-bold font-serif mt-2 leading-tight">
            We Are Eventino, No. 1 Event Management Agency
          </h1>

          <p className="mt-4 text-gray-500 text-sm sm:text-base">
            Lorem ipsum dolor sit amet. Rem enim sapiente sit omnis iste sit on
            The best of architecto asperiores aut repellendus quam.
          </p>

          <ul className="space-y-4 mt-6 text-sm sm:text-base">
            {Array(4)
              .fill()
              .map((_, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 h-5 w-5 bg-purple-700 rounded-full flex items-center justify-center text-white text-xs">
                    ✓
                  </span>
                  <span>
                    Odio aenean sed adipiscing diam donec adipiscing.
                  </span>
                </li>
              ))}
          </ul>

          <div className="mt-8">
            <Button
              text="Register"
              color="bg-purple-600 text-white px-10 sm:px-14 py-3 rounded-full border-[3px] border-purple-700 hover:bg-black transition-colors duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutOne;
