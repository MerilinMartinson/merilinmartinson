type Reference = {
  text: string;
  href?: string;
};

type Entry = {
  claim: string;
  references: Reference[];
  note?: string;
};

type Section = {
  id: string;
  title: string;
  entries: Entry[];
};

const talkSections: Section[] = [
  {
    id: "programme",
    title: "Germany’s guest worker programme",
    entries: [
      {
        claim:
          "First recruitment agreement (Italy, 1955), the rotation principle and the recruitment stop (November 1973)",
        references: [
          {
            text: "Bundeszentrale für politische Bildung (bpb), dossier on the history of migration to Germany.",
          },
        ],
      },
      {
        claim:
          "2.4 million workers came through recruitment, 1956–1973; 1.5 million were still working in West Germany in 1975, and 0.7 million in 1985",
        references: [
          {
            text: "Bundesanstalt für Arbeit, employment statistics on foreign workers from the recruitment countries.",
          },
        ],
        note: "These are counts of workers in employment. Family members and people not in work are not included, so the number of people who stayed is larger.",
      },
      {
        claim:
          "After 1973, workers from outside the European Community who left could not come back",
        references: [{ text: "Bundeszentrale für politische Bildung (bpb), as above." }],
      },
    ],
  },
  {
    id: "towns",
    title: "Did guest workers make towns richer?",
    entries: [
      {
        claim: "The hospital example: why naive comparisons mislead",
        references: [
          {
            text: "Angrist, J. D., and Pischke, J.-S. (2014). Mastering ’Metrics: The Path from Cause to Effect. Princeton University Press.",
          },
        ],
      },
      {
        claim: "Natural experiments",
        references: [
          {
            text: "The Nobel Prize in Economic Sciences 2021: David Card, Joshua D. Angrist and Guido W. Imbens. Press release, The Royal Swedish Academy of Sciences, 11 October 2021.",
          },
        ],
      },
      {
        claim: "Guest workers and town growth in West Germany, 1961–1973",
        references: [
          {
            text: "Martinson, M., Sardoschau, S., and Spitz-Oener, A. Work in progress.",
          },
        ],
        note: "Preliminary results, not yet peer reviewed.",
      },
    ],
  },
  {
    id: "workers",
    title: "What happened to the workers",
    entries: [
      {
        claim: "“Man hat Arbeitskräfte gerufen, und es kommen Menschen.”",
        references: [
          {
            text: "Frisch, M. (1965). Foreword to Seiler, A. J., Siamo italiani – Die Italiener. Gespräche mit italienischen Arbeitern in der Schweiz. Zürich: EVZ-Verlag.",
          },
        ],
      },
      {
        claim: "First federally funded German courses for foreign workers (1974)",
        references: [
          {
            text: "Sprachverband Deutsch für ausländische Arbeitnehmer e.V., founded 1974 with funding from the Federal Ministry of Labour.",
          },
        ],
      },
      {
        claim: "First national integration course (2005)",
        references: [
          {
            text: "Zuwanderungsgesetz (Immigration Act) of 30 July 2004, Bundesgesetzblatt I, p. 1950; in force since 1 January 2005.",
          },
        ],
      },
      {
        claim: "Kohl to Thatcher, 28 October 1982",
        references: [
          {
            text: "Record of a conversation between the Prime Minister and the Chancellor of the Federal Republic of Germany, Bonn, 28 October 1982. The National Archives (UK), PREM 19/1036, f135. Via the Margaret Thatcher Foundation.",
            href: "https://www.margaretthatcher.org/document/143093",
          },
          {
            text: "Hecking, C. (2013). “Kohl Wanted Half of Turks Out of Germany.” Der Spiegel International, 1 August 2013.",
          },
        ],
      },
    ],
  },
  {
    id: "cost",
    title: "The long-term cost",
    entries: [
      {
        claim: "Workers who expected to leave learned less German and accepted lower-paid jobs",
        references: [
          {
            text: "Adda, J., Dustmann, C., and Görlach, J.-S. (2022). “The Dynamics of Return Migration, Human Capital Accumulation, and Wage Assimilation.” Review of Economic Studies 89(6): 2841–2871.",
          },
        ],
      },
      {
        claim: "The income gap to German workers widened over time",
        references: [
          {
            text: "Berbée, P., and Stuhler, J. (2025). “The Integration of Migrants in the German Labour Market: Evidence over 50 Years.” Economic Policy 40(122): 481–549.",
          },
          {
            text: "Constant, A., and Massey, D. S. (2005). “Labor Market Segmentation and the Earnings of German Guestworkers.” Population Research and Policy Review 24(5): 489–512.",
          },
        ],
      },
      {
        claim: "Children who grew up in enclaves: weaker German, less schooling",
        references: [
          {
            text: "Danzer, A. M., Feuerbaum, C., Piopiunik, M., and Woessmann, L. (2022). “Growing Up in Ethnic Enclaves: Language Proficiency and Educational Attainment of Immigrant Children.” Journal of Population Economics 35(3): 1297–1344.",
          },
        ],
      },
      {
        claim: "Employment of the second generation",
        references: [{ text: "Berbée and Stuhler (2025), as above." }],
      },
    ],
  },
  {
    id: "today",
    title: "Today: refugees and a food-delivery app in Colombia",
    entries: [
      {
        claim: "The millionth guest worker, Armando Rodrigues de Sá (Köln-Deutz, 10 September 1964)",
        references: [
          {
            text: "Stiftung Haus der Geschichte der Bundesrepublik Deutschland / Deutsches Historisches Museum, LeMO.",
          },
        ],
      },
      {
        claim: "Almost three million Venezuelans in Colombia",
        references: [
          {
            text: "UNHCR / R4V Inter-Agency Coordination Platform for Refugees and Migrants from Venezuela.",
          },
        ],
      },
      {
        claim:
          "App rollout, take-up of delivery work (5×), informal work (+16 per 100 graduates) and earnings gaps",
        references: [
          { text: "Martinson, M. Work in progress." },
          {
            text: "Data: platform launch dates, hand-collected from press, social media and archived websites; Gran Encuesta Integrada de Hogares (GEIH), DANE, 2013–2025.",
          },
        ],
        note: "Preliminary results, not yet peer reviewed. The earnings bars are observed gaps in cities the app reached, not the causal effect. The difference-in-differences estimate, which also nets out cities the app had not yet reached, is −46 log points for refugee graduates (s.e. 0.20) and +10 for refugees without a degree (s.e. 0.08, not significant).",
      },
      {
        claim: "Informal work",
        references: [
          {
            text: "International Labour Organization (2023). Resolution concerning statistics on the informal economy. 21st International Conference of Labour Statisticians.",
          },
        ],
        note: "Defined here as work without health or pension insurance, following the ILO concept of informal employment as work without social protection.",
      },
      {
        claim: "80% intend to stay; 9 in 100 graduates have had their degree recognised",
        references: [
          {
            text: "DANE (2024). Encuesta Pulso de la Migración. A representative survey of Venezuelan migrants in Colombia.",
          },
        ],
      },
    ],
  },
  {
    id: "helps",
    title: "What helps",
    entries: [
      {
        claim: "Certainty early",
        references: [
          {
            text: "Avitabile, C., Clots-Figueras, I., and Masella, P. (2013). “The Effect of Birthright Citizenship on Parental Integration Outcomes.” Journal of Law and Economics 56(3): 777–810.",
          },
          {
            text: "Felfe, C., Rainer, H., and Saurer, J. (2020). “Why Birthright Citizenship Matters for Immigrant Children: Short- and Long-Run Impacts on Educational Integration.” Journal of Labor Economics 38(1): 143–182.",
          },
          {
            text: "Gathmann, C., and Keller, N. (2018). “Access to Citizenship and the Economic Assimilation of Immigrants.” Economic Journal 128(616): 3141–3181.",
          },
          {
            text: "Sajons, C. (2016). “Does Granting Citizenship to Immigrant Children Affect Family Outmigration?” Journal of Population Economics 29(2): 395–420.",
          },
          {
            text: "Sajons, C. (2019). “Birthright Citizenship and Parental Labor Market Integration.” Labour Economics 57: 1–22.",
          },
        ],
      },
      {
        claim: "Decent work, early",
        references: [
          {
            text: "Marbach, M., Hainmueller, J., and Hangartner, D. (2018). “The Long-Term Impact of Employment Bans on the Economic Integration of Refugees.” Science Advances 4(9): eaap9519.",
          },
          {
            text: "Fasani, F., Frattini, T., and Minale, L. (2021). “Lift the Ban? Initial Employment Restrictions and Refugee Labour Market Outcomes.” Journal of the European Economic Association 19(5): 2803–2854.",
          },
          {
            text: "Ibáñez, A. M., Moya, A., Ortega, M. A., Rozo, S. V., and Urbina, M. J. (2025). “Life Out of the Shadows: The Impacts of Regularization Programs on the Lives of Forced Migrants.” Journal of the European Economic Association 23(3): 941–982.",
          },
        ],
      },
      {
        claim: "Degrees that count",
        references: [
          {
            text: "Brücker, H., Glitz, A., Lerche, A., and Romiti, A. (2021). “Occupational Recognition and Immigrant Labor Market Outcomes.” Journal of Labor Economics 39(2): 497–525.",
          },
        ],
      },
    ],
  },
];

