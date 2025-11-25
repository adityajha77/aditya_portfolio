const About = () => {
  const stats = [
    { number: '1+', label: 'YEARS OF\nEXPERIENCE' },
    { number: '20+', label: 'PROJECTS\nCOMPLETED' },
    { number: '10+', label: 'TECHNOLOGIES\nMASTERED' }
  ];

  const skills = [
    { name: 'React & Next.js', level: 90 },
    { name: 'Node.js & Express', level: 85 },
    { name: 'MongoDB & PostgreSQL', level: 80 },
    { name: 'Flutter & Dart', level: 75 },
    { name: 'Solana Web3', level: 70 },
    { name: 'C++ Programming', level: 85 }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary-glow/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                About <span className="gradient-text">me</span>
              </h2>
              <div className="w-16 h-1 gradient-bg rounded-full"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Profile image and description */}
            <div className="animate-fade-in-up">
              <div className="relative mb-8">
                <div className="w-80 h-96 mx-auto lg:mx-0 rounded-2xl overflow-hidden elegant-shadow">
                  <img
                    src="/lovable-uploads/207df7a8-ff79-4eb6-a1bc-f30977d3b54b.png"
                    alt="Aditya Kumar Jha - About"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 gradient-bg rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-glow rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-6 mb-12">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am a passionate Full Stack Developer with expertise in modern web technologies. 
                  Throughout my journey, I have developed a strong foundation in both frontend and 
                  backend development, with a keen interest in creating seamless user experiences.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My passion for development extends beyond web applications to mobile app development 
                  with Flutter and blockchain development with Solana. I enjoy solving complex problems 
                  through competitive programming and building innovative solutions.
                </p>
              </div>

              {/* Skills */}
              <div className="space-y-6 mb-12">
                <h3 className="text-2xl font-semibold gradient-text">Technical Skills</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="gradient-bg h-2 rounded-full smooth-transition"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${0.5 + index * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-8 rounded-2xl bg-card elegant-shadow hover:glow-shadow smooth-transition group"
                >
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-4 group-hover:scale-110 smooth-transition">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground whitespace-pre-line">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;