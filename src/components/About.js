import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const companyImages = [
  "/images/company1.jpg",
  "/images/company2.jpg",
  "/images/company3.jpg",
  
];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide  every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % companyImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="container mx-auto px-6 py-12 bg-white shadow-lg rounded-lg"
    >
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Company History Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Our Company <span className="text-gray-600">HISTORY</span>
          </h2>
          <p className="text-gray-700">
            Our organization is led by our mentor, <strong>Mr. Padmanabha Reddy</strong>, a perfectionist ensuring that all
            products are tested to meet high-quality standards. With a well-coordinated
            manufacturing unit equipped with advanced machinery, we produce superior
            water treatment systems for various applications.
          </p>
          <p className="text-gray-700 mt-4">
            We offer world-class solutions to address environmental challenges in the water
            treatment industry, adhering to international quality standards. Our services include
            turn-key projects for water softeners, Reverse Osmosis plants, demineralization,
            distillation, and packaged drinking water plants.
          </p>
        </motion.div>

        {/* Mentor Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="flex justify-center"
        >
          <img
            src="/images/Mr. Padmanabha Reddy.jpg"
            alt="Mr. Padmanabha Reddy"
            className="rounded-lg shadow-lg w-72 h-72 object-cover border-4 border-blue-900"
          />
        </motion.div>
      </div>

      {/* Stress & Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="bg-gray-100 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">OUR STRESS ON</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <strong>Environmental-friendly approach</strong>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              Producing superior quality products
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              Lower processing cost and minimal losses
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              Lower maintenance cost and minimum breakdowns
            </motion.li>
          </ul>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          className="bg-blue-50 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-bold text-gray-800">OUR MISSION</h3>
          <p className="text-gray-700 mt-2">
            To provide quality service and solutions across industries while focusing on
            customer needs to ensure total satisfaction.
          </p>
        </motion.div>
      </div>

      {/* Company Photos - Auto Slider */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        className="mt-12 relative"
      >
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">Company Gallery</h3>
        <div className="flex justify-center">
          <motion.img
            key={currentImageIndex}
            src={companyImages[currentImageIndex]}
            alt="Company"
            className="w-full md:w-2/3 h-96 object-cover rounded-lg shadow-md transition-opacity duration-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        </div>
      </motion.div>

      {/* Company Video */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
        className="mt-12 flex justify-center"
      >
        <video
          controls
          className="w-full md:w-2/3 rounded-lg shadow-lg"
        >
          <source src="/videos/Company video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </motion.div>
  );
};

export default About;
