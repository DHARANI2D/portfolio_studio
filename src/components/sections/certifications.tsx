import { Cloud, Shield, Database } from 'lucide-react';

const certifications = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', icon: Cloud },
  { name: 'Microsoft Azure Fundamentals (AZ-900)', issuer: 'Microsoft', icon: Cloud },
  { name: 'Fortinet Certified Cybersecurity Associate', issuer: 'Fortinet', icon: Shield },
  { name: 'TigerGraph Associate', issuer: 'TigerGraph', icon: Database }
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
            return (
              <div key={index} className="bg-gradient-to-br from-red-900/20 to-pink-900/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center space-x-4">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-300">{cert.name}</h3>
                  <p className="text-pink-400">{cert.issuer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}