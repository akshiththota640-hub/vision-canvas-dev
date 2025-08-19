import { Button } from '@/components/ui/button';
import avatarImage from '@/assets/akshith-avatar.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Placeholder for resume download
    console.log('Resume download functionality to be implemented');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-30"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Avatar */}
        <div className="mb-8 reveal">
          <div className="avatar-glow w-32 h-32 mx-auto animate-float">
            <img
              src={avatarImage}
              alt="Akshith Kumar"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6 reveal">
          <h1 className="text-5xl md:text-7xl font-bold text-text mb-4">
            Hi, I'm <span className="gradient-text">Akshith Kumar</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted font-medium">
            Frontend Developer | AI Enthusiast
          </p>
          
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Passionate about turning ideas into interactive digital experiences. 
            I build scalable, efficient, and user-friendly applications while exploring 
            how AI can transform web experiences.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-hero"
            >
              View Projects
            </button>
            
            <button
              onClick={downloadResume}
              className="btn-outline"
            >
              Download Resume
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-muted hover:text-text transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;