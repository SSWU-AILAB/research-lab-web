import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Publications = () => {
  const publications = [
    {
      title: 'Efficient Transformers: A Survey',
      authors: 'Smith, J., Doe, A., Johnson, B.',
      venue: 'NeurIPS 2024',
      link: 'https://arxiv.org',
      tags: ['Transformers', 'Efficiency'],
    },
    {
      title: 'Self-Supervised Learning for Visual Recognition',
      authors: 'Doe, A., Lee, C., Wang, D.',
      venue: 'CVPR 2024',
      link: 'https://arxiv.org',
      tags: ['Computer Vision', 'Self-Supervised'],
    },
    {
      title: 'Multi-Agent Reinforcement Learning in Dynamic Environments',
      authors: 'Johnson, B., Smith, J., Chen, E.',
      venue: 'ICML 2024',
      link: 'https://arxiv.org',
      tags: ['RL', 'Multi-Agent'],
    },
    {
      title: 'Large Language Models for Code Generation',
      authors: 'Lee, C., Wang, D., Martinez, F.',
      venue: 'ACL 2024',
      link: 'https://arxiv.org',
      tags: ['NLP', 'Code Generation'],
    },
    {
      title: 'Interpretable Neural Networks via Attention Mechanisms',
      authors: 'Wang, D., Johnson, B., Smith, J.',
      venue: 'ICLR 2024',
      link: 'https://arxiv.org',
      tags: ['Interpretability', 'Attention'],
    },
  ];

  return (
    <section id="publications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Publications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recent research contributions to leading AI conferences and journals
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{pub.title}</h3>
                  <p className="text-muted-foreground mb-2">{pub.authors}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-medium text-primary">{pub.venue}</span>
                    {pub.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-all duration-300 font-medium shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded px-2 py-1 hover:underline underline-offset-4"
                >
                  View Paper
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
