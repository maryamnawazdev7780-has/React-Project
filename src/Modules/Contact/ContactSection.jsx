import { Phone, MapPin, Clock, User, Mail, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const leftCardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

const rightCardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
};

const ContactSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT CARD */}
        <motion.div
          className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-shadow"
          variants={leftCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -5, boxShadow: "0px 20px 30px rgba(0,0,0,0.1)" }}
        >
          <motion.h2
            className="text-3xl font-bold mb-4 text-purple-700"
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } } }}
          >
            USA Office Address
          </motion.h2>

          <motion.p
            className="text-gray-500 mb-8"
            variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } } }}
          >
            Completely recapitalize 24/7 communities via standards compliant metrics whereas web-enabled content.
          </motion.p>

          {/* Contact Items */}
          <motion.div className="flex gap-4 mb-6" variants={itemVariants}>
            <div className="bg-purple-600 text-white p-5 rounded-2xl shadow-md">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Phone Number & Email</h4>
              <p className="text-gray-500 text-sm">+(310) 2591 21563</p>
              <p className="text-gray-500 text-sm">info@example.com</p>
            </div>
          </motion.div>

          <motion.div className="my-6 border-t border-gray-200" variants={itemVariants} />

          <motion.div className="flex gap-4 mb-6" variants={itemVariants}>
            <div className="bg-purple-600 text-white p-5 rounded-2xl shadow-md">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Our Office Address</h4>
              <p className="text-gray-500 text-sm">
                258 Dancing Street, Midland Line,
                <br /> HUYI 21563, Frankfurt
              </p>
            </div>
          </motion.div>

          <motion.div className="my-6 border-t border-gray-200" variants={itemVariants} />

          <motion.div className="flex gap-4" variants={itemVariants}>
            <div className="bg-purple-600 text-white p-5 rounded-2xl shadow-md">
              <Clock size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Official Work Time</h4>
              <p className="text-gray-500 text-sm">7:00am - 6:00pm (Mon - Fri)</p>
              <p className="text-gray-500 text-sm">Sun & Holiday Closed</p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-shadow"
          variants={rightCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -5, boxShadow: "0px 20px 30px rgba(0,0,0,0.1)" }}
        >
          <h2 className="text-3xl font-bold mb-2 text-purple-700">Leave a Message</h2>
          <p className="text-gray-500 mb-8">We're Ready To Help You</p>

          <form className="space-y-6">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-100 rounded-full py-4 px-6 pr-12 outline-none focus:ring-2 focus:ring-purple-500 transition"
                />
                <User size={20} className="absolute right-4 top-4 text-gray-400" />
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-gray-100 rounded-full py-4 px-6 pr-12 outline-none focus:ring-2 focus:ring-purple-500 transition"
                />
                <Mail size={20} className="absolute right-4 top-4 text-gray-400" />
              </div>
            </div>

            {/* Subject Select */}
            <div className="relative">
              <select className="w-full bg-gray-100 rounded-full py-4 px-6 appearance-none outline-none focus:ring-2 focus:ring-purple-500 transition">
                <option>Select subject</option>
                <option>Support</option>
                <option>Business</option>
                <option>Other</option>
              </select>
              <ChevronDown size={20} className="absolute right-4 top-4 text-gray-400" />
            </div>

            {/* Message */}
            <textarea
              rows="5"
              placeholder="Type Your Message"
              className="w-full bg-gray-100 rounded-3xl py-4 px-6 outline-none resize-none focus:ring-2 focus:ring-purple-500 transition"
            ></textarea>

            {/* Submit Button */}
            <button className="bg-purple-600 hover:bg-black text-white px-8 py-4 rounded-full flex items-center gap-2 transition-transform transform hover:scale-105">
              Submit Message →
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
