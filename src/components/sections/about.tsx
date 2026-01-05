import { Terminal } from '@/components/terminal';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">
              The Mission
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Building the next generation of security systems that don't just alert, but understand and adapt.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white tracking-tight">What I work on today</h3>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                I operate in a <span className="text-purple-400 font-medium">production SOC environment</span>, investigating real incidents across email, endpoint, cloud, and identity layers.
                At the same time, I <span className="text-pink-400 font-medium">build security platforms</span> that solve the problems SOCs face at scale.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                My work focuses on detection engineering beyond alerts, attack-path correlation across entities and time, AI security & governance, and zero-trust reinforcement.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8 space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl -z-10 group-hover:bg-purple-500/20 transition-colors duration-500"></div>
              <h3 className="text-2xl font-bold text-white tracking-tight">How I Think About Security</h3>
              <div className="grid gap-6">
                {[
                  {
                    title: "Reason in Behavior, not Events",
                    desc: "Stopping signals isn't enough; we must understand the intent behind the sequence.",
                    color: "bg-purple-400"
                  },
                  {
                    title: "Attack-Path Reasoning",
                    desc: "Context-rich detections that model attacker progression across entities and time.",
                    color: "bg-pink-400"
                  },
                  {
                    title: "Adaptive Control",
                    desc: "Security controls must adapt to risk and context, enforcing trust where it matters most.",
                    color: "bg-blue-400"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="space-y-2 cursor-default"
                  >
                    <h4 className="text-white font-semibold flex items-center gap-3">
                      <span className={`w-2 h-2 ${item.color} rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]`}></span>
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed font-light pl-5">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Detection Engineering', 'AI Security', 'Threat Correlation', 'Zero Trust', 'Cloud Security', 'Platform Security'].map((tag) => (
                <span key={tag} className="px-5 py-2.5 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs font-semibold tracking-wider uppercase text-gray-400 hover:text-white hover:border-white/20 transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sticky top-32"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <Terminal />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
