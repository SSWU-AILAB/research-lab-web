import { Brain, Target, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const About = () => {
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

  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Research',
      description: 'Pushing the boundaries of machine learning and deep learning technologies',
    },
    {
      icon: Target,
      title: 'Real-World Impact',
      description: 'Developing solutions that address critical challenges in society and industry',
    },
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Fostering innovation through interdisciplinary collaboration and mentorship',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-foreground tracking-wide">About AI LAB</h2>
          <p className="text-lg text-muted-foreground leading-loose font-light">
            AI LAB is a leading academic research laboratory dedicated to advancing the state of artificial 
            intelligence. Our multidisciplinary team explores fundamental questions in machine learning, 
            computer vision, natural language processing, and robotics. We strive to develop innovative 
            algorithms and systems that push the boundaries of what AI can achieve while maintaining a 
            strong commitment to responsible and ethical AI development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`bg-card rounded-2xl p-10 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 rounded-xl bg-primary/5 flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-light mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
