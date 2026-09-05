import { motion } from "framer-motion";
const ExperienceCard = ({
  company,
  role,
  duration,
  location,
  description,
  technologies = [],
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{
        margin: "0px 0px -25% 0px",
        // once: true,
      }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <div className="group relative rounded-xl border border-gray-200 dark:border-gray-700 p-6 transition-all duration-300 hover:border-blue-500 hover:shadow-lg dark:bg-gray-900">
        {/* Timeline dot */}
        <div className="absolute -left-[9px] top-7 h-4 w-4 rounded-full border-4 border-white bg-blue-600 dark:border-gray-950" />

        <div className="flex flex-col gap-2">
          <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {role}
              </h3>

              <p className="text-lg font-medium text-blue-600">{company}</p>
            </div>

            <span className="text-sm text-gray-500 dark:text-gray-400">
              {duration}
            </span>
          </div>

          {location && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              📍 {location}
            </p>
          )}

          <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600 dark:text-gray-300">
            {description.map((ele, index) => (
              <li key={index}>{ele}</li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-600 dark:bg-blue-950 dark:text-blue-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
