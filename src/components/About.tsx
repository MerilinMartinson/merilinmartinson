const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Section Title */}
          <div className="md:col-span-4">
            <h2 className="section-title sticky top-24">
              About<span className="accent-dot" />
            </h2>
          </div>

          {/* Content */}
          <div className="md:col-span-8 space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-foreground/90">
                I am a PhD candidate in Economics at <span className="font-medium">Humboldt University Berlin</span>. 
                My research focuses on the labour market integration of marginalised groups.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Before starting my PhD, I graduated from University College London with a distinction 
                in MRes Economics and worked at the European Central Bank.
              </p>
            </div>

            {/* Research Interests */}
            <div className="pt-8 border-t border-border">
              <h3 className="font-serif text-lg font-medium mb-4">Research Interests</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Labour Economics",
                  "Migration",
                  "Applied Microeconomics",
                  "Policy Evaluation",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-accent transition-colors cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="pt-8 border-t border-border">
              <h3 className="font-serif text-lg font-medium mb-6">Education</h3>
              <div className="space-y-6">
                {[
                  {
                    degree: "PhD in Economics",
                    school: "Humboldt University Berlin",
                    year: "In Progress",
                  },
                  {
                    degree: "MRes Economics (Distinction)",
                    school: "University College London",
                    year: "2021",
                  },
                ].map((edu, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform" />
                    <div>
                      <p className="font-medium">{edu.degree}</p>
                      <p className="text-muted-foreground text-sm">
                        {edu.school} · {edu.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
