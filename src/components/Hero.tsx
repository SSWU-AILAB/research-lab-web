import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-ai.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="AI Neural Network Visualization"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10 text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          AI LAB
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light">
          Advancing the frontiers of artificial intelligence through cutting-edge research
        </p>
        <Button
          size="lg"
          onClick={scrollToContact}
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
        >
          Get in Touch
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
