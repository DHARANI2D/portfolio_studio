import { Shield, Cloud, Code, Brain, Database, Terminal, Zap, Lock } from 'lucide-react';

const skills = [
  { name: 'Cybersecurity', icon: Shield, level: 95, color: 'from-red-500 to-pink-500' },
  { name: 'Cloud Computing', icon: Cloud, level: 90, color: 'from-blue-500 to-cyan-500' },
  { name: 'Python Development', icon: Code, level: 88, color: 'from-green-500 to-emerald-500' },
  { name: 'Machine Learning', icon: Brain, level: 85, color: 'from-purple-500 to-indigo-500' },
  { name: 'Blockchain', icon: Database, level: 82, color: 'from-yellow-500 to-orange-500' },
  { name: 'DevSecOps', icon: Terminal, level: 87, color: 'from-teal-500 to-blue-500' },
  { name: 'Incident Response', icon: Zap, level: 92, color: 'from-red-500 to-orange-500' },
  { name: 'Pentesting', icon: Lock, level: 80, color: 'from-gray-500 to-slate-500' }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group flex flex-col items-center text-center hover:transform hover:scale-105">
                <div className={`bg-gradient-to-r ${skill.color} p-4 rounded-lg w-fit mb-4 group-hover:animate-pulse`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
