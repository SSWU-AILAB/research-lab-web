import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, Newspaper, FileText, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const News = () => {
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

  const newsItems = [
    {
      icon: Award,
      date: 'March 2024',
      title: 'Best Paper Award at NeurIPS 2024',
      description: 'Our research on efficient transformers received the best paper award.',
      type: 'Award',
    },
    {
      icon: FileText,
      date: 'February 2024',
      title: '3 Papers Accepted to CVPR 2024',
      description: 'Three of our submissions on computer vision have been accepted to CVPR 2024.',
      type: 'Publication',
    },
    {
      icon: Users,
      date: 'January 2024',
      title: 'Welcome New PhD Students',
      description: 'We are excited to welcome three new PhD students to our lab for Spring 2024.',
      type: 'Team',
    },
    {
      icon: Award,
      date: 'December 2023',
      title: 'NSF Grant Awarded',
      description: 'Received $1.2M NSF grant for research on interpretable AI systems.',
      type: 'Funding',
    },
  ];

  return (
    <section id="news" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-foreground tracking-wide">Latest News</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Recent updates and achievements from AI LAB
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {newsItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className={`hover:-translate-y-1 hover:shadow-soft-lg transition-all duration-300 rounded-2xl border-border/50 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant={item.type === 'award' ? 'default' : 'secondary'} className="font-light">
                          {item.type}
                        </Badge>
                        <span className="text-sm text-muted-foreground font-light">{item.date}</span>
                      </div>
                      <CardTitle className="text-foreground font-light">{item.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-light leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default News;
