import { Download, ExternalLink } from "lucide-react";

const CV = () => {
  return (
    <section id="cv" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-6">
            Curriculum Vitae<span className="accent-dot" />
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            A complete overview of my academic journey, research experience, 
            publications, and professional activities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download size={20} />
              Download CV (PDF)
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-card text-foreground px-8 py-4 rounded-full font-medium border border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              <ExternalLink size={20} />
              View on Google Scholar
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { number: "3+", label: "Working Papers" },
              { number: "2", label: "Publications" },
              { number: "5+", label: "Courses Taught" },
              { number: "10+", label: "Presentations" },
            ].map((stat, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border/50">
                <div className="font-serif text-3xl md:text-4xl font-medium text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
