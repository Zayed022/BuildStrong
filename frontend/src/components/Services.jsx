import React, { useState } from "react";
import { services } from "../data/services";
import { motion } from "framer-motion";

const fadeInUp = (i) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  },
});

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      id="services"
      className="relative py-24 px-6 bg-gradient-to-br from-white via-gray-100 to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Optional Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[1200px] h-[1200px] bg-gradient-radial from-blue-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto text-center z-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0)}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Explore Our Elite Services
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(1)}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16"
        >
          We deliver cutting-edge architecture, engineering, and project execution capabilities by combining creative thinking with technological excellence.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 z-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp(i)}
              whileHover={{ scale: 1.03 }}
              className="relative group p-6 bg-white/10 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 backdrop-blur-lg rounded-3xl transition-all shadow-lg hover:shadow-2xl transform hover:rotate-[0.5deg] overflow-hidden"
              onClick={() => setActiveIndex(i === activeIndex ? null : i)}
            >
              {/* Animated Gradient Ring Glow */}
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-tr from-blue-500/20 via-purple-400/30 to-pink-500/20 blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-400/30 blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500" />

              {/* Floating Icon */}
              <div className="w-14 h-14 mb-5 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-800 dark:to-blue-700 text-blue-800 dark:text-blue-200 shadow-md animate-float-slow z-10 relative">
                <service.icon size={26} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 z-10 relative">
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm text-gray-600 dark:text-gray-300 transition-all duration-300 ${
                  activeIndex === i ? "line-clamp-none" : "line-clamp-3"
                }`}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
