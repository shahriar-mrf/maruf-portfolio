
const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "Project 3",
    description: "Description of project 3",
    tech: ["React", "Firebase", "Material-UI"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-purple-900/20" id="projects">
      <div className="container px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm bg-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    GitHub →
                  </a>
                  <a
                    href={project.demo}
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
