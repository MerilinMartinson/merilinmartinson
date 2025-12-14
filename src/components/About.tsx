const About = () => {
  const education = [
    {
      degree: "PhD in Economics",
      school: "Humboldt-Universität zu Berlin",
      year: "2025-",
    },
    {
      degree: "MRes Economics",
      school: "University College London",
      year: "2024-2025",
    },
    {
      degree: "MSc Economics & Management Science (Grade: 1.0)",
      school: "Humboldt-Universität zu Berlin",
      year: "2021-2024",
      note: "Best graduate of the School of Business and Economics",
    },
    {
      degree: "BA International Business (Grade: 1.26)",
      school: "HTW Berlin",
      year: "2018-2021",
      note: "Best overall graduate",
    },
  ];

  const experience = [
     {
      role: "Research Fellow",
      institution: "DFG Research Unit “Labour Market Transformation: Scarcity, Mismatch & Policy”",
      period: "2025-present",
    },
    {
      role: "Research Assistant to Joshua Angrist (MIT)",
      institution: "Humboldt-Universität zu Berlin, Rockwool Foundation Berlin",
      period: "2023-2024, 2025-present",
    },
     {
      role: "Research Assistant to Sulin Sardoschau",
      institution: "Humboldt-Universität zu Berlin",
      period: "2024",
    },
    {
      role: "Research Trainee",
      details: "RA to Carlo Altavilla",
      institution: "European Central Bank, DG Monetary Policy, Monetary Analysis Division",
      period: "2023-2024",
    },
    {
      role: "Data Analyst",
      details: "",
      institution: "Ladenzeile GmbH",
      period: "2018-2022",
    },
    {
      role: "Data Scientist",
      details: "",
      institution: "Messa App S.A.S., Colombia",
      period: "2020-2021",
    },
  ];

  const awards = [
    { year: "2025", title: "Antti Piippo Foundation Scholarship", org: "Estonia" },
    { year: "2025", title: "Eesti Pank Research Award", org: "Estonia" },
    { year: "2025", title: "Rein Otsason Foundation Scholarship", org: "Estonia" },
    { year: "2024", title: "Special Prize for Research in Social Sciences", org: "Estonian Research Council" },
    { year: "2024", title: "Humboldt Research Track Scholarship", org: "Humboldt-Universität zu Berlin" },
    { year: "2024", title: "Henrike und Dr. Thomas Kurze-Preis", org: "Humboldt-Universität zu Berlin" },
    { year: "2024", title: "Deutschlandstipendium", org: "Ferdinand und Charlotte Schimmelpfennig-Stiftung" },
    { year: "2023", title: "Deutschlandstipendium", org: "Deutsche Bank" },
    { year: "2021", title: "Best Graduate of the Programme", org: "HTW Berlin" },
    { year: "2020", title: "PROMOS Scholarship", org: "DAAD" },
    { year: "2014", title: "Medal for Academic Excellence", org: "Government of Estonia" },
  ];

  // const volunteering = [
  //   { role: "Research Mentor", org: "Lumiere Education", period: "2025-present" },
  //   { role: "Mentor", org: "Women in Economics initiative", period: "2022-present" },
  //   { role: "University Representative", org: "HTW Berlin", period: "2018-2021" },
  //   { role: "Chef & Community Organiser", org: "Homeless veggie dinners initiative", period: "2018-2020" },
  //   { role: "Ballet & English Teacher", org: "More Than English, Colombia", period: "2016-2018" },
  //   { role: "Primary School Teacher", org: "Colegio Divino Niño, Colombia", period: "2016-2017" },
  // ];

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
              <div className="space-y-5">
                {education.map((edu, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="font-medium">{edu.degree}</p>
                        <span className="text-sm text-muted-foreground">{edu.year}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {edu.school}
                        {edu.note && <span className="text-primary"> · {edu.note}</span>}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="pt-8 border-t border-border">
              <h3 className="font-serif text-lg font-medium mb-6">Experience</h3>
              <div className="space-y-5">
                {experience.map((exp, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 group-hover:scale-150 transition-transform flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="font-medium">{exp.role}</p>
                        <span className="text-sm text-muted-foreground">{exp.period}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {exp.institution}
                        {exp.details && <span className="text-foreground/70"> · {exp.details}</span>}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="pt-8 border-t border-border">
              <h3 className="font-serif text-lg font-medium mb-6">Awards & Scholarships</h3>
              <div className="space-y-3">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <span className="text-sm text-muted-foreground w-12 flex-shrink-0">{award.year}</span>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{award.title}</p>
                      <p className="text-muted-foreground text-xs">{award.org}</p>
                    </div>
                  </div>
                ))}
            </div>

            {/* Volunteering
            <div className="pt-8 border-t border-border">
              <h3 className="font-serif text-lg font-medium mb-6">Volunteering & Service</h3>
              <div className="space-y-4">
                {volunteering.map((vol, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-primary/60 mt-2 group-hover:scale-150 transition-transform flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="font-medium text-sm">{vol.role}</p>
                        <span className="text-xs text-muted-foreground">{vol.period}</span>
                      </div>
                      <p className="text-muted-foreground text-xs">{vol.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
