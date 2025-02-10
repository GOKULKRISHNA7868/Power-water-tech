import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations

const Home = () => {
  return (
    <section id="home" className="bg-gray-100 py-12 px-6">
      {/* Welcome Section */}
      <motion.div
        className="container mx-auto text-center max-w-3xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Welcome to ACLAN RO
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Power Water Tech Private Limited, established in 2003, is a privately
          held organization specializing in the manufacturing, supplying, and
          exporting of advanced water treatment products. We are dedicated to
          providing hygienic drinking water with essential purification systems
          and equipment.
        </p>
        <motion.h3
          className="text-2xl font-semibold text-gray-800 mb-4"
          whileHover={{ scale: 1.1 }}
        >
          Our Products & Services
        </motion.h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          As a reputed manufacturer and exporter under the brand ACLAN, we
          offer a range of high-quality water treatment solutions, including:
        </p>
        <ul className="text-gray-700 mb-6 text-left inline-block">
          <motion.li
            className="mb-2"
            whileHover={{ x: 10 }}
          >
            ✔ Water Softeners
          </motion.li>
          <motion.li
            className="mb-2"
            whileHover={{ x: 10 }}
          >
            ✔ Water Dispensers (ABS / SS)
          </motion.li>
          <motion.li
            className="mb-2"
            whileHover={{ x: 10 }}
          >
            ✔ RO Systems (Regular 25/50/100 LPH)
          </motion.li>
          <motion.li
            className="mb-2"
            whileHover={{ x: 10 }}
          >
            ✔ UV / RO Water Dispensers with Hot-Normal-Cold Functionality
          </motion.li>
        </ul>
        <motion.a
          href="#products"
          className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Explore Our Products
        </motion.a>
      </motion.div>

      {/* Featured Products Section */}
      <motion.div
        className="container mx-auto mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">
          Our Featured Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              img: "/images/ACLAN Water Purifiers.jpg",
              title: "ACLAN Water Purifiers",
              description:
                "Purifiers not only remove impurities but also come with durable spare parts for long-term use.",
              link: "/purifiers",
            },
            {
              img: "/images/ACLAN water Dispensers.jpg",
              title: "ACLAN Water Dispensers",
              description:
                "Convenient freestanding or countertop water coolers for home or office use.",
              link: "#",
            },
            {
              img: "/images/ACLAN RO Regular water purifiers.jpg",
              title: "ACLAN RO Regular Water Purifiers",
              description:
                "Highly effective RO systems to remove impurities like heavy metals and toxins.",
              link: "#",
            },
            {
              img: "/images/ACLAN UV Modls.jpg",
              title: "ACLAN UV Models",
              description:
                "UV models designed to eliminate microorganisms in water for safer consumption.",
              link: "#",
            },
            {
              img: "/images/ACLAN RO Models.jpg",
              title: "ACLAN RO Models",
              description:
                "Advanced RO models with high-pressure pumps for effective water purification.",
              link: "#",
            },
            {
              img: "/images/ACLAN Softeners.jpg",
              title: "ACLAN Softeners",
              description:
                "Premium water softeners for complete water treatment solutions.",
              link: "#",
            },
          ].map((product, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-bold mb-2">{product.title}</h4>
                <p className="text-gray-700 text-sm mb-4">{product.description}</p>
                <a
                  href={product.link}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  View the project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
