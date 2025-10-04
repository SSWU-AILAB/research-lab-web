import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Network, Eye, MessageSquare, Cpu } from 'lucide-react';

const Research = () => {
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
    <section id="research" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Research Areas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring diverse domains of artificial intelligence to solve challenging real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {researchAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card
                key={index}
                className="border-none shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{area.title}</CardTitle>
                  <CardDescription className="text-base mt-2">{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-sm">
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
