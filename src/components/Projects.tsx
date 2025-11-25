import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'TokenEstate',
      description: 'A decentralized property management platform utilizing Solana blockchain for secure tokenized real estate transactions.',
      image: '/lovable-uploads/tokenestate.png',
      technologies: ['Solana', 'Rust', 'React', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/adityajha77/property_collesium',
      liveUrl: 'https://property-collesium.vercel.app/'
    },
    {
      title: 'Chefbook',
      description: 'A platform where users can discover and book professional chefs for various events, offering a seamless culinary experience.',
      image: '/lovable-uploads/chefbook.png',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/adityajha77/CHEFBOOK',
      liveUrl: 'https://chefbook-teal.vercel.app/'
    },
    {
      title: 'Enviropulse',
      description: 'An environmental monitoring application providing real-time data and insights on local air and water quality to promote ecological awareness.',
      image: '/lovable-uploads/enviropulse.png',
      technologies: ['React', 'Python', 'Flask', 'PostgreSQL', 'IoT'],
      githubUrl: 'https://github.com/adityajha77/enviropulse',
      liveUrl: '#'
    },
    {
      title: 'TrackBharat',
      description: 'Making democracy transparent and people-powered. Track political promises, vote on local issues, and hold representatives accountable in your area.',
      image: '/lovable-uploads/trackbharat.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      githubUrl: 'https://github.com/adityajha77/TrackBharat',
      liveUrl: 'https://track-bharat-1.vercel.app/'
    },
    {
      title: 'Nebula - Solana Wallet',
      description: 'A custom-designed Solana wallet with unique UI, secure key management, and seamless blockchain interactions.',
      image: '/lovable-uploads/d2e6e002-cca8-4a4c-8e11-51da6d845f45.png',
      technologies: ['React', 'Solana Web3.js', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/adityajha77',
      liveUrl: 'https://nebula-web-wallet.vercel.app/'
    },
    {
      title: 'SolMate - Token Transfer DApp',
      description: 'A decentralized application enabling Solana-based token transfers and wallet interactions with intuitive user interface.',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Solana', 'Web3.js', 'Rust', 'Anchor'],
      githubUrl: 'https://github.com/adityajha77',
      liveUrl: '#'
    },
    {
      title: 'StakeFlow',
      description: 'Join the future of DeFi staking with our advanced reward system, loyalty multipliers, and referral bonuses.',
      image: '/lovable-uploads/stakeFlow.png',
      technologies: ['MERN', 'Web3', 'Solidity', 'Ethereum'],
      githubUrl: 'https://github.com/adityajha77/stake_rewards',
      liveUrl: 'https://stake-rewards.vercel.app/'
    },
    {
      title: 'WhatsApp Clone',
      description: 'Real-time chat application with authentication, message encryption, and secure user access controls.',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop',
      technologies: ['React', 'Firebase', 'Socket.io', 'Node.js', 'JWT'],
      githubUrl: 'https://github.com/adityajha77',
      liveUrl: '#'
    },
    {
      title: 'Faculty Directory',
      description: 'College directory website with advanced UI, JavaScript interactivity, and comprehensive faculty information management.',
      image: '/lovable-uploads/faculty.png',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
      githubUrl: 'https://github.com/adityajha77',
      liveUrl: 'https://nmamit-faculty-library.vercel.app/'
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                My Latest <span className="gradient-text">Work</span>
              </h2>
              <div className="w-16 h-1 gradient-bg rounded-full"></div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects showcasing my expertise in full-stack development, 
              mobile applications, and blockchain technologies.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative rounded-2xl overflow-hidden bg-card elegant-shadow hover:glow-shadow smooth-transition animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 smooth-transition"></div>
                  
                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 smooth-transition">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border-white/20"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border-white/20"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary smooth-transition">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-primary-glow/5 opacity-0 group-hover:opacity-100 smooth-transition pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* View more button */}
          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button
              onClick={() => window.open('https://github.com/adityajha77', '_blank')}
              variant="outline"
              size="lg"
              className="group border-2 border-primary/20 hover:border-primary/40 smooth-transition"
            >
              <Github className="h-5 w-5 mr-2 group-hover:scale-110 smooth-transition" />
              View More Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
