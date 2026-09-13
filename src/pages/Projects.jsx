import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../utils/constants';

const Projects = () => {
  return (
    <div id='projects' className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            My Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard project={project} index={index}/>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 