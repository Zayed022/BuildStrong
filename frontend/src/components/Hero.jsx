import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const heroScreens = [
  {
    title: "Building Dreams, Crafting Realities",
    subtitle:
      "We bring your vision to life with top-notch construction services, backed by years of excellence and expertise.",
  },
  {
    title: "Innovative Architecture, Timeless Design",
    subtitle:
      "Our designs blend creativity with functionality to transform spaces into iconic landmarks.",
  },
  {
    title: "Sustainable Solutions for a Better Tomorrow",
    subtitle:
      "We’re committed to eco-conscious construction that shapes a greener future.",
  },
];

const fadeVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
};

const Hero = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroScreens.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentScreen = heroScreens[index];

  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center justify-center px-6 text-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-1000"
    >
      <div className="max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={fadeVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-blue-700 dark:text-white leading-tight">
              {currentScreen.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {currentScreen.subtitle}
            </p>
            <motion.button
              onClick={() => navigate("/projects")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-8 py-3 text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg shadow-lg transition-all"
            >
              Explore Our Work
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
