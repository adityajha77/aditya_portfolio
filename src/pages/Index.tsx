import React, { useEffect, useState } from 'react';
import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/button';
import { ProjectCarousel } from '@/components/ui/ProjectCarousel';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Twitter, 
  ArrowUpRight, 
  Terminal, 
  Code2, 
  Database, 
  Layout, 
  Smartphone,
  ExternalLink,
  Moon,
  Sun,
  Code,
  Trophy,
  MessageSquare
} from 'lucide-react';

const Index = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Initial theme check
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    } else {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  };

  const skills = [
    { name: 'C++', icon: Code2 },
    { name: 'Rust', icon: Terminal },
    { name: 'Web3 / Solana', icon: Database },
    { name: 'React', icon: Layout },
    { name: 'TypeScript', icon: Code },
    { name: 'Node.js', icon: Terminal },
    { name: 'MongoDB', icon: Database },
    { name: 'React Native', icon: Smartphone },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Top Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="font-bold text-xl tracking-tight">Aditya Jha</div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <a href="https://x.com/aditya__jha7" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://codeforces.com/profile/adityajha7" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" title="Codeforces">
            <Code className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/aditya-kumar-jha-72493a319" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </nav>

      {/* Main Grid container */}
      <main className="container mx-auto max-w-6xl px-4 pt-32 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Profile Card (Large) */}
          <BentoCard className="md:col-span-2 lg:col-span-2 row-span-2 flex flex-col justify-between" delay={0.1}>
            <div className="flex flex-col md:flex-row gap-6 items-start h-full">
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    Hi, I'm Aditya
                  </h1>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    <strong className="text-foreground font-semibold">Full Stack & Web3 Developer</strong> based in India with <strong className="text-foreground">2+ years</strong> of experience building scalable, modern web applications, decentralized platforms, and mobile apps. Passionate about competitive programming and open-source.
                  </p>
                </div>
                <div className="flex gap-4 mt-auto">
                  <Button 
                    variant="outline" 
                    className="rounded-full border-border/50 hover:bg-accent px-6"
                    onClick={() => window.open('/lovable-uploads/aditya_jha_resume.pdf', '_blank')}
                  >
                    Resume
                  </Button>
                </div>
              </div>
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden shrink-0 bg-muted/30 border border-border/50 p-4 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/aditya.png" 
                  alt="Aditya Jha" 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </BentoCard>

          {/* Skills Card */}
          <BentoCard className="md:col-span-1 lg:col-span-2 row-span-1" delay={0.2}>
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Skills</h3>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="flex flex-col items-center justify-center p-3 rounded-2xl bg-accent/50 border border-border/50 hover:bg-accent transition-colors">
                    <Icon className="h-6 w-6 mb-2 text-foreground/80" />
                    <span className="text-xs font-medium">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </BentoCard>

          {/* Project Carousel Card */}
          <BentoCard className="md:col-span-3 lg:col-span-4 row-span-2 p-0 overflow-hidden" delay={0.3}>
            <div className="p-6 h-full">
              <ProjectCarousel />
            </div>
          </BentoCard>

          {/* Unified Winnings Card */}
          <BentoCard className="md:col-span-2 lg:col-span-2 row-span-2 flex flex-col" delay={0.4}>
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="h-5 w-5 text-yellow-500" />
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Achievements & Winnings</h3>
            </div>
            
            <div className="flex flex-col gap-6 flex-1">
              {/* Hackathon Win */}
              <div 
                className="group relative rounded-xl overflow-hidden border border-border/50 cursor-pointer h-40 bg-muted/30 flex items-center justify-center p-4"
                onClick={() => window.open('https://www.linkedin.com/posts/aditya-kumar-jha-72493a319_nmamit-nitte-proudmoment-activity-7442479576330477568-iE8l?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFDDNowB6OgYvlBgBdJHr4fUwfbOLWhgEpY', '_blank')}
              >
                <img src="/lovable-uploads/hpe_first.png" alt="HPE Hackathon First Place" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <h4 className="text-foreground font-bold text-lg">HPE Hackathon</h4>
                  <p className="text-muted-foreground text-sm mt-1">1st Place Winner</p>
                  <span className="text-xs px-3 py-1.5 mt-3 bg-primary/20 text-primary rounded-full font-medium">View LinkedIn Post</span>
                </div>
              </div>

              {/* Bounty Win */}
              <div 
                className="group relative rounded-xl overflow-hidden border border-border/50 cursor-pointer h-40 bg-muted/30 flex items-center justify-center p-4"
                onClick={() => window.open('https://superteam.fun/earn/t/tysondrake', '_blank')}
              >
                <img src="/lovable-uploads/bounty.png" alt="Superteam Bounty" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <h4 className="text-foreground font-bold text-lg">Superteam 100xdevs</h4>
                  <p className="text-muted-foreground text-sm mt-1">Bounty Winner</p>
                  <span className="text-xs px-3 py-1.5 mt-3 bg-primary/20 text-primary rounded-full font-medium">View Submission</span>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Blog Link Card */}
          <BentoCard 
            className="md:col-span-1 lg:col-span-1 row-span-1 flex flex-col justify-between group bg-gradient-to-br from-primary/10 to-transparent" 
            delay={0.5}
            onClick={() => window.open('https://unfiltered-self.vercel.app/', '_blank')}
          >
            <div className="flex justify-between items-start">
              <div className="p-3 bg-background rounded-full border border-border/50">
                <ExternalLink className="h-5 w-5" />
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Personal Blog</h3>
              <p className="text-sm text-muted-foreground">Read my thoughts on software & life.</p>
            </div>
          </BentoCard>

          {/* Get in Touch Card */}
          <BentoCard 
            className="md:col-span-1 lg:col-span-1 row-span-1 flex flex-col justify-between group bg-card" 
            delay={0.6}
            onClick={() => window.open('https://www.linkedin.com/in/aditya-kumar-jha-72493a319', '_blank')}
          >
            <div className="flex justify-between items-start">
              <div className="p-3 bg-accent rounded-full border border-border/50 text-foreground">
                <MessageSquare className="h-5 w-5" />
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Get in touch</h3>
              <p className="text-sm text-muted-foreground">Let's build something great together.</p>
            </div>
          </BentoCard>

        </div>
      </main>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/50">
        <p>© {new Date().getFullYear()} Aditya Jha. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Index;
