import React, { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { motion } from 'framer-motion';
import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/button';
import { ProjectCarousel } from '@/components/ui/ProjectCarousel';
import { SkillRunner } from '@/components/ui/SkillRunner';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  MessageSquare,
  Send,
  Globe,
  Palette,
  Box
} from 'lucide-react';

const Index = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const skills = [
    { name: 'C++', icon: Code2 },
    { name: 'Rust', icon: Terminal },
    { name: 'Solana', icon: Database },
    { name: 'Web3', icon: Database },
    { name: 'React', icon: Layout },
    { name: 'TypeScript', icon: Code },
    { name: 'Node.js', icon: Terminal },
    { name: 'MongoDB', icon: Database },
    { name: 'React Native', icon: Smartphone },
    { name: 'Next.js', icon: Globe },
    { name: 'Tailwind CSS', icon: Palette },
    { name: 'Docker', icon: Box },
  ];

  return (
    <div className="min-h-screen bg-background/50 text-foreground transition-colors duration-300 relative">
      <AnimatedBackground />
      {/* Top Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="font-bold text-xl tracking-tight">Aditya Jha</div>
        <div className="flex items-center gap-4">
          <a href="https://x.com/aditya__jha7" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="https://github.com/adityajha7" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://codeforces.com/profile/adityajha7" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors hidden sm:block" title="Codeforces">
            <Code className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/aditya-kumar-jha-72493a319" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=adityakartikey1259@gmail.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </nav>

      {/* Main Grid container */}
      <main className="container mx-auto max-w-7xl px-4 pt-32 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Profile Text Card */}
          <BentoCard className="md:col-span-2 lg:col-span-2 row-span-2 flex flex-col justify-center p-8" delay={0.1}>
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              >
                Hi, I'm Aditya
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                <strong className="text-foreground font-semibold text-glow">Full Stack & Web3 Developer</strong> based in India with <strong className="text-foreground">2+ years</strong> of experience building scalable, modern web applications, decentralized platforms, and mobile apps. Passionate about competitive programming and open-source.
              </motion.p>
            </div>
            <div className="flex gap-4 mt-8">
              <Button 
                variant="outline" 
                className="rounded-full border-border/50 hover:bg-accent px-8 py-6 text-base"
                onClick={() => window.open('/resources/aditya_jha_resume.pdf', '_blank')}
              >
                View Resume
              </Button>
            </div>
          </BentoCard>

          {/* Profile Image Card */}
          <BentoCard className="md:col-span-1 lg:col-span-1 row-span-2 p-0 overflow-hidden" delay={0.2}>
            <img 
              src="/resources/aditya.png" 
              alt="Aditya Jha" 
              className="w-full h-full object-cover object-center bg-muted/20"
            />
          </BentoCard>

          {/* Skills Card */}
          <BentoCard className="md:col-span-1 lg:col-span-1 row-span-2 flex flex-col" delay={0.3}>
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">Skills</h3>
            <div className="grid grid-cols-3 gap-3 flex-1 auto-rows-max">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="flex flex-col items-center justify-center p-2 rounded-2xl border border-white/20 hover:bg-accent transition-colors text-center" title={skill.name}>
                    <Icon className="h-6 w-6 text-foreground/80 mb-1" />
                    <span className="text-[10px] font-medium leading-tight">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </BentoCard>

          {/* Project Carousel Card */}
          <BentoCard className="md:col-span-2 lg:col-span-4 row-span-2 p-0 overflow-hidden" delay={0.4}>
            <div className="p-6 h-full min-h-[400px]">
              <ProjectCarousel />
            </div>
          </BentoCard>

          {/* Unified Winnings Card */}
          <BentoCard className="md:col-span-2 lg:col-span-2 row-span-2 flex flex-col" delay={0.5}>
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="h-5 w-5 text-yellow-500" />
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Achievements & Winnings</h3>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Hackathon Win */}
              <div 
                className="group relative rounded-xl overflow-hidden border border-border/50 cursor-pointer flex-1 h-48 bg-muted/30 p-2 flex items-center justify-center"
                onClick={() => window.open('https://www.linkedin.com/posts/aditya-kumar-jha-72493a319_nmamit-nitte-proudmoment-activity-7442479576330477568-iE8l?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFDDNowB6OgYvlBgBdJHr4fUwfbOLWhgEpY', '_blank')}
              >
                <img src="/resources/hpe_first.png" alt="HPE Hackathon First Place" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <h4 className="text-foreground font-bold text-lg">HPE Hackathon</h4>
                  <p className="text-muted-foreground text-sm mt-1">1st Place Winner</p>
                  <span className="text-xs px-3 py-1.5 mt-3 bg-primary/20 text-primary rounded-full font-medium">View Post</span>
                </div>
              </div>

              {/* Bounty Win */}
              <div 
                className="group relative rounded-xl overflow-hidden border border-border/50 cursor-pointer flex-1 h-48 bg-muted/30 p-2 flex items-center justify-center"
                onClick={() => window.open('https://superteam.fun/earn/t/tysondrake', '_blank')}
              >
                <img src="/resources/bounty.png" alt="Superteam Bounty" className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <h4 className="text-foreground font-bold text-lg">Superteam 100xdevs</h4>
                  <p className="text-muted-foreground text-sm mt-1">Bounty Winner</p>
                  <span className="text-xs px-3 py-1.5 mt-3 bg-primary/20 text-primary rounded-full font-medium">View Details</span>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Blog Link Card */}
          <BentoCard 
            className="md:col-span-1 lg:col-span-1 row-span-2 flex flex-col justify-between group bg-gradient-to-br from-foreground/10 via-background to-background cursor-pointer hover:border-foreground/30 transition-all" 
            delay={0.6}
            onClick={() => window.open('https://unfiltered-self.vercel.app/', '_blank')}
          >
            <div className="flex justify-between items-start">
              <div className="p-4 bg-card border border-border/50 rounded-full text-foreground/80 group-hover:text-foreground transition-colors">
                <ExternalLink className="h-5 w-5" />
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
            
            <div className="mt-8 flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Personal Blog</h3>
                <h4 className="text-2xl md:text-3xl font-bold tracking-tight">Unfiltered.</h4>
              </div>
              <div className="flex flex-col gap-2 mt-1">
                <span className="text-xs font-bold text-foreground uppercase tracking-widest">Raw. Honest.</span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A digital space for thoughts that haven't been sanitized. No fluff, just the core ideas that stick.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Get in Touch Card (Opens Modal) */}
          <Dialog>
            <DialogTrigger asChild>
              <BentoCard 
                className="md:col-span-1 lg:col-span-1 row-span-2 flex flex-col justify-between group bg-gradient-to-tl from-primary/10 via-background to-background cursor-pointer hover:border-primary/50 transition-all relative overflow-hidden" 
                delay={0.7}
              >
                <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Send className="w-40 h-40" />
                </div>
                <div className="flex justify-between items-start relative z-10">
                  <div className="p-4 bg-primary text-primary-foreground rounded-full border border-border/50 shadow-lg group-hover:scale-110 transition-transform">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                <div className="mt-8 relative z-10 flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Contact</h3>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Get in touch</h3>
                  </div>
                  <div className="flex flex-col gap-2 mt-1">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Available for work</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Let's build something great together. Send me a message and let's discuss your next project!
                    </p>
                  </div>
                </div>
              </BentoCard>
            </DialogTrigger>
            
            <DialogContent className="sm:max-w-md border-border/50 bg-card/95 backdrop-blur-lg">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Let's Connect</DialogTitle>
                <DialogDescription>
                  Send me a message or connect with me on social media.
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid gap-6 py-4">
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center py-6 text-center animate-in fade-in zoom-in duration-300">
                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                      <Send className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground text-sm">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                    <Button variant="outline" className="mt-6 rounded-full border-border/50" onClick={() => setIsSuccess(false)}>
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form className="grid gap-4" onSubmit={(e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    
                    // Actual EmailJS credentials
                    const SERVICE_ID = "adityajha07";
                    const TEMPLATE_ID = "template_fcxq4hg";
                    const PUBLIC_KEY = "RyhUsbd9jh7TzstkO";
                    
                    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY)
                      .then((result) => {
                          setIsSuccess(true);
                          setIsSubmitting(false);
                          (e.target as HTMLFormElement).reset();
                      }, (error) => {
                          alert("Failed to send message. Please check your EmailJS configuration or use the direct email button below.");
                          setIsSubmitting(false);
                      });
                  }}>
                    <div className="grid gap-2">
                      <Input id="from_name" name="from_name" placeholder="Your Name" required className="bg-background/50 border-border/50" />
                    </div>
                    <div className="grid gap-2">
                      <Input id="user_email" name="user_email" type="email" placeholder="Your Email address" required className="bg-background/50 border-border/50" />
                    </div>
                    <div className="grid gap-2">
                      <Textarea id="message" name="message" placeholder="Write your message here..." required className="min-h-[120px] bg-background/50 border-border/50" />
                    </div>
                    <Button type="submit" disabled={isSubmitting} className="w-full gap-2 rounded-full transition-all">
                      {isSubmitting ? 'Sending...' : 'Send Message'} {!isSubmitting && <Send className="h-4 w-4" />}
                    </Button>
                  </form>
                )}

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border/50" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">
                      Or connect via
                    </span>
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  <Button variant="outline" size="icon" className="rounded-full h-12 w-12 border-border/50" onClick={() => window.open('https://x.com/aditya__jha7', '_blank')}>
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-12 w-12 border-border/50" onClick={() => window.open('https://www.linkedin.com/in/aditya-kumar-jha-72493a319', '_blank')}>
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-12 w-12 border-border/50" onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=adityakartikey1259@gmail.com', '_blank')}>
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Skill Runner Game Card */}
          <BentoCard className="md:col-span-2 lg:col-span-4 row-span-2 p-0 overflow-hidden flex flex-col justify-center" delay={0.8}>
            <div className="p-6 md:p-12 w-full h-full flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
              <SkillRunner />
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
