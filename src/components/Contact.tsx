import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:ai.engineer@example.com',
      icon: Mail
    },
    {
      name: 'GitHub',
      href: 'https://github.com/username',
      icon: Github
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/username',
      icon: Linkedin
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/username',
      icon: Twitter
    }
  ];

  return (
    <section id="contact" className="py-24 bg-section-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-12 text-section-secondary-foreground">
            Contact
          </h2>
          
          <p className="font-body text-lg mb-12 text-muted-foreground">
            Let's discuss AI, collaborate on projects, or explore new opportunities.
          </p>
          
          <div className="flex justify-center gap-8">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 p-4 hover:scale-105 transition-all duration-300"
                >
                  <IconComponent 
                    size={32} 
                    className="text-section-secondary-foreground group-hover:text-muted-foreground transition-colors" 
                  />
                  <span className="font-body text-sm text-muted-foreground group-hover:text-section-secondary-foreground transition-colors">
                    {link.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;