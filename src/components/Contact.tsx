import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@ailab.edu',
      link: 'mailto:contact@ailab.edu',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Computer Science Building, University Campus, City, State 12345',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Github, link: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, link: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, link: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-background/80 max-w-2xl mx-auto">
            Interested in collaboration, joining our lab, or learning more about our research? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <div className="flex gap-4 p-6 bg-background/10 rounded-xl hover:bg-background/15 transition-colors animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-lg">{info.label}</h3>
                    <p className="text-background/80">{info.value}</p>
                  </div>
                </div>
              );

              return info.link ? (
                <a key={index} href={info.link} className="block">
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-background/10 hover:bg-primary transition-colors flex items-center justify-center group"
                    aria-label={social.label}
                  >
                    <Icon className="h-6 w-6 text-background group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-background/20 text-center">
        <p className="text-background/60 text-sm">
          © {new Date().getFullYear()} AI LAB. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
