import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="container mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-blue-900">📍 ACLan RO</h2>
          <p className="text-gray-700 mt-2">
            <strong>Address:</strong> No. 1&2, Next To Govt. Primary School, Near
            Venugopala Swamy Temple, Devasandra KR Puram, Bangalore - 560036.
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Tel:</strong> 080 - 6535 6565
          </p>
          <p className="text-gray-700">
            <strong>Fax:</strong> 080 - 2561 2485
          </p>
          <p className="text-gray-700">
            <strong>Mobile:</strong> +91 98453 99782
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@powerwatertech.com" className="text-blue-500 hover:underline">
              info@powerwatertech.com
            </a>
          </p>

          {/* Google Map Embed */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">📌 Our Location</h3>
            <iframe
              title="Google Map"
              className="w-full h-64 rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387144.00758331594!2d77.35073609578947!3d12.953997497485947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6be8a72b9c1d%3A0x2f8c22b08b0c2bd8!2sKR%20Puram%2C%20Bangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1707635349275!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">📬 Get in Touch</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                  placeholder="Your Name"
                  required
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                  placeholder="Your Email"
                  required
                />
              </motion.div>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <label className="block text-gray-700">Message</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 h-28"
                placeholder="Your Message"
                required
              ></textarea>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
            >
              🚀 Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
