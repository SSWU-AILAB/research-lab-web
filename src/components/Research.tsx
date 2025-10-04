import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Network, Eye, MessageSquare, Cpu } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Research = () => {
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

  const researchAreas = [
    {
      icon: Network,
      title: 'Machine Learning',
      description:
        'Developing novel deep learning architectures and optimization techniques for improved model performance and efficiency.',
      tags: ['Deep Learning', 'Neural Networks', 'Optimization'],
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description:
        'Creating advanced visual recognition systems for object detection, image segmentation, and scene understanding.',
      tags: ['Object Detection', 'Image Segmentation', '3D Vision'],
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description:
        'Building intelligent language models for text understanding, generation, and multilingual applications.',
      tags: ['Language Models', 'Text Generation', 'Translation'],
    },
    {
      icon: Cpu,
      title: 'Reinforcement Learning',
      description:
        'Advancing agent-based learning systems for autonomous decision-making in complex environments.',
      tags: ['Policy Optimization', 'Multi-Agent', 'Robotics'],
    },
  ];

  return (
    <section id="research" ref={sectionRef} className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-foreground tracking-wide">Research Areas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Our lab focuses on advancing the state-of-the-art across multiple domains of AI research
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {researchAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card
                key={index}
                className={`hover:-translate-y-1 hover:shadow-soft-lg transition-all duration-300 rounded-2xl border-border/50 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-foreground font-light text-xl">{area.title}</CardTitle>
                  <CardDescription className="font-light leading-relaxed">{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-light">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Research;
