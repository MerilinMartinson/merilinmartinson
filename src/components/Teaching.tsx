const Teaching = () => {
  const experiences = [
    {
      role: "Lecturer",
      items: [
        {
          name: "Business Mathematics",
          institution: "HTW Berlin",
          period: "2018–2020",
          description: "First-year compulsory course (~90 students). Covered matrix algebra, solving linear systems, differential calculus, and basic optimisation.",
        },
        {
          name: "Research Methods and Scientific Writing",
          institution: "HTW Berlin",
          period: "2018–2020",
          description: "First-year compulsory course (~90 students). Research design, data collection, academic writing, and presentations.",
        },
      ],
    },
    {
      role: "Primary & Kindergarten Teacher",
      items: [
        {
          name: "English and Mathematics",
          institution: "Colombia",
          period: "2016–2018",
          description: "Taught English and Mathematics with a focus on interactive, student-centred learning.",
        },
      ],
    },
  ];

  return (
    <section id="teaching" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Section Title */}
          <div className="md:col-span-4">
            <h2 className="section-title sticky top-24">
              Teaching<span className="accent-dot" />
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              I have taught at both university and primary levels, 
              with experience in mathematics, research methods, and language education.
            </p>
          </div>

          {/* Content */}
          <div className="md:col-span-8 space-y-12">
            {experiences.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="font-serif text-xl font-medium mb-6 flex items-center gap-3">
                  <span className="w-8 h-0.5 bg-primary" />
                  {section.role}
                </h3>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="p-6 rounded-xl bg-card border border-border/50 card-hover"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                        <div>
                          <h4 className="font-medium text-lg">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {item.institution}
                          </p>
                        </div>
                        <span className="text-sm text-primary font-medium">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-3">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;
