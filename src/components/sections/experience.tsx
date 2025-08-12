import { Shield, Database } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-blue-300 mb-1">Junior Cybersecurity Analyst Intern</h3>
                <p className="text-cyan-400 mb-2">Hewlett Packard Enterprise (HPE) • Feb 2024 – Present</p>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  <li>Working in the Frontline Incident Response (FRIR) team to monitor, analyze, and respond to global cybersecurity threats</li>
                  <li>Handling incidents involving email phishing, endpoint compromise, cloud misconfigurations, and network anomalies</li>
                  <li>Utilizing enterprise security tools: Zscaler, Proofpoint, CrowdStrike, Splunk, Wiz, ThreatConnect, and Jira</li>
                  <li>Participating in security automation and playbook design for improved detection and faster response</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/20 to-teal-900/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 p-3 rounded-lg">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-green-300 mb-1">Member of Technical Staff – Intern</h3>
                <p className="text-teal-400 mb-2">Facilio, Chennai • Sep 2024 – Dec 2024</p>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  <li>Built real-time data pipelines using Apache Kafka, Redis, and Apache Storm</li>
                  <li>Focused on performance tuning, stream analytics, and secure architecture integration</li>
                  <li>Assisted in processing large-scale building automation data</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}