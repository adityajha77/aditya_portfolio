import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, ExternalLink, Github, LayoutGrid, ArrowUpRight } from 'lucide-react';
import { Button } from './button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  containImage?: boolean;
}

const projects: Project[] = [
  {
    title: 'Code Arena',
    description: 'Competitive coding platform built for scale. Enables users to practice algorithms, participate in contests, and view real-time leaderboards.',
    image: '/resources/codearena.png',
    link: 'https://codearena-nine-xi.vercel.app/',
    github: 'https://github.com/adityajha77/codearena',
    containImage: true
  },
  {
    title: 'Book Chefs',
    description: 'Culinary recipe sharing network allowing food enthusiasts to explore, share, and save their favorite dishes with a modern UI.',
    image: '/resources/chefbook.png',
    link: 'https://chefbook-teal.vercel.app/',
    github: 'https://github.com/adityajha77/CHEFBOOK'
  },
  {
    title: 'Tokenized Estate',
    description: 'Real estate tokenization platform leveraging blockchain to fractionally divide high-value property assets for retail investors.',
    image: '/resources/tokenestate.png',
    link: 'https://property-collesium.vercel.app/',
    github: 'https://github.com/adityajha77/property_collesium'
  },
  {
    title: 'Nebula',
    description: 'Web3 ecosystem and portfolio tracker, providing deep insights into wallet activity, DeFi positions, and cross-chain balances.',
    image: '/resources/nebula.png',
    link: 'https://nebula-web-wallet.vercel.app/',
    github: 'https://github.com/adityajha77/nebula_web_wallet',
    containImage: true
  },
  {
    title: 'Stake Earn',
    description: 'DeFi staking platform designed with high-yield smart contracts, allowing users to earn passive income by locking crypto assets.',
    image: '/resources/stakeFlow.png',
    link: 'https://stake-rewards.vercel.app/',
    github: 'https://github.com/adityajha77/stake_rewards',
    containImage: true
  },
  {
    title: 'Track Bharat',
    description: 'Logistics tracking interface providing real-time shipment updates, interactive maps, and detailed delivery analytics.',
    image: '/resources/trackbharat.png',
    link: 'https://track-bharat-1.vercel.app/',
    github: 'https://github.com/adityajha77/TrackBharat'
  }
];

export const ProjectCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    dragFree: true
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

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

  const ProjectCard = ({ project }: { project: Project }) => (
    <div className="relative flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_31%] min-w-0 h-[280px] rounded-2xl overflow-hidden border border-border/50 group bg-card">
      {/* Image Container */}
      <div className="absolute inset-0 h-full w-full">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${project.containImage ? 'object-contain p-4 bg-muted/30' : 'object-cover object-top'}`}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent/10 pointer-events-none" />

      <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-2">
        <div>
          <h4 className="text-foreground font-bold text-xl mb-1">{project.title}</h4>
          <p className="text-muted-foreground text-sm line-clamp-1">{project.description}</p>
        </div>

        <div className="flex items-center gap-2 mt-2">
          {project.link && project.link !== '#' && (
            <Button
              size="sm"
              className="rounded-full bg-foreground text-background hover:bg-foreground/90 h-8 text-xs px-3"
              onClick={() => window.open(project.link, '_blank')}
            >
              Live <ExternalLink className="ml-1 h-3 w-3" />
            </Button>
          )}
          {project.github && (
            <Button
              size="sm"
              variant="outline"
              className="rounded-full border-border/50 hover:bg-accent h-8 text-xs px-3"
              onClick={() => window.open(project.github, '_blank')}
            >
              Code <Github className="ml-1 h-3 w-3" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full h-full flex flex-col">
      <div className="flex justify-between items-center mb-4 px-1">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Featured Projects</h3>

        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 rounded-full border-border/50 text-xs px-3 gap-1">
                <LayoutGrid className="h-3 w-3" /> View All
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto border-border/50 bg-background/95 backdrop-blur-lg">
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold mb-6">All Projects</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-6 bg-card border border-border/50 rounded-2xl overflow-hidden group p-4 hover:border-border transition-colors">
                    <div className="w-full md:w-2/5 h-56 rounded-xl overflow-hidden shrink-0 bg-muted/20">
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${project.containImage ? 'object-contain p-4' : 'object-cover object-top'}`}
                      />
                    </div>
                    <div className="flex flex-col justify-center flex-1 py-2">
                      <h4 className="text-foreground font-bold text-2xl mb-3">{project.title}</h4>
                      <p className="text-muted-foreground text-base leading-relaxed mb-6">{project.description}</p>
                      <div className="flex items-center gap-3 mt-auto">
                        {project.link && project.link !== '#' && (
                          <Button
                            className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-6"
                            onClick={() => window.open(project.link, '_blank')}
                          >
                            Live App <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        )}
                        {project.github && (
                          <Button
                            variant="outline"
                            className="rounded-full border-border/50 hover:bg-accent px-6"
                            onClick={() => window.open(project.github, '_blank')}
                          >
                            Source Code <Github className="ml-2 h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* View More Projects Button */}
                <Button
                  variant="outline"
                  className="w-full py-12 mt-4 border-dashed border-2 rounded-2xl text-lg hover:bg-accent hover:text-foreground transition-all flex flex-col gap-2 h-auto"
                  onClick={() => window.open('https://github.com/adityajha77', '_blank')}
                >
                  <Github className="h-8 w-8 mb-2" />
                  <span>View more projects on GitHub</span>
                  <span className="text-sm text-muted-foreground font-normal">Explore my other open-source contributions</span>
                </Button>
                
                {/* Mobile Close Button */}
                <DialogClose asChild>
                  <Button variant="ghost" className="w-full h-12 mt-2 rounded-2xl border border-border/50 md:hidden">
                    Close
                  </Button>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>

          <div className="w-px h-4 bg-border mx-1" />

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
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};
