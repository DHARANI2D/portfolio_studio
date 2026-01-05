import { Mail, MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card rounded-[3rem] p-16 md:p-24 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/5 blur-3xl -z-10"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-7xl font-black tracking-tight text-white leading-tight">
              Let's build something <span className="text-gradient-primary">secure</span>.
            </h2>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Seeking a Security Engineer who thinks in systems and attack paths? Let's connect and discuss how I can help enforce trust in your environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <a
                href="mailto:dharanidharan2d@gmail.com"
                className="group relative bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center space-x-3"
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/[0.03] border border-white/10 px-12 py-5 rounded-full text-white font-black uppercase tracking-widest transition-all duration-300 hover:bg-white/5 hover:border-white/20 flex items-center space-x-3"
              >
                <MessageSquare className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="pt-12">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-700">
                Based in Chennai, India • Open to Global Roles
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}