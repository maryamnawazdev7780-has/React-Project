import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ================= Data ================= */

const counters = [
  {
    img: "/assets/lg3.png", 

    value:858,
    label: "Successful Projects",
    suffix: "+",
  },
  {
    img: "/assets/lg4.png", 
    value: 567,
    label: "Media Activities",
    suffix: "+",
  },
  {
      img: "/assets/lg9.png", 
    value:30,
    label: "Happy Clients",
    suffix: "+",


  },
  {
     img: "/assets/lg5.png", 
    value: 15,
    label: "Skilled Experts",
    suffix: "+",
    


  },
];

/* ================= Counter Box ================= */

const CounterBox = ({ img, value, label, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center gap-3"
    >
      {/* image */}
      {img && (
        <img
          src={img}
          alt={label}
         className="w-12 h-12 object-contain brightness-0 invert me-5"
        />
      )}

      <h2 className="text-3xl md:text-4xl font-bold text-white">
  {count.toLocaleString()}{suffix}
</h2>

<p className="text-white/90 text-sm font-medium md:text-base">
  {label}
</p>
    </motion.div>
  );
};

/* ================= Main Section ================= */

export default function CounterSection() {
  return (
    <section className="bg-purple-600 py-10 mt-24">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-10">
        {counters.map((item, index) => (
          <CounterBox key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
