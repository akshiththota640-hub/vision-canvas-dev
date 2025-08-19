const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Personal Projects",
      period: "2023 - Present",
      type: "Self-Directed Learning",
      description: "Building personal projects and expanding technical skills",
      achievements: [
        "Developed responsive blog platform with clean UI/UX design",
        "Created real-time chat application with modern JavaScript",
        "Implemented efficient state management and performance optimization",
        "Gained hands-on experience with React ecosystem and modern tooling"
      ]
    },
    {
      title: "Computer Science Student",
      company: "Vaagdevi College of Engineering",
      period: "2023 - 2027",
      type: "Education",
      description: "Pursuing B.Tech with focus on programming fundamentals and web development",
      achievements: [
        "Strong foundation in C, C++, and Python programming languages",
        "Active participation in coding competitions and hackathons",
        "Collaborative projects using Git version control and team workflows", 
        "Continuous learning of emerging technologies and best practices"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            My learning path and development experience in software engineering
          </p>
        </div>

        <div className="reveal">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                  {/* Content */}
                  <div className="md:ml-20">
                    <div className="card-glow p-6">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-text mb-1">{exp.title}</h3>
                          <div className="flex items-center gap-2 text-muted">
                            <span className="font-medium">{exp.company}</span>
                            <span>•</span>
                            <span className="text-sm">{exp.type}</span>
                          </div>
                        </div>
                        <div className="mt-2 md:mt-0">
                          <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted mb-4">{exp.description}</p>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold text-text mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-muted">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;