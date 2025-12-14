import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/50 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 opacity-0 animate-fade-up">
            <div className="space-y-2">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Economics PhD Candidate
              </p>
              <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] tracking-tight">
                Your<br />
                <span className="text-gradient">Name</span><br />
                Here
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Research interests in development economics, 
              labor markets, and applied microeconomics. 
              Currently at <span className="text-foreground font-medium">University Name</span>.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#research"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium text-sm hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
              >
                View Research
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-foreground font-medium text-sm hover:text-primary transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="relative opacity-0 animate-fade-up stagger-2">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-secondary via-accent/50 to-secondary overflow-hidden shadow-card">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center">
                    <span className="font-serif text-3xl text-muted-foreground">YN</span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">Your photo here</p>
                </div>
              </div>
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
