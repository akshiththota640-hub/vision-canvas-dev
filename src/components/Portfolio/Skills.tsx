import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', label: 'All Skills' },
    { id: 'programming', label: 'Programming' },
    { id: 'web', label: 'Web Technologies' },
    { id: 'tools', label: 'Tools & Platforms' }
  ];

  const skills = [
    { name: 'C', category: 'programming', level: 85 },
    { name: 'C++', category: 'programming', level: 80 },
    { name: 'Python', category: 'programming', level: 75 },
    { name: 'HTML', category: 'web', level: 90 },
    { name: 'CSS', category: 'web', level: 85 },
    { name: 'JavaScript', category: 'web', level: 80 },
    { name: 'React', category: 'web', level: 75 },
    { name: 'Node.js', category: 'web', level: 70 },
    { name: 'Git', category: 'tools', level: 80 },
    { name: 'Docker', category: 'tools', level: 65 },
    { name: 'AWS', category: 'tools', level: 60 }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12 reveal">
          <div className="flex flex-wrap gap-4">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-surface text-muted hover:bg-card hover:text-text'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="card-glow p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-text">{skill.name}</h3>
                  <span className="text-sm text-muted">{skill.level}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-surface rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
                
                {/* Skill Category Badge */}
                <div className="mt-3">
                  <span className="skill-badge text-xs">
                    {skillCategories.find(cat => cat.id === skill.category)?.label.replace(' Technologies', '').replace('Tools & ', '')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;