
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Laptop,
  Database,
  Code,
  Layout,
  Users
} from "lucide-react";

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

const iconMap = {
  frontend: <Laptop className="w-10 h-10 text-purple-400" />,
  backend: <Database className="w-10 h-10 text-blue-400" />,
  programmingLanguages: <Code className="w-10 h-10 text-green-400" />,
  frameworksLibraries: <Layout className="w-10 h-10 text-orange-400" />,
  softSkills: <Users className="w-10 h-10 text-pink-400" />,
};

const SkillCategory = ({ title, items, icon }: { title: string; items: typeof skills.frontend; icon: JSX.Element }) => (
  <Card className="backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
    <CardHeader className="flex flex-row items-center gap-4">
      {icon}
      <CardTitle className="text-xl font-semibold text-white">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((skill) => (
          <div
            key={skill.name}
            className="p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/20 transition-all"
          >
            <h4 className="text-lg font-medium text-white mb-1">{skill.name}</h4>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  skill.level === 'Advanced'
                    ? 'w-full bg-gradient-to-r from-purple-400 to-blue-500'
                    : skill.level === 'Intermediate'
                    ? 'w-2/3 bg-gradient-to-r from-blue-400 to-green-500'
                    : 'w-1/3 bg-gradient-to-r from-green-400 to-yellow-500'
                }`}
              />
            </div>
            <p className="text-sm text-gray-400 mt-1">{skill.level}</p>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Skills = () => {
  return (
    <section className="py-20" id="skills">
      <div className="container px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory title="Frontend Development" items={skills.frontend} icon={iconMap.frontend} />
          <SkillCategory title="Backend Development" items={skills.backend} icon={iconMap.backend} />
          <SkillCategory title="Programming Languages" items={skills.programmingLanguages} icon={iconMap.programmingLanguages} />
          <SkillCategory title="Frameworks & Libraries" items={skills.frameworksLibraries} icon={iconMap.frameworksLibraries} />
          <SkillCategory title="Soft Skills" items={skills.softSkills} icon={iconMap.softSkills} className="md:col-span-2" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
