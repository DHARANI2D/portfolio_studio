import { BookOpen, ChevronRight } from 'lucide-react';

import { motion } from 'framer-motion';

const posts = [
  {
    title: "The Future of Detection: Reasoning over Events",
    excerpt: "Why traditional SIEM alerts are failing and how we move towards intent-based behavioral detection.",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    gradient: "from-purple-500/20 to-indigo-500/20"
  },
  {
    title: "Securing AI Agents: The Identity Problem",
    excerpt: "How to enforce zero-trust for autonomous AI agents in a multi-tenant cloud environment.",
    date: "Jan 5, 2026",
    readTime: "12 min read",
    gradient: "from-red-500/20 to-pink-500/20"
  },
  {
    title: "Scaling Trust with Semantic Firewalls",
    excerpt: "A deep dive into protecting LLMs from prompt injection using semantic enforcement layers.",
    date: "Dec 20, 2025",
    readTime: "10 min read",
    gradient: "from-blue-500/20 to-cyan-500/20"
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">Writing & Thinking</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Insights on detection engineering, correlation failures, AI security & governance, and the future of evolving security models.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group glass-card rounded-3xl p-8 flex flex-col transition-all duration-300 hover:border-white/20"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10`} />

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{post.date}</span>
                <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{post.readTime}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                {post.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light italic">
                "{post.excerpt}"
              </p>

              <div className="mt-auto">
                <button className="text-xs font-black uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors flex items-center space-x-2">
                  <span>Read Article</span>
                  <span className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-white transition-all"></span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}