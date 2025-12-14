const Teaching = () => {
  const courses = [
    {
      role: "Teaching Assistant",
      courses: [
        {
          name: "Principles of Microeconomics",
          code: "ECON 101",
          term: "Fall 2023, Spring 2024",
          instructor: "Prof. John Smith",
        },
        {
          name: "Intermediate Microeconomics",
          code: "ECON 301",
          term: "Fall 2022, Fall 2023",
          instructor: "Prof. Jane Doe",
        },
        {
          name: "Econometrics I",
          code: "ECON 410",
          term: "Spring 2023",
          instructor: "Prof. Maria Garcia",
        },
      ],
    },
    {
      role: "Instructor",
      courses: [
        {
          name: "Introduction to R for Economists",
          code: "Workshop",
          term: "Summer 2023",
          instructor: "Graduate Student Workshop Series",
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
              I am passionate about teaching and have had the opportunity to 
              work with students at various levels.
            </p>
          </div>

          {/* Content */}
          <div className="md:col-span-8 space-y-12">
            {courses.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="font-serif text-xl font-medium mb-6 flex items-center gap-3">
                  <span className="w-8 h-0.5 bg-primary" />
                  {section.role}
                </h3>
                <div className="space-y-4">
                  {section.courses.map((course, courseIndex) => (
                    <div
                      key={courseIndex}
                      className="p-6 rounded-xl bg-card border border-border/50 card-hover"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                        <div>
                          <h4 className="font-medium text-lg">{course.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {course.code}
                          </p>
                        </div>
                        <span className="text-sm text-primary font-medium">
                          {course.term}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {course.instructor}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Teaching Statement */}
            <div className="p-8 rounded-2xl bg-secondary/50 border border-border/50">
              <h3 className="font-serif text-lg font-medium mb-4">
                Teaching Philosophy
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in creating an inclusive and engaging learning environment 
                where students feel comfortable asking questions and exploring 
                economic concepts through real-world applications. My teaching 
                emphasizes critical thinking and the practical application of 
                economic theory.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary hover:underline"
              >
                Download Teaching Statement
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;
