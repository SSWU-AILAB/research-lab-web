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
      image: '/images/hero-ai.jpg',
      date: 'March 2024',
      title: 'Best Paper Award at NeurIPS 2024',
      description: 'Our research on efficient transformers received the best paper award.',
      type: 'Award',
    },
    {
      image: '/images/hero-ai.jpg',
      date: 'February 2024',
      title: '3 Papers Accepted to CVPR 2024',
      description: 'Three of our submissions on computer vision have been accepted to CVPR 2024.',
      type: 'Publication',
    },
    {
      image: '/images/hero-ai.jpg',
      date: 'January 2024',
      title: 'Welcome New PhD Students',
      description: 'We are excited to welcome three new PhD students to our lab for Spring 2024.',
      type: 'Team',
    },
    {
      image: '/images/hero-ai.jpg',
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
          <h2 className="text-4xl md:text-5xl mb-8 text-foreground tracking-wide">Latest News</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Recent updates and achievements from AI LAB
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {newsItems.map((item, index) => {
            return (
              <Card
                key={index}
                className={`hover-lift rounded-2xl border-border/50 overflow-hidden group ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="md:flex items-stretch">
                    {/* 왼쪽: 메인 이미지 (2/3) */}
                    <div className="md:w-2/3 w-full relative">
                      <div className="h-72 md:h-96 w-full overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                      </div>

                      {/* (선택) 이미지 하단 오버레이 */}
                      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                        <div className="flex items-center gap-2 text-xs opacity-90">
                          <span className="rounded bg-white/15 px-2 py-0.5">{item.type}</span>
                          <span className="opacity-80">{item.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* 오른쪽: 텍스트 (1/3) */}
                    <div className="md:w-1/3 w-full bg-background">
                      <CardHeader className="h-full">
                        <CardTitle className="text-foreground text-xl font-medium mb-3">
                          {item.title}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm font-light leading-relaxed">
                          {item.description}
                        </p>
                      </CardHeader>
                    </div>
                  </div>

                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default News;
