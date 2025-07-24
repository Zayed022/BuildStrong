import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const heroScreens = [
  {
    title: "Building Dreams, Crafting Realities",
    subtitle:
      "We bring your vision to life with top-notch construction services, backed by years of excellence and expertise.",
    image: "/ProjectH2.jpg",
  },
  {
    title: "Innovative Architecture, Timeless Design",
    subtitle:
      "Our designs blend creativity with functionality to transform spaces into iconic landmarks.",
    image: "/ProjectH4.jpg",
  },
  {
    title: "Sustainable Solutions for a Better Tomorrow",
    subtitle:
      "We’re committed to eco-conscious construction that shapes a greener future.",
    image: "/ProjectH5.jpg",
  },
];

const fadeVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
};

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const navigate = useNavigate();
  const intervalRef = useRef(null);

  useEffect(() => {
    const loadImages = async () => {
      const promises = heroScreens.map((screen) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = screen.image;
          img.onload = resolve;
        });
      });

      await Promise.all(promises);
      setImagesLoaded(true);
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (imagesLoaded) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % heroScreens.length);
      }, 6000);
    }

    return () => clearInterval(intervalRef.current);
  }, [imagesLoaded]);

  if (!imagesLoaded) {
    return (
      <section className="w-full h-screen bg-black flex items-center justify-center text-white">
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Preloaded & layered background images */}
      {heroScreens.map((screen, i) => (
        <img
          key={i}
          src={screen.image}
          alt={screen.title}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
            i === index ? "opacity-100 z-0" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-16 h-full text-center text-white">
        <motion.div
          key={index}
          variants={fadeVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="space-y-6 max-w-3xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            {heroScreens[index].title}
          </h2>
          <p className="text-lg md:text-xl text-gray-200">
            {heroScreens[index].subtitle}
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
      </div>
    </section>
  );
};

export default Hero;
