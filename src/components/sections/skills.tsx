import { Brain, Shield, Cloud, Code, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
    {
        category: 'Detection & Response',
        icon: Shield,
        skills: ['Incident Response', 'Threat Hunting', 'Alert Correlation', 'MITRE ATT&CK', 'SOC Workflow Design'],
        gradient: 'from-red-500 to-pink-500'
    },
    {
        category: 'AI Security',
        icon: Brain,
        skills: ['Prompt Injection Defense', 'AI Identity & Authorization', 'Semantic Firewalls', 'LLM Risk Modeling'],
        gradient: 'from-purple-500 to-indigo-500'
    },
    {
        category: 'Cloud & Platform Security',
        icon: Cloud,
        skills: ['AWS', 'Azure', 'IAM', 'Zero Trust', 'Kubernetes Security', 'Secure CI/CD'],
        gradient: 'from-sky-500 to-blue-500'
    },
    {
        category: 'Engineering',
        icon: Code,
        skills: ['Python', 'TypeScript', 'FastAPI', 'Next.js', 'Security Automation'],
        gradient: 'from-green-500 to-teal-500'
    },
    {
        category: 'Data & Streaming',
        icon: Database,
        skills: ['Kafka', 'Redis', 'Stream Processing', 'Log Pipelines', 'Distributed Systems'],
        gradient: 'from-yellow-500 to-orange-500'
    }
];

export function Skills() {
    return (
        <section id="skills" className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        <span className="text-gradient">Capabilities</span>
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-8"></div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
                        Deep expertise across detection engineering, AI security, and cloud-native defense.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skillCategory, index) => {
                        const Icon = skillCategory.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group glass-card rounded-3xl p-8 transition-all duration-300 hover:border-white/20"
                            >
                                <div className={`bg-gradient-to-br ${skillCategory.gradient} p-4 rounded-2xl w-fit mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                    {skillCategory.category}
                                </h3>

                                <div className="flex flex-wrap gap-3">
                                    {skillCategory.skills.map((skill) => (
                                        <span key={skill} className="px-4 py-2 bg-white/[0.03] border border-white/[0.05] rounded-xl text-xs font-medium text-gray-400 group-hover:text-white group-hover:border-white/10 transition-all">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
