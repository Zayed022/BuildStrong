import React, { useState } from "react";
import { featuredProjects as projects } from "../data/featuredProjects";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FeaturedProjects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [mainIndex, setMainIndex] = useState(0);

  const openModal = (project) => {
    setActiveProject(project);
    setMainIndex(0);
  };

  const closeModal = () => {
    setActiveProject(null);
    setMainIndex(0);
  };

  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm uppercase text-gray-400 mb-2 tracking-widest">
          Our Work
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 font-mono">
          Innovative and sustainable designs, inspired by architectural excellence.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              onClick={() => openModal(project)}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl overflow-hidden cursor-pointer bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl p-8 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                className="absolute top-5 right-5 text-gray-700 dark:text-gray-300 hover:text-red-500"
                onClick={closeModal}
              >
                <X size={24} />
              </button>

              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                {activeProject.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {activeProject.description}
              </p>

              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={(swiper) => setMainIndex(swiper.activeIndex)}
                className="rounded-xl mb-4"
              >
                {activeProject.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={`Slide ${i}`}
                      className="w-full h-80 object-cover rounded-xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="flex gap-3 overflow-x-auto">
                {activeProject.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Thumb ${i}`}
                    onClick={() => setMainIndex(i)}
                    className={`w-16 h-16 object-cover rounded-lg cursor-pointer border transition-all duration-200 ${
                      mainIndex === i
                        ? "border-blue-500 scale-105"
                        : "border-transparent hover:border-gray-400"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedProjects;
