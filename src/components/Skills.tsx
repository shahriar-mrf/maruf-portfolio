
const skills = {
  frontend: [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "React", level: "Advanced" },
    { name: "TypeScript", level: "Intermediate" },
  ],
  backend: [
    { name: "Node.js", level: "Intermediate" },
    { name: "Express", level: "Intermediate" },
    { name: "MongoDB", level: "Advanced" },
    { name: "PostgreSQL", level: "Intermediate" },
  ],
  programmingLanguages: [
    { name: "JavaScript", level: "Advanced" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "Java", level: "Basic" },
  ],
  frameworksLibraries: [
    { name: "React", level: "Advanced" },
    { name: "Next.js", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "Material-UI", level: "Intermediate" },
  ],
  softSkills: [
    { name: "Problem Solving", level: "Advanced" },
    { name: "Team Collaboration", level: "Advanced" },
    { name: "Communication", level: "Advanced" },
    { name: "Time Management", level: "Advanced" },
  ],
};

const SkillCategory = ({ title, items }: { title: string; items: typeof skills.frontend }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((skill) => (
        <div
          key={skill.name}
          className="p-4 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
        >
          <h4 className="text-lg font-medium mb-1">{skill.name}</h4>
          <p className="text-gray-400">{skill.level}</p>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section className="py-20" id="skills">
      <div className="container px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <SkillCategory title="Frontend Development" items={skills.frontend} />
          <SkillCategory title="Backend Development" items={skills.backend} />
          <SkillCategory title="Programming Languages" items={skills.programmingLanguages} />
          <SkillCategory title="Frameworks & Libraries" items={skills.frameworksLibraries} />
          <SkillCategory title="Soft Skills" items={skills.softSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
