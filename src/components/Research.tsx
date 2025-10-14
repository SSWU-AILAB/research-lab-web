import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Activity,
  HeartPulse,
  Wifi,
  MapPin,
  Brain,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Research = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);

  // 드래그 상태
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startOffsetRef = useRef(0);

  // 속도(px/sec)
  const SPEED_PX_PER_SEC = 50; // 느리게 30 / 기본 50 / 빠르게 90

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

  const researchAreas = [
    {
      icon: Activity,
      title: "IMU-based Risk Detection",
      description:
        "Detects real-time physical risk by quantifying motion intensity and patterns from wearable accelerometers, enabling severity estimation on device.",
      tags: ["Motion Sensing", "Risk Detection", "Wearable Devices"],
    },
    {
      icon: HeartPulse,
      title: "PPG-based Risk Detection",
      description:
        "Detects physiological risk by inferring breath-holding, fear, and stress states from PPG signals in real time.",
      tags: ["PPG Signals", "Stress Detection", "Physiological Monitoring"],
    },
    {
      icon: MapPin,
      title: "Geofencing-based Risk Detection",
      description:
        "Detects riskful situations by identifying route deviations from habitual paths and unsafe-zone entries using spatial context.",
      tags: ["Spatial Analysis", "Route Monitoring", "Safety Zones"],
    },
    {
      icon: Wifi,
      title: "Wi-Fi CSI Sensing",
      description:
        "Detects presence and atypical movement without wearables by analyzing RF channel variations, complementing on-body sensing.",
      tags: ["RF Sensing", "Contactless Detection", "Movement Analysis"],
    },
    {
      icon: Brain,
      title: "LLM-driven Situation Reasoning",
      description:
        "Consolidates multimodal detections and history into operator-ready summaries and searchable reports for rapid response.",
      tags: ["Multimodal AI", "Report Generation", "Situation Analysis"],
    },
  ];

  // 무한 루프용으로 2배 트랙
  const loopedAreas = [...researchAreas, ...researchAreas];

  // 카드 렌더러
  const renderCards = (list: typeof researchAreas) =>
    list.map((area, index) => {
      const Icon = area.icon;
      return (
        <Card
          key={`${area.title}-${index}`}
          className="w-80 flex-shrink-0 rounded-2xl border-border/50 group bg-card shadow-soft hover-lift"
        >
          <CardHeader className="pb-4">
            <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-all duration-300">
              <Icon
                className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-300"
                strokeWidth={1.5}
              />
            </div>
            <CardTitle className="text-foreground text-xl font-medium group-hover:text-primary transition-colors duration-300">
              {area.title}
            </CardTitle>
            <CardDescription className="font-light leading-relaxed text-sm">
              {area.description}
            </CardDescription>
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
    });

  // 한 방향 자동 이동 + 절반 길이에서 모듈로 리셋(빈틈 없음)
  useEffect(() => {
    const step = (ts: number) => {
      if (paused || isDraggingRef.current) {
        lastTsRef.current = ts;
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dtSec = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      const track = trackRef.current;
      if (!track) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      offsetRef.current -= SPEED_PX_PER_SEC * dtSec;
      const halfWidth = track.scrollWidth / 2;

      if (offsetRef.current <= -halfWidth) {
        offsetRef.current += halfWidth;
      }

      track.style.transform = `translateX(${offsetRef.current}px)`;
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTsRef.current = null;
    };
  }, [paused, SPEED_PX_PER_SEC]);

  // 드래그 핸들러 (마우스 + 터치)
  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const onPointerDown = (e: PointerEvent) => {
      isDraggingRef.current = true;
      setPaused(true);
      container.setPointerCapture(e.pointerId);
      startXRef.current = e.clientX;
      startOffsetRef.current = offsetRef.current;
      e.preventDefault();
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current) return;
      const dx = e.clientX - startXRef.current;
      const trackWidthHalf = track.scrollWidth / 2;

      let next = startOffsetRef.current + dx;
      if (next <= -trackWidthHalf) next += trackWidthHalf;
      if (next >= 0) next -= trackWidthHalf;

      offsetRef.current = next;
      track.style.transform = `translateX(${offsetRef.current}px)`;
    };

    const onPointerUp = (e: PointerEvent) => {
      isDraggingRef.current = false;
      setPaused(false);
      container.releasePointerCapture(e.pointerId);
    };

    container.addEventListener("pointerdown", onPointerDown, {
      passive: false,
    });
    container.addEventListener("pointermove", onPointerMove, {
      passive: false,
    });
    container.addEventListener("pointerup", onPointerUp);
    container.addEventListener("pointerleave", onPointerUp);

    return () => {
      container.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerup", onPointerUp);
      container.removeEventListener("pointerleave", onPointerUp);
    };
  }, []);

  // 화살표 클릭 시 부드럽게 이동
  const smoothNudge = (delta: number) => {
    const track = trackRef.current;
    if (!track) return;

    const half = track.scrollWidth / 2;
    let next = offsetRef.current + delta;

    while (next <= -half) next += half;
    while (next >= 0) next -= half;

    // 자동 스크롤 잠깐 멈춤
    setPaused(true);
    track.style.transition = "transform 0.6s ease-in-out";
    track.style.transform = `translateX(${next}px)`;

    const handle = () => {
      offsetRef.current = next;
      track.style.transition = "";
      track.removeEventListener("transitionend", handle);
      // 자동 스크롤 재개
      setPaused(false);
    };
    track.addEventListener("transitionend", handle);
  };

  return (
    <section id="research" ref={sectionRef} className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl mb-8 text-foreground tracking-wide">
            Research Areas
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Our lab focuses on advancing the state-of-the-art across multiple
            domains of AI research
          </p>
        </div>

        {/* 화살표를 컨테이너 '밖'에 배치 */}
        <div
          className="relative max-w-6xl mx-auto select-none px-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* 좌우 페이드 마스크 */}
          <div className="pointer-events-none absolute inset-y-0 left-12 w-24 bg-gradient-to-r from-secondary/20 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-12 w-24 bg-gradient-to-l from-secondary/20 to-transparent z-10" />

          {/* 왼쪽 화살표 (바깥) */}
          <button
            className="hidden md:flex items-center justify-center
                       absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full
                       z-20 bg-background/80 hover:bg-background rounded-full p-2
                       shadow-soft backdrop-blur-sm transition-all"
            onClick={() => smoothNudge(+200)}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 text-muted-foreground" />
          </button>

          {/* 오른쪽 화살표 (바깥) */}
          <button
            className="hidden md:flex items-center justify-center
                       absolute right-0 top-1/2 -translate-y-1/2 translate-x-full
                       z-20 bg-background/80 hover:bg-background rounded-full p-2
                       shadow-soft backdrop-blur-sm transition-all"
            onClick={() => smoothNudge(-200)}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </button>

          {/* 스크롤 컨테이너 */}
          <div
            ref={containerRef}
            className={`w-full overflow-hidden ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } transition-opacity`}
          >
            <div ref={trackRef} className="flex gap-8 will-change-transform">
              {renderCards(loopedAreas)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
