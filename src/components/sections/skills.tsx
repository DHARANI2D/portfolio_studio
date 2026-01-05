import { Brain, Shield, Cloud, Code, Database } from 'lucide-react';

const skills = [
    {
        category: 'Security & Detection',
        icon: Shield,
        skills: ['Incident Response', 'Threat Hunting', 'MITRE ATT&CK', 'Alert Triage', 'Log Correlation', 'Email Security', 'Endpoint Security'],
        gradient: 'from-red-500 to-pink-500'
    },
    {
        category: 'AI Security',
        icon: Brain,
        skills: ['AI Security Posture', 'Prompt Injection Defense', 'Semantic Firewalls', 'LLM Risk Modeling', 'ML-based Anomaly Detection'],
        gradient: 'from-purple-500 to-indigo-500'
    },
    {
        category: 'Cloud & DevSecOps',
        icon: Cloud,
        skills: ['AWS', 'Azure', 'IAM', 'Secure CI/CD', 'Kubernetes Security', 'Terraform', 'Docker', 'Zero Trust'],
        gradient: 'from-sky-500 to-blue-500'
    },
    {
        category: 'Engineering',
        icon: Code,
        skills: ['Python', 'TypeScript', 'FastAPI', 'Next.js', 'Security Automation', 'API Security'],
        gradient: 'from-green-500 to-teal-500'
    },
    {
        category: 'Data & Infra',
        icon: Database,
        skills: ['Apache Kafka', 'Redis', 'Stream Processing', 'Log Pipelines', 'Data Engineering'],
        gradient: 'from-yellow-500 to-orange-500'
    }
];

export function Skills() {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute center w-1/2 h-1/2 bg-indigo-900/10 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                            Technical Skills
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Deep expertise across detection engineering, AI security, and cloud-native defense.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skillCategory, index) => {
                        const Icon = skillCategory.icon;
                        return (
                            <div key={index} className="group relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                                {/* Hover Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${skillCategory.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />

                                <div className={`bg-gradient-to-r ${skillCategory.gradient} p-4 rounded-xl w-fit mb-6 shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                                    {skillCategory.category}
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {skillCategory.skills.map((skill) => (
                                        <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-sm font-medium text-gray-300 group-hover:text-white group-hover:border-white/10 transition-all hover:bg-white/10">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
