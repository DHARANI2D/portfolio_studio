'use client';
import { useState } from 'react';
import Link from "next/link";
import {
  Rocket, Users, Briefcase, Code, Target, Award, BookOpen, Mail, Menu, X
} from 'lucide-react';
import { SectionId } from '@/app/page';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  activeSection: SectionId;
  scrollToSection: (sectionId: SectionId) => void;
}

const navigationItems: { id: SectionId; label: string; icon: React.ElementType }[] = [
  { id: 'home', label: 'Home', icon: Rocket },
  { id: 'about', label: 'About', icon: Users },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: Code },
  { id: 'skills', label: 'Skills', icon: Target },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'blog', label: 'Blog', icon: BookOpen },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export function Header({ activeSection, scrollToSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollTo = (id: SectionId) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  }

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div className="glass-header rounded-full px-6 py-2 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <div className="flex justify-between items-center h-12">
          <div className="flex-shrink-0">
            <Link href="/" className="group">
              <span className="text-xl font-black tracking-tighter text-white group-hover:text-purple-400 transition-colors">
                2D<span className="text-purple-500">.</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleScrollTo(item.id)}
                    className={`relative px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 flex items-center space-x-2 uppercase ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white/[0.08] rounded-full -z-10"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-purple-400' : ''}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://drive.google.com/uc?export=download&id=1rowC4YzOi6n-Dhad4ajCaUl9kY-ct9aD"
              className="hidden sm:flex px-5 py-2 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform active:scale-95"
            >
              Resume
            </a>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 glass-card rounded-3xl p-6 overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleScrollTo(item.id)}
                    className="flex items-center space-x-3 px-4 py-3 text-xs font-bold text-gray-400 hover:text-white hover:bg-white/5 rounded-2xl transition-all"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              <a
                href="https://drive.google.com/uc?export=download&id=1rowC4YzOi6n-Dhad4ajCaUl9kY-ct9aD"
                className="col-span-2 flex items-center justify-center space-x-3 px-4 py-4 text-xs font-bold text-black bg-white rounded-2xl hover:scale-[1.02] transition-transform mt-4"
              >
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
