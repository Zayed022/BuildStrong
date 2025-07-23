import React from "react";
import { motion } from "framer-motion";

// Reusable animated word component with gradient
const AnimatedWord = ({ text, gradient }) => (
  <span
    className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent font-extrabold animate-gradient`}
  >
    {text}
  </span>
);

const services = [
  {
    title: "Innovative Design",
    description: "Creating functional and aesthetic spaces tailored to your lifestyle.",
    gradient: "from-blue-500 via-purple-500 to-pink-500",
  },
  {
    title: "Sustainable Solutions",
    description: "Eco-conscious architecture for a better tomorrow.",
    gradient: "from-green-400 via-emerald-500 to-teal-500",
  },
  {
    title: "Smart Planning",
    description: "Detailed and practical planning for efficient execution.",
    gradient: "from-yellow-400 via-orange-500 to-red-500",
  },
];

const WeOffer = () => {
  return (
    <section className="relative z-10 py-24 px-6 md:px-12 overflow-hidden bg-white dark:bg-gray-950">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-gray-950" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center md:text-left">
        {/* Section Label */}
        <motion.p
          className="text-sm tracking-widest text-gray-400 uppercase mb-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          Our Expertise
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-black text-gray-800 dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          We Offer:
        </motion.h2>

        {/* Animated Headline Words */}
        <div className="text-3xl md:text-4xl font-bold leading-snug space-y-2 mb-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <AnimatedWord
              text="Innovative Design,"
              gradient="from-blue-500 via-purple-500 to-pink-500"
            />
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <AnimatedWord
              text="Sustainable Solutions,"
              gradient="from-green-400 via-emerald-500 to-teal-500"
            />
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-800 dark:text-white"
          >
            And Smart Architecture.
          </motion.p>
        </div>

        {/* Cards for Services */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3
                className={`text-xl font-semibold mb-2 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
              >
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xl">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Description Paragraphs */}
        <motion.p
  className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-4"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.9 }}
  viewport={{ once: true }}
>
  At <strong>S.K Reality</strong>, we don’t just build structures — we craft spaces that embody emotion, purpose, and vision. Our approach is rooted in a seamless blend of architectural elegance and functional design, delivering projects that stand the test of time while reflecting each client’s unique aspirations.
</motion.p>
<motion.p
  className="text-gray-600 dark:text-gray-400 text-base leading-relaxed"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 1 }}
  viewport={{ once: true }}
>
  From luxurious residences and serene retreats to innovative commercial hubs, our portfolio reflects diversity and excellence. Every project at S.K Reality is driven by sustainable practices, cutting-edge technology, and a commitment to exceeding expectations — making us a trusted partner in turning ideas into iconic realities.
</motion.p>

      </div>
    </section>
  );
};

export default WeOffer;
