import { useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText, PenSquare } from "lucide-react";

type PubCategory = "intl-journal" | "intl-conf" | "domestic";

type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string | number;
  link?: string;
  category: PubCategory;
};

const Publications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState<PubCategory>("intl-conf");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ 데이터에 category 필드를 추가해 카테고리 구분
  const publications: Publication[] = [
    {
      title: "Efficient Transformers: A Survey",
      authors: "Smith, J., Doe, A., Johnson, B.",
      venue: "NeurIPS 2024",
      year: "2024",
      link: "https://arxiv.org",
      category: "intl-conf",
    },
    {
      title: "Self-Supervised Learning for Visual Recognition",
      authors: "Doe, A., Lee, C., Wang, D.",
      venue: "CVPR 2024",
      year: "2024",
      link: "https://arxiv.org",
      category: "intl-conf",
    },
    {
      title: "Multi-Agent Reinforcement Learning in Dynamic Environments",
      authors: "Johnson, B., Smith, J., Chen, E.",
      venue: "ICML 2024",
      year: "2024",
      link: "https://arxiv.org",
      category: "intl-conf",
    },
    {
      title: "Large Language Models for Code Generation",
      authors: "Lee, C., Wang, D., Martinez, F.",
      venue: "ACL 2024",
      year: "2024",
      link: "https://arxiv.org",
      category: "intl-conf",
    },
    // 예시: 저널/국내 저널 샘플(필요에 맞게 추가/수정)
    {
      title: "Human-Centered Sensing for Daily Well-being",
      authors: "Yoo, J., Kim, H., Park, J.",
      venue: "IEEE T-Affective Computing",
      year: "2023",
      link: "https://example.com",
      category: "intl-journal",
    },
    {
      title: "스마트폰 센서를 활용한 위험 감지",
      authors: "홍길동, 김하정",
      venue: "한국HCI학회지",
      year: "2022",
      link: "https://example.com",
      category: "domestic",
    },
  ];

  const counts = useMemo(() => {
    return {
      "intl-journal": publications.filter(p => p.category === "intl-journal").length,
      "intl-conf": publications.filter(p => p.category === "intl-conf").length,
      "domestic": publications.filter(p => p.category === "domestic").length,
    };
  }, [publications]);

  // 선택된 카테고리만 필터링 + 연도 최신순 정렬
  const filtered = useMemo(
    () =>
      publications
        .filter(p => p.category === activeCategory)
        .sort((a, b) => Number(b.year) - Number(a.year)),
    [publications, activeCategory]
  );

  return (
    <section id="publications" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-14 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-foreground tracking-wide">Publications</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Recent publications from our research lab
          </p>
        </div>

        {/* =================== 상단 카테고리 선택(3분할) =================== */}
        <div className="max-w-4xl mx-auto mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* International Journal */}
          <button
            onClick={() => setActiveCategory("intl-journal")}
            className={`rounded-2xl border p-6 text-center transition-all hover:shadow-sm
            ${activeCategory === "intl-journal" ? "border-primary/60 bg-primary/5" : "border-border/60 bg-card"}
          `}
          >
            <PenSquare className="mx-auto mb-3 h-8 w-8 text-primary" />
            <div className="text-lg font-medium">International Journal</div>
            <div className="mt-1 text-sm text-muted-foreground">{counts["intl-journal"]} items</div>
          </button>

          {/* International Conference */}
          <button
            onClick={() => setActiveCategory("intl-conf")}
            className={`rounded-2xl border p-6 text-center transition-all hover:shadow-sm
            ${activeCategory === "intl-conf" ? "border-primary/60 bg-primary/5" : "border-border/60 bg-card"}
          `}
          >
            <PenSquare className="mx-auto mb-3 h-8 w-8 text-primary" />
            <div className="text-lg font-medium">International Conference</div>
            <div className="mt-1 text-sm text-muted-foreground">{counts["intl-conf"]} items</div>
          </button>

          {/* Domestic Journal */}
          <button
            onClick={() => setActiveCategory("domestic")}
            className={`rounded-2xl border p-6 text-center transition-all hover:shadow-sm
            ${activeCategory === "domestic" ? "border-primary/60 bg-primary/5" : "border-border/60 bg-card"}
          `}
          >
            <PenSquare className="mx-auto mb-3 h-8 w-8 text-primary" />
            <div className="text-lg font-medium">Domestic Journal</div>
            <div className="mt-1 text-sm text-muted-foreground">{counts["domestic"]} items</div>
          </button>
        </div>

        {/* =================== 리스트(선택된 카테고리만 렌더) =================== */}
        <div className="max-w-4xl mx-auto space-y-6">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border/60 p-10 text-center text-muted-foreground">
              No publications in this category yet.
            </div>
          ) : (
            filtered.map((pub, index) => (
              <Card
                key={`${pub.title}-${index}`}
                className={`hover-lift rounded-2xl border-border/50 group ${
                  isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                      <FileText className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-foreground text-lg font-medium mb-2">{pub.title}</CardTitle>
                      <CardDescription className="font-light text-sm">{pub.authors}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="font-light">{pub.venue}</Badge>
                      <Badge variant="secondary" className="font-light">{pub.year}</Badge>
                    </div>
                    {pub.link ? (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:underline rounded transition-colors font-light"
                      >
                        View Paper
                        <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
                      </a>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Publications;
