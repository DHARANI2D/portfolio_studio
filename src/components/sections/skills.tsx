import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Server, Code } from 'lucide-react';

const skillCategories = [
  {
    title: "Security & Incident Response",
    icon: ShieldCheck,
    skills: ["SIEM", "SOAR", "Firewall Configuration", "IDS/IPS", "Threat Hunting", "Forensics", "Penetration Testing"]
  },
  {
    title: "Platforms & Cloud",
    icon: Server,
    skills: ["AWS", "Azure", "Google Cloud", "Linux", "Windows Server", "Docker", "Kubernetes", "Terraform"]
  },
  {
    title: "Programming & Scripting",
    icon: Code,
    skills: ["Python", "JavaScript", "Go", "Bash", "PowerShell", "SQL", "Next.js", "Node.js"]
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center font-headline text-3xl md:text-4xl font-bold mb-12">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <category.icon className="h-8 w-8 text-accent" />
                <CardTitle className="font-headline text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm font-medium">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
