import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import Image from 'next/image';

const projects = [
  {
    title: "Threat Intelligence Platform",
    description: "A platform that aggregates, analyzes, and disseminates threat intelligence from various sources to provide actionable security insights.",
    tags: ["Python", "Django", "React", "Docker", "Threat Intel"],
    github: "https://github.com",
    image: "https://placehold.co/600x400.png",
    imageHint: "cybersecurity dashboard"
  },
  {
    title: "Secure-Chat Application",
    description: "An end-to-end encrypted messaging application ensuring user privacy and data security through modern cryptographic protocols.",
    tags: ["Node.js", "WebSockets", "Cryptography", "Next.js"],
    github: "https://github.com",
    image: "https://placehold.co/600x400.png",
    imageHint: "secure chat"
  },
  {
    title: "Incident Response Playbook",
    description: "An automated system to execute incident response playbooks, reducing manual effort and response time for security incidents.",
    tags: ["Go", "SOAR", "Automation", "API"],
    github: "https://github.com",
    image: "https://placehold.co/600x400.png",
    imageHint: "automation flowchart"
  },
  {
    title: "Vulnerability Scanner",
    description: "A custom-built network and web application vulnerability scanner to identify security weaknesses in internal systems.",
    tags: ["Python", "Networking", "Security Tools"],
    github: "https://github.com",
    image: "https://placehold.co/600x400.png",
    imageHint: "code terminal"
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 lg:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center font-headline text-3xl md:text-4xl font-bold mb-12">
          Projects Portfolio
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  data-ai-hint={project.imageHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
