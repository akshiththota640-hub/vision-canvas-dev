const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Vaagdevi College of Engineering",
      period: "2023 - 2027",
      status: "Currently Pursuing",
      highlights: [
        "Focus on Computer Science fundamentals",
        "Strong foundation in programming languages",
        "Active in coding competitions",
        "Collaborative project development"
      ],
      courses: ["Data Structures & Algorithms", "Web Development", "Database Systems", "Software Engineering"]
    },
    {
      degree: "Intermediate Education",
      institution: "Tejas Defence College",
      period: "2021 - 2023",
      status: "Completed",
      highlights: [
        "Strong mathematical foundation",
        "Physics and Chemistry coursework",
        "Preparation for engineering entrance exams",
        "Leadership in academic activities"
      ],
      courses: ["Mathematics", "Physics", "Chemistry", "Computer Science"]
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Brilliant Grammar High School",
      period: "2020 - 2021",
      status: "Completed",
      highlights: [
        "Well-rounded academic performance",
        "Foundation in core subjects",
        "Early interest in technology",
        "Active participation in school activities"
      ],
      courses: ["Mathematics", "Science", "English", "Social Studies"]
    }
  ];

  const achievements = [
    {
      title: "Academic Excellence",
      description: "Consistent performance throughout academic career",
      icon: "🏆"
    },
    {
      title: "Programming Foundation",
      description: "Self-taught web development alongside formal education",
      icon: "💻"
    },
    {
      title: "Continuous Learning",
      description: "Always exploring new technologies and frameworks",
      icon: "📚"
    },
    {
      title: "Project-Based Learning",
      description: "Building real-world applications to apply theoretical knowledge",
      icon: "🚀"
    }
  ];

  return (
    <section id="education" className="py-20 bg-surface/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Educational <span className="gradient-text">Background</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            My academic journey and continuous learning in technology and computer science
          </p>
        </div>

        {/* Education Timeline */}
        <div className="reveal mb-16">
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div key={index} className="card-glow p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-text mb-2">{edu.degree}</h3>
                    <div className="text-lg font-medium text-primary mb-1">{edu.institution}</div>
                    <div className="flex items-center gap-3 text-muted text-sm">
                      <span>{edu.period}</span>
                      <span>•</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'Currently Pursuing' 
                          ? 'bg-accent/20 text-accent' 
                          : 'bg-primary/20 text-primary'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Highlights */}
                  <div>
                    <h4 className="text-sm font-semibold text-text mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted text-sm">
                          <span className="text-primary mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Relevant Courses */}
                  <div>
                    <h4 className="text-sm font-semibold text-text mb-3">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, idx) => (
                        <span key={idx} className="skill-badge text-xs">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="reveal">
          <h3 className="text-2xl font-bold text-text text-center mb-8">Academic Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="card-glow p-6 text-center">
                <div className="text-3xl mb-3">{achievement.icon}</div>
                <h4 className="text-lg font-semibold text-text mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;