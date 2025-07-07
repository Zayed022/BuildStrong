import React, { useState, useEffect } from "react";
import { featuredProjects as projects } from "../data/featuredProjects";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";


const FeaturedProjects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [mainImage, setMainImage] = useState("");

  const openModal = (project) => {
    setActiveProject(project);
    setMainImage(project.images[0]);
  };

  const closeModal = () => {
    setActiveProject(null);
    setMainImage("");
  };

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "auto";
  }, [activeProject]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="projects" className="bg-white dark:bg-gray-950 py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm uppercase text-gray-400 mb-2 tracking-widest">Our Work</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 font-mono">
          Innovative and sustainable designs, inspired by architectural excellence.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              onClick={() => openModal(project)}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl overflow-hidden cursor-pointer border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
            >
              <img
                src={project.images[0] || "Project"}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl p-6 relative"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-red-500"
                onClick={closeModal}
              >
                <X size={24} />
              </button>

              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {activeProject.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{activeProject.description}</p>

              <motion.img
                src={mainImage}
                alt="Main"
                className="rounded-lg w-full h-72 object-cover mb-4"
                initial={{ scale: 0.98 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="flex gap-3 overflow-x-auto">
                {activeProject.images.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt={`Thumbnail ${i}`}
                    onClick={() => setMainImage(img)}
                    className={`w-16 h-16 object-cover rounded-md border cursor-pointer transition-transform duration-200 ${
                      mainImage === img
                        ? "border-blue-500 scale-105"
                        : "border-transparent hover:border-gray-300"
                    }`}
                    whileHover={{ scale: 1.05 }}
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
