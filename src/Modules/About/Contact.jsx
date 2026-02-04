import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here (API call or email)
    alert(`Message sent! Thank you, ${formData.name}`);
    setFormData({ name: "", email: "", message: "" });
  };

  // Variants for section animation
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <motion.section
      className="max-w-4xl mx-auto px-6 py-24"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* ===== HEADER ===== */}
      <div className="text-center mb-12">
        <p className="text-purple-600 font-semibold mb-2">Contact Us</p>
        <h2 className="text-4xl font-bold">Let's Talk About Your Event</h2>
        <p className="text-gray-500 mt-2">We’d love to hear from you. Fill out the form below.</p>
      </div>

      {/* ===== FORM ===== */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 grid gap-6"
      >
        {/* Name */}
        <div className="relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="peer w-full border border-gray-300 rounded-xl px-4 pt-5 pb-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
          />
          <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-purple-600 peer-focus:text-sm">
            Your Name
          </label>
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="peer w-full border border-gray-300 rounded-xl px-4 pt-5 pb-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
          />
          <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-purple-600 peer-focus:text-sm">
            Email Address
          </label>
        </div>

        {/* Message */}
        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="peer w-full border border-gray-300 rounded-xl px-4 pt-5 pb-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600 transition resize-none"
          ></textarea>
          <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-purple-600 peer-focus:text-sm">
            Your Message
          </label>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-600 text-white font-semibold py-3 rounded-full shadow-md hover:bg-purple-700 transition"
        >
          Send Message
        </motion.button>
      </form>
    </motion.section>
  );
};

export default Contact;
