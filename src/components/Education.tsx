
const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Your University",
    year: "2020-2022",
    description: "Research focus on Web Technologies and AI",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Your University",
    year: "2016-2020",
    description: "Major in Software Engineering",
  },
];

const Education = () => {
  return (
    <section className="py-20" id="education">
      <div className="container px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Education & Research
        </h2>
        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="p-6 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10"
            >
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <span className="text-gray-400">{edu.year}</span>
              </div>
              <p className="text-purple-400 mb-2">{edu.institution}</p>
              <p className="text-gray-400">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
