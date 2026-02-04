import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import testimonialData from "./TestimonialData";

/* LEFT IMAGE ANIMATION */
const leftImageVariant = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [state, setState] = useState("enter"); // enter | exit
  const [direction, setDirection] = useState("next"); // next | prev

  const slideNext = () => {
    setDirection("next");
    setState("exit");

    setTimeout(() => {
      setIndex((prev) => (prev + 1) % testimonialData.length);
      setState("enter");
    }, 600);
  };

  const slidePrev = () => {
    setDirection("prev");
    setState("exit");

    setTimeout(() => {
      setIndex(
        (prev) => (prev - 1 + testimonialData.length) % testimonialData.length
      );
      setState("enter");
    }, 600);
  };

  // 🔄 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(slideNext, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center overflow-hidden">

        {/* LEFT IMAGE WITH SCROLL ANIMATION */}
        <motion.div
          variants={leftImageVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="h-[300px] sm:h-[400px] lg:h-[500px]"
        >
          <img
            src="/assets/testi.jpg"
            alt="event"
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-purple-600 font-semibold mb-2">
            Testimonials
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 leading-tight">
            Our Client’s Feedback <br /> And Reviews
          </h2>

          {/* SLIDER */}
          <div className="relative h-[280px] overflow-hidden">
            <div
              className={`
                absolute inset-0 bg-white shadow-lg rounded-xl p-6 sm:p-8
                transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                ${
                  state === "enter"
                    ? "translate-x-0 opacity-100 scale-100"
                    : direction === "next"
                    ? "-translate-x-full opacity-0 scale-95"
                    : "translate-x-full opacity-0 scale-95"
                }
              `}
            >
              {/* STARS */}
              <div className="flex mb-3">
                {[...Array(testimonialData[index].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* REVIEW */}
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                {testimonialData[index].review}
              </p>

              {/* USER */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonialData[index].image}
                  alt={testimonialData[index].name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">
                    {testimonialData[index].name}
                  </h4>
                  <p className="text-sm text-purple-600">
                    {testimonialData[index].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={slidePrev}
              className="w-12 h-12 rounded-full bg-purple-600 text-white text-xl hover:bg-purple-700 transition"
            >
              ←
            </button>
            <button
              onClick={slideNext}
              className="w-12 h-12 rounded-full bg-purple-600 text-white text-xl hover:bg-purple-700 transition"
            >
              →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;
