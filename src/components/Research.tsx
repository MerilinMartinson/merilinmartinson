import { ExternalLink, FileText } from "lucide-react";

const Research = () => {
  const papers = [
    {
      title: "Gig Economy and Refugee Labour Market Integration: Evidence from a Food Delivery Platform's Rollout in Colombia",
      status: "Working paper",
      abstract:
        "Colombia has absorbed a large inflow of Venezuelan refugees while app-mediated delivery work has expanded rapidly across cities. This paper asks whether local platform entry changes refugees' employment trajectories in a highly informal upper-middle-income economy. I exploit the staggered municipal rollout of a food delivery platform Rappi between 2013 and 2023 and estimate dynamic intent-to-treat effects using the doubly robust Callaway and Sant'Anna (2021) estimator with not-yet-treated comparisons. The analysis focuses on men and contrasts Venezuelan immigrants with a targeted native counterfactual that matches the platform-worker profile. First-stage relevance is clear: platform entry coincides with a clear rise in a the probability of working as a food delivery driver. The effect is concentrated among immigrants. Reduced-form effects on employment, hours, earnings and informality are small or imprecise in the full sample. Confidence intervals rule out large, sustained effects on informal work or pay. Refugees who had established themselves in a municipality prior to Rappi rollout experience a decline in informality while employment and hours move little. Most vulnerable refugee groups--young, low-skilled, and recent arrivals--experience a persistent increase in their informal employment rates.",
      links: [
        // { label: "PDF", href: "#" },
        // { label: "Slides", href: "#" },
      ],
    },
    // {
    //   title: "Gender Gaps in STEM Fields: A Cross-Country Analysis",
    //   status: "Under Review",
    //   coauthors: "with Jane Doe",
    //   abstract:
    //     "We document persistent gender gaps in STEM education and employment across 50 countries and explore the role of cultural factors and policy interventions...",
    //   links: [
    //     { label: "PDF", href: "#" },
    //     { label: "Online Appendix", href: "#" },
    //   ],
    // },
    // {
    //   title: "Minimum Wage Effects on Small Business Employment",
    //   status: "Working Paper",
    //   coauthors: "with John Smith and Maria Garcia",
    //   abstract:
    //     "Using administrative data from payroll records, we estimate the employment effects of minimum wage increases on small businesses...",
    //   links: [{ label: "Draft available upon request", href: "#" }],
    // },
  ];

  const worksInProgress = [
    "Effects of low-skilled gig work on the long-term unemployed",
    "Migration networks and drug consumption",
    "Evaluating monotonicity violations in Judge IV designs"
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
                {/* {paper.coauthors && (
                  <span className="text-sm text-muted-foreground italic">
                    {paper.coauthors}
                  </span>
                )} */}
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
