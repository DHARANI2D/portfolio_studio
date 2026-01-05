import { Shield, Lock, Brain, Database, Cloud, Eye, Github, ExternalLink, Bot, Server } from 'lucide-react';

const projects = [
  {
    title: 'SignalFusion Core – Attack Path Correlation Engine',
    description: 'Security reasoning engine that normalizes multi-source telemetry (EDR, SIEM, Cloud) and correlates attacker behavior across entities and time. Designed to reason at the attack-path level.',
    tech: ['Detection Engineering', 'Security Graphs', 'MITRE ATT&CK', 'TypeScript'],
    github: 'https://github.com/DHARANI2D/SignalFusionCore', // Placeholder or linking to profile if repo private
    gradient: 'from-purple-500 to-indigo-500',
    icon: Brain
  },
  {
    title: 'AEGIS – AI Security Control Plane',
    description: 'Enterprise-grade AI Security Control Plane that enforces cryptographic identity, intent-based authorization, and semantic prompt protection for AI agents.',
    tech: ['AI Security', 'Zero Trust', 'OPA-style Policy', 'Python', 'Cryptography'],
    github: 'https://github.com/DHARANI2D/AEGIS',
    gradient: 'from-red-500 to-pink-500',
    icon: Shield
  },
  {
    title: 'ANCHOR – Secure Self-Hosted Dev Platform',
    description: 'Git-compatible, self-hosted secure development platform with custom CLI, RBAC, MFA, token rotation, device-bound sessions, and audit logging.',
    tech: ['Security Architecture', 'Authentication', 'FastAPI', 'Next.js', 'Zero Trust'],
    github: 'https://github.com/DHARANI2D/ANCHOR',
    gradient: 'from-blue-500 to-cyan-500',
    icon: Lock
  },
  {
    title: 'Deep Fake Detection Engine',
    description: 'AI-powered web engine that detects and prevents the spread of deep fake videos using video frame analysis and audio spectral patterns.',
    tech: ['Machine Learning', 'Computer Vision', 'Audio Analysis'],
    github: 'https://github.com/DHARANI2D/Deep_Fake_Detection',
    gradient: 'from-green-500 to-teal-500',
    icon: Eye
  },
  {
    title: 'Ransomware Behavior Detection',
    description: 'Behavioral model analyzing file access patterns to stop encryption-based attacks before execution.',
    tech: ['Python', 'Behavioral Analysis', 'Real-time Monitoring'],
    github: 'https://github.com/DHARANI2D/ransomware_detection',
    gradient: 'from-orange-500 to-red-500',
    icon: Database
  },
  {
    title: 'Structured Terraform Infrastructure',
    description: 'Modular Kubernetes cluster deployment solution with secure state management and automated infrastructure provisioning.',
    tech: ['Terraform', 'Kubernetes', 'AWS', 'DevOps'],
    github: 'https://github.com/DHARANI2D/terraform-aws',
    gradient: 'from-yellow-500 to-orange-500',
    icon: Cloud
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-blue-900/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-1/3 h-1/3 bg-purple-900/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Key Security Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Engineering security systems that reason, defend, and scale
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div key={index} className="group relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                {/* Hover gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className={`bg-gradient-to-r ${project.gradient} p-3 rounded-lg w-fit mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 h-24 overflow-hidden leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs font-medium text-gray-300 group-hover:border-white/10 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center pt-4 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm text-white/80 hover:text-white transition-colors group/link"
                  >
                    <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                    <span>View Code</span>
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
