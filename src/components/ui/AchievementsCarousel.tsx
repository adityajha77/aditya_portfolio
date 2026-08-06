import React, { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, ExternalLink, LayoutGrid } from 'lucide-react';
import { Button } from './button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

interface Achievement {
  title: string;
  subtitle: string;
  image: string;
  link?: string;
  description: string;
  badge: string;
  containImage?: boolean;
}

const achievements: Achievement[] = [
  {
    title: 'HPE HACKATHON',
    subtitle: '1st Prize Winner',
    image: '/resources/hpe_first.webp',
    link: 'https://www.linkedin.com/posts/aditya-kumar-jha-72493a319_nmamit-nitte-proudmoment-activity-7442479576330477568-iE8l?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFDDNowB6OgYvlBgBdJHr4fUwfbOLWhgEpY',
    description: 'Won 1st place in the Hewlett Packard Enterprise (HPE) Hackathon, building a scalable real-time emergency responder routing engine under 24 hours.',
    badge: 'First Prize',
    containImage: true
  },
  {
    title: 'Flipkart Grid 8.0',
    subtitle: 'Semifinalist',
    image: '/resources/flipkart.svg',
    link: 'https://x.com/aditya__jha7/status/2083878593617162458',
    description: 'Qualified as a Semifinalist in the Flipkart Grid 8.0 Software Development track, competing against 100k+ students nationwide.',
    badge: 'Semifinalist',
    containImage: true
  },
  {
    title: 'Superteam 100xdevs',
    subtitle: 'Bounty Winner',
    image: '/resources/bounty.webp',
    link: 'https://superteam.fun/earn/t/tysondrake',
    description: 'Awarded bounty winner by Superteam and 100xdevs for building a performance-optimized Web3 analytics dashboard on Solana.',
    badge: 'Bounty Winner',
    containImage: true
  }
];

