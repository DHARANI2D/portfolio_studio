import { Cloud, Shield, Database, ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: 'Proofpoint Certified AI Data Security Specialist 2025',
    issuer: 'Proofpoint',
    description: 'AI-driven data security, cyber defense, and advanced threat protection',
    link: 'https://www.credly.com/badges/c0a4ef7f-c677-4442-bde6-0c82c34e53fe/linked_in_profile',
    icon: Shield
  },
  {
    name: 'Proofpoint Certified AI Email Security Specialist 2025',
    issuer: 'Proofpoint',
    description: 'Specialized AI-based defense for email-borne threats and phishing',
    link: 'https://www.credly.com/badges/c0cd5b90-24d8-4473-b057-0f7c1047288a/linked_in_profile',
    icon: Shield
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    description: 'Cloud fundamentals with focus on security, IAM, and shared responsibility model',
    link: 'https://www.credly.com/badges/cc8bf7c0-904d-4c17-b65c-68e85343e29e/linked_in_profile',
    icon: Cloud
  },
  {
    name: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    description: 'Core Azure services, identity, governance, and cloud security concepts',
    link: 'https://learn.microsoft.com/api/credentials/share/en-in/DharanidharanSenthilkumar-6756/AAD1A5408E695541?sharingId',
    icon: Cloud
  },
  {
    name: 'Fortinet Certified Cybersecurity Associate',
    issuer: 'Fortinet',
    description: 'Network security, firewalls, threat prevention, and security operations basics',
    link: 'https://www.credly.com/badges/3b954dc3-8ae3-4e40-bbac-0d17da9f71fc/public_url',
    icon: Shield
  },
  {
    name: 'TigerGraph Associate Certification',
    issuer: 'TigerGraph',
    description: 'Graph data modeling and analysis for security telemetry',
    link: 'https://tigergraph-university.teachable.com/courses/2141462/certificate',
    icon: Database
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            const content = (
              <div key={index} className="bg-gradient-to-br from-red-900/20 to-pink-900/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center space-x-4 h-full">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-lg flex-shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-red-300 leading-tight">{cert.name}</h3>
                    {cert.link && <ExternalLink className="w-4 h-4 text-red-400 flex-shrink-0 ml-2" />}
                  </div>
                  <p className="text-pink-400 text-sm font-medium">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mt-1">{cert.description}</p>
                </div>
              </div>
            );

            if (cert.link) {
              return (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:transform hover:scale-[1.02] transition-all duration-300"
                >
                  {content}
                </a>
              );
            }

            return content;
          })}
        </div>
      </div>
    </section>
  );
}