const furtherReading: Section[] = [
  {
    id: "places",
    title: "Do immigrants make places richer, or poorer?",
    entries: [
      {
        claim: "Immigration and long-run prosperity",
        references: [
          {
            text: "Sequeira, S., Nunn, N., and Qian, N. (2020). “Immigrants and the Making of America.” Review of Economic Studies 87(1): 382–419.",
          },
        ],
      },
      {
        claim: "Shutting workers out",
        references: [
          {
            text: "Long, J., Medici, C., Qian, N., and Tabellini, M. (2024). “The Impact of the Chinese Exclusion Act on the Economic Development of the Western U.S.” NBER Working Paper 33019.",
          },
          {
            text: "Clemens, M. A., Lewis, E. G., and Postel, H. M. (2018). “Immigration Restrictions as Active Labor Market Policy: Evidence from the Mexican Bracero Exclusion.” American Economic Review 108(6): 1468–1487.",
          },
        ],
      },
    ],
  },
  {
    id: "temporary",
    title: "Temporary stays and investment in skills",
    entries: [
      {
        claim: "Return plans and language learning",
        references: [
          {
            text: "Dustmann, C. (1999). “Temporary Migration, Human Capital, and Language Fluency of Migrants.” Scandinavian Journal of Economics 101(2): 297–314.",
          },
        ],
      },
    ],
  },
];

