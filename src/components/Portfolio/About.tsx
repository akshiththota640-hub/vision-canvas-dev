const About = () => {
  const highlights = [
    {
      number: "2+",
      label: "Years Learning",
      description: "Continuously growing my skills"
    },
    {
      number: "5+",
      label: "Technologies",
      description: "From C++ to React & AI"
    },
    {
      number: "2",
      label: "Active Projects",
      description: "Blog platform & Chat app"
    }
  ];

  const quickFacts = [
    { icon: "🎓", label: "Currently pursuing B.Tech at Vaagdevi College" },
    { icon: "💻", label: "Passionate about Frontend Development & AI" },
    { icon: "🌍", label: "Based in India, open to remote opportunities" },
    { icon: "🚀", label: "Always exploring new technologies" }
  ];

  return (
    <section id="about" className="py-20 bg-surface/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <div className="reveal">
            <p className="text-lg text-muted leading-relaxed mb-6">
              I'm a passionate Frontend Developer and AI Enthusiast who loves turning ideas into 
              interactive digital experiences. With a strong foundation in C, C++, and Python along 
              with modern web technologies like HTML, CSS, JavaScript, React, and Node.js, I focus 
              on building scalable, efficient, and user-friendly applications.
            </p>
            
            <p className="text-lg text-muted leading-relaxed mb-8">
              Beyond coding, I'm always exploring how AI can transform web experiences and improve 
              problem-solving. I aim to grow as a full-stack developer while contributing to 
              impactful projects that make technology more accessible.
            </p>

            {/* Quick Facts */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-text mb-4">Quick Facts</h3>
              <div className="grid gap-3">
                {quickFacts.map((fact, index) => (
                  <div key={index} className="flex items-center gap-3 text-muted">
                    <span className="text-xl">{fact.icon}</span>
                    <span>{fact.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="reveal">
            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="card-glow p-6 text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {highlight.number}
                  </div>
                  <div className="text-lg font-semibold text-text mb-1">
                    {highlight.label}
                  </div>
                  <div className="text-sm text-muted">
                    {highlight.description}
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

export default About;