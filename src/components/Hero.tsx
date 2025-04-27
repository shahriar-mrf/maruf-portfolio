
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-64 h-64 lg:w-96 lg:h-96 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 animate-pulse" />
            <img
              src="https://placehold.co/400x400"
              alt="Maruf Shahriar"
              className="rounded-full w-full h-full object-cover relative z-10"
            />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
              Maruf Shahriar
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Web Developer & Researcher
            </p>
            <div className="flex gap-4 justify-center lg:justify-start mb-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:mrfshahriar@gmail.com">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
