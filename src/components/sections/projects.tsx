import { Shield, Lock, Brain, Database, Cloud, Eye, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: '🧠 SignalFusion Core',
    subtitle: 'Security Reasoning Engine',
    description: 'A detection platform that normalizes telemetry across security layers, correlates behavior across entities and time, and models attacker progression as attack paths.',
    problem: 'Modern SOCs drown in alerts while attackers move laterally.',
    impact: 'Demonstrates real detection engineering maturity, not just log parsing.',
    tech: ['Detection Engineering', 'Security Graphs', 'MITRE ATT&CK', 'TypeScript'],
    github: 'https://github.com/DHARANI2D/SignalFusionCore',
    gradient: 'from-purple-500 to-indigo-500',
    icon: Brain
  },
  {
    title: '🛡️ AEGIS',
    subtitle: 'AI Security Control Plane',
    description: 'A zero-trust control plane for AI systems featuring cryptographic identity, intent-based authorization, and semantic firewalls against prompt injection.',
    problem: 'AI agents operate without identity, intent boundaries, or enforcement.',
    impact: 'Enables specialized AI Security Engineer roles through deep technical enforcement.',
    tech: ['AI Security', 'Zero Trust', 'OPA-inspired', 'Python', 'Cryptography'],
    github: 'https://github.com/DHARANI2D/AEGIS',
    gradient: 'from-red-500 to-pink-500',
    icon: Shield
  },
  {
    title: '🔐 ANCHOR',
    subtitle: 'Secure Dev Platform',
    description: 'A secure, Git-compatible platform with MFA, RBAC, token rotation, and device-bound sessions designed for long-term system trust.',
    problem: 'Most developer platforms treat security as an afterthought.',
    impact: 'Proves understanding of identity, access control, and platform trust at scale.',
    tech: ['Security Architecture', 'Authentication', 'FastAPI', 'Next.js', 'Zero Trust'],
    github: 'https://github.com/DHARANI2D/ANCHOR',
    gradient: 'from-blue-500 to-cyan-500',
    icon: Lock
  },
  {
    title: 'Behavioral Ransomware Detection',
    description: 'Detects encryption behavior before execution, focusing on pre-impact detection rather than post-damage alerts.',
    tech: ['Python', 'Behavioral Analysis', 'WinAPI'],
    github: 'https://github.com/DHARANI2D/ransomware_detection',
    gradient: 'from-orange-500 to-red-500',
    icon: Database
  },
  {
    title: 'Deepfake Detection Engine',
    description: 'AI-based audio & video manipulation detection evaluated against adversarial evasion techniques.',
    tech: ['Machine Learning', 'Computer Vision', 'PyTorch'],
    github: 'https://github.com/DHARANI2D/Deep_Fake_Detection',
    gradient: 'from-green-500 to-teal-500',
    icon: Eye
  },
  {
    title: 'Secure Cloud Infrastructure',
    description: 'Terraform-based modular infrastructure with security-by-default Kubernetes design.',
    tech: ['Terraform', 'Kubernetes', 'AWS', 'Security-by-Default'],
    github: 'https://github.com/DHARANI2D/terraform-aws',
    gradient: 'from-yellow-500 to-orange-500',
    icon: Cloud
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">Featured Systems</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-teal-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Engineering security systems that reason, defend, and scale.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isLarge = index < 3;
            return (
              <motion.div
                key={index}
                variants={item}
                className={`group glass-card rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 flex flex-col ${isLarge ? 'border-purple-500/10 shadow-[0_0_40px_rgba(168,85,247,0.05)]' : ''}`}
              >
                <div className={`bg-gradient-to-br ${project.gradient} p-4 rounded-2xl w-fit mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {project.title}
                </h3>

                {project.subtitle && (
                  <div className="text-xs font-bold text-purple-400 mb-4 uppercase tracking-[0.2em]">
                    {project.subtitle}
                  </div>
                )}

                <p className="text-gray-400 mb-6 text-sm leading-relaxed font-light">
                  {project.description}
                </p>

                {isLarge && (
                  <div className="space-y-4 mb-8 bg-white/[0.02] p-6 rounded-2xl border border-white/[0.05]">
                    <div>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">The Problem</span>
                      <p className="text-xs text-gray-400 mt-1 font-light leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">The Impact</span>
                      <p className="text-xs text-gray-400 mt-1 font-light leading-relaxed">{project.impact}</p>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-[10px] font-bold text-gray-500 tracking-wider uppercase group-hover:text-gray-300 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center pt-6 border-t border-white/[0.05]">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-all group/link"
                  >
                    <Github className="w-4 h-4" />
                    <span>Explore System</span>
                    <ExternalLink className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
