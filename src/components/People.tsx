import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Globe, User } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// 이미지 import
import 교수님이미지 from '@/assets/교수님.png';
import 김하정이미지 from '@/assets/김하정.jpg';
import 김지민이미지 from '@/assets/김지민.jpg';
import 문정윤이미지 from '@/assets/문정윤.jpg';
import 박해름이미지 from '@/assets/박해름.jpg';
import 안희랑이미지 from '@/assets/안희랑.jpg';
import 홍지연이미지 from '@/assets/홍지연.jpg';

const People = () => {
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

  const teamMembers = [
    { name: 'Hajeong Kim', role: 'Undergraduate student', focus: 'PPG-based Risk Detection', email: 'happykhj67@gmail.com', image: 김하정이미지 },
    { name: 'Seungyeon Kim', role: 'Undergraduate student', focus: 'IMU-based Risk Detection', email: '20231330@sungshin.ac.kr', image: null },
    { name: 'Jimin Kim', role: 'Undergraduate student', focus: 'PPG-based Risk Detection', email: '20231342@sungshin.ac.kr', image: 김지민이미지 },
    { name: 'Jungyoon Moon', role: 'Undergraduate student', focus: 'PPG-based Risk Detection', email: 'sally0927.jm@gmail.com', image: 문정윤이미지 },
    { name: 'Juyeon Park', role: 'Undergraduate student', focus: 'LLM-driven Situation Reasoning', email: 'joannapark0417@gmail.com', image: null },
    { name: 'Haereum Park', role: 'Undergraduate student', focus: 'LLM-driven Situation Reasoning', email: '20231367@sungshin.ac.kr', image: 박해름이미지 },
    { name: 'Yoonji Shin', role: 'Undergraduate student', focus: 'Geofencing-based Risk Detection', email: '20231379@sungshin.ac.kr', image: null },
    { name: 'Heerang An', role: 'Undergraduate student', focus: 'Geofencing-based Risk Detection', email: 'heerang0926@gmail.com', image: 안희랑이미지 },
    { name: 'Geungyo Oh', role: 'Undergraduate student', focus: 'WiFi-based Risk Detection', email: '0h.geungyo@gmail.com', image: null },
    { name: 'Jiyeon Hong', role: 'Undergraduate student', focus: 'WiFi-based Risk Detection', email: '20241283@gmail.com', image: 홍지연이미지 },
  ];

  return (
    <section id="people" ref={sectionRef} className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl mb-8 text-foreground tracking-wide">Our Team</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Meet the researchers and students driving innovation at AI LAB
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Principal Investigator */}
          <Card className={`hover-lift rounded-2xl border-border/50 group ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <CardHeader>
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-32 h-32 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0 overflow-hidden group-hover:ring-4 group-hover:ring-primary/10 transition-all duration-300">
                  <img
                    src={교수님이미지}
                    alt="교수님"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) nextElement.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-primary/5 flex items-center justify-center" style={{ display: 'none' }}>
                    <User className="h-16 w-16 text-primary" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-medium text-foreground mb-3">Jaehyun Yoo</h3>
                  <p className="text-primary mb-4 font-medium">Associate Professor</p>
                  <p className="text-muted-foreground text-sm mb-6 font-light leading-relaxed">
                    여기에 넣고 싶은 문장 교수님께 받기?
                  </p>

                  <div className="flex gap-6 justify-center md:justify-start">
                    <a
                      href="mailto:jhyoo@sungshin.ac.kr"
                      className="text-sm text-muted-foreground hover:underline"
                    >
                      jhyoo@sungshin.ac.kr
                    </a>
                    <a
                      href="https://home.ipinlabs.com/ko/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded transition-colors font-light"
                    >
                      <Globe className="h-4 w-4" strokeWidth={1.5} />
                      IPIN LABS
                    </a>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Team Members */}
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className={`hover-lift rounded-2xl border-border/50 group ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${(index + 1) * 0.15}s` }}
              >
                <CardHeader className="text-center pb-3">
                  <div className="w-32 h-32 rounded-lg bg-primary/5 flex items-center justify-center mx-auto mb-6 overflow-hidden group-hover:ring-4 group-hover:ring-primary/10 transition-all duration-300">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                          if (nextElement) nextElement.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className={`w-full h-full bg-primary/5 flex items-center justify-center ${member.image ? 'hidden' : 'flex'}`}>
                      <User className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </CardHeader>

                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm mb-4 font-light leading-relaxed">{member.focus}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="block text-sm text-muted-foreground hover:underline"
                  >
                    {member.email}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default People;
