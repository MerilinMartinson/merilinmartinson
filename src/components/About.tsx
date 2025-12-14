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
                I am a PhD candidate in Economics at <span className="font-medium">University Name</span>, 
                where I study the intersection of development economics and labor markets.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                My research focuses on understanding how policy interventions affect 
                economic outcomes in developing countries. I use a combination of 
                experimental and quasi-experimental methods to answer questions about 
                education, employment, and economic mobility.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Prior to my PhD, I received my BA in Economics from 
                <span className="text-foreground font-medium"> Undergraduate University</span> 
                {" "}and worked as a research assistant at 
                <span className="text-foreground font-medium"> Research Institution</span>.
              </p>
            </div>

            {/* Research Interests */}
            <div className="pt-8 border-t border-border">
              <h3 className="font-serif text-lg font-medium mb-4">Research Interests</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Development Economics",
                  "Labor Economics",
                  "Applied Microeconomics",
                  "Policy Evaluation",
                  "Gender Economics",
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
                    school: "University Name",
                    year: "Expected 2026",
                  },
                  {
                    degree: "MA in Economics",
                    school: "University Name",
                    year: "2022",
                  },
                  {
                    degree: "BA in Economics",
                    school: "Undergraduate University",
                    year: "2020",
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
