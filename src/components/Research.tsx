import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, HeartPulse, Wifi, MapPin, Brain } from 'lucide-react';
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
      icon: Activity,
      title: 'IMU-based Risk Detection',
      description:
        'Detects real-time physical risk by quantifying motion intensity and patterns from wearable accelerometers, enabling severity estimation on device.',
      tags: ['Motion Sensing', 'Risk Detection', 'Wearable Devices'],
    },
    {
      icon: HeartPulse,
      title: 'PPG-based Risk Detection',
      description:
        'Detects physiological risk by inferring breath-holding, fear, and stress states from PPG signals in real time.',
      tags: ['PPG Signals', 'Stress Detection', 'Physiological Monitoring'],
    },
    {
      icon: MapPin,
      title: 'Geofencing-based Risk Detection',
      description:
        'Detects riskful situations by identifying route deviations from habitual paths and unsafe-zone entries using spatial context.',
      tags: ['Spatial Analysis', 'Route Monitoring', 'Safety Zones'],
    },
    {
      icon: Wifi,
      title: 'Wi-Fi CSI Sensing',
      description:
        'Detects presence and atypical movement without wearables by analyzing RF channel variations, complementing on-body sensing.',
      tags: ['RF Sensing', 'Contactless Detection', 'Movement Analysis'],
    },
    {
      icon: Brain,
      title: 'LLM-driven Situation Reasoning',
      description:
        'Consolidates multimodal detections and history into operator-ready summaries and searchable reports for rapid response.',
      tags: ['Multimodal AI', 'Report Generation', 'Situation Analysis'],
    },
  ];

  return (
    <section id="research" ref={sectionRef} className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl mb-8 text-foreground tracking-wide">Research Areas</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
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
                  <CardTitle className="text-foreground text-xl font-medium">{area.title}</CardTitle>
                  <CardDescription className="font-light leading-relaxed text-sm">{area.description}</CardDescription>
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
