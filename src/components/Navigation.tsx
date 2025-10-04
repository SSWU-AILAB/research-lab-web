import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#research', label: 'Research' },
    { href: '#publications', label: 'Publications' },
    { href: '#people', label: 'People' },
    { href: '#news', label: 'News' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href === '#contact') {
      console.log('Contact 링크 클릭됨');
      const contactElement = document.getElementById('contact');
      console.log('Contact 요소 찾음:', contactElement);
      
      if (contactElement) {
        console.log('Contact 요소로 스크롤 시작');
        
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
          console.log('Contact 스크롤 고정 해제');
        }, 2000);
        
      } else {
        console.log('Contact 요소 없음, 최하단으로 스크롤');
        window.scrollTo(0, document.body.scrollHeight);
      }
      setIsMobileMenuOpen(false);
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          AI LAB
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-foreground/80 hover:text-primary transition-all duration-300 font-medium relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded px-2 py-1 ${
                activeSection === link.href.substring(1)
                  ? 'text-primary after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-primary after:rounded-full'
                  : ''
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border shadow-soft-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-foreground/80 hover:text-primary transition-colors font-medium py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded px-2 ${
                  activeSection === link.href.substring(1) ? 'text-primary font-semibold' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
