import { Calendar, Award, FileText, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const News = () => {
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
    <section id="news" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Latest News</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our recent achievements, publications, and lab activities
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {newsItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {item.type}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default News;
