import { Card } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';

const News = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const newsItems = [
    {
      image: '/images/hero-ai.jpg',
      date: '2025-10-12',
      title: '대충 뉴스',
      description: '간단한 설명을 여기에…',
      tags: ['공지'],
    },
    {
      image: '/images/hero-ai.jpg',
      date: '2025-10-01',
      title: '10월 시작',
      description: '이번 달 주요 일정 업데이트…',
      tags: ['업데이트'],
    },
    {
      image: '/images/hero-ai.jpg',
      date: '2024-03-01',
      title: '대충 뉴스',
      description: 'Our research on efficient transformers received the best paper award.',
      tags: ['Award', 'March 2024'],
    },
    {
      image: '/images/hero-ai.jpg',
      date: '2024-02-01',
      title: '대충 뉴스',
      description: 'Three of our submissions on computer vision have been accepted to CVPR 2024.',
      tags: ['Publication', 'February 2024'],
    },
  ];

  return (
    <section id="news" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl mb-8 text-foreground tracking-wide">Latest News</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Recent updates and achievements from AI LAB
          </p>
        </div>

        {/* === 타임라인 래퍼 === */}
        <div className="relative max-w-4xl mx-auto">
          {/* 세로 라인 */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border/60" />

          <ul className="space-y-10">
            {newsItems.map((item, i) => (
              <li
                key={`${item.title}-${i}`}
                className={`relative pl-12 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                {/* 점(노드) */}
                <span className="absolute left-4 top-1.5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-primary/20" />

                {/* 날짜 */}
                <time className="block text-xs text-muted-foreground">{item.date}</time>

                {/* 카드 */}
                <Card className="mt-2 border border-border/40 rounded-2xl overflow-hidden shadow-soft">
                  {/* 이미지 */}
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full max-w-md rounded-xl m-4 object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  ) : null}

                  {/* 텍스트 */}
                  <div className="px-6 pb-6">
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    {item.description ? (
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    ) : null}

                    {/* 태그(옵션) */}
                    {item.tags?.length ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs text-foreground/70"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default News;