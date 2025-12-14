import { ExternalLink, FileText } from "lucide-react";

const Research = () => {
  const papers = [
    {
      title: "The Effects of Cash Transfers on Educational Outcomes: Evidence from a Randomized Experiment",
      status: "Job Market Paper",
      abstract:
        "This paper examines the impact of unconditional cash transfers on educational attainment and labor market outcomes using a randomized controlled trial in...",
      links: [
        { label: "PDF", href: "#" },
        { label: "Slides", href: "#" },
      ],
    },
    {
      title: "Gender Gaps in STEM Fields: A Cross-Country Analysis",
      status: "Under Review",
      coauthors: "with Jane Doe",
      abstract:
        "We document persistent gender gaps in STEM education and employment across 50 countries and explore the role of cultural factors and policy interventions...",
      links: [
        { label: "PDF", href: "#" },
        { label: "Online Appendix", href: "#" },
      ],
    },
    {
      title: "Minimum Wage Effects on Small Business Employment",
      status: "Working Paper",
      coauthors: "with John Smith and Maria Garcia",
      abstract:
        "Using administrative data from payroll records, we estimate the employment effects of minimum wage increases on small businesses...",
      links: [{ label: "Draft available upon request", href: "#" }],
    },
  ];

  const worksInProgress = [
    "The Long-Run Effects of Early Childhood Interventions on Economic Mobility",
    "Remote Work and Urban-Rural Migration Patterns",
    "Financial Literacy Programs and Household Savings Behavior",
  ];

  return (
    <section id="research" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="section-title">
            Research<span className="accent-dot" />
          </h2>
        </div>

        {/* Papers */}
        <div className="space-y-8 mb-20">
          {papers.map((paper, index) => (
            <article
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-soft card-hover border border-border/50"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider">
                  {paper.status}
                </span>
                {paper.coauthors && (
                  <span className="text-sm text-muted-foreground italic">
                    {paper.coauthors}
                  </span>
                )}
              </div>

              <h3 className="font-serif text-xl md:text-2xl font-medium mb-4 group-hover:text-primary transition-colors">
                {paper.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {paper.abstract}
              </p>

              <div className="flex flex-wrap gap-4">
                {paper.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.label === "PDF" ? (
                      <FileText size={16} />
                    ) : (
                      <ExternalLink size={16} />
                    )}
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Works in Progress */}
        <div>
          <h3 className="font-serif text-2xl font-medium mb-8">
            Works in Progress
          </h3>
          <div className="space-y-4">
            {worksInProgress.map((work, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-card transition-colors group"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 group-hover:scale-150 transition-transform" />
                <p className="text-lg">{work}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
