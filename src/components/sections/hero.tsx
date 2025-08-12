import { Download, Mail, Github, Linkedin, ChevronRight } from 'lucide-react';
import { SectionId } from '@/app/page';

interface HeroProps {
  scrollToSection: (sectionId: SectionId) => void;
}

export function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Dharanidharan
              </span>
              <span className="block text-3xl md:text-5xl text-gray-300 mt-2">
                Cybersecurity Specialist
              </span>
            </h1>
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
          </div>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Emerging cybersecurity professional with expertise in threat detection, incident response, 
            and secure cloud architectures. Transforming digital challenges into innovative security solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/dharani-cv.pdf" download="Dharanidharan-CV.pdf" className="group bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span>Download CV</span>
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="group border border-purple-500 px-8 py-4 rounded-full text-purple-300 font-semibold transition-all duration-300 hover:bg-purple-500/10 hover:shadow-lg flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex justify-center space-x-6 mt-8">
            <a href="https://github.com/DHARANI2D" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:dharanidharan2d@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}