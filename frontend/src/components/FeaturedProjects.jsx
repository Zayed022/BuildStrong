import React, { useState, useEffect } from "react";
import { featuredProjects as projects } from "../data/featuredProjects";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";

const FeaturedProjects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const openModal = (project) => {
    setActiveProject(project);
    setMainImage(project.images[0]);
  };

  const closeModal = () => {
    setActiveProject(null);
    setMainImage("");
  };

  const closeFullScreen = () => setFullScreenImage(null);

  useEffect(() => {
    document.body.style.overflow =
      activeProject || fullScreenImage ? "hidden" : "auto";
  }, [activeProject, fullScreenImage]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
        closeFullScreen();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const statusStyle = (status) =>
    status === "Completed"
      ? "bg-green-100 text-green-700"
      : "bg-yellow-100 text-yellow-700";

  return (
    <section id="projects" className="bg-white dark:bg-gray-950 py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm uppercase text-gray-400 mb-2 tracking-widest">
          Our Work
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 font-mono">
          Innovative and sustainable designs, inspired by architectural
          excellence.
        </p>

        <div className="flex justify-center gap-4 mb-8 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="text-gray-600 dark:text-gray-400">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="text-gray-600 dark:text-gray-400">Ongoing</span>
          </div>
          
          
        </div>
        <div>
          <a
            href="/projects"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-full transition mb-10"
          >
            View All Projects
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              onClick={() => openModal(project)}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-xl overflow-hidden cursor-pointer border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all bg-white dark:bg-gray-900"
            >
              {/* Status Badge */}
              <div
                className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full ${statusStyle(
                  project.status
                )}`}
              >
                {project.status}
              </div>

              {/* Project Image */}
              <div className="w-full h-60 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="object-contain h-full"
                />
              </div>

              {/* Content */}
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
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
              className="bg-white dark:bg-gray-900 max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl p-6 relative"
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

              <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {activeProject.title}
                </h3>
                <span
                  className={`mt-2 sm:mt-0 px-3 py-1 text-sm font-semibold rounded-full ${statusStyle(
                    activeProject.status
                  )}`}
                >
                  {activeProject.status}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {Array.isArray(activeProject.description)
                  ? activeProject.description.map((line, i) => (
                      <span key={i} className="block mb-2">
                        {line}
                      </span>
                    ))
                  : activeProject.description}
              </p>

              <div className="relative mb-6">
                <motion.img
                  src={mainImage}
                  alt="Main"
                  className="rounded-lg w-full max-h-80 object-contain bg-gray-100 dark:bg-gray-800"
                  initial={{ scale: 0.98 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <button
                  onClick={() => setFullScreenImage(mainImage)}
                  className="absolute bottom-3 right-3 p-1 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-105 transition"
                >
                  <Maximize2
                    size={18}
                    className="text-gray-700 dark:text-gray-300"
                  />
                </button>
              </div>

              <div className="flex gap-3 overflow-x-auto">
                {activeProject.images.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt={`Thumbnail ${i}`}
                    onClick={() => setMainImage(img)}
                    className={`w-16 h-16 object-contain bg-gray-100 dark:bg-gray-800 rounded-md border cursor-pointer transition-transform duration-200 ${
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

      {/* Full-Screen Viewer */}
      <AnimatePresence>
        {fullScreenImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeFullScreen}
          >
            <motion.img
              src={fullScreenImage}
              alt="Full"
              className="max-h-[90vh] max-w-[95vw] object-contain shadow-lg"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            />
            <button
              onClick={closeFullScreen}
              className="absolute top-6 right-6 text-white bg-black/40 p-2 rounded-full hover:bg-black/70"
            >
              <X size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedProjects;
