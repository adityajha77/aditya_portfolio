import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from './button';

interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: 'Code Arena',
    description: 'Competitive coding platform',
    image: '/lovable-uploads/codearena.png',
    link: 'https://codearena-nine-xi.vercel.app/'
  },
  {
    title: 'Tokenized Estate',
    description: 'Real estate tokenization',
    image: '/lovable-uploads/tokenestate.png'
  },
  {
    title: 'Book Chefs',
    description: 'Culinary recipe sharing',
    image: '/lovable-uploads/chefbook.png'
  },
  {
    title: 'Enviro Pulse',
    description: 'Environmental monitoring',
    image: '/lovable-uploads/enviropulse.png'
  },
  {
    title: 'Nebula',
    description: 'Web3 ecosystem',
    image: '/lovable-uploads/nebula.png'
  },
  {
    title: 'Track Bharat',
    description: 'Logistics tracking',
    image: '/lovable-uploads/trackbharat.png'
  },
  {
    title: 'Stake Earn',
    description: 'DeFi staking platform',
    image: '/lovable-uploads/stakeFlow.png'
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

  return (
    <div className="relative w-full h-full flex flex-col">
      <div className="flex justify-between items-center mb-4 px-1">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Featured Projects</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={scrollPrev} disabled={!canScrollPrev} className="h-8 w-8 rounded-full">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={scrollNext} disabled={!canScrollNext} className="h-8 w-8 rounded-full">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="overflow-hidden flex-1" ref={emblaRef}>
        <div className="flex gap-4 h-full">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="relative flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_31%] min-w-0 h-full rounded-2xl overflow-hidden border border-border/50 group cursor-pointer bg-muted/30"
              onClick={() => project.link && window.open(project.link, '_blank')}
            >
              <div className="absolute inset-0 p-4 pb-16">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-foreground font-semibold text-lg">{project.title}</h4>
                  {project.link && <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />}
                </div>
                <p className="text-muted-foreground text-sm line-clamp-1">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
