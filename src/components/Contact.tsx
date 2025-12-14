import { Mail, MapPin, Linkedin } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="py-24 md:py-32 bg-background">
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
              <a href="mailto:merilin.martinson@hu-berlin.de" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    merilin.martinson@hu-berlin.de
                  </p>
                  <p className="text-sm text-muted-foreground">Email</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-medium">Humboldt-Universität zu Berlin</p>
                  <p className="text-sm text-muted-foreground">
                    Raum 141, Department of Economics<br />
                    Spandauer Straße 1<br />
                    10178 Berlin
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="https://www.linkedin.com/in/merilin-martinson/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Right Column - Decorative */}
          <div className="relative hidden md:block">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary via-accent/30 to-secondary p-12 flex items-center justify-center">
              <div className="text-center space-y-4">
              <p className="font-serif text-xl italic text-foreground/80 leading-relaxed">
                  "Show not what has been done, but what can be. How beautiful the world would be if there were a procedure for moving through labyrinths."
                </p>
                <p className="text-sm text-muted-foreground mt-4">— Umberto Eco in The Name of the Rose</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/30 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;