import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { ThreeDBackground } from "@/components/3d-background";

export default function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col bg-background text-foreground">
      <ThreeDBackground />
      <Header />
      <main className="z-10 flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
