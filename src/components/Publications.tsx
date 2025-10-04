import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, FileText } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Publications = () => {
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

  const publications = [
    {
      title: 'Efficient Transformers: A Survey',
      authors: 'Smith, J., Doe, A., Johnson, B.',
      venue: 'NeurIPS 2024',
      year: '2024',
      link: 'https://arxiv.org',
    },
    {
      title: 'Self-Supervised Learning for Visual Recognition',
      authors: 'Doe, A., Lee, C., Wang, D.',
      venue: 'CVPR 2024',
      year: '2024',
      link: 'https://arxiv.org',
    },
    {
      title: 'Multi-Agent Reinforcement Learning in Dynamic Environments',
      authors: 'Johnson, B., Smith, J., Chen, E.',
      venue: 'ICML 2024',
      year: '2024',
      link: 'https://arxiv.org',
    },
    {
      title: 'Large Language Models for Code Generation',
      authors: 'Lee, C., Wang, D., Martinez, F.',
      venue: 'ACL 2024',
      year: '2024',
      link: 'https://arxiv.org',
    },
  ];

  return (
    <section id="publications" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-foreground tracking-wide">Publications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Recent publications from our research lab
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <Card
              key={index}
              className={`hover:-translate-y-1 hover:shadow-soft-lg transition-all duration-300 rounded-2xl border-border/50 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-foreground font-light mb-3">{pub.title}</CardTitle>
                    <CardDescription className="font-light">{pub.authors}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="font-light">{pub.venue}</Badge>
                    <Badge variant="secondary" className="font-light">{pub.year}</Badge>
                  </div>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded transition-colors font-light"
                  >
                    View Paper
                    <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
