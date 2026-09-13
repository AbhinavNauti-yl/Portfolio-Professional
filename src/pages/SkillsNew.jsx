import React from "react";

export default function SkillsNew({skills}) {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            What I work with
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Skills & Expertise
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            A collection of technologies and tools I use to build, develop, and
            solve problems.
          </p>
        </div>

        {/* Skills */}
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((category) => (
            <div
              key={category.title}
              className="group rounded-2xl border border-gray-200
                     bg-white p-6 transition-all duration-300
                     hover:-translate-y-1 hover:border-blue-500
                     hover:shadow-lg
                     dark:border-gray-700 dark:bg-gray-900"
            >
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center
                         rounded-xl bg-blue-50 text-xl
                         dark:bg-blue-950"
                >
                  {category.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-gray-200
                           px-3 py-2 text-sm text-gray-700
                           transition-all duration-200
                           hover:border-blue-500 hover:text-blue-600
                           dark:border-gray-700 dark:text-gray-300
                           dark:hover:text-blue-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
