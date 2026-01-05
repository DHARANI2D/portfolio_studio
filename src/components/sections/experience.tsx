import { Shield, Database, Briefcase } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
        </div>

        <div className="space-y-8">
          {/* HPE Experience */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex items-start space-x-6">
              <div className="hidden md:block bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-xl opacity-90 shadow-lg shadow-purple-500/20">
                <Shield className="w-8 h-8 text-white" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Hewlett Packard Enterprise (HPE)</h3>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                      <span className="text-purple-400 font-medium">Present</span>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="relative space-y-8">
                  {/* Vertical Line */}
                  <div className="absolute left-[19px] top-3 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-gray-800"></div>

                  {/* Role 1: Analyst */}
                  <div className="relative pl-12 group/item">
                    {/* Dot */}
                    <div className="absolute left-[12px] top-2 w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-900 z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)] group-hover/item:scale-110 transition-transform"></div>

                    <div>
                      <h4 className="text-xl font-semibold text-purple-300">Junior Cybersecurity Analyst</h4>
                      <p className="text-gray-400 text-sm mb-4 font-medium tracking-wide">
                        Full-time • Sep 2024 – Present
                      </p>

                      <ul className="text-gray-400 space-y-2 list-disc list-inside">
                        <li>Frontline Incident Response (FRIR) handling global security incidents across email, endpoint, cloud, and identity</li>
                        <li>Investigated phishing, malware execution, account compromise, cloud misconfigurations, and lateral movement</li>
                        <li>Performed alert triage and root-cause analysis using Splunk, CrowdStrike, Proofpoint, Zscaler, Wiz, and ThreatConnect</li>
                        <li>Mapped incidents to MITRE ATT&CK and supported detection tuning and response playbooks</li>
                        <li>Contributed to security automation and workflow optimization using SOAR concepts</li>
                      </ul>
                    </div>
                  </div>

                  {/* Role 2: Intern */}
                  <div className="relative pl-12 group/item">
                    {/* Dot */}
                    <div className="absolute left-[12px] top-2 w-4 h-4 bg-gray-700 rounded-full border-4 border-gray-900 z-10 group-hover/item:bg-purple-500/50 transition-colors"></div>

                    <div>
                      <h4 className="text-lg font-medium text-gray-300 group-hover/item:text-white transition-colors">Cybersecurity Intern</h4>
                      <p className="text-gray-500 text-sm">Feb 2024 – Aug 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Facilio Experience */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex items-start space-x-6">
              <div className="hidden md:block bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-xl opacity-80">
                <Database className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Member of Technical Staff – Intern</h3>
                    <p className="text-blue-400 font-medium">Facilio, Chennai</p>
                  </div>
                  <span className="mt-2 md:mt-0 px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/5">
                    Sep 2024 – Dec 2024
                  </span>
                </div>
                <ul className="text-gray-400 space-y-2 list-disc list-inside">
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