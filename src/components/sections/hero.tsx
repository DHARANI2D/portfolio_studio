import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Send } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="hero" className="relative py-32 md:py-48 text-center">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <p className="font-headline text-primary mb-2 text-lg">Hi, my name is</p>
        <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-4 text-foreground">
          Dharani
        </h1>
        <h2 className="font-headline text-4xl md:text-6xl text-foreground/80 font-semibold tracking-tight mb-8">
          Cybersecurity & Software Development
        </h2>
        <p className="max-w-3xl mx-auto text-xl text-muted-foreground mb-12">
          I'm a security-focused professional with a passion for building secure and resilient systems. I thrive on solving complex problems and defending against digital threats.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" asChild className="rounded-full text-lg px-8 py-6 shadow-lg">
            <Link href="#contact">
              Contact Me <Send className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="secondary" asChild className="rounded-full text-lg px-8 py-6 shadow-lg">
            <a href="/dharani-cv.pdf" download="Dharani-CV.pdf">
              Download CV <Download className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
        <div className="mt-16 flex justify-center gap-4">
          <Button variant="ghost" size="icon" asChild className="h-12 w-12 hover:bg-primary/10">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-7 w-7" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="h-12 w-12 hover:bg-primary/10">
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-7 w-7" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
