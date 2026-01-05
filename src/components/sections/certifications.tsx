import { Cloud, Shield, Database, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const certifications = [
  {
    name: 'Proofpoint Certified AI Data Security Specialist 2025',
    issuer: 'Proofpoint',
    description: 'AI-driven data security, cyber defense, and advanced threat protection',
    link: 'https://www.credly.com/badges/c0a4ef7f-c677-4442-bde6-0c82c34e53fe/linked_in_profile',
    icon: Shield,
    gradient: 'from-orange-500 to-red-500'
  },
  {
    name: 'Proofpoint Certified AI Email Security Specialist 2025',
    issuer: 'Proofpoint',
    description: 'Specialized AI-based defense for email-borne threats and phishing',
    link: 'https://www.credly.com/badges/c0cd5b90-24d8-4473-b057-0f7c1047288a/linked_in_profile',
    icon: Shield,
    gradient: 'from-red-500 to-pink-500'
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    description: 'Cloud fundamentals with focus on security, IAM, and shared responsibility model',
    link: 'https://www.credly.com/badges/cc8bf7c0-904d-4c17-b65c-68e85343e29e/linked_in_profile',
    icon: Cloud,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    description: 'Core Azure services, identity, governance, and cloud security concepts',
    link: 'https://learn.microsoft.com/api/credentials/share/en-in/DharanidharanSenthilkumar-6756/AAD1A5408E695541?sharingId',
    icon: Cloud,
    gradient: 'from-sky-500 to-indigo-500'
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">Validation</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-red-400 to-pink-400 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group glass-card rounded-3xl p-8 flex items-center space-x-6 transition-all duration-300 hover:border-white/20"
              >
                <div className={`bg-gradient-to-br ${cert.gradient} p-4 rounded-2xl flex-shrink-0 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all font-black uppercase tracking-tight">{cert.name}</h3>
                    <ExternalLink className="w-4 h-4 text-gray-600 flex-shrink-0 ml-2 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-purple-400 text-xs font-black uppercase tracking-widest mt-2">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm mt-3 font-light leading-relaxed">{cert.description}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}