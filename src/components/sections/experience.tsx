import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, GraduationCap } from "lucide-react";

const timelineItems = [
  {
    type: 'work',
    icon: Building,
    title: "Cybersecurity Analyst",
    subtitle: "TechCorp Inc.",
    date: "2021 - Present",
    description: "Monitored security alerts, conducted vulnerability assessments, and responded to incidents. Implemented new security protocols that reduced threats by 25%.",
  },
  {
    type: 'work',
    icon: Building,
    title: "Junior IT Security Specialist",
    subtitle: "SecureNet Solutions",
    date: "2020 - 2021",
    description: "Assisted senior staff with security audits, managed firewall configurations, and provided user security training.",
  },
  {
    type: 'education',
    icon: GraduationCap,
    title: "Bachelor of Science in Computer Science",
    subtitle: "University of Technology",
    date: "2016 - 2020",
    description: "Graduated with honors. Specialized in network security and cryptography. Captain of the university's Capture The Flag (CTF) team.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center font-headline text-3xl md:text-4xl font-bold mb-12">
          Experience & Education
        </h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
          {timelineItems.map((item, index) => (
            <div key={index} className="relative pl-12 mb-10">
              <div className="absolute -left-0 top-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{item.date}</p>
              <h3 className="font-headline text-xl font-semibold">{item.title}</h3>
              <p className="font-medium text-accent mb-2">{item.subtitle}</p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
