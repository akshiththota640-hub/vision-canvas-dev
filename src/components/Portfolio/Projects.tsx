import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Blog Website",
      description: "A responsive blog platform where users can read, explore, and share articles with a clean, minimal UI for optimal reading experience.",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Clean, minimal UI for reading experience",
        "Categories and tags for easy navigation", 
        "Responsive design for mobile & desktop",
        "Article sharing functionality"
      ],
      image: "/placeholder-blog.jpg",
      demoUrl: "#",
      sourceUrl: "#",
      highlight: true
    },
    {
      id: 2,
      title: "Chat Application",
      description: "A real-time chat application for seamless communication with multiple users, typing indicators, and message timestamps.",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Real-time messaging for multiple users",
        "Typing indicators and timestamps",
        "Lightweight front-end design",
        "Performance optimized"
      ],
      image: "/placeholder-chat.jpg",
      demoUrl: "#",
      sourceUrl: "#",
      highlight: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ai', label: 'AI/ML' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A showcase of my development work, featuring web applications built with modern technologies
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12 reveal">
          <div className="flex flex-wrap gap-4">
            {filters.map((filterOption) => (
              <button
                key={filterOption.id}
                onClick={() => setFilter(filterOption.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === filterOption.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-surface text-muted hover:bg-card hover:text-text'
                }`}
              >
                {filterOption.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="reveal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="card-glow group hover-lift hover-glow reveal-stagger"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-lg h-48 bg-gradient-to-br from-primary/20 to-accent/20 transition-all duration-500 group-hover:from-primary/30 group-hover:to-accent/30">
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <div className="text-6xl opacity-30 transition-opacity duration-500 group-hover:opacity-50">
                      {project.title.includes('Blog') ? '📝' : '💬'}
                    </div>
                  </div>
                  {project.highlight && (
                    <div className="absolute top-4 right-4 animate-scale-in">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full animate-pulse">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-text mb-2">Key Features:</h4>
                    <ul className="text-sm text-muted space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      variant="default" 
                      size="sm"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                      className="flex-1 hover-lift transition-all duration-300"
                    >
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(project.sourceUrl, '_blank')}
                      className="flex-1 hover-lift transition-all duration-300"
                    >
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 reveal">
          <p className="text-lg text-muted mb-6">
            Want to see more of my work or discuss a project?
          </p>
          <Button 
            size="lg"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-hero"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;