export const AchievementsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    dragFree: true
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  // Smooth horizontal and vertical wheel scrolling
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !emblaApi) return;
    let lastTime = 0;
    const onWheel = (e: WheelEvent) => {
      // Determine dominant scroll direction
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const delta = isHorizontal ? e.deltaX : e.deltaY;
      
      // Ignore tiny unintentional scrolls
      if (Math.abs(delta) < 5) return;
      
      const now = Date.now();
      
      // Allow scrolling smoothly but prevent page jump
      if (now - lastTime < 150) {
        e.preventDefault();
        return;
      }
      
      e.preventDefault();
      lastTime = now;
      if (delta > 0) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollPrev();
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [emblaApi]);

  const AchievementCard = ({ achievement }: { achievement: Achievement }) => (
    <div 
      className="relative flex-[0_0_85%] md:flex-[0_0_48%] lg:flex-[0_0_48%] min-w-0 h-[280px] rounded-2xl overflow-hidden border border-border/50 group bg-card flex flex-col justify-between cursor-pointer [will-change:transform]"
      onClick={() => setIsDialogOpen(true)}
    >
      
      {/* Header (Username/Title & Action) */}
      <div className="p-3 border-b border-border/40 flex items-center justify-between bg-card/50 shrink-0 z-10">
        <div className="flex items-center gap-2 min-w-0 mr-2">
          <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0">
            🏆
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="font-bold text-xs text-foreground tracking-wide truncate">{achievement.title}</h4>
            <p className="text-[9px] text-muted-foreground font-medium uppercase tracking-wider truncate">{achievement.subtitle}</p>
          </div>
        </div>
        <span className="bg-yellow-300 backdrop-blur-sm text-yellow-950 text-[10px] font-bold px-2.5 py-1 rounded-full border border-yellow-500/50 whitespace-nowrap shadow-sm">
          {achievement.badge}
        </span>
      </div>

      {/* Image / Content Container */}
      <div className="absolute inset-0 h-full w-full pointer-events-none flex items-center justify-center">
        <img
          src={achievement.image}
          alt={achievement.title}
          loading="lazy"
          decoding="async"
          className={`w-full h-full transition-transform duration-700 group-hover:scale-103 ${
            achievement.containImage ? 'object-contain p-3' : 'object-cover object-center'
          }`}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent/10 pointer-events-none" />

      {/* Footer / Description */}
      <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-2 z-10 bg-gradient-to-t from-background via-background/90 to-transparent">

        {achievement.link && (
          <div className="flex items-center mt-1">
            <Button
              size="sm"
              className="rounded-full bg-foreground text-background hover:bg-foreground/90 h-7 text-[10px] px-3 font-semibold gap-1"
              onClick={(e) => {
                e.stopPropagation();
                window.open(achievement.link, '_blank');
              }}
            >
              View Post <ExternalLink className="h-3 w-3" />
            </Button>
          </div>
        )}
      </div>

    </div>
  );

  return (
    <div className="relative w-full h-full flex flex-col" ref={containerRef}>
      <div className="flex justify-between items-center mb-4 px-1">
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 font-bold">🏆</span>
          <h3 className="text-sm font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent uppercase tracking-wider">Achievements & Winnings</h3>
        </div>

        <div className="flex items-center gap-2">
          {/* View All Dialog */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 rounded-full border-border/50 text-xs px-3 gap-1">
                <LayoutGrid className="h-3 w-3" /> View All
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl h-[85vh] p-0 overflow-hidden flex flex-col border-border/50 bg-background/95 backdrop-blur-lg [&>button]:hidden">
              <div className="px-6 py-4 border-b border-border/50 shrink-0 flex items-center justify-between bg-background/95 z-10">
                <DialogHeader>
                  <DialogTitle className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                    <span>🏆</span> Achievements & Winnings
                  </DialogTitle>
                </DialogHeader>
                <DialogClose asChild>
                  <Button variant="outline" className="rounded-full gap-2 border-border/50 hidden sm:flex">
                    <ArrowLeft className="w-4 h-4" /> Go Back
                  </Button>
                </DialogClose>
              </div>
              <div className="flex-1 overflow-y-auto p-6 relative">
                <div className="flex flex-col gap-6">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row gap-6 bg-card border border-border/50 rounded-2xl overflow-hidden group p-4 hover:border-border transition-colors"
                    >
                    <div className="w-full md:w-2/5 h-56 rounded-xl overflow-hidden shrink-0 bg-muted/20 relative">
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
                          achievement.containImage ? 'object-contain p-4' : 'object-cover object-center'
                        }`}
                      />
                    </div>
                    <div className="flex flex-col justify-center flex-1 py-2">
                      <div className="flex items-start justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">🏆</span>
                          <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{achievement.subtitle}</span>
                        </div>
                        <span className="bg-yellow-300 backdrop-blur-sm text-yellow-950 text-[11px] font-bold px-3 py-1 rounded-full border border-yellow-500/50 shadow-sm">
                          {achievement.badge}
                        </span>
                      </div>
                      <h4 className="text-foreground font-bold text-2xl mb-3">{achievement.title}</h4>
                      <p className="text-muted-foreground text-base leading-relaxed mb-6">{achievement.description}</p>
                      <div className="flex items-center gap-3 mt-auto">
                        {achievement.link && (
                          <Button
                            className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-6"
                            onClick={() => window.open(achievement.link, '_blank')}
                          >
                            View Post <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Mobile Close Button */}
                <DialogClose asChild>
                  <Button variant="ghost" className="w-full h-12 mt-2 rounded-2xl border border-border/50 md:hidden">
                    Close
                  </Button>
                </DialogClose>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Button variant="outline" size="icon" onClick={scrollPrev} disabled={!canScrollPrev} className="h-8 w-8 rounded-full border-border/50">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={scrollNext} disabled={!canScrollNext} className="h-8 w-8 rounded-full border-border/50">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="overflow-hidden flex-1" ref={emblaRef}>
        <div className="flex gap-4 h-full">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} />
          ))}
        </div>
      </div>
    </div>
  );
};
