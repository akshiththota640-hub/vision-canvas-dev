import { useEffect } from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';
import BackToTop from './BackToTop';

const Portfolio = () => {
  useEffect(() => {
    // Enhanced Intersection Observer for staggered reveal animations
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Staggered animation for child elements
          const children = entry.target.querySelectorAll('.reveal-stagger');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('visible');
            }, index * 150); // 150ms delay between each child
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    });

    // Observe all elements with 'reveal' class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    // Add initial animation delay for first load
    setTimeout(() => {
      const firstElements = document.querySelectorAll('.reveal:not(.visible)');
      firstElements.forEach((el, index) => {
        if (index < 3) { // Only animate first 3 elements on load
          setTimeout(() => {
            el.classList.add('visible');
          }, index * 200);
        }
      });
    }, 500);

    // Cleanup
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Portfolio;