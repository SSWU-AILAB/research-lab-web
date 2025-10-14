import { Brain, Cpu, Radar, Users } from 'lucide-react';
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
      icon: Radar,
      title: 'Multimodal Sensing',
      description: 'Integrating IMU, PPG, Wi-Fi CSI, and location data to understand human behavior and context.',
    },
    {
      icon: Cpu,
      title: 'On-device Intelligence',
      description: 'Developing lightweight AI models for real-time inference on wearables and mobile devices.',
    },
    {
      icon: Users,
      title: 'Human-centered Research',
      description: 'Designing technologies that improve human safety, health, and everyday experience.',
    },
    { icon: Brain,
      title: 'AI & Reasoning',
      description: 'Leveraging LLMs and machine learning to interpret multimodal signals intelligently.',
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl mb-8 text-foreground tracking-wide">About AI LAB</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-loose font-light">
          Our lab explores how sensing and intelligence converge to understand humans and their environment.
          We design multimodal systems that integrate wearable, physiological, and environmental data with AI models — creating technology that perceives the world intelligently.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`bg-card rounded-2xl p-6 shadow-soft hover-lift group ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                  <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-medium mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
