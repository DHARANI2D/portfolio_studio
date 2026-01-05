import { Download, Mail, Github, Linkedin, ChevronRight } from 'lucide-react';
import { SectionId } from '@/app/page';
import { motion } from 'framer-motion';

interface HeroProps {
  scrollToSection: (sectionId: SectionId) => void;
}

export function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div className="relative inline-block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-rose-500/20 rounded-full blur-2xl -z-10"
            />
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              <span className="block bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent pb-2">
                Dharanidharan
              </span>
              <span className="block text-2xl md:text-4xl text-gradient-primary mt-4 font-semibold leading-tight max-w-4xl mx-auto">
                Security Engineer building detection, correlation, and AI security systems from first principles
              </span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col items-center space-y-6"
          >
            <div className="text-lg md:text-xl text-gray-400 font-medium tracking-wide uppercase">
              Frontline SOC experience · Detection Engineering · AI Security · Cloud & Zero Trust
            </div>

            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light italic border-l-2 border-purple-500/30 pl-8 py-4 bg-white/[0.01] rounded-r-2xl">
              "I work at the intersection of <span className="text-white font-medium">incident response and system design</span>, building platforms that <span className="text-white font-medium">reason over security signals</span>, <span className="text-white font-medium">correlate attack paths</span>, and <span className="text-white font-medium">enforce trust across cloud and AI workloads</span>."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a href="https://drive.google.com/uc?export=download&id=1rowC4YzOi6n-Dhad4ajCaUl9kY-ct9aD" className="group relative bg-white text-black px-10 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center space-x-2">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span>Download CV</span>
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="group border border-white/20 bg-white/5 backdrop-blur-sm px-10 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/40 flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center space-x-8 mt-12"
          >
            {[
              { icon: Github, href: "https://github.com/DHARANI2D" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Mail, href: "mailto:dharanidharan2d@gmail.com" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              >
                <social.icon className="w-7 h-7" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}