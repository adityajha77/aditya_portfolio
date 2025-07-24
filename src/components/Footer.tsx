import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/adityajha77'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aditya-kumar-jha-72493a319'
    },
    {
      icon: Mail,
      name: 'Email',
      url: 'mailto:adityakartikey1259@gmail.com'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left - Logo and description */}
            <div className="text-center md:text-left">
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold gradient-text hover:scale-105 smooth-transition inline-block"
              >
                Aditya.
              </button>
              <p className="text-muted-foreground mt-2 text-sm">
                Software Developer & Tech Enthusiast
              </p>
            </div>

            {/* Center - Social links */}
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-background border border-border hover:border-primary/40 flex items-center justify-center group smooth-transition hover:glow-shadow"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-4 w-4 text-muted-foreground group-hover:text-primary smooth-transition" />
                  </a>
                );
              })}
            </div>

            {/* Right - Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end gap-1">
                © {currentYear} Made with{' '}
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />{' '}
                by Aditya Kumar Jha
              </p>
            </div>
          </div>

          {/* Bottom divider */}
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">
              Built with React, TypeScript, and Tailwind CSS • Deployed with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;