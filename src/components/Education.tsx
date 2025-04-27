const Education = () => {
  return (
    <section className="py-20" id="education">
      <div className="container px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Education
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="p-6 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-400 mb-2">University Name • 2018 - 2022</p>
            <p className="text-gray-300">
              Studied core computer science subjects including algorithms, data structures, and software engineering.
            </p>
          </div>
          {/* Add more education items as needed */}
        </div>
      </div>
    </section>
  );
};

export default Education;
