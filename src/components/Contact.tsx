import { Mail, MapPin, Twitter, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="section-title">
              Let's Connect<span className="accent-dot" />
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always happy to discuss research ideas, potential collaborations, 
              or just chat about economics. Feel free to reach out!
            </p>

            <div className="space-y-6">
              <a
                href="mailto:yourname@university.edu"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    yourname@university.edu
                  </p>
                  <p className="text-sm text-muted-foreground">Email</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-medium">Department of Economics</p>
                  <p className="text-sm text-muted-foreground">
                    University Name, City, State
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Github, href: "#", label: "GitHub" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Decorative */}
          <div className="relative hidden md:block">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary via-accent/30 to-secondary p-12 flex items-center justify-center">
              <div className="text-center space-y-4">
                <p className="font-serif text-2xl italic text-foreground/80">
                  "The only way to do great work is to love what you do."
                </p>
                <p className="text-sm text-muted-foreground">— A reminder</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/30 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
