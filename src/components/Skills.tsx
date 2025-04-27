
const skills = [
  { name: "Frontend Development", level: "Advanced" },
  { name: "Backend Development", level: "Intermediate" },
  { name: "UI/UX Design", level: "Intermediate" },
  { name: "Database Management", level: "Advanced" },
  { name: "DevOps", level: "Intermediate" },
  { name: "Research", level: "Advanced" },
];

const Skills = () => {
  return (
    <section className="py-20" id="skills">
      <div className="container px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-400">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
