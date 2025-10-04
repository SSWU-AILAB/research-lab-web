import { Brain, Target, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Research',
      description: 'Pushing the boundaries of machine learning and deep learning technologies',
    },
    {
      icon: Target,
      title: 'Real-World Impact',
      description: 'Developing solutions that address critical challenges in society and industry',
    },
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Fostering innovation through interdisciplinary collaboration and mentorship',
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About AI LAB</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            AI LAB is a leading academic research laboratory dedicated to advancing the state of artificial 
            intelligence. Our multidisciplinary team explores fundamental questions in machine learning, 
            computer vision, natural language processing, and robotics. We strive to develop innovative 
            algorithms and systems that push the boundaries of what AI can achieve while maintaining a 
            strong commitment to responsible and ethical AI development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
