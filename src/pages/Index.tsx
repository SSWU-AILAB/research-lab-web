import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Research from '@/components/Research';
import Publications from '@/components/Publications';
import People from '@/components/People';
import News from '@/components/News';
import Contact from '@/components/Contact';
import BackToTop from '@/components/BackToTop';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Research />
      <Publications />
      <People />
      <News />
      <Contact />
      <BackToTop />
    </div>
  );
};

export default Index;
