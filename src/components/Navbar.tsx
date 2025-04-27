
import { Home, Book, Code, GraduationCap, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
            MS
          </h1>
          <div className="hidden md:flex space-x-4">
            {[
              { icon: Home, label: "Home", id: "home" },
              { icon: Code, label: "Skills", id: "skills" },
              { icon: Book, label: "Projects", id: "projects" },
              { icon: GraduationCap, label: "Education", id: "education" },
              { icon: Mail, label: "Contact", id: "contact" },
            ].map(({ icon: Icon, label, id }) => (
              <Button
                key={id}
                variant="ghost"
                onClick={() => scrollToSection(id)}
                className="flex items-center gap-2"
              >
                <Icon className="w-4 h-4" />
                {label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
