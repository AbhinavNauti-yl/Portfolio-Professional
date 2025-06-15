import { motion } from 'framer-motion';

const projects = [
  {
    title: 'BlogSphere',
    description: 'Developed a full-stack blog platform titled BlogSphere, enabling users to read, create, and manage blog posts. Implemented features such as user authentication, blog CRUD operations and responsive UI.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    image: 'https://res.cloudinary.com/dmdaie93q/image/upload/v1749919740/BlogSphere_j5puwp.png',
    github: 'https://github.com/AbhinavNauti-yl/Blog-Sphere.git',
    live: 'https://blog-sphere-t65e.onrender.com/',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website showcasing projects and skills with smooth animations and responsive design.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://res.cloudinary.com/dmdaie93q/image/upload/v1749919743/portfolio_wj4wiq.png',
    github: 'https://github.com/AbhinavNauti-yl/Portfolio-Professional.git',
    live: 'https://yourportfolio.com',
  },
  {
    title: 'TaskClock',
    description: 'Developed a website titled TaskClock, aimed at time and task management. Integration Calendar, To-do List, Stopwatch, and Time on a single website',
    technologies: ['React', 'Local Storage', 'Netlify', 'JavaScript'],
    image: 'https://res.cloudinary.com/dmdaie93q/image/upload/v1749919751/taskClock_qcygoc.png',
    github: 'https://github.com/yourusername/project2',
    live: 'https://project2.com',
  },
];

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
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
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
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 