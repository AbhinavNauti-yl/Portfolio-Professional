import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../utils/constants";

export default function Experince() {
  return (
    <section id="experience" className="space-y-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Experience</h1>

      <div className="mx-auto max-w-3xl border-l-2 border-gray-200 pl-6 ml-0 dark:border-gray-700 ">
        {experiences.map((experience) => (
          <div
            key={`${experience.company}-${experience.role}`}
            className="mb-10"
          >
            <ExperienceCard {...experience} />
          </div>
        ))}
      </div>
    </section>
  );
}
