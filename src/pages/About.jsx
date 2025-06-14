import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id='about' className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            About Me
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I am a passionate Full Stack Developer with a strong foundation in web technologies
              and a keen eye for creating elegant, user-friendly applications. My journey in
              software development has equipped me with a diverse set of skills and a deep
              understanding of both front-end and back-end technologies.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              With a focus on clean code and intuitive user experiences, I strive to build
              applications that not only meet technical requirements but also delight users.
              I'm constantly learning and exploring new technologies to stay at the forefront
              of web development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-[#020617] p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Education
              </h3>
              <ul className="space-y-4">
                <li className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium">Bachelor's Degree in Computer Science</span>
                  <br />
                  University Name, 2018-2022
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-[#020617] p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Experience
              </h3>
              <ul className="space-y-4">
                <li className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium">Full Stack Developer</span>
                  <br />
                  Company Name, 2022-Present
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 