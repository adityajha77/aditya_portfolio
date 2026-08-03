import React, { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { motion } from 'framer-motion';
import { BentoCard } from '@/components/ui/BentoCard';
import { Button } from '@/components/ui/button';
import { ProjectCarousel } from '@/components/ui/ProjectCarousel';
import { SkillRunner } from '@/components/ui/SkillRunner';
import { AchievementsCarousel } from '@/components/ui/AchievementsCarousel';
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
  Box,
  GitPullRequest
} from 'lucide-react';

// LeetCode SVG icon (no lucide equivalent)
const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
);

const Index = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const skills = [
    { name: 'C++',          icon: Code2,      color: 'bg-blue-500/20 text-blue-300 border-blue-500/20 hover:bg-blue-500/30' },
    { name: 'Rust',         icon: Terminal,   color: 'bg-orange-500/20 text-orange-300 border-orange-500/20 hover:bg-orange-500/30' },
    { name: 'Solana',       icon: Database,   color: 'bg-violet-500/20 text-violet-300 border-violet-500/20 hover:bg-violet-500/30' },
    { name: 'Web3',         icon: Database,   color: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/30' },
    { name: 'React',        icon: Layout,     color: 'bg-sky-500/20 text-sky-300 border-sky-500/20 hover:bg-sky-500/30' },
    { name: 'TypeScript',   icon: Code,       color: 'bg-blue-600/20 text-blue-400 border-blue-600/20 hover:bg-blue-600/30' },
    { name: 'Node.js',      icon: Terminal,   color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/30' },
    { name: 'MongoDB',      icon: Database,   color: 'bg-green-500/20 text-green-300 border-green-500/20 hover:bg-green-500/30' },
    { name: 'React Native', icon: Smartphone, color: 'bg-teal-500/20 text-teal-300 border-teal-500/20 hover:bg-teal-500/30' },
    { name: 'Next.js',      icon: Globe,      color: 'bg-pink-500/20 text-pink-300 border-pink-500/20 hover:bg-pink-500/30' },
    { name: 'Tailwind CSS', icon: Palette,    color: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/20 hover:bg-indigo-500/30' },
    { name: 'Docker',       icon: Box,        color: 'bg-amber-500/20 text-amber-300 border-amber-500/20 hover:bg-amber-500/30' },
    { name: 'Express',      icon: Terminal,   color: 'bg-zinc-500/20 text-zinc-300 border-zinc-500/20 hover:bg-zinc-500/30' },
    { name: 'PostgreSQL',   icon: Database,   color: 'bg-blue-400/20 text-blue-300 border-blue-400/20 hover:bg-blue-400/30' },
  ];

  return (
    <div className="min-h-screen bg-background/50 text-foreground transition-colors duration-300 relative">
      <AnimatedBackground />
      {/* Top Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="font-bold text-xl tracking-tight">Aditya Jha</div>
        <div className="flex items-center gap-4">
          <a href="https://x.com/aditya__jha7" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted/50 rounded-lg">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
          </a>
          <a href="https://github.com/adityajha7" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-violet-400 transition-colors hidden sm:block" title="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://codeforces.com/profile/adityajha7" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-orange-400 transition-colors hidden sm:block" title="Codeforces">
            <Code className="h-5 w-5" />
          </a>
          <a href="https://leetcode.com/u/adityajha7/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-amber-400 transition-colors hidden sm:block" title="LeetCode">
            <LeetCodeIcon className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/aditya-kumar-jha-72493a319" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-blue-400 transition-colors hidden sm:block" title="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=adityakartikey1259@gmail.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-rose-400 transition-colors hidden sm:block" title="Email">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </nav>

      {/* Main Grid container */}
      <main className="container mx-auto max-w-7xl px-4 pt-32 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Hero Row — Card left, Profile pic right (outside card) */}
          <div className="md:col-span-2 lg:col-span-4 row-span-2 flex flex-col lg:flex-row gap-8 items-center">

            {/* Left: BentoCard with bio + skills */}
            <BentoCard className="flex-1 flex flex-col justify-center p-8 h-full" delay={0.1}>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent"
              >
                Hi, I'm <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">Aditya</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6"
              >
                <strong className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent font-semibold">Full Stack &amp; Web3 Developer</strong> based in India with <strong className="text-amber-400 font-semibold">2+ years</strong> of experience building scalable, modern web applications, decentralized platforms, and mobile apps. Passionate about <strong className="text-emerald-400 font-semibold">competitive programming</strong> and <strong className="text-violet-400 font-semibold">open-source</strong>.
              </motion.p>

              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3"
              >
                Skills
              </motion.h3>

              {/* Skills pills — inside the card after bio */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
                className="flex flex-wrap gap-2 mb-8"
              >
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={index}
                      title={skill.name}
                      className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-[11.5px] font-semibold transition-colors cursor-default ${skill.color}`}
                    >
                      <Icon className="h-3.5 w-3.5 shrink-0" />
                      <span className="leading-none">{skill.name}</span>
                    </div>
                  );
                })}
                <div className="flex items-center justify-center px-3 py-1.5 rounded-xl border border-dashed border-border/50 text-[11.5px] font-semibold text-muted-foreground bg-muted/10 cursor-default">
                  <span className="leading-none">&amp; more...</span>
                </div>
              </motion.div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="rounded-full bg-background/50 border-border/50 hover:bg-primary/5 hover:text-primary hover:border-primary/50 hover:scale-[1.02] active:scale-[0.98] px-8 py-6 text-base font-semibold shadow-sm transition-all"
                  onClick={() => window.open('/resources/aditya_jha_resume.pdf', '_blank')}
                >
                  View Resume
                </Button>
              </div>
            </BentoCard>

            {/* Right: Profile pic — outside the card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="shrink-0"
            >
              <div className="relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-[2rem] border border-border/40 bg-card/30 backdrop-blur-md overflow-hidden">
                <img
                  src="/resources/aditya.png"
                  alt="Aditya Jha"
                  className="w-full h-full object-cover object-[center_25%] scale-[0.95]"
                />
              </div>
            </motion.div>

          </div>

          {/* Project Carousel Card */}
          <BentoCard className="md:col-span-2 lg:col-span-4 row-span-2 p-0 overflow-hidden" delay={0.4}>
            <div className="p-6 h-full min-h-[400px]">
              <ProjectCarousel />
            </div>
          </BentoCard>

          {/* Achievements & Winnings Card */}
          <BentoCard className="md:col-span-2 lg:col-span-2 row-span-2 overflow-hidden" delay={0.5}>
            <div className="p-6 h-full min-h-[380px]">
              <AchievementsCarousel />
            </div>
          </BentoCard>

          {/* Open Source Card */}
          <BentoCard className="md:col-span-2 lg:col-span-2 row-span-2 flex flex-col justify-between group relative overflow-hidden" delay={0.6}>
            


            <div className="flex justify-between items-start z-10 shrink-0">
              <div className="flex items-center gap-2">
                <GitPullRequest className="h-5 w-5 text-emerald-400" />
                <h3 className="text-sm font-medium text-emerald-400 uppercase tracking-wider">Open Source</h3>
              </div>
              <a 
                href="https://github.com/n8n-io/n8n/pull/33507" 
                target="_blank" 
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 my-auto py-2 z-10">
              {/* Circular Design */}
              <div className="relative flex items-center justify-center w-32 h-32 shrink-0 select-none">
                <div className="absolute inset-0 rounded-full bg-primary/5 blur-md animate-pulse" />
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="stroke-muted/20"
                    strokeWidth="4"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="stroke-primary"
                    strokeWidth="5"
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={2 * Math.PI * 40 * (1 - 18 / 30)}
                    strokeLinecap="round"
                    fill="transparent"
                    style={{
                      filter: 'drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.45))'
                    }}
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-black text-primary leading-none">18</span>
                  <span className="text-[8px] text-muted-foreground font-bold uppercase tracking-wider mt-1">PRs Raised</span>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center gap-4">
                <p className="text-base text-muted-foreground leading-relaxed text-center sm:text-left">
                  Active open-source contributor to <strong className="text-rose-500 font-bold text-lg">n8n</strong> and <strong className="text-[#007ACC] font-bold text-lg">VS Code</strong>. Specialized in workflow node integrations, developer tooling enhancements, and interface optimizations.
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20">
                    <img src="https://avatars.githubusercontent.com/u/45487711?s=200&v=4" alt="n8n" className="w-5 h-5 rounded-sm" />
                    <span className="text-xs font-bold text-rose-500 tracking-wide">n8n</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#007ACC]/10 border border-[#007ACC]/20">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="VS Code" className="w-5 h-5" />
                    <span className="text-xs font-bold text-[#007ACC] tracking-wide">VS Code</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 z-10 shrink-0">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Proof of Work</span>
              <div 
                className="p-3 bg-muted/40 border border-border/50 rounded-xl flex items-center justify-between cursor-pointer hover:border-primary/30 transition-colors"
                onClick={() => window.open('https://github.com/n8n-io/n8n/pull/33507', '_blank')}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-mono font-medium text-foreground">n8n-io/n8n #33507</span>
                </div>
                <span className="text-xs text-primary font-semibold flex items-center gap-1">
                  View PR <ExternalLink className="h-3 w-3" />
                </span>
              </div>
            </div>
          </BentoCard>

          {/* DSA Stats Card */}
          <BentoCard className="md:col-span-2 lg:col-span-2 row-span-2 flex flex-col justify-between group relative overflow-hidden" delay={0.65}>


            {/* Header */}
            <div className="flex justify-between items-start z-10">
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-rose-400" />
                <h3 className="text-sm font-medium text-rose-400 uppercase tracking-wider">DSA &amp; Competitive Programming</h3>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>

            {/* Big stat */}
            <div className="flex flex-col sm:flex-row items-center gap-6 my-auto py-2 z-10">
              <div className="relative flex items-center justify-center w-32 h-32 shrink-0 select-none">
                <div className="absolute inset-0 rounded-full bg-primary/5 blur-md animate-pulse" />
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" className="stroke-muted/20" strokeWidth="4" fill="transparent" />
                  <circle
                    cx="50" cy="50" r="40"
                    className="stroke-primary"
                    strokeWidth="5"
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={2 * Math.PI * 40 * (1 - 0.82)}
                    strokeLinecap="round"
                    fill="transparent"
                    style={{ filter: 'drop-shadow(0px 0px 8px rgba(255,255,255,0.45))' }}
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-black text-primary leading-none">600+</span>
                  <span className="text-[8px] text-muted-foreground font-bold uppercase tracking-wider mt-1">Solved</span>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <p className="text-sm text-muted-foreground leading-relaxed text-center sm:text-left mb-3">
                  Solved <strong className="text-foreground font-semibold">600+ problems</strong> across LeetCode, Codeforces and other platforms — covering arrays, graphs, DP, trees & more.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    ['Arrays/Strings',      'bg-blue-500/20 text-blue-300'],
                    ['Linked List',         'bg-cyan-500/20 text-cyan-300'],
                    ['Dynamic Prog.',       'bg-violet-500/20 text-violet-300'],
                    ['Graphs',             'bg-emerald-500/20 text-emerald-300'],
                    ['Trees',              'bg-amber-500/20 text-amber-300'],
                    ['Binary Search',      'bg-rose-500/20 text-rose-300'],
                    ['Stack / Queue',      'bg-orange-500/20 text-orange-300'],
                    ['Heap / Priority Q',  'bg-pink-500/20 text-pink-300'],
                    ['Two Pointers',       'bg-teal-500/20 text-teal-300'],
                    ['Sliding Window',     'bg-indigo-500/20 text-indigo-300'],
                    ['Bit Manipulation',   'bg-lime-500/20 text-lime-300'],
                    ['Backtracking',       'bg-yellow-500/20 text-yellow-300'],
                  ].map(([label, cls]) => (
                    <span key={label} className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border border-white/10 ${cls}`}>{label}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Platform profile links */}
            <div className="flex flex-col gap-2 z-10 shrink-0">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Profiles</span>
              <div className="flex flex-col sm:flex-row gap-2">
                {/* LeetCode */}
                <div
                  className="flex-1 p-3 bg-muted/40 border border-border/50 rounded-xl flex items-center justify-between cursor-pointer hover:border-amber-400/40 transition-colors group/lc"
                  onClick={() => window.open('https://leetcode.com/u/adityajha7/', '_blank')}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-amber-400/10 flex items-center justify-center">
                      <LeetCodeIcon className="h-3.5 w-3.5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground">LeetCode</p>
                      <p className="text-xs font-mono font-semibold text-foreground">adityajha7</p>
                    </div>
                  </div>
                  <ExternalLink className="h-3 w-3 text-muted-foreground group-hover/lc:text-amber-400 transition-colors" />
                </div>
                {/* Codeforces */}
                <div
                  className="flex-1 p-3 bg-muted/40 border border-border/50 rounded-xl flex items-center justify-between cursor-pointer hover:border-blue-400/40 transition-colors group/cf"
                  onClick={() => window.open('https://codeforces.com/profile/adityajha7', '_blank')}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-blue-400/10 flex items-center justify-center">
                      <Code className="h-3.5 w-3.5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground">Codeforces</p>
                      <p className="text-xs font-mono font-semibold text-foreground">adityajha7</p>
                    </div>
                  </div>
                  <ExternalLink className="h-3 w-3 text-muted-foreground group-hover/cf:text-blue-400 transition-colors" />
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Blog Link Card */}
          <BentoCard 
            className="md:col-span-2 lg:col-span-2 row-span-2 flex flex-col justify-between group bg-gradient-to-br from-foreground/10 via-background to-background cursor-pointer hover:border-foreground/30 transition-all" 
            delay={0.8}
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
                <h3 className="text-sm font-medium text-pink-400 uppercase tracking-wider">Personal Blog</h3>
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
                className="md:col-span-2 lg:col-span-2 row-span-2 flex flex-col justify-between group bg-gradient-to-tl from-primary/10 via-background to-background cursor-pointer hover:border-primary/50 transition-all relative overflow-hidden" 
                delay={0.9}
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
                    <h3 className="text-sm font-medium text-cyan-400 uppercase tracking-wider">Contact</h3>
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
                  <Button variant="outline" size="icon" className="rounded-full h-12 w-12 border-border/50" onClick={() => window.open('https://x.com/aditya__jha7', '_blank')} title="X (formerly Twitter)">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
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

          {/* Skill Runner Game Card — Last */}
          <BentoCard className="md:col-span-2 lg:col-span-2 row-span-2 overflow-hidden flex flex-col justify-center bg-gradient-to-br from-background via-background/95 to-primary/5 p-4 md:p-6" delay={1.0}>
            <SkillRunner />
          </BentoCard>

        </div>
      </main>

      <footer className="py-8 text-center text-sm border-t border-border/50">
        <p className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 bg-clip-text text-transparent font-medium">© {new Date().getFullYear()} Aditya Jha. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Index;
