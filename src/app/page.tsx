'use client';
import React, { useState, useEffect } from 'react';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Certifications } from '@/components/sections/certifications';
import { Blog } from '@/components/sections/blog';



export type SectionId = 'home' | 'about' | 'experience' | 'projects' | 'skills' | 'certifications' | 'blog' | 'contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionId);
        }
      });
    }, { rootMargin: '-100px 0px 0px 0px', threshold: 0.3 });

    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (sectionId: SectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div
        className="fixed w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transition: 'all 0.1s ease'
        }}
      ></div>

      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
