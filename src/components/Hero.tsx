import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-ai.jpg';

const Hero = () => {
  const scrollToContact = () => {
    // Contact 섹션으로 직접 이동
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      // 모든 스크롤 이벤트 완전 차단
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      
      // Contact 섹션의 위치 계산
      const contactRect = contactElement.getBoundingClientRect();
      const scrollTop = window.pageYOffset + contactRect.top - 80; // 네비게이션 바 높이만큼 오프셋
      
      // 강제로 Contact 섹션으로 이동
      window.scrollTo(0, scrollTop);
      
      // 스크롤 위치 고정
      let isScrolling = true;
      const fixScroll = () => {
        if (isScrolling) {
          window.scrollTo(0, scrollTop);
          requestAnimationFrame(fixScroll);
        }
      };
      requestAnimationFrame(fixScroll);
      
      // 2초 후 스크롤 고정 해제
      setTimeout(() => {
        isScrolling = false;
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
      }, 2000);
    } else {
      // Contact 요소가 없으면 최하단으로
      window.scrollTo(0, document.body.scrollHeight);
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0" style={{ background: 'var(--gradient-hero)' }}>
        <img
          src={heroImage}
          alt="AI Neural Network Visualization"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10 text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl mb-8 text-foreground tracking-wide">
          AI LAB
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light leading-relaxed">
        Exploring human, physiological, and environmental intelligence through multimodal sensing and AI.
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
