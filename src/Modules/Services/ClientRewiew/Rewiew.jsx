import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RewiewData } from "./RewiewData";

const Rewiew = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % RewiewData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const data = RewiewData[index];

  return (
    <section className="py-28 relative">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-purple-600 font-semibold">Testimonials</p>
        <h2 className="text-4xl font-bold">
          Our Client’s Feedback And <br /> Reviews
        </h2>
      </div>

      {/* Main Layout */}
      <div className="relative w-full max-w-full mx-auto overflow-hidden">
        {/* Full-width Background */}
        <div
          className="w-full h-[420px] rounded-3xl bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/concert3.png')",
          }}
        />

        {/* Animated Review Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={data.id}
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -500, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="
              absolute 
              top-1/2 
              right-10
              -translate-y-1/2
              w-[480px] 
              bg-white 
              rounded-2xl 
              shadow-xl 
              p-8
            "
          >
            {/* Profile */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={data.image}
                alt={data.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-lg">{data.name}</h4>
                <p className="text-sm text-purple-600">{data.role}</p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-4 text-yellow-400">
              {"★".repeat(data.rating)}
            </div>

            {/* Review */}
            <p className="text-gray-600 leading-relaxed">{data.review}</p>

            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-purple-200 text-6xl">
              “”
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Rewiew;
