import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'Data Analysis with Python ',
    issuer: 'IBM',
    date: 'May 2025',
    Score: '86.80%',
    link: 'https://drive.google.com/file/d/1-ORx0S1Iasa_L69C5Ci1VfAGbgdSv1yP/view',
  },
  {
    title: 'Java',
    issuer: 'Spoken Tutorial',
    date: 'Dec 2023',
    Score: '80%',
    link: 'https://drive.google.com/file/d/1KR4a5P-rPe18F04VdJIl3fl75zUvKed0/view',
  },
  {
    title: 'C++',
    issuer: 'Spoken Tutorial',
    date: 'Jun 2023',
    Score: '77.50%',
    link: 'https://drive.google.com/file/d/1yNbAqdLkStQEt3eEXHAAPrvzXBI1m2h_/view',
  },
];

const Certifications = () => {
  return (
    <div id='certifications' className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Certifications
          </h1>

          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-[#020617] p-6 rounded-lg shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Score: {cert.Score}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-gray-600 dark:text-gray-300">
                      {cert.date}
                    </span>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-[#38bdf8] hover:underline mt-2"
                    >
                      View Certificate
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

export default Certifications; 