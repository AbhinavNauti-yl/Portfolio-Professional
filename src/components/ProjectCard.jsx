import React from "react";
import { motion } from "framer-motion";
export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-[#020617] rounded-lg shadow-lg overflow-hidden"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-blue-300 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 min-h-[18vh] max-h-[20vh] overflow-y-auto">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-[#e0f2fe] dark:bg-[#0c4a6e] text-[#075985] dark:text-[#bae6fd] rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-[#0284c7] dark:hover:text-[#38bdf8] transition-colors"
          >
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-[#0284c7] dark:hover:text-[#38bdf8] transition-colors"
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
