import React from "react";
import { motion } from "framer-motion";

const AboutUS = () => {
  return (
    <section className="w-full py-16 bg-white mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-14 items-center">

        {/* ================= LEFT SIDE ================= */}
       <motion.div
  initial={{ opacity: 0, scale: 0.6, x: -60, rotate: -2 }}
  whileInView={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{
    duration: 1.4,
    ease: [0.16, 1, 0.3, 1], // ultra smooth
  }}
  className="relative flex justify-center md:justify-start w-full"
>

          {/* Big Image (TRUE RESPONSIVE) */}
          <div className="w-72 max-w-[300px] sm:max-w-[360px] md:max-w-[400px] aspect-[3/4] rounded-full overflow-hidden">
            <img
              src="/assets/ab.png"
              alt="Speaker"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Small Image  */}
          <div className="hidden md:block absolute bottom-0 right-0  w-[240px] aspect-[3/4] rounded-full overflow-hidden border-8 border-white ">
            <img
              src="/assets/concert3.png"
              alt="Event"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Badge (md+) */}
          <div className="hidden md:flex absolute top-1/2 left-1/2   bg-purple-600 text-white rounded-full w-28 h-28 flex-col items-center justify-center shadow-xl">
            <h3 className="text-2xl font-bold">15+</h3>
            <p className="text-xs text-center leading-tight">
              Years of <br /> Experience
            </p>
          </div>
        </motion.div>

        {/* ================= RIGHT SIDE ================= */}
        <motion.div
  initial={{ opacity: 0, y: 120 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{
    duration: 1.2,
    delay: 0.2,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="flex flex-col gap-6"
>

          <h5 className="text-purple-500 font-semibold text-1xl">
            About Us
          </h5>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            We Are Eventino, No. 1 Event Management Agency
          </h2>

          <p className="text-gray-600">
            Lorem ipsum dolor sit amet. Rem enim sapiente sit omnis iste sit
            on the best of architecto asperiores aut repellendus quam. Id unde
            harum qui quos beatae aut saepe omnis sit modi tenetur qui
            deleniti laudantium quo rerum ipsa.
          </p>

          <img
            src="/assets/concert3.png"
            alt="Event Crowd"
            className="rounded-lg w-full h-40 object-cover"
          />

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 flex items-center justify-center bg-purple-600 rounded-full">
                <span className="text-white font-bold">✓</span>
              </div>
              <span className="text-gray-700">
                Non consectetur a erat nam at lectus urna
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-5 h-5 flex items-center justify-center bg-purple-600 rounded-full">
                <span className="text-white font-bold">✓</span>
              </div>
              <span className="text-gray-700">
                Odio aenean sed adipiscing diam donec adipiscing.
              </span>
            </div>
          </div>

          <button className="bg-purple-600 text-white px-6 py-3 rounded-full mt-4 w-max hover:bg-purple-700 transition">
            More Information
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUS;
