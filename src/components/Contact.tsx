
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "mailto:mrfshahriar@gmail.com";
  };

  return (
    <section className="py-20 bg-gradient-to-t from-transparent to-purple-900/20" id="contact">
      <div className="container px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Get in Touch
        </h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input placeholder="Name" className="bg-white/5 border-white/10" />
              <Input placeholder="Email" type="email" className="bg-white/5 border-white/10" />
            </div>
            <Input placeholder="Subject" className="bg-white/5 border-white/10" />
            <Textarea
              placeholder="Message"
              className="bg-white/5 border-white/10"
              rows={6}
            />
            <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
              <Mail className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
