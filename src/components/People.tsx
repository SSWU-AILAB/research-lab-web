import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Mail, Linkedin, User } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const People = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'PhD Student',
      focus: 'Computer Vision & Deep Learning',
      email: 'alex.j@university.edu',
    },
    {
      name: 'Maria Garcia',
      role: 'PhD Student',
      focus: 'Natural Language Processing',
      email: 'maria.g@university.edu',
    },
    {
      name: 'David Chen',
      role: 'Postdoctoral Researcher',
      focus: 'Reinforcement Learning',
      email: 'david.c@university.edu',
    },
    {
      name: 'Emily Wilson',
      role: 'PhD Student',
      focus: 'Machine Learning Theory',
      email: 'emily.w@university.edu',
    },
    {
      name: 'Michael Brown',
      role: 'Research Scientist',
      focus: 'Computer Vision Systems',
      email: 'michael.b@university.edu',
    },
    {
      name: 'Sarah Lee',
      role: 'PhD Student',
      focus: 'AI Ethics & Safety',
      email: 'sarah.l@university.edu',
    },
  ];

  return (
    <section id="people" ref={sectionRef} className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-foreground tracking-wide">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Meet the researchers and students driving innovation at AI LAB
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Principal Investigator */}
          <Card className={`hover:-translate-y-1 hover:shadow-soft-lg transition-all duration-300 rounded-2xl border-border/50 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <CardHeader>
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-32 h-32 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                  <User className="h-16 w-16 text-primary" strokeWidth={1.5} />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-light text-foreground mb-3">Dr. Jane Smith</h3>
                  <p className="text-primary mb-4 font-light">Principal Investigator & Professor</p>
                  <p className="text-muted-foreground mb-6 font-light leading-relaxed">
                    Dr. Smith leads the AI LAB with over 15 years of experience in machine learning and AI research. 
                    Her work focuses on developing interpretable AI systems and advancing deep learning architectures.
                  </p>
                  <div className="flex gap-6 justify-center md:justify-start">
                    <a
                      href="mailto:jane.smith@university.edu"
                      className="inline-flex items-center gap-2 text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded transition-colors font-light"
                    >
                      <Mail className="h-4 w-4" strokeWidth={1.5} />
                      Email
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded transition-colors font-light"
                    >
                      <Linkedin className="h-4 w-4" strokeWidth={1.5} />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Team Members */}
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className={`hover:-translate-y-1 hover:shadow-soft-lg transition-all duration-300 rounded-2xl border-border/50 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${(index + 1) * 0.15}s` }}
              >
                <CardHeader className="text-center pb-3">
                  <div className="w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-6">
                    <User className="h-12 w-12 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-light text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary font-light">{member.role}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm mb-4 font-light leading-relaxed">{member.focus}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 text-primary hover:underline text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded transition-colors font-light"
                  >
                    <Mail className="h-3 w-3" strokeWidth={1.5} />
                    Contact
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default People;
