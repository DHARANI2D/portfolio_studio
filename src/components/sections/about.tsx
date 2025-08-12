import { Users, MapPin, Mail, Phone, GraduationCap } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A passionate cybersecurity professional dedicated to protecting digital assets and creating secure, innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-purple-300">Personal Details</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Dharanidharan Senthilkumar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Coimbatore, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">dharanidharan2d@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">+91 6385854466</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">B.E Computer Science - 8.5 GPA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              As an emerging cybersecurity professional, I bring a unique combination of technical expertise 
              and innovative thinking to the world of digital security. My experience spans from frontline 
              incident response at Hewlett Packard Enterprise to developing quantum-resistant security solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in threat detection, automated incident response, and secure cloud architectures. 
              My passion lies in staying ahead of emerging threats and developing proactive security measures 
              that protect organizations in our increasingly connected world.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Cybersecurity', 'Incident Response', 'Cloud Security', 'Automation', 'Threat Intelligence'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm font-medium border border-purple-500/30">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}