import { BookOpen, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Exploring the Future of Blockchain in the Age of Quantum Computing',
    excerpt: 'An in-depth analysis of how quantum computing will revolutionize blockchain technology and the security implications for the future.',
    readTime: '8 min read',
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Safeguarding the Future: Quantum Cryptography Unveiled',
    excerpt: 'Understanding quantum cryptography principles and their role in creating unbreakable security systems for tomorrow digital landscape.',
    readTime: '6 min read',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Quantum Odyssey: Unraveling the Mysteries of Tomorrow Computing',
    excerpt: 'A comprehensive exploration of quantum computing fundamentals and their potential to transform cybersecurity practices.',
    readTime: '10 min read',
    gradient: 'from-green-500 to-teal-500'
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Latest Blog Posts
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Deep dives into detection engineering, AI security, and modern attack-defense architectures
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group">
              <div className={`bg-gradient-to-r ${post.gradient} p-3 rounded-lg w-fit mb-4`}>
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-400 mb-4 h-24 overflow-hidden">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-purple-400">{post.readTime}</span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}