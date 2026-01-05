export function Footer() {
  return (
    <footer className="py-20 border-t border-white/[0.05] bg-black/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.3em] mb-8">
          © {new Date().getFullYear()} Dharanidharan. All rights reserved.
        </p>
        <div className="max-w-2xl mx-auto px-10 py-8 bg-white/[0.02] border border-white/[0.05] rounded-3xl mb-12">
          <p className="text-gray-400 italic text-sm font-light leading-relaxed">
            "I am a Security Engineer who designs systems that reason about attacks, enforce trust, and scale with cloud and AI complexity."
          </p>
        </div>

        <a
          href="https://drive.google.com/uc?export=download&id=1rowC4YzOi6n-Dhad4ajCaUl9kY-ct9aD"
          className="inline-flex px-8 py-3 rounded-full bg-white text-black text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform active:scale-95"
        >
          Download Resume
        </a>
      </div>
    </footer>
  );
}