const imageCredits = [
  "Food courier, Berlin: Mika Baumeister, Unsplash (2021).",
  "Armando Rodrigues de Sá, Köln-Deutz, 1964: Horst Ossinger, dpa.",
  "Food courier, today: Joshua Lawrence, Unsplash (2021).",
  "Record of conversation, 28 October 1982: The National Archives (UK), PREM 19/1036, via the Margaret Thatcher Foundation.",
];

const ReferenceItem = ({ reference }: { reference: Reference }) =>
  reference.href ? (
    <a
      href={reference.href}
      target="_blank"
      rel="noreferrer"
      className="text-primary underline-offset-4 hover:underline"
    >
      {reference.text}
    </a>
  ) : (
    <span>{reference.text}</span>
  );

const SourceSection = ({ section }: { section: Section }) => (
  <section aria-labelledby={`${section.id}-heading`} className="border-t border-border pt-8">
    <h3 id={`${section.id}-heading`} className="mb-6 text-xl font-medium">
      {section.title}
    </h3>
    <ul className="space-y-6">
      {section.entries.map((entry) => (
        <li key={entry.claim} className="border-b border-border/70 pb-6">
          <p className="text-lg font-medium text-foreground">{entry.claim}</p>
          <ul className="mt-2 space-y-2 text-muted-foreground">
            {entry.references.map((reference) => (
              <li key={reference.text} className="leading-relaxed">
                <ReferenceItem reference={reference} />
              </li>
            ))}
          </ul>
          {entry.note && (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground/80">{entry.note}</p>
          )}
        </li>
      ))}
    </ul>
  </section>
);

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
          The Guest Who Stayed
        </h1>
        <p className="mb-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Sources behind every number, quote and finding in the talk, in the order they appear,
          followed by further reading. Results marked as work in progress are preliminary and not
          yet peer reviewed.
        </p>
        <p className="mb-12 max-w-2xl text-muted-foreground">
          Inspiration Stage, 7 November 2026.{" "}
          <a
            href="https://berlinscienceweek.com/"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            Berlin Science Week programme
          </a>
          . Questions or comments:{" "}
          <a
            href="mailto:merilin.martinson@hu-berlin.de"
            className="text-primary underline-offset-4 hover:underline"
          >
            merilin.martinson@hu-berlin.de
          </a>
        </p>

        <h2 id="sources-heading" className="mb-6 text-2xl font-medium">
          Sources, in the order of the talk
        </h2>
        <div className="space-y-10">
          {talkSections.map((section) => (
            <SourceSection key={section.id} section={section} />
          ))}
        </div>

        <h2 className="mb-6 mt-16 text-2xl font-medium">Further reading</h2>
        <div className="space-y-10">
          {furtherReading.map((section) => (
            <SourceSection key={section.id} section={section} />
          ))}
        </div>

        <section aria-labelledby="credits-heading" className="mt-16 border-t border-border pt-8">
          <h2 id="credits-heading" className="mb-6 text-2xl font-medium">
            Image credits
          </h2>
          <ul className="space-y-2 text-muted-foreground">
            {imageCredits.map((credit) => (
              <li key={credit}>{credit}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default BerlinScienceWeekSources;
