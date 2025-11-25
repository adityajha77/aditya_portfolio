import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section relative overflow-hidden">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-scale-in">
            <div className="relative inline-block">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden elegant-shadow">
                <img
                  src="/lovable-uploads/207df7a8-ff79-4eb6-a1bc-f30977d3b54b.png"
                  alt="Aditya Kumar Jha"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Main heading */}
          <div className="mb-6 animate-slide-in-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              I'm <span className="gradient-text">Aditya Kumar Jha</span>,{' '}
              <br className="hidden md:block" />
              <span className="text-foreground">software developer based in India.</span>
            </h1>
          </div>

          {/* Description */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I am a passionate software developer with 1+ years of experience in building modern web applications and mobile apps using cutting-edge technologies.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={() => window.open('https://www.linkedin.com/in/aditya-kumar-jha-72493a319', '_blank')}
              className="gradient-bg hover:opacity-90 smooth-transition text-lg px-8 py-6 glow-shadow"
            >
              Connect with me
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-2 border-primary/20 hover:border-primary/40 smooth-transition"
              onClick={() => window.open('/lovable-uploads/aditya_jha_resume.pdf', '_blank')}
            >
              My resume
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={scrollToAbout}
              className="inline-flex flex-col items-center text-muted-foreground hover:text-primary smooth-transition group"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ArrowDown className="h-5 w-5 animate-bounce group-hover:text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
