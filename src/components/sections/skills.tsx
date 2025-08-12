import { Brain, Shield, Cloud, Code, Zap, Cpu, Lock, Database } from 'lucide-react';

const skills = [
    {
        category: 'Cybersecurity',
        icon: Shield,
        skills: ['Incident Response', 'Threat Detection', 'Pentesting', 'DevSecOps'],
        gradient: 'from-red-500 to-pink-500'
    },
    {
        category: 'Cloud & DevOps',
        icon: Cloud,
        skills: ['Cloud Security', 'AWS', 'Azure', 'Kubernetes', 'Docker'],
        gradient: 'from-sky-500 to-blue-500'
    },
    {
        category: 'Artificial Intelligence',
        icon: Brain,
        skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
        gradient: 'from-purple-500 to-indigo-500'
    },
    {
        category: 'Development',
        icon: Code,
        skills: ['Python', 'FastAPI', 'Data Science', 'TensorFlow', 'PyTorch'],
        gradient: 'from-green-500 to-teal-500'
    },
    {
        category: 'Quantum & Blockchain',
        icon: Lock,
        skills: ['Quantum Cryptography', 'Secure Storage', 'Blockchain Security'],
        gradient: 'from-yellow-500 to-orange-500'
    },
    {
        category: 'Data Engineering',
        icon: Database,
        skills: ['Apache Kafka', 'Redis', 'Stream Analytics', 'Data Pipelines'],
        gradient: 'from-blue-500 to-cyan-500'
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-20 bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                            Technical & AI Skills
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Specialized expertise across the modern technology landscape, from cybersecurity to AI.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skillCategory, index) => {
                        const Icon = skillCategory.icon;
                        return (
                            <div key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group hover:transform hover:scale-105">
                                <div className={`bg-gradient-to-r ${skillCategory.gradient} p-4 rounded-lg w-fit mb-4`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">
                                    {skillCategory.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillCategory.skills.map((skill) => (
                                        <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium text-gray-300">
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
