import { Code, Smartphone, Database, Coins, Globe, Trophy } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Full Stack Web Development (MERN)',
      description: 'Building modern, responsive web applications using MongoDB, Express.js, React, and Node.js with clean architecture and best practices.',
      features: ['React & Next.js', 'Node.js & Express', 'MongoDB & Mongoose', 'RESTful APIs']
    },
    {
      icon: Trophy,
      title: 'C++ Competitive Programming',
      description: 'Strong problem-solving skills in competitive programming with expertise in algorithms, data structures, and optimization techniques.',
      features: ['Algorithm Design', 'Data Structures', 'Problem Solving', 'Code Optimization']
    },
    {
      icon: Smartphone,
      title: 'Flutter Mobile App Development',
      description: 'Creating beautiful, cross-platform mobile applications for iOS and Android using Flutter framework with native performance.',
      features: ['Cross-platform Apps', 'Native Performance', 'Custom UI/UX', 'State Management']
    },
    {
      icon: Coins,
      title: 'Solana Web3 DApps',
      description: 'Developing decentralized applications on Solana blockchain with focus on user experience and smart contract integration.',
      features: ['Smart Contracts', 'Wallet Integration', 'Token Transfers', 'DeFi Solutions']
    },
    {
      icon: Database,
      title: 'PostgreSQL & Firebase',
      description: 'Database design and management using PostgreSQL for complex queries and Firebase for real-time applications and authentication.',
      features: ['Database Design', 'Real-time Updates', 'Authentication', 'Data Modeling']
    },
    {
      icon: Globe,
      title: 'Express.js & React',
      description: 'Full-stack development with Express.js backend APIs and React frontend applications with modern development practices.',
      features: ['RESTful APIs', 'Component Architecture', 'State Management', 'Performance Optimization']
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                What I Can <span className="gradient-text">Do</span>
              </h2>
              <div className="w-16 h-1 gradient-bg rounded-full"></div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized in modern web development, mobile applications, and blockchain technologies 
              with a focus on delivering high-quality, scalable solutions.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="group p-8 rounded-2xl bg-card elegant-shadow hover:glow-shadow smooth-transition animate-fade-in-up border border-border hover:border-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center group-hover:scale-110 smooth-transition glow-shadow">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary smooth-transition">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full gradient-bg"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-primary-glow/5 opacity-0 group-hover:opacity-100 smooth-transition pointer-events-none"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;