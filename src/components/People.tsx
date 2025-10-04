import { Mail, Linkedin, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const People = () => {
  const professor = {
    name: 'Dr. Jane Smith',
    role: 'Principal Investigator',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    email: 'jane.smith@university.edu',
    linkedin: 'https://linkedin.com',
  };

  const labMembers = [
    {
      name: 'Alex Johnson',
      role: 'PhD Student',
      focus: 'Computer Vision',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Maria Garcia',
      role: 'PhD Student',
      focus: 'Natural Language Processing',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    },
    {
      name: 'David Chen',
      role: 'Postdoctoral Researcher',
      focus: 'Reinforcement Learning',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    },
    {
      name: 'Emily Wilson',
      role: 'PhD Student',
      focus: 'Machine Learning Theory',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    },
    {
      name: 'Michael Brown',
      role: 'Research Scientist',
      focus: 'Computer Vision',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
    {
      name: 'Sarah Lee',
      role: 'PhD Student',
      focus: 'AI Ethics & Safety',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    },
  ];

  return (
    <section id="people" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the brilliant minds driving innovation at AI LAB
          </p>
        </div>

        {/* Principal Investigator */}
        <div className="max-w-3xl mx-auto mb-20">
          <Card className="border-none shadow-soft-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <img
                  src={professor.image}
                  alt={professor.name}
                  className="w-40 h-40 rounded-full object-cover shadow-soft"
                />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{professor.name}</h3>
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <p className="text-lg text-primary font-medium">{professor.role}</p>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Leading researcher in artificial intelligence with over 15 years of experience. 
                    Specializes in deep learning, computer vision, and AI safety. Published over 100 
                    papers in top-tier conferences and serves on the editorial board of multiple 
                    prestigious journals.
                  </p>
                  <div className="flex gap-4 justify-center md:justify-start">
                    <a
                      href={`mailto:${professor.email}`}
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded px-2 py-1 hover:underline underline-offset-4"
                    >
                      <Mail className="h-5 w-5" />
                      <span className="text-sm font-medium">Email</span>
                    </a>
                    <a
                      href={professor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded px-2 py-1 hover:underline underline-offset-4"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lab Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {labMembers.map((member, index) => (
            <Card
              key={index}
              className="border-none shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-soft"
                />
                <h3 className="text-xl font-semibold mb-1 text-foreground">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.focus}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default People;
