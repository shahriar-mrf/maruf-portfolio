
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Research from "../components/Research";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 pointer-events-none" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Research />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
