import { Shield, Lock, Brain, Database, Cloud, Eye, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Cybersecurity Incident Response Platform',
    description: 'Advanced platform for monitoring network traffic and automating security incident responses with enhanced threat detection capabilities.',
    tech: ['Python', 'ELK Stack', 'Splunk', 'Docker'],
    github: 'https://github.com/DHARANI2D/Cybersecurity_Incident_Response_Platform',
    gradient: 'from-red-500 to-pink-500',
    icon: Shield
  },
  {
    title: 'QuantCrypt - Quantum-Resistant Storage',
    description: 'Revolutionary cloud storage solution using quantum-resistant algorithms integrated with AWS S3 to protect against future quantum threats.',
    tech: ['Python', 'AWS S3', 'Quantum Cryptography', 'Cloud Security'],
    github: 'https://github.com/DHARANI2D/quantum-crypt-encryption',
    gradient: 'from-purple-500 to-indigo-500',
    icon: Lock
  },
  {
    title: 'Ransomware Detection & Prevention',
    description: 'Real-time file system monitoring tool that detects and halts ransomware-like encryption behavior without impacting system performance.',
    tech: ['Python', 'Behavioral Analysis', 'Real-time Monitoring'],
    github: 'https://github.com/DHARANI2D/ransomware_detection',
    gradient: 'from-orange-500 to-red-500',
    icon: Eye
  },
  {
    title: 'Deep Fake Detection Engine',
    description: 'AI-powered web engine that detects and prevents the spread of deep fake videos using advanced video and audio spectral analysis.',
    tech: ['Machine Learning', 'Computer Vision', 'Audio Analysis'],
    github: 'https://github.com/DHARANI2D/Deep_Fake_Detection',
    gradient: 'from-green-500 to-teal-500',
    icon: Brain
  },
  {
    title: 'Credit Card Fraud Detection',
    description: 'Intelligent fraud detection system combining machine learning with traditional methods to identify evolving fraud tactics.',
    tech: ['Machine Learning', 'Data Science', 'Python'],
    github: 'https://github.com/DHARANI2D/credit-card-fraud-detection-app',
    gradient: 'from-blue-500 to-cyan-500',
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
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Innovative solutions in cybersecurity, machine learning, and cloud technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div key={index} className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`bg-gradient-to-r ${project.gradient} p-3 rounded-lg w-fit mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 h-24 overflow-hidden">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors group-hover:underline"
                >
                  <Github className="w-4 h-4" />
                  <span>View Code</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}