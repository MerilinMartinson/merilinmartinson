const sources = [
  {
    title: "Berlin Science Week",
    description: "Official programme and event information.",
    href: "https://berlinscienceweek.com/",
  },
];

const BerlinScienceWeekSources = () => {
  return (
    <main className="min-h-screen bg-gradient-hero px-6 py-16 text-foreground">
      <div className="mx-auto max-w-3xl">
        <a
          href="/"
          className="mb-12 inline-flex text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          &larr; Back to homepage
        </a>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Berlin Science Week
        </p>
        <h1 className="mb-6 text-4xl font-medium tracking-tight md:text-6xl">
          Sources &amp; references
        </h1>
        <p className="mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Background sources and further information related to this project.
        </p>

        <section aria-labelledby="sources-heading" className="border-t border-border pt-8">
          <h2 id="sources-heading" className="mb-6 text-2xl font-medium">
            Sources
          </h2>
          <ul className="space-y-5">
            {sources.map((source) => (
              <li key={source.href} className="border-b border-border/70 pb-5">
                <a
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-medium text-primary underline-offset-4 hover:underline"
                >
                  {source.title}
                </a>
                <p className="mt-1 text-muted-foreground">{source.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default BerlinScienceWeekSources;