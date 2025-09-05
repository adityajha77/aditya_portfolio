import { Mail, MapPin, Phone, Linkedin, Github, Send, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs.sendForm(
      'adityajha07',       // Replace with your EmailJS service ID
      'adityajha01',      // Replace with your EmailJS template ID
      formRef.current,
      '-f1qVjSP21yagp0Sd'        // Replace with your EmailJS public key
    ).then(() => {
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    }).catch((error) => {
      console.error("EmailJS error:", error);
      alert("Failed to send message. Please try again.");
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'adityakartikey1259@gmail.com',
      link: 'mailto:adityakartikey1259@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'India',
      link: null
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/aditya-kumar-jha-72493a319'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aditya-kumar-jha-72493a319/'
    },
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/adityajha77'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/aditya__jha01/'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Get In <span className="gradient-text">Touch</span>
              </h2>
              <div className="w-16 h-1 gradient-bg rounded-full"></div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss how we can work together 
              to create something amazing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="animate-fade-in-up">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 gradient-text">Let's Connect</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm always interested in hearing about new opportunities and exciting projects. 
                    Whether you have a question or just want to say hi, feel free to reach out!
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div 
                        key={index}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card elegant-shadow hover:glow-shadow smooth-transition group"
                      >
                        <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 smooth-transition">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-card-foreground">{info.title}</div>
                          {info.link ? (
                            <a 
                              href={info.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary smooth-transition"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-muted-foreground">{info.value}</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-6">
                  <h4 className="font-semibold mb-4">Follow me on</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-xl bg-card border border-border hover:border-primary/40 flex items-center justify-center group smooth-transition hover:glow-shadow"
                        >
                          <IconComponent className="h-5 w-5 text-muted-foreground group-hover:text-primary smooth-transition" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="p-8 rounded-2xl bg-card elegant-shadow">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Send me a message</h3>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 bg-background border-border focus:border-primary/40 smooth-transition"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 bg-background border-border focus:border-primary/40 smooth-transition"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background border-border focus:border-primary/40 smooth-transition resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full gradient-bg hover:opacity-90 smooth-transition text-lg py-6 glow-shadow"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
