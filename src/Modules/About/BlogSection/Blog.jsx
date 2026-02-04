import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import BlogData from "./BlogData";

const Blog = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex items-center justify-between mb-10"
      >
        <div>
          <span className="text-purple-600 font-semibold">
            ▸ Blog And News
          </span>
          <h2 className="text-4xl font-bold mt-2">
            Our Latest Blog And Latest News
          </h2>
        </div>

        {/* Arrows */}
        <div className="flex gap-3">
          <button className="blog-prev w-12 h-12 rounded-full bg-purple-600 text-white text-xl hover:scale-110 transition">
            ←
          </button>
          <button className="blog-next w-12 h-12 rounded-full bg-purple-600 text-white text-xl hover:scale-110 transition">
            →
          </button>
        </div>
      </motion.div>

      {/* Slider */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".blog-prev",
          nextEl: ".blog-next",
        }}
        spaceBetween={30}
        speed={800}
        grabCursor={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {BlogData.map((item) => (
          <SwiperSlide key={item.id}>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -12 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="h-60 w-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <span className="absolute bottom-4 left-4 bg-purple-600 text-white text-sm px-3 py-1 rounded-full">
                  {item.date}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">
                  By Admin · (03) Comments
                </p>
                <h3 className="text-lg font-semibold mb-4">
                  {item.title}
                </h3>
                <button className="text-purple-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Read More →
                </button>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Blog;
