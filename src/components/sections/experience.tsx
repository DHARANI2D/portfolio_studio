import { Shield, Database, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export function Experience() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">Professional Journey</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="space-y-12">
          {/* HPE Experience */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-[2.5rem] p-10 relative overflow-hidden group border-purple-500/10"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-3xl -z-10 group-hover:bg-purple-500/10 transition-colors duration-500"></div>

            <div className="flex flex-col md:flex-row items-start gap-10">
              <div className="hidden md:flex bg-gradient-to-br from-purple-500 to-pink-500 p-5 rounded-[1.5rem] shadow-[0_0_30px_rgba(168,85,247,0.3)] group-hover:scale-110 transition-transform duration-500">
                <Shield className="w-10 h-10 text-white" />
              </div>

              <div className="flex-1 space-y-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <h3 className="text-3xl font-black text-white tracking-tight mb-2">Hewlett Packard Enterprise (HPE)</h3>
                    <div className="flex items-center space-x-3">
                      <span className="flex h-2.5 w-2.5 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                      </span>
                      <span className="text-purple-400 font-black uppercase tracking-widest text-xs">Present Operations</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">Sep 2025 — Today</span>
                  </div>
                </div>

                <div className="relative space-y-12">
                  <div className="absolute left-[9px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-purple-500 via-purple-500/20 to-transparent"></div>

                  <div className="relative pl-12">
                    <div className="absolute left-0 top-2 w-5 h-5 bg-purple-500 rounded-full border-[5px] border-[#0A0A0A] z-10 shadow-[0_0_15px_rgba(168,85,247,0.6)]"></div>
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-white tracking-tight">Junior Cybersecurity Analyst</h4>
                      <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Full-time Incident Response</p>
                      <ul className="grid gap-3">
                        {[
                          "Frontline Incident Response (FRIR) handling global security incidents across email, endpoint, cloud, and identity",
                          "Investigated phishing, malware execution, account compromise, cloud misconfigurations, and lateral movement",
                          "Performed alert triage and root-cause analysis using Splunk, CrowdStrike, Proofpoint, Zscaler, Wiz, and ThreatConnect",
                          "Mapped incidents to MITRE ATT&CK and supported detection tuning and response playbooks",
                          "Contributed to security automation and workflow optimization using SOAR concepts"
                        ].map((bullet, i) => (
                          <li key={i} className="flex items-start gap-4 text-gray-400 font-light leading-relaxed">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-500/30 flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="relative pl-12 opacity-50 hover:opacity-100 transition-opacity">
                    <div className="absolute left-0 top-2 w-5 h-5 bg-gray-800 rounded-full border-[5px] border-[#0A0A0A] z-10"></div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-gray-300">Cybersecurity Intern</h4>
                      <p className="text-xs font-bold text-gray-600 uppercase tracking-widest">Feb 2025 – Aug 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Facilio Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[2.5rem] p-10 relative overflow-hidden group border-blue-500/10"
          >
            <div className="flex flex-col md:flex-row items-start gap-10">
              <div className="hidden md:flex bg-gradient-to-br from-blue-500 to-cyan-500 p-5 rounded-[1.5rem] shadow-[0_0_30px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform duration-500">
                <Database className="w-10 h-10 text-white" />
              </div>

              <div className="flex-1 space-y-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-black text-white tracking-tight mb-2">Member of Technical Staff – Intern</h3>
                    <p className="text-blue-400 font-black uppercase tracking-widest text-xs">Facilio, Chennai</p>
                  </div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">Sep 2024 – Dec 2024</span>
                </div>
                <ul className="grid gap-3">
                  {[
                    "Built real-time data pipelines using Apache Kafka, Redis, and Apache Storm",
                    "Focused on performance tuning, stream analytics, and secure architecture integration",
                    "Assisted in processing large-scale building automation data"
                  ].map((bullet, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-400 font-light leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500/30 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}