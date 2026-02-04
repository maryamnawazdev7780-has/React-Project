import { motion } from "framer-motion";
import { categories, recentNews, comments } from "./BlogData";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const BlogLayout = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT CONTENT */}
        <motion.div
          className="lg:col-span-8 space-y-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Video */}
          <div className="w-full h-[420px] rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://player.vimeo.com/video/457933112"
              title="Video"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>

          <h1 className="text-3xl font-bold">
            Blockchain Innovations for Streamlined International Trade
          </h1>

          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          {/* Quote */}
          <div className="bg-gray-100 border-l-4 border-purple-600 p-6 rounded-lg">
            <p className="italic text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <span className="text-purple-600 font-semibold block mt-2">
              — Rodja Hartmann
            </span>
          </div>

          {/* Scroll Content */}
          <div className="space-y-6">
            {[1,].map((item) => (
              <motion.p
                key={item}
                className="text-gray-600"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: item * 0.1 }}
              >
                Exploring Common Car Troubleshooting Techniques
                Vestibulum ac diam sit amet for a quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDEBAR */}
        <motion.div
          className="lg:col-span-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="sticky top-24 space-y-8">
            {/* Search */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-4">Event Search</h3>
              <input
                type="text"
                placeholder="Search here"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-4">Category</h3>
              <ul className="space-y-3">
                {categories.map((cat, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center text-gray-600 hover:text-purple-600 cursor-pointer transition"
                  >
                    {cat}
                    <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                      {index + 2}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent News */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-4">Recent News</h3>
              <div className="space-y-4">
                {recentNews.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <img
                      src={item.img}
                      className="w-16 h-16 rounded-lg object-cover"
                      alt=""
                    />
                    <div>
                      <p className="text-sm font-medium">{item.title}</p>
                      <span className="text-xs text-gray-500">{item.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* COMMENTS & FORM SECTION */}
      <motion.div
        className="lg:col-span-8 mt-16 space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Comments Header */}
        <motion.h3
          className="text-2xl font-semibold"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          {comments.length} Comments
        </motion.h3>

        {/* Comment Items */}
        <motion.div
          className="space-y-6"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {comments.map((comment) => (
            <motion.div
              key={comment.id}
              className="flex gap-4 border-b pb-6 bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
            >
              <img
                src={comment.image}
                className="w-14 h-14 rounded-full object-cover"
                alt={comment.name}
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">{comment.name}</h4>
                  <span className="text-sm text-gray-400">{comment.date}</span>
                </div>
                <p className="text-gray-600 mt-2">{comment.text}</p>
                <button className="text-purple-600 text-sm mt-2 hover:underline">
                  Reply
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Leave Comment */}
        <motion.div
          className="bg-purple-300 p-8 rounded-2xl"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
          }}
        >
          <h3 className="text-2xl font-semibold mb-6">Leave a Comment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
          <textarea
            rows="5"
            placeholder="Write your comment"
            className="w-full mt-4 border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
          ></textarea>
          <button className="mt-6 bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-black transition">
            Post Comment
          </button>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default BlogLayout;
