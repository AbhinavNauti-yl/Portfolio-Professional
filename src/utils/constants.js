import { Feature_Sills } from "../featureTogel";

const experiences = [
  {
    company: "Infosys",
    role: "System Associate | Frontend Developer",
    client: "British Telecom (BT)",
    startDate: "Mar 2026",
    endDate: "Present",
    location: "Bengaluru, India",
    description: [
      "Develop and maintain React.js-based web applications for British Telecom (BT).",
      "Implement new features and enhancements based on business and technical requirements.",
      "Work on application stabilization, debugging, and feature improvements to enhance reliability and user experience.",
      "Develop frontend functionality using React.js, TypeScript, HTML, and CSS.",
      "Write and maintain Jest tests to support application quality and reliability.",
      "Follow Specification-Driven Development (SDD) and use AI-assisted development workflows to improve development efficiency.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Jest",
      "Git",
      "Kiro AI",
    ],
  },
];

const skills = Feature_Sills
  ? [
      {
        title: "Frontend",
        icon: "⚡",
        skills: [
          "HTML",
          "CSS3",
          "React.js",
          "JavaScript",
          "TypeScript",
          "React Router",
          "Redux.js",
          "Tailwind CSS",
          "Framer Motion",
          "Jest",
          "Vitest",
        ],
      },
      {
        title: "Backend",
        icon: "⚙️",
        skills: [
          "Node.js",
          "Express.js",
          "REST APIs",
          "Mongoose",
          "JWT Authentication",
          "HTTP Cookies",
          "Cloudinary",
          "MongoDB",
          "SQL",
        ],
      },
      {
        title: "Programming",
        icon: "💻",
        skills: [
          "Data Structures & Algorithms",
          "OOP",
          "Responsive Design",
          "CI/CD",
        ],
      },
      {
        title: "Tools, Development & Deployment",
        icon: "🛠️",
        skills: [
          "Git",
          "GitHub",
          "GitLab",
          "Jira",
          "Postman",
          "GitHub Actions",
          "CI/CD",
          "API Integration",
        ],
      },
    ]
  : [
      {
        category: "Frontend",
        items: [
          { name: "React", level: 80 },
          { name: "Redux", level: 70 },
          { name: "JavaScript", level: 85 },
          { name: "HTML/CSS", level: 90 },
          { name: "Tailwind CSS", level: 85 },
        ],
      },
      {
        category: "Backend",
        items: [
          { name: "Node.js", level: 85 },
          { name: "Express", level: 75 },
          { name: "JWT", level: 70 },
          { name: "MongoDb", level: 75 },
        ],
      },
      {
        category: "Tools & Others",
        items: [
          { name: "Git", level: 85 },
          { name: "Render", level: 60 },
          { name: "SQL", level: 75 },
          { name: "Agile", level: 80 },
        ],
      },
    ];

const projects = [
  {
    title: "BlogSphere",
    description:
      "Developed a full-stack blog platform titled BlogSphere, enabling users to read, create, and manage blog posts. Implemented features such as user authentication, blog CRUD operations and responsive UI.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    image:
      "https://res.cloudinary.com/dmdaie93q/image/upload/v1749919740/BlogSphere_j5puwp.png",
    github: "https://github.com/AbhinavNauti-yl/Blog-Sphere.git",
    live: "https://blog-sphere-t65e.onrender.com/",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website showcasing projects and skills with smooth animations and responsive design.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    image:
      "https://res.cloudinary.com/dmdaie93q/image/upload/v1749919743/portfolio_wj4wiq.png",
    github: "https://github.com/AbhinavNauti-yl/Portfolio-Professional.git",
    live: "https://abhinav-portfolio-5vp0.onrender.com/",
  },
  {
    title: "TaskClock",
    description:
      "Developed a website titled TaskClock, aimed at time and task management. Integration Calendar, To-do List, Stopwatch, and Time on a single website",
    technologies: ["React", "Local Storage", "Netlify", "JavaScript"],
    image:
      "https://res.cloudinary.com/dmdaie93q/image/upload/v1749919751/taskClock_qcygoc.png",
    github: "https://github.com/yourusername/project2",
    live: "https://project2.com",
  },
];

export { experiences, skills, projects };
