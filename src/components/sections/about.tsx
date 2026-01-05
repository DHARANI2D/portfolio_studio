import { Terminal } from '@/components/terminal';

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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a Security Engineer with hands-on experience in enterprise incident response and
              a strong focus on detection engineering, AI security, and cloud-native defense systems.
              Currently working in a frontline SOC environment, I analyze real-world attacks across
              email, endpoint, cloud, and identity layers.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Beyond operations, I design and build security platforms from first principles —
              including an AI Security Control Plane (AEGIS), an attack-path reasoning engine
              (SignalFusion Core), and a self-hosted secure development ecosystem (ANCHOR).
              My work focuses on turning fragmented telemetry into actionable security intelligence.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Detection Engineering', 'AI Security', 'Threat Correlation', 'Zero Trust', 'Cloud Security', 'Security Automation'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm font-medium border border-purple-500/30">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}
