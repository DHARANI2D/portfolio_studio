import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Send } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="hero" className="relative py-24 md:py-40 text-center">
      <div className="container mx-auto px-4 md:px-6">
        <p className="font-headline text-accent mb-2">Hi, my name is</p>
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-4 text-primary">
          Dharani
        </h1>
        <h2 className="font-headline text-3xl md:text-5xl text-primary/80 font-semibold tracking-tight mb-8">
          Cybersecurity & Software Development
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">
          I'm a security-focused professional with a passion for building secure and resilient systems. I thrive on solving complex problems and defending against digital threats.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" asChild>
            <Link href="#contact">
              Contact Me <Send className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href="/dharani-cv.pdf" download="Dharani-CV.pdf">
              Download CV <Download className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
        <div className="mt-12 flex justify-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
