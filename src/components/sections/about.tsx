import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, MapPin, Calendar, Award, Briefcase } from "lucide-react";

const personalDetails = [
  { icon: Mail, label: "Email", value: "dharani.dev@email.com", href: "mailto:dharani.dev@email.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, label: "Address", value: "San Francisco, CA" },
  { icon: Calendar, label: "Date of Birth", value: "October 23, 1998" },
];

const professionalDetails = [
    { icon: Briefcase, label: "Experience", value: "3+ Years in Cybersecurity" },
    { icon: Award, label: "Certifications", value: "CISSP, CompTIA Security+" },
]

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-4xl mx-auto overflow-hidden shadow-2xl rounded-2xl border-primary/20">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-primary to-primary/70 text-primary-foreground p-8 flex flex-col items-center justify-center">
              <Avatar className="h-32 w-32 border-4 border-primary-foreground/50 mb-4 ring-4 ring-primary-foreground/20">
                <AvatarImage src="https://placehold.co/200x200.png" alt="Dharani" data-ai-hint="professional portrait" />
                <AvatarFallback>DD</AvatarFallback>
              </Avatar>
              <h3 className="font-headline text-2xl font-bold">Dharani</h3>
              <p className="text-sm text-primary-foreground/80">Cybersecurity Analyst</p>
            </div>
            <div className="md:w-2/3 p-8 bg-card">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="font-headline text-3xl">About Me</CardTitle>
                <CardDescription className="pt-2 text-lg">
                  A dedicated and analytical cybersecurity professional with a passion for software development and protecting digital assets.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {personalDetails.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <item.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-base">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-base text-muted-foreground hover:text-foreground transition-colors">{item.value}</a>
                        ) : (
                          <p className="text-base text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                  {professionalDetails.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                        <item.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <p className="font-semibold text-base">{item.label}</p>
                            <p className="text-base text-muted-foreground">{item.value}</p>
                        </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
