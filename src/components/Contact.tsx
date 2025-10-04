import { Mail, MapPin, Users, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contact" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-wide">Get in Touch</h2>
          <p className="text-xl mb-16 opacity-90 font-light leading-relaxed">
            Interested in collaborating or joining our lab? We'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <Mail className="h-8 w-8 mx-auto mb-4 opacity-80" strokeWidth={1.5} />
              <h3 className="font-light mb-3">Email</h3>
              <a
                href="mailto:info@ailab.edu"
                className="opacity-80 hover:opacity-100 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded transition-opacity font-light"
              >
                info@ailab.edu
              </a>
            </div>
            <div>
              <MapPin className="h-8 w-8 mx-auto mb-4 opacity-80" strokeWidth={1.5} />
              <h3 className="font-light mb-3">Address</h3>
              <p className="opacity-80 font-light leading-relaxed">
                Department of Computer Science
                <br />
                University Campus, Building 42
                <br />
                City, State 12345
              </p>
            </div>
            <div>
              <Users className="h-8 w-8 mx-auto mb-4 opacity-80" strokeWidth={1.5} />
              <h3 className="font-light mb-3">Connect</h3>
              <div className="flex gap-6 justify-center">
                <a
                  href="https://twitter.com/ailab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded transition-opacity"
                >
                  <Twitter className="h-6 w-6" strokeWidth={1.5} />
                </a>
                <a
                  href="https://linkedin.com/company/ailab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded transition-opacity"
                >
                  <Linkedin className="h-6 w-6" strokeWidth={1.5} />
                </a>
                <a
                  href="https://github.com/ailab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded transition-opacity"
                >
                  <Github className="h-6 w-6" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8">
            <p className="opacity-60 text-sm font-light">
              © {new Date().getFullYear()} AI LAB. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
