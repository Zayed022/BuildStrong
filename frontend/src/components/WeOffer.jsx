import React from "react";
import { motion } from "framer-motion";

const AnimatedWord = ({ text, gradient }) => (
  <span
    className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent animate-gradient font-extrabold`}
  >
    {text}
  </span>
);

const WeOffer = () => {
  return (
    <section className="relative z-10 bg-white dark:bg-gray-950 py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Label */}
        <motion.p
          className="text-sm tracking-widest text-gray-400 uppercase mb-2 text-center md:text-left"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Our Expertise
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-black text-gray-800 dark:text-white mb-6 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          We Offer:
        </motion.h2>

        {/* Animated Highlighted Text */}
        <div className="text-3xl md:text-4xl font-bold leading-snug space-y-2 mb-10 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <AnimatedWord
              text="Innovative Design"
              gradient="from-blue-500 via-purple-500 to-pink-500"
            />
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <AnimatedWord
              text="Solutions,"
              gradient="from-pink-500 via-fuchsia-500 to-violet-600"
            />
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <AnimatedWord
              text="Sustainable"
              gradient="from-green-400 via-emerald-500 to-teal-500"
            />
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-gray-800 dark:text-white"
          >
            Architecture.
          </motion.p>
        </div>

        {/* Description Paragraphs */}
        <motion.p
          className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-4 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          At Square Space, we bring your vision to life through creative and functional design. Our team is dedicated to crafting spaces that inspire and elevate everyday experiences.
        </motion.p>

        <motion.p
          className="text-gray-600 dark:text-gray-400 text-base leading-relaxed text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          Explore our portfolio to see how we transform spaces with our expertise in architecture and interior design. We take pride in our ability to adapt to diverse styles and requirements, ensuring each project is unique and impactful.
        </motion.p>
      </div>
    </section>
  );
};

export default WeOffer;
